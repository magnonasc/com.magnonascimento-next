import { AppProps } from 'next/app';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import darkTheme from '../styles/dark-theme';
import lightTheme from '../styles/light-theme';
import { appWithTranslation } from 'next-i18next';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    const [isDarkModePreferred, setIsDarkModePreferred] = useState(true);

    useEffect(() => {
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

        if (!matchMedia.matches) {
            setIsDarkModePreferred(false);
        }

        matchMedia.addEventListener('change', (event) => {
            setIsDarkModePreferred(event.matches);
        });
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
                    rel="stylesheet"
                />
                <meta name="author" content="Magno Nascimento" />
            </Head>
            <ThemeProvider theme={isDarkModePreferred ? darkTheme : lightTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default appWithTranslation(MyApp);
