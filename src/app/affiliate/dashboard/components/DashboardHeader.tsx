'use client';

import { FileText, LogOut, RefreshCw } from 'lucide-react';

type Props = { firstName?: string; refreshing: boolean; onAgreement: () => void; onRefresh: () => void; onLogout: () => void };
const actionClass = 'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-black backdrop-blur transition hover:bg-white/15';

export default function DashboardHeader({ firstName, refreshing, onAgreement, onRefresh, onLogout }: Props) {
    return (
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#003D22,#007541)] p-6 text-white shadow-[0_25px_70px_rgba(0,61,34,0.2)] sm:p-9">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#F38500]/20 blur-3xl" />
            <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Affiliate partner portal</p><button type="button" onClick={onAgreement} className={actionClass}><FileText className="h-4 w-4" /> Partner agreement</button></div>
                <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div><h1 className="text-3xl font-black sm:text-4xl">Welcome back, {firstName || 'Partner'}.</h1><p className="mt-2 max-w-xl text-sm leading-relaxed text-emerald-50/75">Track your community&apos;s journey from first signup to subscribed Parentfully family.</p></div>
                    <div className="flex flex-wrap gap-2 lg:justify-end"><button type="button" onClick={onRefresh} disabled={refreshing} className={actionClass}><RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} /> Refresh</button><button type="button" onClick={onLogout} className={actionClass}><LogOut className="h-4 w-4" /> Sign out</button></div>
                </div>
            </div>
        </div>
    );
}
