import { IBenefit } from "@/types"
import {
    FiUsers, FiCalendar, FiClock,
    FiCheckCircle, FiZap, FiTarget,
    FiShield, FiHeart, FiFileText, FiDollarSign, FiSmile,
    FiTrendingUp
} from "react-icons/fi";

export const benefits: IBenefit[] = [
    {
        title: "Create routines your child can actually follow",
        description: "Build simple routines for mornings, after school, bedtime, weekends, chores, study time, and family life.",
        bullets: [
            {
                title: "End the Battles",
                description: "No more repeating the same thing ten times or guessing what comes next.",
                icon: <FiZap size={26} />
            },
            {
                title: "Predictable Days",
                description: "Your child knows what to do, you know what to expect, and your home feels calmer.",
                icon: <FiSmile size={26} />
            }
        ],
        imageSrc: "/mocks/mock4.png"
    },
    {
        title: "Set clear goals for the child you are raising",
        description: "Move beyond \"I just want my child to do well.\" Set growth goals in areas like confidence, reading, responsibility, and emotional control.",
        bullets: [
            {
                title: "Measurable Growth",
                description: "Turn goals into small actions you can track. Raising a thriving child shouldn't be left to chance.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Holistic Development",
                description: "Focus on social skills, faith, school habits, life skills, and wellness in one place.",
                icon: <FiHeart size={26} />
            }
        ],
        imageSrc: "/mocks/mock6.png"
    },
    {
        title: "Build a discipline plan before behaviour gets hard",
        description: "Decide your rules, expectations, consequences, and teaching responses before emotions take over.",
        bullets: [
            {
                title: "Proactive, Not Reactive",
                description: "Have a plan ready for when your child struggles to reduce yelling, confusion, and guilt.",
                icon: <FiShield size={26} />
            },
            {
                title: "Clearer Guidance",
                description: "Get more confidence in how to respond while your child gets consistent boundaries.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/mocks/mock8.png"
    },
    {
        title: "Keep everyone caring for your child aligned",
        description: "Help parents, co-parents, nannies, and caregivers follow the same plan so care doesn't become random.",
        bullets: [
            {
                title: "Shared Responsibility",
                description: "Share routines, tasks, goals, and schedules so the plan stays clear even when you aren't there.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Consistent Support",
                description: "Expectations stay consistent across all caregivers, ensuring the child feels supported.",
                icon: <FiSmile size={26} />
            }
        ],
        imageSrc: "/mocks/mock5.png"
    },
    {
        title: "Manage family schedules without the mental overload",
        description: "Track activities, appointments, routines, holidays, parenting time, and shared responsibilities.",
        bullets: [
            {
                title: "Full Visibility",
                description: "Everyone can see what needs to happen, who is responsible, and what has changed.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Peace at Home",
                description: "Eliminate missed plans and confusion with a single source of truth for the family.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/mocks/mock4.png"
    },
    {
        title: "Support co-parenting with structure and less conflict",
        description: "Keep communication and decisions focused on the child instead of scattered, emotional messages.",
        bullets: [
            {
                title: "Child-Focused Clarity",
                description: "Organize parenting time, expenses, and agreements in a neutral, structured space.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Reduced Conflict",
                description: "The goal isn't more control; it's more clarity and stability for the child.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/mocks/mock1.png"
    },
    {
        title: "Document important parenting moments",
        description: "Record behaviours, concerns, incidents, and agreements to notice patterns and make better decisions.",
        bullets: [
            {
                title: "Factual Records",
                description: "Move away from scattered memories to clear, factual, and objective documentation.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Better Decisions",
                description: "Use logs to identify trends in your child's behavior or needs over time.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/mocks/mock2.png"
    },
    {
        title: "Track child-related expenses clearly",
        description: "Organize child-related expenses, payment requests, reimbursements, and approvals.",
        bullets: [
            {
                title: "Better Visibility",
                description: "Couples and co-parents get a clear view of who paid, what is pending, and what is handled.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Financial Accountability",
                description: "Reduce money-related stress through transparent records and better planning.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/mocks/mock6.png"
    }
];