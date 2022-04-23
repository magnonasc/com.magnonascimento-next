import { I18nextProvider } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, ReactNode } from 'react';
import { GetServerSideProps } from 'next';
import HomepageTemplate from '../components/templates/Homepage';
import i18n from '../i18n';

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['translation']))
    }
});

const Homepage: FC<ReactNode> = () => (
    <I18nextProvider i18n={i18n}>
        <HomepageTemplate />
    </I18nextProvider>
);

export default Homepage;
