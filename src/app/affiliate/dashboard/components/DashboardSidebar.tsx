'use client';

import { BadgeDollarSign, ChartNoAxesCombined, CreditCard, HandCoins, Settings, Users } from 'lucide-react';
import type { DashboardTab } from './types';

type Props = { activeTab: DashboardTab; onChange: (tab: DashboardTab) => void };

const navigation: Array<{ id: DashboardTab; label: string; icon: typeof ChartNoAxesCombined }> = [
    { id: 'overview', label: 'Overview', icon: ChartNoAxesCombined },
    { id: 'referrals', label: 'Referrals', icon: Users },
    { id: 'commissions', label: 'Commissions', icon: BadgeDollarSign },
    { id: 'payouts', label: 'Payouts', icon: HandCoins },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
];

export default function DashboardSidebar({ activeTab, onChange }: Props) {
    return (
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Affiliate dashboard" className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm lg:overflow-visible lg:rounded-3xl lg:p-2.5">
                <div className="flex min-w-max gap-1 lg:min-w-0 lg:flex-col">
                    {navigation.map(({ id, label, icon: Icon }) => {
                        const selected = activeTab === id;
                        return <button key={id} type="button" onClick={() => onChange(id)} aria-current={selected ? 'page' : undefined} className={`flex min-w-28 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-black transition lg:min-w-0 lg:justify-start lg:rounded-2xl lg:text-sm ${selected ? 'bg-[#00683A] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}><Icon className="h-4 w-4 shrink-0" /><span>{label}</span></button>;
                    })}
                </div>
            </nav>
        </aside>
    );
}
