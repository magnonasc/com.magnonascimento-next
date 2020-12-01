import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import JobInfo from '../../components/molecules/JobInfo';
import MasterPage from '../../components/templates/Masterpage';
import jobInfoData from './jobsInfoData_pt-BR.json';

const JobInfoContainer = styled(JobInfo)`
    min-height: 100vh;
`;

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => {
    return (
        <MasterPage>
            {jobInfoData.map(({ id, companyName, jobTitle, jobPeriod, jobProjects }) => (
                <JobInfoContainer
                    key={id}
                    companyName={companyName}
                    jobTitle={jobTitle}
                    jobPeriod={jobPeriod}
                    jobProjects={jobProjects}
                />
            ))}
        </MasterPage>
    );
};

export default Professional;
