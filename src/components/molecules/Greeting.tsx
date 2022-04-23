import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
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
    const { t } = useTranslation();
    const [greeting, setGreeting] = useState(t('about.greetings.default'));

    useEffect(() => {
        const currentDate = new Date().getHours();

        switch (true) {
            case currentDate >= GOOD_NIGHT_HOUR || currentDate <= GOOD_MORNING_HOUR:
                setGreeting(t('about.greetings.goodNight'));
                break;
            case currentDate >= GOOD_EVENING_HOUR:
                setGreeting(t('about.greetings.goodEvening'));
                break;
            case currentDate >= GOOD_AFTERNOON_HOUR:
                setGreeting(t('about.greetings.goodAfternoon'));
                break;
            case currentDate >= GOOD_MORNING_HOUR:
                setGreeting(t('about.greetings.goodMorning'));
                break;
            default:
                setGreeting(t('about.greetings.default'));
                break;
        }
    }, []);

    return <AboutParagraph>{greeting}</AboutParagraph>;
};

export default Greeting;
