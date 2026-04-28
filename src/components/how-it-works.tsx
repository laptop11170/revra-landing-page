"use client";

import { HOW_IT_WORKS } from "@/constants";
import { cn } from "@/lib";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";

const HowItWorksCard = ({ item, index }: { item: typeof HOW_IT_WORKS[0]; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="flex flex-col items-start gap-6 bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 hover:bg-surface-container-lowest/60 transition-all duration-500">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="flex items-center gap-x-4 relative z-10 w-full">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(160,120,255,0.3)] group-hover:shadow-[0_0_30px_rgba(160,120,255,0.5)] transition-all duration-500 flex-shrink-0">
                    <span className="text-lg font-display font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-lg font-display font-semibold">
                    {item.title}
                </h3>
            </div>

            {/* Step 1: Leads visualization */}
            {index === 0 && (
                <div className="relative z-10 w-full space-y-2">
                    {/* Lead cards */}
                    <div className="flex items-center gap-2 p-2 bg-surface-container rounded-lg border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-mono text-secondary">98</div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-medium truncate">Michael Rodriguez</div>
                            <div className="h-1 bg-surface rounded-full overflow-hidden">
                                <div className="h-full bg-secondary w-[98%]" style={{ width: '98%' }}></div>
                            </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-surface-container rounded-lg border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-mono text-primary">72</div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-medium truncate">Sarah Johnson</div>
                            <div className="h-1 bg-surface rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[72%]" style={{ width: '72%' }}></div>
                            </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-surface-container rounded-lg border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-mono text-orange-500">35</div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-medium truncate">David Kim</div>
                            <div className="h-1 bg-surface rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[35%]" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 2: AI Brief visualization */}
            {index === 1 && (
                <div className="relative z-10 w-full space-y-2">
                    <div className="p-3 bg-surface-container rounded-lg border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <span className="text-xs font-mono text-primary">Pre-Call Brief</span>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                <div className="w-1 h-1 rounded-full bg-secondary"></div>
                                Interested in Medicare Advantage
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                <div className="w-1 h-1 rounded-full bg-secondary"></div>
                                Budget: $200-400/month
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                <div className="w-1 h-1 rounded-full bg-secondary"></div>
                                Previous coverage: None
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Pipeline visualization */}
            {index === 2 && (
                <div className="relative z-10 w-full">
                    <div className="flex items-end justify-between gap-1">
                        {['New', 'Contact', 'Qualify', 'Demo', 'Proposal', 'Negot'].map((stage, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                <div className={cn(
                                    "w-full rounded-t-lg transition-all duration-500",
                                    i === 0 ? "bg-green-500/80 h-12" :
                                    i === 1 ? "bg-green-500/60 h-10" :
                                    i === 2 ? "bg-secondary/60 h-8" :
                                    i === 3 ? "bg-primary/60 h-6" :
                                    i === 4 ? "bg-primary/40 h-4" :
                                    "bg-white/10 h-2"
                                )}></div>
                                <span className="text-[8px] font-mono text-muted-foreground">{stage}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Description */}
            <p className="text-sm text-muted-foreground relative z-10">
                {item.description}
            </p>
        </div>
    );
};

const HowItWorks = () => {
    return (
        <Wrapper className="py-24 lg:py-32 relative" id="how-it-works">
            <div className="flex flex-col items-center text-center gap-4 py-8 w-full">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="How It Works" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
                        From lead to close in three steps
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
                        AI-native CRM handles the entire sales lifecycle from the moment a lead enters to the deal closed.
                    </p>
                </AnimationContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10">
                {HOW_IT_WORKS.map((item, index) => (
                    <AnimationContainer
                        key={index}
                        animation="fadeUp"
                        delay={0.5 + (index * 0.2)}
                    >
                        <HowItWorksCard item={item} index={index} />
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    )
};

export default HowItWorks;