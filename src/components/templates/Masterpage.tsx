import { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import ContentContainer from '../atoms/ContentContainer';
import Sidebar from '../organisms/Sidebar';

const MasterContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        height: initial;
        max-width: 100vw;
        min-width: 20rem;
    }
`;

interface MasterpageProps {
    children: ReactNode;
    centralizeMobile?: boolean;
}

const Masterpage: FC<MasterpageProps> = ({ children, centralizeMobile }: MasterpageProps) => (
    <MasterContainer>
        <Sidebar />
        <ContentContainer centralizeMobile={centralizeMobile}>{children}</ContentContainer>
    </MasterContainer>
);

Masterpage.defaultProps = {
    centralizeMobile: false
};

export default Masterpage;
