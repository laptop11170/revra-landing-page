export type PlanFeature = {
    text: string;
    included: boolean;
};

export type Plan = {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Starter",
        description: "For independent Medicare agents starting out",
        price: {
            monthly: 250,
            yearly: 2500,
        },
        features: [
            { text: "10 leads per week", included: true },
            { text: "1 Agent seat", included: true },
            { text: "AI Lead Scoring", included: true },
            { text: "SMS & Call Dialer", included: true },
            { text: "Morning Briefing", included: true },
            { text: "Basic Pipeline (11 stages)", included: true },
            { text: "Meta Ads Integration", included: false },
            { text: "Emma AI Voice Agent", included: false },
            { text: "Workflow Automation", included: false },
        ],
    },
    {
        name: "Growth",
        description: "For growing agencies with multiple agents",
        price: {
            monthly: 450,
            yearly: 4500,
        },
        popular: true,
        features: [
            { text: "20 leads per week", included: true },
            { text: "3 Agent seats", included: true },
            { text: "AI Lead Scoring", included: true },
            { text: "SMS & Call Dialer", included: true },
            { text: "Morning Briefing", included: true },
            { text: "Full Pipeline (11 stages)", included: true },
            { text: "Meta Ads Integration", included: true },
            { text: "Emma AI Voice Agent", included: false },
            { text: "Workflow Automation", included: true },
        ],
    },
    {
        name: "Scale",
        description: "For established agencies scaling operations",
        price: {
            monthly: 799,
            yearly: 7990,
        },
        features: [
            { text: "40 leads per week", included: true },
            { text: "10 Agent seats", included: true },
            { text: "AI Lead Scoring", included: true },
            { text: "SMS & Call Dialer", included: true },
            { text: "Morning Briefing + Audio", included: true },
            { text: "Full Pipeline (11 stages)", included: true },
            { text: "Meta Ads Integration", included: true },
            { text: "Emma AI Voice Agent", included: true },
            { text: "Workflow Automation", included: true },
        ],
    },
];
