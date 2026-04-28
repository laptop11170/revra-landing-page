"use client";

import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from "./ui/section-badge";

const Hero = () => {
    return (
        <Wrapper className="pt-40 lg:pt-52 relative min-h-screen w-full h-full flex-1">
            {/* Background Grid & Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-start gap-8">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30">
                            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(93,230,255,0.5)] animate-pulse"></span>
                            <span className="text-[10px] font-mono text-secondary tracking-wider uppercase">System Online</span>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                            The <span className="text-gradient-primary">3-Second</span> Operating System for Your Sales Team
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                            AI-native CRM that automates lead management, unified communications, and daily briefings so you can close more deals with zero overhead.
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.8}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/signup">
                                <Button size="lg" className="bg-gradient-to-r from-inverse-primary to-surface-container text-white border-t border-white/20 hover:shadow-[0_0_30px_rgba(93,230,255,0.3)] transition-all duration-300 font-display px-8">
                                    Experience RevRa: Free Trial
                                </Button>
                            </Link>
                            <Link href="#how-it-works">
                                <Button size="lg" variant="secondary" className="font-display">
                                    See How It Works
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>
                </div>

                {/* Hero Visual: AI Dashboard */}
                <AnimationContainer animation="fadeRight" delay={0.4}>
                    <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl border border-outline-variant/30 bg-surface/60 backdrop-blur-xl p-6 shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>

                        {/* Top Bar */}
                        <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-destructive/50"></div>
                                <div className="w-3 h-3 rounded-full bg-muted/50"></div>
                                <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
                            </div>
                            <div className="font-mono text-[12px] text-muted-foreground">Processing incoming leads...</div>
                        </div>

                        {/* Main Dashboard Area */}
                        <div className="flex-1 grid grid-cols-2 gap-4 mt-4">
                            {/* Left Panel: Flow */}
                            <div className="flex flex-col gap-3">
                                <div className="bg-surface-container-high rounded-lg p-3 border border-outline-variant/20 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Incoming</span>
                                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
                                    </div>
                                    <div className="h-2 bg-surface-variant rounded w-3/4 mb-1"></div>
                                    <div className="h-2 bg-surface-variant rounded w-1/2"></div>
                                </div>
                                <div className="bg-surface-container-high rounded-lg p-3 border border-outline-variant/20 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 delay-150"></div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Message</span>
                                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    </div>
                                    <div className="h-2 bg-surface-variant rounded w-full mb-1"></div>
                                    <div className="h-2 bg-surface-variant rounded w-2/3"></div>
                                </div>
                                <div className="flex-1 border border-dashed border-outline-variant/30 rounded-lg flex items-center justify-center bg-surface-container-low/50">
                                    <span className="text-[10px] font-mono text-muted-foreground">+ 12 More</span>
                                </div>
                            </div>

                            {/* Right Panel: AI Processing */}
                            <div className="bg-surface-container-highest rounded-xl p-4 border border-outline-variant/20 flex flex-col justify-between relative shadow-[inset_0_0_20px_rgba(160,120,255,0.05)]">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                                        <span className="text-[10px] font-mono text-secondary uppercase tracking-wider">AI Insight</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center">
                                                <span className="font-mono text-[10px] text-on-surface">98</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2 bg-surface rounded w-full mb-1"></div>
                                                <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded w-[98%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center">
                                                <span className="font-mono text-[10px] text-on-surface">85</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2 bg-surface rounded w-full mb-1"></div>
                                                <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded w-[85%] opacity-70"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 p-2 bg-surface/50 rounded border border-outline-variant/30 text-center">
                                    <span className="font-mono text-[10px] text-primary">Generating drafted response...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    )
};

export default Hero;