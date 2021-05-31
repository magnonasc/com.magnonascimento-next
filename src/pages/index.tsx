import { FC, HTMLAttributes } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Masterpage from '../components/templates/Masterpage';
import TitledSection from '../components/molecules/TitledSection';
import About from '../components/organisms/About/About';
import Professional from '../components/organisms/Professional/Professional';
import WelcomePresentation from '../components/organisms/WelcomePresentation';
import getI18n from '../i18n';

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

const TableOfContents = dynamic(() => import('../components/molecules/TableOfContents'), { ssr: false });

const Home: FC = () => {
    const { about, professional } = getI18n();
    const pageContents = [about, professional];

    return (
        <>
            <Head>
                <title>Magno Nascimento</title>
            </Head>

            <Masterpage>
                <WelcomePresentation />
                <Content>
                    <TableOfContents pageContents={pageContents} />
                    <TitledSection title={about.title} id={about.id}>
                        <About />
                    </TitledSection>
                    <TitledSection title={professional.title} id={professional.id}>
                        <Professional />
                    </TitledSection>
                </Content>
            </Masterpage>
        </>
    );
};

export default Home;
