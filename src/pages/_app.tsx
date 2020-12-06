import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import darkTheme from '../styles/dark-theme';
import lightTheme from '../styles/light-theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    const [isDarkModePreferred, setIsDarkModePreferred] = useState(false);

    useEffect(() => {
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

        if (matchMedia.matches) {
            setIsDarkModePreferred(true);
        }

        matchMedia.addEventListener('change', (event) => {
            setIsDarkModePreferred(event.matches);
        });
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={isDarkModePreferred ? darkTheme : lightTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp;
