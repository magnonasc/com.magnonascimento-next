import { FC, HTMLAttributes } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Span } from '../components/atoms/Text';
import Masterpage from '../components/templates/Masterpage';

const WelcomingText: FC<HTMLAttributes<HTMLSpanElement>> = styled(Span)`
    font-size: 5vw;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const BigText: FC<HTMLAttributes<HTMLSpanElement>> = styled(Span)`
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
                <title>Homepage Template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Masterpage centralizeMobile>
                <WelcomingText>
                    <BigText>Olá,</BigText>
                    seja bem vindo!
                </WelcomingText>
            </Masterpage>
        </>
    );
};

export default Home;
