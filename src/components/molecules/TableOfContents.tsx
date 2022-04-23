import {
    AnchorHTMLAttributes,
    FC,
    HTMLAttributes,
    ReactNode,
    useRef,
    RefAttributes,
    useEffect,
    useCallback
} from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container: FC<HTMLAttributes<HTMLDivElement>> = styled.aside`
    position: fixed;
    justify-self: center;
    z-index: 10;

    right: 1rem;
    bottom: 1rem;

    border-radius: 2px;

    @media (max-width: 768px) {
        display: none;
    }
`;

type AnchorButtonProps = AnchorHTMLAttributes<ReactNode> & RefAttributes<HTMLAnchorElement>;

const AnchorButton: FC<AnchorButtonProps> = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: 2px;
    color: ${({ theme }) => theme.colors.text.primary};

    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.secondary};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.background.tertiary};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.background.tertiary};
    }

    &.current {
        &.top {
            color: ${({ theme }) => theme.colors.background.tertiary};
        }
    }
`;

const LanguageButton: FC<AnchorButtonProps> = styled(AnchorButton)`
    font-size: 1.5rem;
`;

type TableOfContentsProps = HTMLAttributes<HTMLDivElement> & {
    pageContents: string[];
};

type contentAnchorRefsType = {
    [elementId: string]: HTMLAnchorElement;
};

const getNextLocale = (currentLocale) => {
    switch (currentLocale) {
        case 'en':
            return { locale: 'pt', flag: '🇧🇷' };
        case 'pt':
        default:
            return { locale: 'en', flag: '🇺🇸' };
    }
};

const TableOfContents: FC<TableOfContentsProps> = ({ pageContents }) => {
    const { i18n } = useTranslation();
    const contentAnchorRefs = useRef<contentAnchorRefsType>({});

    useEffect(() => {
        if (window.scrollY === 0) {
            contentAnchorRefs.current.top.classList.add('current');
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= 0) {
                contentAnchorRefs.current.top.classList.add('current');
            } else {
                contentAnchorRefs.current.top.classList.remove('current');
            }

            Object.keys(contentAnchorRefs.current).forEach((key) => {
                if (key === 'top') {
                    return;
                }

                const currentMarker = contentAnchorRefs.current[key];
                const currentElement = document.getElementById(key);
                if (
                    currentScrollY >= currentElement.offsetTop &&
                    currentScrollY < currentElement.offsetTop + currentElement.offsetHeight
                ) {
                    currentMarker.innerText = '●';
                } else {
                    currentMarker.innerText = '○';
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [window.pageYOffset]);

    const triggerHandleScroll = useCallback(() => {
        window.dispatchEvent(new CustomEvent('scroll'));
    }, []);

    const handleLocale = useCallback(() => {
        i18n.changeLanguage(getNextLocale(i18n.language).locale);
    }, []);

    return (
        <Container>
            <AnchorButton
                ref={(element) => {
                    contentAnchorRefs.current.top = element;
                }}
                href="#top"
                className="top"
                onClick={triggerHandleScroll}
            >
                △
            </AnchorButton>
            {pageContents.map((pageContent) => (
                <AnchorButton
                    ref={(element) => {
                        contentAnchorRefs.current[pageContent] = element;
                    }}
                    key={pageContent}
                    href={`#${pageContent}`}
                    onClick={triggerHandleScroll}
                >
                    ○
                </AnchorButton>
            ))}
            <LanguageButton onClick={handleLocale}>{getNextLocale(i18n.language).flag}</LanguageButton>
        </Container>
    );
};

export default TableOfContents;
