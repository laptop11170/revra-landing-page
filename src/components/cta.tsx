"use client";

import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from "./ui/section-badge";

const CTA = () => {
    return (
        <Wrapper className="py-32 lg:py-40 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,120,255,0.15)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="text-center relative z-10 max-w-2xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <div className="flex items-center justify-center mb-4">
                        <SectionBadge title="Get Started" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
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
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/10">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-mono text-secondary font-bold">1</div>
                            <span className="text-sm font-body text-muted-foreground">AI Lead Scoring</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/10">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-mono text-secondary font-bold">2</div>
                            <span className="text-sm font-body text-muted-foreground">Speed-to-Action</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/10">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-mono text-secondary font-bold">3</div>
                            <span className="text-sm font-body text-muted-foreground">Emma AI Voice Agent</span>
                        </div>
                        <div className="group relative px-4 py-2 rounded-full bg-surface-container border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full blur-sm"></div>
                                    <div className="absolute top-1/2 left-0 w-1 h-1 bg-secondary/60 rounded-full blur-sm"></div>
                                    <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full blur-sm"></div>
                                </div>
                            </div>
                            <div className="relative flex items-center gap-2 z-10">
                                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-mono text-secondary font-bold">4</div>
                                <span className="text-sm font-body text-muted-foreground">Unlimited Messaging</span>
                                <div className="flex items-center gap-1 ml-1 pl-2 border-l border-white/10">
                                    <span className="px-1.5 py-0.5 text-[10px] font-mono bg-green-500/10 text-green-500 rounded">SMS</span>
                                    <span className="px-1.5 py-0.5 text-[10px] font-mono bg-orange-500/10 text-orange-500 rounded">RCS</span>
                                    <span className="px-1.5 py-0.5 text-[10px] font-mono bg-green-500/10 text-green-500 rounded">iMessages</span>
                                    <span className="px-1.5 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-500 rounded">WhatsApp</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={1}>
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <a
                            href="https://cal.id/avi-javeri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-body text-muted-foreground hover:text-secondary transition-colors duration-200 border border-white/10 hover:border-secondary/30 rounded-full"
                        >
                            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/40 rounded-full blur-sm animate-pulse"></div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
                                    <div className="absolute top-1/2 right-0 w-1 h-1 bg-primary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="absolute top-1/2 left-0 w-1 h-1 bg-secondary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                                </div>
                            </div>
                            <span className="relative z-10">Connect with Founder</span>
                            <ExternalLinkIcon className="relative z-10 h-3.5 w-3.5" />
                        </a>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    )
};

export default CTA;