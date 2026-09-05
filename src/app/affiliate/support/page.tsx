import Link from 'next/link';
import { ArrowRight, CircleDollarSign, HelpCircle, Mail, ShieldCheck } from 'lucide-react';

const supportTopics = [
    { title: 'Account access', copy: 'Get help with approval status, sign-in, or updating partner details.', icon: ShieldCheck },
    { title: 'Referrals and commission', copy: 'Ask about referral qualification, commission status, or attribution.', icon: CircleDollarSign },
    { title: 'Program questions', copy: 'Review campaign guidance and answers about promoting Parentfully.', icon: HelpCircle },
];

export default function AffiliateSupportPage() {
    return (
        <main className="min-h-screen bg-[#F4F9F6] px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
            <section className="mx-auto max-w-5xl">
                <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#003D22,#007541)] p-7 text-white shadow-[0_24px_70px_rgba(0,61,34,0.18)] sm:p-10">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Affiliate support</p>
                    <h1 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">Help for every step of your partnership.</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50/75">Tell us what you need and include the email attached to your affiliate account so we can help faster.</p>
                    <a href="mailto:admin@parentfullyapp.com?subject=Parentfully%20Affiliate%20Support" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#00683A]"><Mail className="h-4 w-4" /> Email partner support</a>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {supportTopics.map(({ title, copy, icon: Icon }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[#00683A]"><Icon className="h-5 w-5" /></span><h2 className="mt-5 font-black text-slate-950">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-500">{copy}</p></article>)}
                </div>
                <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div><p className="font-black text-slate-950">Looking for general Parentfully answers?</p><p className="mt-1 text-sm text-slate-500">Visit the shared help centre for product and account guidance.</p></div>
                    <Link href="/help" className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-[#00683A]">Open Help Centre <ArrowRight className="h-4 w-4" /></Link>
                </div>
            </section>
        </main>
    );
}
