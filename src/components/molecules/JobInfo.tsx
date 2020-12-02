import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Heading1, Heading2, Heading3, Heading4, Paragraph as ProjectDescription } from '../atoms/Text';

const CompanyName = styled(Heading1)`
    color: ${({ color }) => color};
    font-size: min(5vw, 5rem);

    @media (max-width: 768px) {
        font-size: 3rem;
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

const ProjectTitle = styled(Heading4)`
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const JobDescription = styled.div`
    min-width: 20rem;
    max-width: 50rem;
    padding: 1rem;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        min-width: 16rem;
        max-width: 80vw;
        width: 80vw;
    }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
    companyName: string;
    titleColor: string;
    jobTitle: string;
    jobPeriod: string;
    jobProjects: {
        projectTitle: string;
        projectDescription: string;
    }[];
}

const JobInfo: FC<Props> = ({ id, companyName, titleColor, jobTitle, jobPeriod, jobProjects, className }: Props) => (
    <Container className={className} id={id}>
        <CompanyName color={titleColor}>{companyName}</CompanyName>
        <JobTitle>{jobTitle}</JobTitle>
        <JobPeriod>{jobPeriod}</JobPeriod>
        {jobProjects.map(({ projectTitle, projectDescription }) => (
            <JobDescription key={projectTitle}>
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
            </JobDescription>
        ))}
    </Container>
);

export default JobInfo;
