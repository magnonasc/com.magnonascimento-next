import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* End of Reset CSS */

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background.primary};
    }

    h1, h2, h3, h4, h5, h6, p, span, a {
        color: ${({ theme }) => theme.colors.text.primary};
        font-family: 'Quicksand', sans-serif;
        font-weight: 300;
    }

    a {
        text-decoration: none;
    }

    * {
        /* Firefox as per December 2020 */
        scrollbar-color: ${({ theme }) => theme.colors.scrollbar.primary} transparent;
        scrollbar-width: thin;
    
        /* Webkit browsers (Chrome, Edge, Safari) December 2020 */
        &::-webkit-scrollbar {
            background-color: transparent;
            height: 0.5rem;
            width: 0.5rem;
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.scrollbar.primary};
            border-radius: 1rem;
        }
    }
`;
