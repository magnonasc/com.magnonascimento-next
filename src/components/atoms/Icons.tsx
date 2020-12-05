import { FC } from 'react';
import LinkedInLogo from '../../../public/images/icons/social-networks/linkedin.svg';
import GithubLogo from '../../../public/images/icons/social-networks/github.svg';
import FacebookLogo from '../../../public/images/icons/social-networks/facebook.svg';

import JavaLogo from '../../../public/images/icons/technologies/java.svg';
import JavascriptLogo from '../../../public/images/icons/technologies/javascript.svg';
import MongoDBLogo from '../../../public/images/icons/technologies/mongodb.svg';
import NodeLogo from '../../../public/images/icons/technologies/node.svg';
import OracleLogo from '../../../public/images/icons/technologies/oracle.svg';
import ReactLogo from '../../../public/images/icons/technologies/react.svg';
import RedisLogo from '../../../public/images/icons/technologies/redis.svg';
import CSharpLogo from '../../../public/images/icons/technologies/csharp.svg';
import PythonLogo from '../../../public/images/icons/technologies/python.svg';
import KibanaLogo from '../../../public/images/icons/technologies/kibana.svg';
import SpringLogo from '../../../public/images/icons/technologies/spring.svg';

type IconProps = {
    name: string;
};

const Icon: FC<IconProps> | null = ({ name }: IconProps) => {
    switch (name) {
        case 'LinkedIn':
            return <LinkedInLogo />;
        case 'Github':
            return <GithubLogo />;
        case 'Facebook':
            return <FacebookLogo />;
        case 'Java':
            return <JavaLogo />;
        case 'Javascript':
            return <JavascriptLogo />;
        case 'MongoDB':
            return <MongoDBLogo />;
        case 'Node':
            return <NodeLogo />;
        case 'OracleDB':
            return <OracleLogo />;
        case 'React':
            return <ReactLogo />;
        case 'Redis':
            return <RedisLogo />;
        case 'C#':
            return <CSharpLogo />;
        case 'Python':
            return <PythonLogo />;
        case 'Kibana':
            return <KibanaLogo />;
        case 'Spring':
            return <SpringLogo />;
        default:
            return null;
    }
};

export default Icon;
