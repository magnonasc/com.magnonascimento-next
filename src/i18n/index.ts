import { useRouter } from 'next/router';
import pt from './data/pt.json';
import en from './data/en.json';

const getI18n: () => typeof pt = () => {
    const { locale } = useRouter();

    switch (locale) {
        case 'en':
            return en;
        case 'pt':
            return pt;
        default:
            return pt;
    }
};

export default getI18n;
