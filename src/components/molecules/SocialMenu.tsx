import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import LinkedInLogo from '../../../public/images/icons/linkedin.svg';
import GitHubLogo from '../../../public/images/icons/github.svg';
import FacebookLogo from '../../../public/images/icons/facebook.svg';

const SocialContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.footer<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    width: 22rem;
    height: 8rem;

    @media (max-width: 768px) {
        background-color: transparent;
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
        width: 60px;
        height: 60px;
        fill: white;
    }
`;

const SocialMenu: FC<HTMLAttributes<HTMLDivElement>> = () => (
    <SocialContainer>
        <IconContainer>
            <SocialLink href="https://github.com/magnonasc" rel="noreferrer" target="_blank">
                <GitHubLogo />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/magnonasc/" rel="noreferrer" target="_blank">
                <LinkedInLogo />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/magnonasc/" rel="noreferrer" target="_blank">
                <FacebookLogo />
            </SocialLink>
        </IconContainer>
        <a href="mailto:magno@magnonascimento.com">magno@magnonascimento.com</a>
    </SocialContainer>
);

export default SocialMenu;
