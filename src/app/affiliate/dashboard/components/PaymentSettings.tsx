'use client';

import Link from 'next/link';
import { CreditCard, Landmark, LockKeyhole, WalletCards } from 'lucide-react';

const methods = [
    { label: 'PayPal', description: 'Receive payouts through your verified PayPal email.', icon: WalletCards },
    { label: 'Bank transfer', description: 'Use a verified bank account when direct payouts become available.', icon: Landmark },
    { label: 'Card payout', description: 'Supported cards will appear when secure payout onboarding launches.', icon: CreditCard },
];

export default function PaymentSettings() {
    return (
        <div className="mx-auto w-full max-w-3xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h2 className="text-xl font-black text-slate-950">Payment settings</h2>
                    <p className="mt-1 text-sm text-slate-500">Payout details will be collected through a secure verification flow.</p>
                </div>
                <span className="w-fit rounded-full bg-amber-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-amber-800">Onboarding soon</span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {methods.map(({ label, description, icon: Icon }) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#00683A] shadow-sm"><Icon className="h-5 w-5" /></span>
                        <p className="mt-4 text-sm font-black text-slate-950">{label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-3xl bg-[#083E28] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10"><LockKeyhole className="h-5 w-5 text-orange-200" /></span>
                    <div><p className="font-black">Your payment information stays protected</p><p className="mt-1 max-w-xl text-xs leading-relaxed text-emerald-50/70">Parentfully will never collect card, bank, or identity documents through an unverified preview form.</p></div>
                </div>
                <Link href="/affiliate/support" className="shrink-0 rounded-full bg-white px-5 py-2.5 text-center text-xs font-black text-[#00683A]">Ask about payouts</Link>
            </div>
        </div>
    );
}
