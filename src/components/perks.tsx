"use client";

import { PERKS } from '@/constants';
import { cn } from "@/lib";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const Perks = () => {
    return (
        <Wrapper className="py-24 lg:py-32 relative">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Why RevRa" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
                        Built for how teams actually work
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Three foundational principles that drive every feature we build.
                    </p>
                </AnimationContainer>
            </div>

            <div className="relative pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PERKS.map((perk, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.3 * (index + 1)}
                        >
                            <div className="flex flex-col items-start gap-6 p-6 rounded-2xl bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(160,120,255,0.3)] transition-all duration-300">
                                        <span className="text-2xl font-display font-bold">{index + 1}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-lg font-display font-semibold">
                                        {perk.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Perks;