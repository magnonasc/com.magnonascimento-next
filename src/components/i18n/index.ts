import { useRouter } from 'next/router';
import ptBR from './data/pt.json';
import enUS from './data/en.json';

const getI18n: () => typeof ptBR = () => {
    const { locale } = useRouter();

    switch (locale) {
        case 'en':
        case 'en-US':
            return enUS;
        case 'pt':
        case 'pt-BR':
            return ptBR;
        default:
            return ptBR;
    }
};

export default getI18n;
