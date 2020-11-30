import { FC, HTMLAttributes, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Span } from '../atoms/Text';
import Link from '../atoms/Link';
import LinkButton from '../atoms/LinkButton';

const NavBarContainer: FC<HTMLAttributes<HTMLElement>> = styled.nav`
    ${({ theme }) => `background-color: ${theme.colors.background.tertiary}`};
    height: 40rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: relative;

    @media (max-width: 768px) {
        height: 32rem;
        padding-top: 4rem;
        width: 100%;
    }
`;

const ProfilePicture: FC<ImgHTMLAttributes<HTMLImageElement>> = styled.img`
    width: 8rem;
    height: 8rem;
    border: solid 1px ${({ theme }) => theme.colors.border.primary};
    border-radius: 5px;
    position: absolute;
    top: -4rem;
    left: 0;
    right: 0;
    margin: auto;
    &:hover {
        cursor: pointer;
    }

    @media (max-height: 900px) {
        display: none;
    }
`;

const NavListItem: FC<HTMLAttributes<HTMLLIElement>> = styled.li`
    margin: 2rem 0;
`;

const NavListItemText: FC<HTMLAttributes<HTMLSpanElement>> = styled(Span)`
    font-size: 1.25rem;
`;

const NavBar: FC<HTMLAttributes<HTMLDivElement>> = () => (
    <NavBarContainer>
        <Link href="/">
            <ProfilePicture src="/images/profile.jpeg" />
        </Link>
        <ul>
            <NavListItem>
                <LinkButton href="/professional" passHref>
                    <NavListItemText>Profissional</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href="/education" passHref>
                    <NavListItemText>Educação</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href="/books" passHref>
                    <NavListItemText>Livros</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href="/movies" passHref>
                    <NavListItemText>Filmes</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href="/games" passHref>
                    <NavListItemText>Jogos</NavListItemText>
                </LinkButton>
            </NavListItem>
        </ul>
    </NavBarContainer>
);

export default NavBar;
