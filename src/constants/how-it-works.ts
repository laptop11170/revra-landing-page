export interface HowItWorksItem {
    title: string;
    description: string;
    image: string;
}

export const HOW_IT_WORKS: HowItWorksItem[] = [
    {
        title: "Leads Arrive Automatically",
        description: "Leads pour in from Facebook Ads, manual entry, or CSV import. Our AI scores every lead instantly and routes it to the right agent via round-robin distribution.",
        image: "/images/hiw-one.svg"
    },
    {
        title: "AI Arms You Before Every Call",
        description: "Before dialing, get an AI pre-call brief: talking points, anticipated objections, key questions, and coverage recommendations — all generated in seconds.",
        image: "/images/hiw-two.svg"
    },
    {
        title: "Close More Policies",
        description: "Move leads through the 11-stage pipeline with AI-assisted follow-ups, auto-SMS sequences, and Emma AI voice agent for after-hours outreach.",
        image: "/images/hiw-three.svg"
    }
];
