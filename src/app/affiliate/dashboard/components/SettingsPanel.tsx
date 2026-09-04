'use client';

import { type FormEvent, useState } from 'react';
import { Check, Info } from 'lucide-react';
import type { AffiliatePartner } from '@/lib/affiliate/types';

type Props = { partner?: AffiliatePartner | null };
const fieldClass = 'h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-semibold text-slate-950 outline-none transition focus:border-[#00683A] focus:ring-4 focus:ring-[#00683A]/10 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500';
const labelClass = 'grid gap-2 text-sm font-black text-slate-800';

export default function SettingsPanel({ partner }: Props) {
    const [saved, setSaved] = useState(false);
    const savePreview = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSaved(true); window.setTimeout(() => setSaved(false), 2500); };

    return (
        <div className="mx-auto w-full max-w-2xl">
            <h2 className="text-xl font-black text-slate-950">Partner settings</h2><p className="mt-1 text-sm text-slate-500">Review and edit your affiliate account details.</p>
            <form onSubmit={savePreview} className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}><span>Full name *</span><input required defaultValue={partner?.name || ''} autoComplete="name" className={fieldClass} /></label>
                    <label className={labelClass}><span>Email address</span><input disabled value={partner?.email || ''} className={fieldClass} readOnly /></label>
                    <label className={labelClass}><span>Default currency *</span><select required defaultValue={partner?.default_currency || 'USD'} className={fieldClass}><option value="USD">USD — US Dollar</option><option value="GBP">GBP — British Pound</option><option value="EUR">EUR — Euro</option><option value="NGN">NGN — Nigerian Naira</option></select></label>
                    <label className={labelClass}><span>Minimum payout</span><input disabled value={`${partner?.default_currency || 'USD'} ${((partner?.minimum_payout_minor || 0) / 100).toFixed(2)}`} className={fieldClass} readOnly /></label>
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-blue-50 p-4 text-blue-900"><Info className="mt-0.5 h-4 w-4 shrink-0" /><p className="text-xs leading-relaxed">Email and payout thresholds are account-controlled. Editable changes are a frontend preview until an affiliate update endpoint is available.</p></div>
                <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00683A] px-6 py-3.5 text-sm font-black text-white"><Check className="h-4 w-4" /> {saved ? 'Saved for preview' : 'Save changes'}</button>
            </form>
        </div>
    );
}
