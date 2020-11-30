import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Heading1: FC<HTMLAttributes<HTMLSpanElement>> = styled.h1<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading2: FC<HTMLAttributes<HTMLSpanElement>> = styled.h2<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading3: FC<HTMLAttributes<HTMLSpanElement>> = styled.h3<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading4: FC<HTMLAttributes<HTMLSpanElement>> = styled.h4<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading5: FC<HTMLAttributes<HTMLSpanElement>> = styled.h5<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
export const Heading6: FC<HTMLAttributes<HTMLSpanElement>> = styled.h6<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;

export const Paragraph: FC<HTMLAttributes<HTMLSpanElement>> = styled.p<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;

export const Span: FC<HTMLAttributes<HTMLSpanElement>> = styled.span<HTMLAttributes<HTMLSpanElement>>`
    ${({ theme }) => theme && `color: ${theme.colors.text.primary}`};
`;
