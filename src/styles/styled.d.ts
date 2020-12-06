/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import darkTheme from './dark-theme';
import lightTheme from './light-theme';

export type Theme = typeof darkTheme & typeof lightTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
