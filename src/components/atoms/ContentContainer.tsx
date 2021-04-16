import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ContentContainerProps extends HTMLAttributes<HTMLElement> {
    centralize?: boolean;
    centralizeMobile?: boolean;
}

const ContentContainer: FC<ContentContainerProps> = styled.main<ContentContainerProps>`
    display: flex;
    flex-direction: column;
    flex: 3;
    overflow-y: scroll;
    justify-content: ${({ centralize }: ContentContainerProps) => (centralize ? 'center' : 'flex-start')};
    align-items: center;
    padding: 1rem;

    @media (max-width: 768px) {
        align-items: ${({ centralizeMobile }: ContentContainerProps) => (centralizeMobile ? 'center' : 'flex-start')};
        min-height: 100vh;
        max-width: 100vw;
        margin-bottom: 4rem;
        padding: 0 1rem;
    }
`;

export default ContentContainer;
