import { IBenefit } from "@/types"
import {
    FiUsers, FiCalendar, FiClock,
    FiCheckCircle, FiZap, FiTarget,
    FiShield, FiHeart, FiFileText, FiDollarSign, FiSmile,
    FiTrendingUp
} from "react-icons/fi";

export const benefits: IBenefit[] = [

    {
        title: "Shared Routines Everyone Can Follow",
        description: "Keep mornings, meals, bedtime, chores, study time, and house rules consistent across every adult caring for your child.",
        bullets: [
            {
                title: "Less Guesswork",
                description: "Everyone knows what comes next without another reminder thread.",
                icon: <FiZap size={26} />
            },
            {
                title: "Calmer Days",
                description: "Children get predictable expectations, and adults get fewer meltdowns.",
                icon: <FiSmile size={26} />
            }
        ],
        imageSrc: "/mocks/routines.webp"
    },
    {
        title: "Whole-Child Goals for ages 3-12+",
        description: "Set goals across social, emotional, character, life skills, learning, and health so the big stuff does not get lost.",
        bullets: [
            {
                title: "Small Actions",
                description: "Turn growth goals into simple steps your team can actually track.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Whole-Child Focus",
                description: "Support confidence, responsibility, learning habits, values, and wellness in one place.",
                icon: <FiHeart size={26} />
            }
        ],
        imageSrc: "/mocks/goals.webp"
    },
    {
        title: "Align on Rules Before Things Get Hard",
        description: "Document expectations, consequences, and teaching responses so every adult responds with the same plan.",
        bullets: [
            {
                title: "Plan Ahead",
                description: "Reduce yelling, confusion, and guilt by deciding the response before emotions take over.",
                icon: <FiShield size={26} />
            },
            {
                title: "Consistent Boundaries",
                description: "Children get the same guidance from parents, grandparents, nannies, and sitters.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/mocks/discipline.webp"
    },
    {
        title: "Invite Your Whole Parenting Team",
        description: "Bring parents, grandparents, nannies, and sitters into the loop with the right level of access.",
        bullets: [
            {
                title: "Custom Permissions",
                description: "Share routines and goals while keeping private details private.",
                icon: <FiUsers size={26} />
            },
            {
                title: "One Playbook",
                description: "Care stays consistent even when you are not the adult in the room.",
                icon: <FiSmile size={26} />
            }
        ],
        imageSrc: "/mocks/contact.webp"
    },
    {
        title: "Run the Family Schedule With Less Mental Load",
        description: "Track activities, appointments, routines, holidays, parenting time, and shared responsibilities in one place.",
        bullets: [
            {
                title: "Full Visibility",
                description: "Everyone can see what needs to happen, who owns it, and what changed.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Fewer Surprises",
                description: "Reduce missed plans, last-minute scrambles, and unclear handoffs.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/mocks/child.webp"
    },
    {
        title: "Support Co-Parenting With Clarity",
        description: "Keep schedules, expenses, and agreements child-focused instead of scattered across emotional message threads.",
        bullets: [
            {
                title: "Neutral Space",
                description: "Organize parenting time, expenses, and agreements in a clear shared place.",
                icon: <FiUsers size={26} />
            },
            {
                title: "More Stability",
                description: "Less conflict for adults, more consistency for kids.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/mocks/home.webp"
    },
    {
        title: "Document Important Parenting Moments",
        description: "Record behaviors, concerns, incidents, wins, and agreements to notice patterns and make better decisions.",
        bullets: [
            {
                title: "Clear Records",
                description: "Move from scattered memory to useful notes your team can reference.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Better Decisions",
                description: "Spot trends in your child's behavior, needs, and progress over time.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/mocks/mock1.png"
    },
    {
        title: "Track Child-Related Expenses Clearly",
        description: "Organize receipts, payment requests, reimbursements, approvals, and contributions without awkward follow-ups.",
        bullets: [
            {
                title: "Shared Visibility",
                description: "Couples and co-parents can see who paid, what is pending, and what is handled.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Less Money Stress",
                description: "Keep kid expenses transparent, organized, and easier to settle.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/mocks/finance.webp"
    }
];
