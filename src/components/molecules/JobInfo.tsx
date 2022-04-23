import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Heading3, Heading4, Heading5, Paragraph as ProjectDescription, Span } from '../atoms/Text';
import Icon from '../atoms/Icons';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 50rem;
`;

const CompanyName = styled(Heading3)`
    color: ${({ color }) => color};
    font-size: 4rem;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const JobTitle = styled(Heading4)`
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const JobPeriod = styled(Span)`
    margin: 2rem 0 1rem 0;
`;

const ProjectTitle = styled(Heading5)`
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const JobDescription = styled.section`
    min-width: 20rem;
    width: 100%;
    margin: 1rem;
    padding-top: 2rem;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        min-width: 16rem;
        max-width: 100%;
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

export type JobInfoProps = {
    companyName: string;
    titleColor: string;
    jobTitle: string;
    jobPeriod: string;
    jobProjects: {
        projectTitle: string;
        projectDescription: string;
        stack: string[];
    }[];
};

interface Props extends HTMLAttributes<HTMLDivElement>, JobInfoProps {}

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
