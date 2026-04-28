"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from "./ui/section-badge";

const HIGHLIGHTS = [
    {
        icon: "1",
        label: "AI Lead Scoring"
    },
    {
        icon: "2",
        label: "Speed-to-Action"
    },
    {
        icon: "3",
        label: "Emma AI Voice Agent"
    }
];

const CTA = () => {
    return (
        <Wrapper className="py-32 lg:py-40 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,120,255,0.15)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="text-center relative z-10 max-w-2xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Get Started" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-6">
                        Join the future of sales intelligence.
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base lg:text-lg text-muted-foreground max-w-lg mx-auto">
                        Start your free trial today. No credit card required. Get full access to all features.
                    </p>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.5}>
                    <Link href="/signup" className="inline-block mt-8">
                        <Button size="lg" className="bg-gradient-to-r from-inverse-primary to-surface-container text-white border-t border-white/20 hover:shadow-[0_0_40px_rgba(160,120,255,0.4)] transition-all duration-300 transform hover:scale-105 font-display px-10 py-5">
                            Start Your Free Trial
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.6}>
                    <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
                        {HIGHLIGHTS.map((item, index) => (
                            <AnimationContainer
                                key={index}
                                animation="fadeRight"
                                delay={0.7 + (index * 0.1)}
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/10">
                                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-mono text-secondary font-bold">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-body text-muted-foreground">
                                        {item.label}
                                    </span>
                                </div>
                            </AnimationContainer>
                        ))}
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    )
};

export default CTA;