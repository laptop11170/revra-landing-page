"use client";

import { useState, useEffect } from "react";
import { cn } from '@/lib';
import { Check } from 'lucide-react';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from './ui/section-badge';

const PRICING_MONTHLY = 185;
const PRICING_ANNUAL = 165;

const AnimatedNumber = ({ value, isYearly }: { value: number; isYearly: boolean }) => {
    const [displayValue, setDisplayValue] = useState(PRICING_MONTHLY);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const targetValue = isYearly ? PRICING_ANNUAL : PRICING_MONTHLY;
        if (displayValue === targetValue) return;

        setIsAnimating(true);
        const duration = 500;
        const steps = 25;
        const stepDuration = duration / steps;
        const startValue = displayValue;
        const diff = targetValue - startValue;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setDisplayValue(targetValue);
                setIsAnimating(false);
                clearInterval(interval);
            } else {
                const progress = currentStep / steps;
                const eased = 1 - Math.pow(1 - progress, 3);
                const newValue = Math.round(startValue + diff * eased);
                setDisplayValue(newValue);
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, [isYearly]);

    return (
        <span
            className={cn(
                "inline-block text-6xl font-display font-bold transition-transform duration-150",
                isAnimating && "scale-110"
            )}
            style={{
                background: 'linear-gradient(to right, #a078ff, #00cbe6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}
        >
            {displayValue}
        </span>
    );
};

const PRICING_FEATURES = [
    "Unlimited leads per week",
    "AI Lead Scoring with real-time updates",
    "SMS",
    "Calls",
    "iMessage",
    "RCS",
    "WhatsApp",
    "Emma AI Voice",
    "Emma AI Text",
    "RevRa AI",
    "Morning Briefing",
    "Full 11-Stage Pipeline Management",
    "Meta Ads Integration",
    "Workflow Automation",
    "CSV Import with AI column mapping",
    "Priority support & onboarding",
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <Wrapper className="py-24 lg:py-32" id="pricing">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Pricing" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
                        One plan, everything included
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        No tiers, no limits. Get full access to all features with a single subscription.
                    </p>
                </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="flex items-center justify-center gap-4 pt-10">
                    <button
                        onClick={() => setIsYearly(false)}
                        className={cn(
                            "text-sm font-display font-medium transition-colors",
                            !isYearly ? "text-on-surface" : "text-muted-foreground"
                        )}
                    >
                        Monthly
                    </button>
                    <div
                        onClick={() => setIsYearly(!isYearly)}
                        className="h-6 w-11 rounded-full bg-surface-container p-1 cursor-pointer transition-colors duration-300 border border-white/10"
                    >
                        <div
                            className={cn(
                                "h-4 w-4 rounded-full bg-gradient-to-br from-primary to-secondary transition-transform duration-300",
                                isYearly && "translate-x-5"
                            )}
                        />
                    </div>
                    <button
                        onClick={() => setIsYearly(true)}
                        className={cn(
                            "text-sm font-display font-medium transition-colors",
                            isYearly ? "text-on-surface" : "text-muted-foreground"
                        )}
                    >
                        Yearly <span className="text-xs text-secondary ml-1">Save 11%</span>
                    </button>
                </div>
            </AnimationContainer>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto pt-10">
                {/* Main Plan Card */}
                <AnimationContainer animation="fadeUp" delay={0.6}>
                    <div className="relative rounded-2xl backdrop-blur-xl border border-primary/30 bg-surface-container-lowest/80 p-8 overflow-hidden h-full">
                        {/* Glow effect */}
                        <div className="absolute inset-x-0 mx-auto -top-8 w-64 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
                        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                        <div className="relative z-10">
                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-display font-semibold mb-2">Complete Access</h3>
                                <p className="text-sm text-muted-foreground">Everything you need to dominate your market</p>
                            </div>

                            <div className="flex items-baseline justify-center gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-on-surface">$</span>
                                <span className="text-6xl font-display font-bold text-gradient-primary">
                                    <AnimatedNumber value={isYearly ? PRICING_ANNUAL : PRICING_MONTHLY} isYearly={isYearly} />
                                </span>
                                <span className="text-sm text-muted-foreground">/month</span>
                            </div>
                            <p className="text-center text-xs text-muted-foreground mb-6 font-mono">
                                {isYearly
                                    ? `Billed $1,980/year (save $220)`
                                    : `Billed monthly`}
                            </p>

                            <div className="mb-6">
                                <ul className="grid grid-cols-1 gap-2">
                                    {PRICING_FEATURES.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-on-surface">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-center">
                                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary shadow-[0_0_20px_rgba(160,120,255,0.3)] font-display px-8">
                                    Start Free Trial
                                </Button>
                                <p className="text-xs text-muted-foreground mt-2">7-day free trial</p>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                {/* Custom Solution Card */}
                <AnimationContainer animation="fadeUp" delay={0.7}>
                    <div className="relative rounded-2xl border border-outline-variant/30 bg-surface-container-lowest/50 p-8 overflow-hidden h-full flex flex-col">
                        <div className="text-center mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-display font-semibold mb-2">Enterprise Solutions</h3>
                            <p className="text-sm text-muted-foreground">Need a custom solution for your agency?</p>
                        </div>

                        <div className="flex-1">
                            <ul className="grid grid-cols-1 gap-2 mb-6">
                                <li className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Everything in Complete Access</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Custom number of seats</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Dedicated account manager</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Custom integrations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Priority phone support</span>
                                </li>
                            </ul>

                            <div className="bg-surface-container rounded-lg p-3 mb-4">
                                <label className="text-xs text-muted-foreground block mb-1">Select team size</label>
                                <select className="w-full bg-surface border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary/50">
                                    <option>5-10 seats</option>
                                    <option>11-25 seats</option>
                                    <option>26-50 seats</option>
                                    <option>50+ seats</option>
                                </select>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button variant="outline" className="w-full font-display">
                                Talk to Sales
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default Pricing;