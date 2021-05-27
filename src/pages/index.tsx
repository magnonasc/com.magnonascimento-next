import { FC, HTMLAttributes } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Masterpage from '../components/templates/Masterpage';
import TitledSection from '../components/molecules/TitledSection';
import About from '../components/organisms/About/About';
import Professional from '../components/organisms/Professional/Professional';
import WelcomePresentation from '../components/organisms/WelcomePresentation';

const Content: FC<HTMLAttributes<HTMLDivElement>> = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    animation-name: fadeIn;
    animation-duration: 2.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Magno Nascimento</title>
            </Head>

            <Masterpage>
                <WelcomePresentation />
                <Content>
                    <TitledSection title="Sobre Mim">
                        <About />
                    </TitledSection>
                    <TitledSection title="Professional">
                        <Professional />
                    </TitledSection>
                </Content>
            </Masterpage>
        </>
    );
};

export default Home;
