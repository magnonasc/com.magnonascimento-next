import { FC, HTMLAttributes, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Span } from '../../atoms/Text';
import Link from '../../atoms/Link';
import LinkButton from '../../atoms/LinkButton';
import menus from './menus.json';

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

    @media (min-width: 768px) and (max-height: 900px) {
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
                <LinkButton href={menus.professional.url} passHref>
                    <NavListItemText>{menus.professional.label}</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href={menus.education.url} passHref>
                    <NavListItemText>{menus.education.label}</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href={menus.books.url} passHref>
                    <NavListItemText>{menus.books.label}</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href={menus.movies.url} passHref>
                    <NavListItemText>{menus.movies.label}</NavListItemText>
                </LinkButton>
            </NavListItem>
            <NavListItem>
                <LinkButton href={menus.games.url} passHref>
                    <NavListItemText>{menus.games.label}</NavListItemText>
                </LinkButton>
            </NavListItem>
        </ul>
    </NavBarContainer>
);

export default NavBar;
