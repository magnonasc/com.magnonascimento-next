import { FC, HTMLAttributes } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { sprintf } from 'sprintf-js';
import moment from 'moment';
import getI18n from '../../i18n';
import { Paragraph } from '../../atoms/Text';
import SocialMenu from '../../molecules/SocialMenu';

const DynamicGreeting = dynamic(() => import('../../molecules/Greeting'), { ssr: false });

const BIRTH_DATE = moment('1997-09-05', 'YYYY-MM-DD');
const currentAge = Math.ceil(moment.duration(moment().diff(BIRTH_DATE)).years());

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

    text-align: justify;
    text-justify: inter-word;
`;

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const {
        about: { presentation, description }
    } = getI18n();

    return (
        <AboutContainer>
            <DynamicGreeting />
            <AboutParagraph>{sprintf(presentation, currentAge)}</AboutParagraph>
            {description.map((paragraph, index) => (
                <AboutParagraph key={`about-${index}`}>{paragraph}</AboutParagraph>
            ))}
            <SocialMenu />
        </AboutContainer>
    );
};

export default Professional;
