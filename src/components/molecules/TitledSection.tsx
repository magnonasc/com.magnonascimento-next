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

    & + section {
        margin-top: 2rem;
    }
`;

const Title: FC<HTMLAttributes<HTMLSpanElement>> = styled.h2`
    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.25;

    font-family: 'Major Mono Display';
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    animation-name: fadeIn;
    animation-duration: 15s;
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

type TitledSectionProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
};

const Home: FC<TitledSectionProps> = ({ title, children }) => (
    <TitledSection>
        <Title>{title}</Title>
        {children}
    </TitledSection>
);

export default Home;
