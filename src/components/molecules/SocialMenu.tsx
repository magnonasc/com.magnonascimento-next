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

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const IconContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    width: 100%;
    justify-content: space-around;
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

const SocialMenu: FC<HTMLAttributes<HTMLDivElement>> = () => (
    <SocialContainer>
        <IconContainer>
            <SocialLink href="https://github.com/magnonasc" rel="noreferrer" target="_blank">
                <Icon name="Github" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/magnonasc/" rel="noreferrer" target="_blank">
                <Icon name="LinkedIn" />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/magnonasc/" rel="noreferrer" target="_blank">
                <Icon name="Facebook" />
            </SocialLink>
        </IconContainer>
        <SocialLink href="mailto:magno@magnonascimento.com">magno@magnonascimento.com</SocialLink>
    </SocialContainer>
);

export default SocialMenu;
