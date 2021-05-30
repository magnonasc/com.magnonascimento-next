import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import JobInfo from '../../molecules/JobInfo';
import getI18n from '../../i18n';

const JobInfoContainer = styled(JobInfo)`
    min-height: calc(100vh - 2.5rem);
`;

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const {
        professional: { previousJobExperiences }
    } = getI18n();

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
