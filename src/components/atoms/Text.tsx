import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Heading1: FC<HTMLAttributes<HTMLHeadingElement>> = styled.h1`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading2: FC<HTMLAttributes<HTMLHeadingElement>> = styled.h2`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading3: FC<HTMLAttributes<HTMLHeadingElement>> = styled.h3`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading4: FC<HTMLAttributes<HTMLHeadingElement>> = styled.h4`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading5: FC<HTMLAttributes<HTMLHeadingElement>> = styled.h5`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading6: FC<HTMLAttributes<HTMLHeadingElement>> = styled.h6`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;

export const Paragraph: FC<HTMLAttributes<HTMLParagraphElement>> = styled.p`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
    text-indent: 3rem;
`;

export const Span: FC<HTMLAttributes<HTMLSpanElement>> = styled.span`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
