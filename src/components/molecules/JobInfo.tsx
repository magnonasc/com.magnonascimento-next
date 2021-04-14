import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Heading1, Heading2, Heading3, Heading4, Paragraph as ProjectDescription, Span } from '../atoms/Text';
import Icon from '../atoms/Icons';

const CompanyName = styled(Heading1)`
    color: ${({ color }) => color};
    font-size: 4rem;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const Container = styled.section`
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
    margin: 2rem 0 1rem 0;
`;

const ProjectTitle = styled(Heading4)`
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const JobDescription = styled.section`
    min-width: 20rem;
    width: 100%;
    max-width: 50rem;
    margin: 1rem;
    padding-top: 2rem;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        min-width: 16rem;
        max-width: 100%;
        text-align: justify;
        text-justify: inter-word;
    }
`;

const StackContainer = styled.ul`
    height: 4rem;
    padding: 1rem 0;
    display: flex;
    align-items: center;

    overflow-x: scroll;
`;

const TechnologyContainer = styled.li`
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    padding: 0 1rem;

    & + li {
        margin-left: 0.5rem;
    }
`;

const Technology = styled.figure`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 0;

    svg {
        width: 1.5rem;
        margin-right: 1rem;
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
        stack: string[];
    }[];
}

const JobInfo: FC<Props> = ({ id, companyName, titleColor, jobTitle, jobPeriod, jobProjects, className }: Props) => (
    <Container className={className} id={id}>
        <CompanyName color={titleColor}>{companyName}</CompanyName>
        <JobTitle>{jobTitle}</JobTitle>
        <JobPeriod>{jobPeriod}</JobPeriod>
        {jobProjects.map(({ projectTitle, projectDescription, stack }) => (
            <JobDescription key={projectTitle}>
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
                <StackContainer>
                    {stack.map((technology) => (
                        <TechnologyContainer key={`${projectTitle}-stack-${technology}`}>
                            <Technology>
                                <Icon name={technology} />
                                <figcaption>
                                    <Span>{technology}</Span>
                                </figcaption>
                            </Technology>
                        </TechnologyContainer>
                    ))}
                </StackContainer>
            </JobDescription>
        ))}
    </Container>
);

export default JobInfo;
