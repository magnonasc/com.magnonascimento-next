'use client';

// eslint-disable-next-line import/no-unresolved
import { Analytics, AnalyticsProps } from '@vercel/analytics/react';
import { FC } from 'react';

const AnalyticsWrapper: FC<AnalyticsProps> = () => <Analytics />;

export default AnalyticsWrapper;
