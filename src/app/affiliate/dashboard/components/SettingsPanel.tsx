'use client';

import Link from 'next/link';
import { BadgeCheck, CircleDollarSign, Mail, UserRound } from 'lucide-react';
import type { AffiliatePartner } from '@/lib/affiliate/types';

type Props = { partner?: AffiliatePartner | null };

export default function SettingsPanel({ partner }: Props) {
    const details = [
        { label: 'Partner name', value: partner?.name || '—', icon: UserRound },
        { label: 'Email address', value: partner?.email || '—', icon: Mail },
        { label: 'Account status', value: partner?.status || '—', icon: BadgeCheck },
        { label: 'Minimum payout', value: `${partner?.default_currency || 'USD'} ${((partner?.minimum_payout_minor || 0) / 100).toFixed(2)}`, icon: CircleDollarSign },
    ];

    return (
        <div className="mx-auto w-full max-w-3xl">
            <h2 className="text-xl font-black text-slate-950">Partner settings</h2>
            <p className="mt-1 text-sm text-slate-500">Review the details attached to your approved partner account.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {details.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#00683A] shadow-sm"><Icon className="h-5 w-5" /></span>
                        <div className="min-w-0"><p className="text-[11px] font-black uppercase tracking-wide text-slate-400">{label}</p><p className="mt-1 break-words text-sm font-black capitalize text-slate-900">{value}</p></div>
                    </div>
                ))}
            </div>
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="font-black text-blue-950">Need to change your account details?</p>
                <p className="mt-1 text-xs leading-relaxed text-blue-800">Account changes are reviewed by the partner team so payout and identity records stay consistent.</p>
                <Link href="/affiliate/support" className="mt-4 inline-flex rounded-full bg-[#00683A] px-5 py-2.5 text-xs font-black text-white">Request an account update</Link>
            </div>
        </div>
    );
}
