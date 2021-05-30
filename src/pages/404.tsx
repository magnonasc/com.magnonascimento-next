import { FC } from 'react';
import styled from 'styled-components';
import { Heading1 } from '../components/atoms/Text';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const BigHeading = styled(Heading1)`
    font-size: 2.5rem;
`;

const custom404: FC<HTMLHeadingElement> = () => {
    return (
        <Container>
            <BigHeading>404 - Page Not Found</BigHeading>
        </Container>
    );
};

export default custom404;
