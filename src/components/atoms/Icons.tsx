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
            return <JavaLogo fill="#007396" />;
        case 'Javascript':
            return <JavascriptLogo fill="#F7DF1E" />;
        case 'MongoDB':
            return <MongoDBLogo fill="#47A248" />;
        case 'Node':
            return <NodeLogo fill="#339933" />;
        case 'OracleDB':
            return <OracleLogo fill="#F80000" />;
        case 'React':
            return <ReactLogo fill="#61DAFB" />;
        case 'Redis':
            return <RedisLogo fill="#DC382D" />;
        case 'C#':
            return <CSharpLogo fill="#239120" />;
        case 'Python':
            return <PythonLogo fill="#3776AB" />;
        case 'Kibana':
            return <KibanaLogo fill="#005571" />;
        case 'Spring':
            return <SpringLogo fill="#6DB33F" />;
        default:
            return null;
    }
};

export default Icon;
