import { FC, HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import getI18n from '../../i18n';
import { Paragraph } from '../atoms/Text';

const GOOD_MORNING_HOUR = 6;
const GOOD_AFTERNOON_HOUR = 12;
const GOOD_EVENING_HOUR = 18;
const GOOD_NIGHT_HOUR = 20;

const AboutParagraph = styled(Paragraph)`
    margin: 0.5rem 0;
    line-height: 1.75rem;
`;

const Greeting: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const {
        about: { greetings }
    } = getI18n();
    const [greeting, setGreeting] = useState(greetings.default);

    useEffect(() => {
        const currentDate = new Date().getHours();

        switch (true) {
            case currentDate >= GOOD_NIGHT_HOUR || currentDate <= GOOD_MORNING_HOUR:
                setGreeting(greetings.goodNight);
                break;
            case currentDate >= GOOD_EVENING_HOUR:
                setGreeting(greetings.goodEvening);
                break;
            case currentDate >= GOOD_AFTERNOON_HOUR:
                setGreeting(greetings.goodAfternoon);
                break;
            case currentDate >= GOOD_MORNING_HOUR:
                setGreeting(greetings.goodMorning);
                break;
            default:
                setGreeting(greetings.default);
                break;
        }
    }, [window]);

    return <AboutParagraph>{greeting}</AboutParagraph>;
};

export default Greeting;
