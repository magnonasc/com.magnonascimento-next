import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import JobInfo, { JobInfoProps } from '../molecules/JobInfo';

const JobInfoContainer = styled(JobInfo)`
    min-height: calc(100vh - 2.5rem);
`;

type JobInfoType = JobInfoProps & {
    id: string;
};

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const { t } = useTranslation();

    return (
        <>
            {t<string, JobInfoType[]>('professional.previousJobExperiences', { returnObjects: true }).map(
                ({ id, companyName, titleColor = 'white', jobTitle, jobPeriod, jobProjects }) => (
                    <JobInfoContainer
                        key={id}
                        companyName={companyName}
                        titleColor={titleColor}
                        jobTitle={jobTitle}
                        jobPeriod={jobPeriod}
                        jobProjects={jobProjects}
                    />
                )
            )}
        </>
    );
};

export default Professional;
