'use client';

import { usePathname } from 'next/navigation';

import Header from './Header';

const affiliateNavigation = [
    { text: 'Home', url: '/affiliate' },
    { text: 'Help', url: '/help' },
    { text: 'Support', url: 'mailto:admin@parentfullyapp.com' },
];

export default function SiteHeader() {
    const pathname = usePathname();
    return <Header navigationItems={pathname.startsWith('/affiliate') ? affiliateNavigation : undefined} />;
}
