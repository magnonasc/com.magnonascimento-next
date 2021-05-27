import { FC, HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { sprintf } from 'sprintf-js';
import moment from 'moment';
import { about } from '../../i18n/pt.json';
import { Paragraph } from '../../atoms/Text';
import SocialMenu from '../../molecules/SocialMenu';

const GOOD_MORNING_HOUR = 6;
const GOOD_AFTERNOON_HOUR = 12;
const GOOD_EVENING_HOUR = 18;
const GOOD_NIGHT_HOUR = 20;

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
    const { greetings, presentation, description } = about;
    const [greeting, setGreeting] = useState(greetings.default);

    useEffect(() => {
        const currentDate = new Date().getHours();

        switch (true) {
            case currentDate > GOOD_NIGHT_HOUR || currentDate < GOOD_MORNING_HOUR:
                setGreeting(greetings.goodNight);
                break;
            case currentDate > GOOD_EVENING_HOUR:
                setGreeting(greetings.goodEvening);
                break;
            case currentDate > GOOD_AFTERNOON_HOUR:
                setGreeting(greetings.goodAfternoon);
                break;
            case currentDate > GOOD_MORNING_HOUR:
                setGreeting(greetings.goodMorning);
                break;
            default:
                setGreeting(greetings.default);
                break;
        }
    }, []);

    return (
        <AboutContainer>
            <AboutParagraph>{greeting}</AboutParagraph>
            <AboutParagraph>{sprintf(presentation, currentAge)}</AboutParagraph>
            {description.map((paragraph, index) => (
                <AboutParagraph key={`about-${index}`}>{paragraph}</AboutParagraph>
            ))}
            <SocialMenu />
        </AboutContainer>
    );
};

export default Professional;
