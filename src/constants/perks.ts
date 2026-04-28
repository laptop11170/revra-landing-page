export interface PerkItem {
    title: string;
    description: string;
    icon: string;
}

export const PERKS: PerkItem[] = [
    {
        title: "AI Everywhere",
        description: "AI drafts your SMS, briefs you before calls, summarizes after, and generates your morning briefing, woven into every workflow.",
        icon: "/icons/perk-one.svg"
    },
    {
        title: "All-in-One Workspace",
        description: "Dialer, SMS, email, pipeline, calendar, and AI unified in a single platform. No more juggling five different tools.",
        icon: "/icons/perk-two.svg"
    },
    {
        title: "Emma AI Voice Agent",
        description: "Let AI autonomously call your leads after hours, have natural conversations, and book appointments, all logged back into RevRa.",
        icon: "/icons/perk-three.svg"
    },
    {
        title: "Collaborative Independence",
        description: "Agents work solo but can instantly share lead context with teammates. Admins get full oversight without being intrusive.",
        icon: "/icons/perk-four.svg"
    }
];
