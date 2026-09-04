'use client';

import { type FormEvent, useState } from 'react';
import { Check, CreditCard, FileCheck2, Landmark, LockKeyhole, ShieldCheck, Upload, WalletCards } from 'lucide-react';
import type { PaymentMethod } from './types';

const fieldClass = 'h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-semibold text-slate-950 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-[#00683A] focus:ring-4 focus:ring-[#00683A]/10';
const labelClass = 'grid gap-2 text-sm font-black text-slate-800';

export default function PaymentSettings() {
    const [method, setMethod] = useState<PaymentMethod>('paypal');
    const [ownershipConfirmed, setOwnershipConfirmed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const methods: Array<{ id: PaymentMethod; label: string; description: string; icon: typeof WalletCards }> = [
        { id: 'paypal', label: 'PayPal', description: 'Use your PayPal account email.', icon: WalletCards },
        { id: 'card', label: 'Card', description: 'Add a supported debit card.', icon: CreditCard },
        { id: 'bank', label: 'Bank transfer', description: 'Receive funds in your bank.', icon: Landmark },
    ];

    const submitVerification = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (ownershipConfirmed) setSubmitted(true);
    };

    return (
        <div className="mx-auto w-full max-w-3xl">
            <h2 className="text-xl font-black text-slate-950">Payment settings</h2><p className="mt-1 text-sm text-slate-500">Choose and verify where Parentfully should send eligible payouts.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {methods.map(({ id, label, description, icon: Icon }) => {
                    const selected = method === id;
                    return <button key={id} type="button" onClick={() => { setMethod(id); setSubmitted(false); }} className={`rounded-2xl border p-4 text-left transition ${selected ? 'border-[#00683A] bg-emerald-50 ring-2 ring-[#00683A]/10' : 'border-slate-200 bg-white hover:border-slate-300'}`}><div className="flex items-start justify-between"><span className={`flex h-9 w-9 items-center justify-center rounded-xl ${selected ? 'bg-[#00683A] text-white' : 'bg-slate-100 text-slate-600'}`}><Icon className="h-4 w-4" /></span><span className={`mt-1 h-4 w-4 rounded-full border-4 ${selected ? 'border-[#00683A]' : 'border-slate-300'}`} /></div><p className="mt-3 text-sm font-black text-slate-950">{label}</p><p className="mt-1 text-xs text-slate-500">{description}</p></button>;
                })}
            </div>

            <form onSubmit={submitVerification} className="mx-auto mt-6 max-w-lg rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex items-start gap-3 border-b border-slate-200 pb-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#00683A]"><ShieldCheck className="h-5 w-5" /></span><div><h3 className="font-black text-slate-950">Verify your payout account</h3><p className="mt-1 text-xs leading-relaxed text-slate-500">Identity and ownership verification protects partner payouts.</p></div></div>
                <div className="mt-5 grid gap-4">
                    <label className={labelClass}><span>Legal name *</span><input required autoComplete="name" className={fieldClass} placeholder="Name on your ID" /></label>
                    <label className={labelClass}><span>Country of residence *</span><input required autoComplete="country-name" className={fieldClass} placeholder="Your country" /></label>
                    {method === 'paypal' ? <label className={labelClass}><span>PayPal email *</span><input required type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" /></label> : null}
                    {method === 'card' ? <><label className={labelClass}><span>Name on card *</span><input required autoComplete="cc-name" className={fieldClass} placeholder="Full name" /></label><label className={labelClass}><span>Card number *</span><input required inputMode="numeric" autoComplete="cc-number" className={fieldClass} placeholder="1234 5678 9012 3456" /></label><div className="grid grid-cols-2 gap-3"><label className={labelClass}><span>Expiry *</span><input required inputMode="numeric" autoComplete="cc-exp" className={fieldClass} placeholder="MM / YY" /></label><label className={labelClass}><span>Security code *</span><input required inputMode="numeric" autoComplete="cc-csc" className={fieldClass} placeholder="CVV" /></label></div></> : null}
                    {method === 'bank' ? <><label className={labelClass}><span>Bank name *</span><input required className={fieldClass} placeholder="Your bank" /></label><label className={labelClass}><span>Account number *</span><input required inputMode="numeric" className={fieldClass} placeholder="Account number" /></label><label className={labelClass}><span>Routing or sort code *</span><input required className={fieldClass} placeholder="Routing / sort code" /></label></> : null}
                    <label className={labelClass}><span>Identity document *</span><span className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-center hover:border-[#00683A]"><Upload className="h-5 w-5 text-[#00683A]" /><span className="mt-2 text-xs font-black text-slate-700">Upload passport or government-issued ID</span><span className="mt-1 text-[11px] font-normal text-slate-400">PDF, JPG or PNG</span><input required type="file" accept=".pdf,image/jpeg,image/png" className="sr-only" /></span></label>
                    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"><input type="checkbox" checked={ownershipConfirmed} onChange={(event) => setOwnershipConfirmed(event.target.checked)} className="sr-only" /><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border ${ownershipConfirmed ? 'border-[#00683A] bg-[#00683A] text-white' : 'border-slate-300 text-transparent'}`}><Check className="h-4 w-4" /></span><span className="text-xs font-bold leading-relaxed text-slate-600">I confirm these details belong to me and match my legal identity.</span></label>
                </div>
                {submitted ? <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900"><FileCheck2 className="h-5 w-5 shrink-0" /><div><p className="text-sm font-black">Verification preview submitted</p><p className="mt-1 text-xs">No identity or payment data was uploaded because the backend verification endpoint is not connected.</p></div></div> : null}
                <button type="submit" disabled={!ownershipConfirmed} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00683A] px-6 py-3.5 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-50"><LockKeyhole className="h-4 w-4" /> Submit for verification</button>
            </form>
        </div>
    );
}
