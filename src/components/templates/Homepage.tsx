import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import getI18n from '../../i18n';
import TitledSection from '../molecules/TitledSection';
import Professional from '../organisms/Professional';
import About from '../organisms/About';
import WelcomePresentation from '../organisms/WelcomePresentation';

const MasterContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: column;

    /* (window size - scrollbar width) */
    width: calc(100vw - 0.5rem);
    height: 100vh;

    @media (max-width: 768px) {
        height: initial;
        /* (window size - scrollbar width) */
        max-width: calc(100vw - 2.5rem);
        min-width: 20rem;
        padding: 0 1rem;
    }
`;

const Content: FC<HTMLAttributes<HTMLDivElement>> = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    animation-name: fadeIn;
    animation-duration: 2.5s;
    animation-delay: 1s;
    animation-fill-mode: backwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const TableOfContents = dynamic(() => import('../molecules/TableOfContents'), { ssr: false });

const Homepage: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const { about, professional } = getI18n();
    const pageContents = [about, professional];

    return (
        <>
            <Head>
                <title>Magno Nascimento</title>
            </Head>
            <MasterContainer>
                <WelcomePresentation />
                <Content>
                    <TableOfContents pageContents={pageContents} />
                    <TitledSection title={about.title} id={about.id}>
                        <About />
                    </TitledSection>
                    <TitledSection title={professional.title} id={professional.id}>
                        <Professional />
                    </TitledSection>
                </Content>
            </MasterContainer>
        </>
    );
};

export default Homepage;
