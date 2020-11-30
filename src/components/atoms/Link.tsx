import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

const LinkButton: FC<PropsWithChildren<LinkProps>> = ({ children, ...props }: PropsWithChildren<LinkProps>) => (
    <Link {...props} passHref>
        <a>{children}</a>
    </Link>
);

export default LinkButton;
