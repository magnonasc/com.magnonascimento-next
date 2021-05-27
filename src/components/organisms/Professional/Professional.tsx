import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import JobInfo from '../../molecules/JobInfo';
import { professional } from '../../i18n/pt.json';

const JobInfoContainer = styled(JobInfo)`
    min-height: calc(100vh - 2.5rem);
`;

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const { previousJobExperiences } = professional;

    return (
        <>
            {previousJobExperiences.map(
                ({ id, companyName, companyBrandColor = 'white', jobTitle, jobPeriod, jobProjects }) => (
                    <JobInfoContainer
                        key={id}
                        companyName={companyName}
                        titleColor={companyBrandColor}
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
