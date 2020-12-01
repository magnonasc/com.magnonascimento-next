import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Span } from '../../components/atoms/Text';
import MasterPage from '../../components/templates/Masterpage';

const WelcomingText: FC<HTMLAttributes<HTMLSpanElement>> = styled(Span)`
    font-size: 5vw;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Books: FC<HTMLAttributes<HTMLDivElement> > = () => (
    <MasterPage centralize centralizeMobile>
        <WelcomingText>Em construção!</WelcomingText>
    </MasterPage>
);

export default Books;