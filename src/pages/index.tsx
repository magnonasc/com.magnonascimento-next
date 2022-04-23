import { I18nextProvider } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Homepage from '../components/templates/Homepage';
import i18n from '../i18n';

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['translation'])
    }
})

export default () => (
    <I18nextProvider i18n={i18n}>
        <Homepage />
    </I18nextProvider>
);
