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
    max-width: calc(100vw - 30rem);
    min-width: 25rem;
    overflow-y: scroll;
    justify-content: ${({ centralize }: ContentContainerProps) => (centralize ? 'center' : 'flex-start')};
    align-items: center;
    padding: 1rem;

    @media (max-width: 768px) {
        align-items: ${({ centralizeMobile }: ContentContainerProps) => (centralizeMobile ? 'center' : 'flex-start')};
        min-height: calc(100vh - 5rem);
        min-width: 20rem;
        max-width: 100vw;
        margin-bottom: 4rem;
        padding: 2.5rem 1rem;
    }
`;

export default ContentContainer;
