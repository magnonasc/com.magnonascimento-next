import { FC, HTMLAttributes } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Span } from '../components/atoms/Text';
import Masterpage from '../components/templates/Masterpage';
import Professional from './professional';

const Presentation: FC<HTMLAttributes<HTMLDivElement>> = styled.aside`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    animation-name: wipeup;
    animation-duration: 2.5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    overflow: hidden;

    @keyframes wipeup {
        to {
            min-height: 0;
            opacity: 0;
        }
    }
`;

const Content: FC<HTMLAttributes<HTMLDivElement>> = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const WelcomingText: FC<HTMLAttributes<HTMLSpanElement>> = styled(Span)`
    font-size: 5vw;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    animation-name: zoomout;
    animation-duration: 2.5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    @keyframes zoomout {
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

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Magno Nascimento</title>
            </Head>

            <Masterpage>
                <Presentation>
                    <WelcomingText>
                        <BigText>Olá,</BigText>
                        seja bem vindo!
                    </WelcomingText>
                </Presentation>
                <Content>
                    <Professional />
                </Content>
            </Masterpage>
        </>
    );
};

export default Home;
