import { DOMAttributes, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import ContentContainer from '../atoms/ContentContainer';
import Sidebar from '../organisms/Sidebar';

const MasterContainer: FC<HTMLAttributes<HTMLDivElement>> = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        height: initial;
        max-width: 100vw;
        min-width: 20rem;
    }
`;

interface MasterpageProps extends DOMAttributes<HTMLDivElement> {
    centralize?: boolean;
    centralizeMobile?: boolean;
}

const Masterpage: FC<MasterpageProps> = ({ children, centralizeMobile, centralize, ...props }: MasterpageProps) => (
    <MasterContainer>
        <Sidebar />
        <ContentContainer centralize={centralize} centralizeMobile={centralizeMobile} {...props}>
            {children}
        </ContentContainer>
    </MasterContainer>
);

Masterpage.defaultProps = {
    centralizeMobile: false,
    centralize: false
};

export default Masterpage;
