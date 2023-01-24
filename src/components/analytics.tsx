'use client';

import { Analytics, AnalyticsProps } from '@vercel/analytics/react';
import { FC } from 'react';

const AnalyticsWrapper: FC<AnalyticsProps> = () => <Analytics />;

export default AnalyticsWrapper;
