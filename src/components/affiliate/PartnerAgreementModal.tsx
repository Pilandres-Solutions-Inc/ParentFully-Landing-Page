'use client';

import Link from 'next/link';
import { Check, FileText, X } from 'lucide-react';
import { useEffect } from 'react';

type PartnerAgreementModalProps = {
    open: boolean;
    onClose: () => void;
    accepted?: boolean;
    onAcceptedChange?: (accepted: boolean) => void;
    onConfirm?: () => void;
    confirmLabel?: string;
    busy?: boolean;
};

const agreementSections = [
    {
        title: 'Your relationship with Parentfully',
        copy: 'You participate as an independent affiliate partner. This agreement does not create an employment, agency, franchise, or joint-venture relationship.',
    },
    {
        title: 'Responsible promotion',
        copy: 'Share Parentfully honestly and use approved information. Do not make misleading claims, impersonate Parentfully, send spam, or use deceptive advertising practices.',
    },
    {
        title: 'Tracking and commission',
        copy: 'Eligible referrals must be recorded through your assigned code or link. Commission is calculated from qualifying paid conversions and may be reversed for refunds, chargebacks, fraud, or policy violations.',
    },
    {
        title: 'Privacy and confidentiality',
        copy: 'Protect account access and any non-public partner information. Handle personal information lawfully and never collect or disclose Parentfully user data without permission.',
    },
    {
        title: 'Programme changes and termination',
        copy: 'Either party may end the partnership. Parentfully may suspend access or unpaid ineligible commission where programme rules, applicable law, or these terms are breached.',
    },
];

export default function PartnerAgreementModal({
    open,
    onClose,
    accepted = false,
    onAcceptedChange,
    onConfirm,
    confirmLabel = 'Accept and continue',
    busy = false,
}: PartnerAgreementModalProps) {
    useEffect(() => {
        if (!open) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    if (!open) return null;

    const requiresAcceptance = Boolean(onAcceptedChange && onConfirm);

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="partner-agreement-title" onMouseDown={(event) => {
            if (event.currentTarget === event.target && !busy) onClose();
        }}>
            <div className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-2xl sm:rounded-[2rem]">
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:px-7">
                    <div className="flex min-w-0 items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#00683A]"><FileText className="h-5 w-5" /></span>
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#BF6500]">Parentfully affiliates</p>
                            <h2 id="partner-agreement-title" className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">Partner Agreement</h2>
                            <p className="mt-1 text-xs text-slate-500">Please review the terms that guide our partnership.</p>
                        </div>
                    </div>
                    <button type="button" onClick={onClose} disabled={busy} className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 disabled:opacity-50" aria-label="Close partner agreement"><X className="h-5 w-5" /></button>
                </div>

                <div className="overflow-y-auto px-5 py-5 sm:px-7">
                    <div className="space-y-4">
                        {agreementSections.map((section, index) => (
                            <div key={section.title} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00683A] text-xs font-black text-white">{index + 1}</span>
                                <div><h3 className="text-sm font-black text-slate-900">{section.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{section.copy}</p></div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-5 text-xs leading-relaxed text-slate-500">This Partner Agreement works alongside Parentfully&apos;s <Link href="/terms" target="_blank" className="font-black text-[#00683A] underline underline-offset-2">Terms of Service</Link> and <Link href="/privacy" target="_blank" className="font-black text-[#00683A] underline underline-offset-2">Privacy Policy</Link>.</p>
                </div>

                <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
                    {requiresAcceptance ? (
                        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <input type="checkbox" checked={accepted} onChange={(event) => onAcceptedChange?.(event.target.checked)} className="sr-only" />
                            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition ${accepted ? 'border-[#00683A] bg-[#00683A] text-white' : 'border-slate-300 bg-white text-transparent'}`}><Check className="h-4 w-4" /></span>
                            <span className="text-sm font-bold leading-relaxed text-slate-700">I have read and agree to the Partner Agreement, Terms of Service, and Privacy Policy.</span>
                        </label>
                    ) : null}
                    <div className="mt-4 flex justify-end gap-3">
                        <button type="button" onClick={onClose} disabled={busy} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50 disabled:opacity-50">{requiresAcceptance ? 'Not now' : 'Close'}</button>
                        {onConfirm ? <button type="button" onClick={onConfirm} disabled={!accepted || busy} className="rounded-full bg-[#00683A] px-6 py-3 text-sm font-black text-white transition hover:bg-[#00552F] disabled:cursor-not-allowed disabled:opacity-50">{busy ? 'Submitting…' : confirmLabel}</button> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
