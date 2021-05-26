import { FC, HTMLAttributes } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Span } from '../../components/atoms/Text';
import MasterPage from '../../components/templates/Masterpage';

const WelcomingText: FC<HTMLAttributes<HTMLSpanElement>> = styled(Span)`
    font-size: 5vw;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Games: FC<HTMLAttributes<HTMLDivElement>> = () => (
    <>
        <Head>
            <title>Magno Nascimento - Jogos</title>
        </Head>
        <MasterPage>
            <WelcomingText>Em construção!</WelcomingText>
        </MasterPage>
    </>
);

export default Games;
