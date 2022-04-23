import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import { Paragraph } from '../atoms/Text';
import SocialMenu from '../molecules/SocialMenu';
import Greeting from '../molecules/Greeting';

const BIRTH_DATE = moment('1997-09-05', 'YYYY-MM-DD');
const currentAge = moment.duration(moment().diff(BIRTH_DATE)).years();

const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;

    min-height: calc(100vh - 2.5rem);
    max-width: 50rem;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const AboutParagraph = styled(Paragraph)`
    margin: 0.5rem 0;
    line-height: 1.75rem;
`;

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const { t } = useTranslation();

    return (
        <AboutContainer>
            <Greeting />
            <AboutParagraph>{t('about.presentation', { age: currentAge })}</AboutParagraph>
            {t<string, string[]>('about.description', { returnObjects: true }).map((paragraph, index) => (
                <AboutParagraph key={`about-${index}`}>{paragraph}</AboutParagraph>
            ))}
            <SocialMenu />
        </AboutContainer>
    );
};

export default Professional;
