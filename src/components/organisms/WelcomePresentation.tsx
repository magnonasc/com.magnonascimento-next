import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Span } from '../atoms/Text';
import getI18n from '../../i18n';

const Presentation: FC<HTMLAttributes<HTMLDivElement>> = styled.aside`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    animation-name: wipeUp;
    animation-duration: 2.5s;
    animation-delay: 1s;
    animation-fill-mode: both;
    overflow: hidden;

    @keyframes wipeUp {
        to {
            min-height: 0;
            opacity: 0;
        }
    }
`;

const WelcomingText: FC<HTMLAttributes<HTMLSpanElement>> = styled(Span)`
    font-size: 5vw;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    animation-name: zoomOut;
    animation-duration: 2.5s;
    animation-delay: 1s;
    animation-fill-mode: both;

    @keyframes zoomOut {
        to {
            font-size: 0;
        }
    }
`;

const BigText: FC<HTMLAttributes<HTMLSpanElement>> = styled(WelcomingText)`
    font-size: 10vw;
    display: block;

    @media (max-width: 768px) {
        font-size: 7.5rem;
    }
`;

const WelcomePresentation: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const {
        presentation: { hello, welcome }
    } = getI18n();

    return (
        <Presentation>
            <WelcomingText>
                <BigText>{hello}</BigText>
                {welcome}
            </WelcomingText>
        </Presentation>
    );
};

export default WelcomePresentation;
