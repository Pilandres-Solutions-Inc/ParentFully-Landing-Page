'use client';

import { FileText, LogOut, RefreshCw } from 'lucide-react';

type Props = { firstName?: string; refreshing: boolean; onAgreement: () => void; onRefresh: () => void; onLogout: () => void };
const actionClass = 'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-black backdrop-blur transition hover:bg-white/15';

export default function DashboardHeader({ firstName, refreshing, onAgreement, onRefresh, onLogout }: Props) {
    return (
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#003D22,#007541)] p-5 text-white shadow-[0_20px_55px_rgba(0,61,34,0.18)] sm:p-7">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#F38500]/20 blur-3xl" />
            <div className="relative">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div><p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Affiliate partner portal</p><h1 className="mt-3 text-2xl font-black sm:text-3xl">Welcome back, {firstName || 'Partner'}.</h1><p className="mt-2 max-w-xl text-sm leading-relaxed text-emerald-50/75">Track referrals, earnings, and payouts from one clear workspace.</p></div>
                    <div className="flex flex-wrap gap-2 lg:justify-end"><button type="button" onClick={onRefresh} disabled={refreshing} className={actionClass}><RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} /> Refresh</button><button type="button" onClick={onLogout} className={actionClass}><LogOut className="h-4 w-4" /> Sign out</button></div>
                </div>
                <button type="button" onClick={onAgreement} className="relative mt-5 inline-flex items-center gap-2 text-xs font-black text-emerald-50/80 transition hover:text-white"><FileText className="h-4 w-4" /> Read partner agreement</button>
            </div>
        </div>
    );
}
