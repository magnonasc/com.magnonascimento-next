import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const TitledSection: FC<HTMLAttributes<HTMLDivElement>> = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    position: relative;

    padding-top: 3rem;

    animation-name: fadeInSection;
    animation-duration: 5s;
    animation-delay: 1s;
    animation-fill-mode: both;

    @keyframes fadeInSection {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Title: FC<HTMLAttributes<HTMLSpanElement>> = styled.h2`
    position: absolute;
    top: 0;
    left: 0;

    font-family: 'Major Mono Display';
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-height: 680px) and (min-width: 769px) {
        font-size: 3rem;
    }

    animation-name: fadeInSectionTitle;
    animation-duration: 8s;
    animation-delay: 1s;
    animation-fill-mode: both;

    @keyframes fadeInSectionTitle {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.25;
        }
    }
`;

type TitledSectionProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
};

const Home: FC<TitledSectionProps> = ({ title, children, ...props }) => (
    <TitledSection {...props}>
        <Title>{title}</Title>
        {children}
    </TitledSection>
);

export default Home;
