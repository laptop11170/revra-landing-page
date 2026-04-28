"use client";

import { METRICS } from '@/constants';
import { cn } from "@/lib";
import NumberFlow from '@number-flow/react';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import { Button } from './ui/button';
import SectionBadge from './ui/section-badge';

const PlatformMetrics = () => {
    return (
        <Wrapper className="py-24 lg:py-32">
            {/* Speed & Performance Banner */}
            <div className="text-center mb-16 relative">
                <div className="inline-flex items-center justify-center mb-6">
                    <span className="text-5xl md:text-6xl font-display font-bold text-secondary drop-shadow-[0_0_15px_rgba(93,230,255,0.5)]">3.0s</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4">
                    3 Seconds to Action.
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Built for speed. Engineered for intelligence. From incoming lead notification to AI-drafted response, the entire lifecycle is optimized to keep you moving forward.
                </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {METRICS.map((metric, index) => (
                    <AnimationContainer
                        key={index}
                        animation="fadeUp"
                        delay={0.5 + (index * 0.2)}
                    >
                        <div className="relative rounded-2xl bg-surface-container-lowest/60 backdrop-blur-xl border border-white/10 p-8 overflow-hidden group">
                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-primary/20 transition-all duration-500"></div>
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="text-5xl font-display font-bold text-secondary">
                                    <NumberFlow value={metric.number} />
                                    {metric.suffix && <span className="text-secondary">{metric.suffix}</span>}
                                </div>
                                <p className="text-base font-display font-medium text-on-surface">
                                    {metric.label}
                                </p>
                            </div>
                        </div>
                    </AnimationContainer>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <AnimationContainer animation="fadeUp" delay={1}>
                    <Button size="lg" className="bg-gradient-to-r from-inverse-primary to-surface-container text-white border-t border-white/20 hover:shadow-[0_0_40px_rgba(160,120,255,0.4)] transition-all duration-300 font-display">
                        Start Your Free Trial
                    </Button>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default PlatformMetrics;