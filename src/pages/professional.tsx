import { FC, HTMLAttributes } from 'react';
import JobInfo from '../components/molecules/JobInfo';
import MasterPage from '../components/templates/Masterpage';

const Professional: FC<HTMLAttributes<HTMLDivElement>> = () => (
    <MasterPage>
        <JobInfo companyName="Avanade" jobTitle="Desenvolvedor Fullstack" jobPeriod="Outubro 2019 - Presente" />
    </MasterPage>
);

export default Professional;
