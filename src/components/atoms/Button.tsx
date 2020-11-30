import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Button: FC<HTMLAttributes<HTMLDivElement>> = styled.div`
    ${({ theme }) => theme && `background-color: ${theme.colors.button.primary}`};
    display: flex;
    border: none;
    height: 4rem;
    width: 18rem;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    &:hover,
    &:focus {
        ${({ theme }) => theme && `background-color: ${theme.colors.button.hover}`};
    }

    &:hover {
        cursor: pointer;
    }

    &:active {
        ${({ theme }) => theme && `background-color: ${theme.colors.button.active}`};
    }
`;

export default Button;
