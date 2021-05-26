import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const MasterContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: column;

    /* (window size - scrollbar width) */
    width: calc(100vw - 0.5rem);
    height: 100vh;

    @media (max-width: 768px) {
        height: initial;
        /* (window size - scrollbar width) */
        max-width: calc(100vw - 2.5rem);
        min-width: 20rem;
        padding: 0 1rem;
    }
`;

const Masterpage: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
    <MasterContainer {...props}>{children}</MasterContainer>
);

export default Masterpage;
