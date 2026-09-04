import { Zap, ShieldCheck, CreditCard, Settings } from "lucide-react";

export const helpArticles = [
    {
        id: "invite-co-parent",
        category: "Getting Started",
        title: "How to invite a co-parent",
        description: "Everything you need to know about setting up your shared family space.",
        content: `
            <p>Setting up your family group is the first step toward conflict-free parenting. When you invite a co-parent, they gain access to shared calendars, goal trackers, and documents.</p>
            
            <h3>Step-by-Step Instructions</h3>
            <ol>
                <li>Open the Parentfully app and tap the <strong>Settings</strong> icon.</li>
                <li>Select <strong>Family Group</strong> from the menu.</li>
                <li>Tap the <strong>Invite Member</strong> button.</li>
                <li>Enter their email address or phone number to send a secure link.</li>
            </ol>

            <h3>What can they see?</h3>
            <p>By default, invited members can view and edit shared events. However, your <strong>Private Journal</strong> remains completely hidden from them unless you specifically choose to share an entry.</p>
        `
    },
    {
        id: "security-basics",
        category: "Account & Security",
        title: "Is my data secure?",
        description: "Understanding our end-to-end encryption and data policies.",
        content: `
            <p>At Parentfully, we use bank-grade encryption to ensure your family's sensitive information stays private.</p>
            <h3>How we protect you:</h3>
            <ul>
                <li><strong>End-to-End Encryption:</strong> Private messages are encrypted from the moment you send them.</li>
                <li><strong>No Data Selling:</strong> We never sell your personal information to third parties or advertisers.</li>
                <li><strong>Secure Cloud:</strong> We use AWS and Firebase with advanced firewall protection.</li>
            </ul>
        `
    },
    {
        id: "subscription-management",
        category: "Subscriptions",
        title: "Managing your Premium subscription",
        description: "How to upgrade, cancel, or change your billing details.",
        content: `
            <p>Parentfully Premium offers advanced features like document storage and unlimited goal tracking.</p>
            <h3>How to cancel:</h3>
            <p>Since all payments are handled via the App Store or Google Play Store, you must manage your subscription through your phone's native settings.</p>
        `
    }
];

export const helpCategories = [
    { id: "getting-started", title: "Getting Started", icon: Zap, color: "text-orange-500", count: "12 articles" },
    { id: "security", title: "Account & Security", icon: ShieldCheck, color: "text-emerald-500", count: "8 articles" },
    { id: "billing", title: "Subscriptions", icon: CreditCard, color: "text-blue-500", count: "5 articles" },
    { id: "devices", title: "Syncing & Devices", icon: Settings, color: "text-purple-500", count: "10 articles" },
];
