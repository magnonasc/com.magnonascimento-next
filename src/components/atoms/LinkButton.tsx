import Link, { LinkProps } from 'next/link';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledAnchor: FC<HTMLAttributes<HTMLAnchorElement>> = styled.a`
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

const LinkButton: FC<PropsWithChildren<LinkProps>> = ({ children, ...props }: PropsWithChildren<LinkProps>) => (
    <Link {...props} passHref>
        <StyledAnchor>{children}</StyledAnchor>
    </Link>
);

export default LinkButton;
