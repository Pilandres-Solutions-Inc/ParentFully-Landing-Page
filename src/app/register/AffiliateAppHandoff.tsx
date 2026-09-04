'use client';

import Link from 'next/link';
import { ArrowRight, Copy, ExternalLink, Smartphone } from 'lucide-react';
import { useState } from 'react';

import { downloadLinks } from '@/data/download';

type Attribution = {
    code: string;
    type: 'referral' | 'affiliate';
};

export default function AffiliateAppHandoff({ attribution }: { attribution: Attribution | null }) {
    const [copied, setCopied] = useState(false);
    const queryKey = attribution?.type === 'affiliate' ? 'affiliate_code' : 'ref';
    const appUrl = attribution
        ? `parentfully://register?${queryKey}=${encodeURIComponent(attribution.code)}`
        : 'parentfully://register';

    const openParentfully = () => {
        const userAgent = navigator.userAgent || '';

        if (/Android/i.test(userAgent)) {
            const appPath = attribution
                ? `register?${queryKey}=${encodeURIComponent(attribution.code)}`
                : 'register';
            const fallbackUrl = encodeURIComponent(downloadLinks.google);
            window.location.href = `intent://${appPath}#Intent;scheme=parentfully;package=com.axetechinnovations.parentfully;S.browser_fallback_url=${fallbackUrl};end`;
            return;
        }

        if (/iPhone|iPad|iPod/i.test(userAgent)) {
            let fallbackTimer = window.setTimeout(() => {
                window.location.href = downloadLinks.apple;
            }, 1400);

            const cancelFallback = () => {
                if (document.hidden) {
                    window.clearTimeout(fallbackTimer);
                    document.removeEventListener('visibilitychange', cancelFallback);
                }
            };

            document.addEventListener('visibilitychange', cancelFallback);
            window.location.href = appUrl;
            return;
        }

        window.location.href = appUrl;
    };

    const copyCode = async () => {
        if (!attribution) return;
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(attribution.code);
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = attribution.code;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                const didCopy = document.execCommand('copy');
                textArea.remove();
                if (!didCopy) return;
            }
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            return;
        }
    };

    return (
        <div className="min-h-screen bg-[#F4F9F6] px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
            <div className="mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.1)]">
                <div className="bg-[linear-gradient(135deg,#003D22,#007541)] p-8 text-white sm:p-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-200"><Smartphone className="h-6 w-6" /></span>
                    <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-orange-200">You&apos;ve been invited to Parentfully</p>
                    <h1 className="mt-3 text-3xl font-black leading-tight">Continue in the Parentfully app.</h1>
                    <p className="mt-3 text-sm leading-relaxed text-emerald-50/75">Your partner code is ready and will be filled in automatically when the app opens.</p>
                </div>
                <div className="p-7 sm:p-10">
                    {attribution && (
                        <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#F4F9F6] p-4">
                            <div><p className="text-xs font-bold uppercase tracking-wide text-slate-500">{attribution.type === 'affiliate' ? 'Partner code' : 'Referral code'}</p><p className="mt-1 text-xl font-black tracking-wide text-slate-950">{attribution.code}</p></div>
                            <button onClick={() => void copyCode()} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-[#00683A]"><Copy className="h-4 w-4" /> {copied ? 'Copied' : 'Copy'}</button>
                        </div>
                    )}
                    <button type="button" onClick={openParentfully} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00683A] px-6 py-4 text-sm font-black text-white shadow-[0_16px_35px_rgba(0,104,58,0.2)] transition hover:bg-[#00552F]">Open Parentfully <ExternalLink className="h-4 w-4" /></button>
                    <Link href="/download" className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-4 text-sm font-black text-slate-800 transition hover:bg-slate-50">Get the app <ArrowRight className="h-4 w-4" /></Link>

                    <div className="mt-7 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                        <h2 className="text-sm font-black text-slate-950">How to continue</h2>
                        <ol className="mt-4 space-y-3">
                            {[
                                'Tap “Open Parentfully” above.',
                                'If the app is not installed, your App Store or Play Store page will open.',
                                'Install Parentfully, then return to this referral page and tap “Open Parentfully” again.',
                                attribution
                                    ? 'Your referral code will be filled in automatically. You can also copy it above as a backup.'
                                    : 'Create your Parentfully account in the app.',
                            ].map((instruction, index) => (
                                <li key={instruction} className="flex items-start gap-3 text-xs font-semibold leading-5 text-slate-600">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00683A] text-[11px] font-black text-white">
                                        {index + 1}
                                    </span>
                                    <span className="pt-0.5">{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
