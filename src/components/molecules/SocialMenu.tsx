import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icons';

const SocialContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.footer<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1rem;
    width: 22rem;
    height: 8rem;
`;

const IconContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;

const SocialLink = styled.a`
    cursor: pointer;

    svg {
        width: 3rem;
        fill: ${({ theme }) => theme.colors.icons.primary};
    }

    animation-name: fadeIn;
    animation-duration: 5s;
    animation-delay: 1s;
    animation-fill-mode: both;
`;

const SocialMenu: FC<HTMLAttributes<HTMLDivElement>> = () => (
    <SocialContainer>
        <IconContainer>
            <SocialLink href="https://github.com/magnonasc" rel="noreferrer" target="_blank" title="Github">
                <Icon name="Github" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/magnonasc/" rel="noreferrer" target="_blank" title="LinkedIn">
                <Icon name="LinkedIn" />
            </SocialLink>
        </IconContainer>
        <SocialLink href="mailto:magno@magnonascimento.com" title="E-mail">magno@magnonascimento.com</SocialLink>
    </SocialContainer>
);

export default SocialMenu;
