import { FC } from 'react';
import styled from 'styled-components';
import { Heading1, Heading2, Heading3, Paragraph } from '../atoms/Text';

const CompanyName = styled(Heading1)`
    color: #ff5200;
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 4rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const JobTitle = styled(Heading2)`
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const JobPeriod = styled(Heading3)`
    margin-top: 2rem;
`;

const Description = styled.div`
    margin-top: 5rem;
    min-width: 20rem;
    max-width: 80%;
    padding: 1rem;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        min-width: 16rem;
        width: 80vw;
        height: 20rem;
    }
`;

interface Props {
    companyName: string;
    jobTitle: string;
    jobPeriod: string;
}

const JobInfo: FC<Props> = ({ companyName, jobTitle, jobPeriod }: Props) => (
    <Container>
        <CompanyName>{companyName}</CompanyName>
        <JobTitle>{jobTitle}</JobTitle>
        <JobPeriod>{jobPeriod}</JobPeriod>
        <Description>
            <Heading1>Oi - RPA (Outubro 2019 - Dezembro 2019)</Heading1>
            <Paragraph>
                Foram desenvolvidos alguns projetos de RPA (Robotic Process Automation) e suas respectivas APIs REST
                para realizações de algumas operações até então manual em sistemas legados. Neste projeto eu utilizei
                Java com Spring Boot, C#, Python e OracleDB.
            </Paragraph>
        </Description>
    </Container>
);

export default JobInfo;
