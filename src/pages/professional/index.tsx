import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import JobInfo from '../../components/molecules/JobInfo';
import jobInfoData from './jobsInfoData_pt-BR.json';

const JobInfoContainer = styled(JobInfo)`
    min-height: 100vh;
`;

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => {
    return (
        <>
            {jobInfoData.map(({ id, companyName, companyBrandColor = 'white', jobTitle, jobPeriod, jobProjects }) => (
                <JobInfoContainer
                    key={id}
                    companyName={companyName}
                    titleColor={companyBrandColor}
                    jobTitle={jobTitle}
                    jobPeriod={jobPeriod}
                    jobProjects={jobProjects}
                />
            ))}
        </>
    );
};

export default Professional;
