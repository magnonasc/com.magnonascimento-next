import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import SocialMenu from '../molecules/SocialMenu';
import NavBar from '../molecules/NavBar';

const SidebarContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.aside`
    ${({ theme }) => theme && `background-color: ${theme.colors.background.secondary}`};
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 30rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        background-color: transparent;
        width: 100%;
        max-width: 100%;
        margin-bottom: 2.5rem;
    }
`;

const Sidebar: FC<HTMLAttributes<HTMLDivElement>> = () => (
    <SidebarContainer className="sidebar-container">
        <NavBar />
        <SocialMenu />
    </SidebarContainer>
);

export default Sidebar;
