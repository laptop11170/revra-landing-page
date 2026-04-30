"use client";

import { useTheme } from "@/context/theme-provider";
import { FEATURES } from '@/constants';
import { cn } from "@/lib";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const Features = () => {
    const { theme } = useTheme();

    return (
        <Wrapper className="py-24 lg:py-32" id="features">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="AI Core Features" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
                        Intelligence at every layer.
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        AI-native CRM built for high-velocity sales teams. From lead scoring to autonomous voice agents.
                    </p>
                </AnimationContainer>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Lead Intelligence - Large Card */}
                <AnimationContainer animation="fadeUp" delay={0.5} className="lg:col-span-8">
                    <div className={cn(
                        "rounded-2xl p-8 relative overflow-hidden group backdrop-blur-xl",
                        theme === "dark"
                            ? "bg-surface-container-lowest/60 border border-white/10"
                            : "bg-card/60 border border-border/40"
                    )}>
                        <div className={cn(
                            "absolute top-0 left-0 w-full h-[1px]",
                            theme === "dark"
                                ? "bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                : "bg-gradient-to-r from-transparent via-border/50 to-transparent"
                        )}></div>

                        {/* Animated background orbs */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[60px] group-hover:bg-secondary/20 transition-all duration-500"></div>
                        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-500"></div>

                        {/* Scanning line animation */}
                        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-[scan_2s_linear_infinite]"></div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded mb-4 relative">
                                    <div className="absolute -inset-px bg-secondary/5 rounded blur-sm"></div>
                                    <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    <span className="text-[12px] font-mono text-secondary">0-100 Scoring</span>
                                </div>
                                <h3 className="text-2xl lg:text-[28px] font-display font-semibold mb-4">
                                    Lead Intelligence
                                </h3>
                                <p className="text-base text-muted-foreground mb-6">
                                    Instantly process hundreds of data points to score leads with precision. Understand exact factor breakdowns before you ever make contact.
                                </p>

                                {/* Mini factor bars */}
                                <div className="space-y-3 mt-4">
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-24 h-1 rounded-full overflow-hidden",
                                            theme === "dark" ? "bg-surface-container" : "bg-muted"
                                        )}>
                                            <div className="h-full bg-gradient-to-r from-primary to-secondary animate-[fill_1.5s_ease-out_forwards]" style={{ width: '85%' }}></div>
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground">Income Analysis</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-24 h-1 rounded-full overflow-hidden",
                                            theme === "dark" ? "bg-surface-container" : "bg-muted"
                                        )}>
                                            <div className="h-full bg-gradient-to-r from-primary to-secondary animate-[fill_1.5s_ease-out_forwards]" style={{ width: '72%' }}></div>
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground">Health Metrics</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(
                                "w-full md:w-64 rounded-xl p-4 relative",
                                theme === "dark"
                                    ? "bg-surface-container border border-white/10"
                                    : "bg-muted border border-border/30"
                            )}>
                                {/* Static glowing indicator */}
                                <div className="absolute -right-2 -top-2">
                                    <div className="w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(93,230,255,0.5)]"></div>
                                </div>

                                {/* Circular progress indicator - static, no rotation */}
                                <div className="flex justify-center mb-4">
                                    <div className="relative w-24 h-24">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" className="text-surface-container" />
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#progressGradient)" strokeWidth="6" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="30" />
                                            <defs>
                                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="hsl(266, 100%, 74%)" />
                                                    <stop offset="100%" stopColor="hsl(187, 100%, 63%)" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-3xl font-display font-bold text-secondary">98</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-4">
                                    <div className="text-[12px] font-mono text-muted-foreground mt-1 uppercase tracking-wider">Conversion Probability</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-[12px] group/item">
                                        <span className="text-muted-foreground">Income Bracket</span>
                                        <span className="text-secondary font-mono group-hover/item:text-secondary/80 transition-colors">+12</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[12px] group/item">
                                        <span className="text-muted-foreground">Health History</span>
                                        <span className="text-secondary font-mono group-hover/item:text-secondary/80 transition-colors">+8</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[12px] group/item">
                                        <span className="text-muted-foreground">Engagement Rate</span>
                                        <span className="text-secondary font-mono group-hover/item:text-secondary/80 transition-colors">+15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                {/* Morning Briefing - Small Card */}
                <AnimationContainer animation="fadeUp" delay={0.6} className="lg:col-span-4">
                    <div className={cn(
                        "rounded-2xl p-8 relative overflow-hidden h-full group hover:border-primary/30 transition-all duration-500 backdrop-blur-xl",
                        theme === "dark"
                            ? "bg-surface-container-lowest/60 border border-white/10"
                            : "bg-card/60 border border-border/40"
                    )}>
                        {/* Static gradient orbs - no animation */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-secondary/10 rounded-full blur-[30px] group-hover:bg-secondary/20 transition-all duration-500"></div>

                        <div className="relative z-10">
                            <div className="mb-6">
                                <div className={cn(
                                    "w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(160,120,255,0.2)] group-hover:shadow-[0_0_30px_rgba(160,120,255,0.3)] transition-all",
                                    theme === "dark" ? "border border-primary/30" : "border border-primary/40"
                                )}>
                                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-display font-semibold mb-2">
                                    Morning Briefing
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Your automated daily briefing that reads itself to you while you commute.
                                </p>
                            </div>

                            {/* Audio player visualization */}
                            <div className={cn(
                                "border rounded-lg p-3 flex items-center gap-3 group/player",
                                theme === "dark"
                                    ? "bg-surface/50 border-white/10"
                                    : "bg-muted/50 border-border/30"
                            )}>
                                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-on-primary shadow-[0_0_15px_rgba(160,120,255,0.3)] group-hover/player:shadow-[0_0_25px_rgba(160,120,255,0.5)] transition-all">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                </button>
                                <div className="flex-1">
                                    <div className={cn(
                                        "h-1.5 rounded w-full overflow-hidden",
                                        theme === "dark" ? "bg-surface-variant" : "bg-accent"
                                    )}>
                                        <div className="h-full bg-gradient-to-r from-primary to-secondary w-1/3 rounded-full"></div>
                                    </div>
                                    {/* Sound wave bars */}
                                    <div className="flex items-center gap-0.5 mt-2 h-4">
                                        {[4,8,12,7,10,5,9,6].map((height, idx) => (
                                            <div key={idx} className="w-1 bg-primary/50 rounded-full animate-[wave_0.5s_ease-in-out_infinite]" style={{ animationDelay: `${idx * 0.1}s`, height: `${height}px` }}></div>
                                        ))}
                                    </div>
                                </div>
                                <span className="font-mono text-[10px] text-muted-foreground">01:24</span>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                {/* Emma AI - Full Width Card */}
                <AnimationContainer animation="fadeUp" delay={0.7} className="lg:col-span-12">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(160,120,255,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 30%, rgba(0,206,230,0.2) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(160,120,255,0.2) 0%, transparent 30%)' }}></div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                            <div className="w-full lg:w-auto flex justify-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                                        <circle cx="50" cy="50" r="48" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.3" />
                                        <circle cx="50" cy="50" r="40" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.5" />
                                        <circle cx="50" cy="50" r="32" stroke="url(#brainGradient2)" strokeWidth="1.5" opacity="0.7" />
                                        <circle cx="50" cy="20" r="4" fill="#a078ff" />
                                        <circle cx="80" cy="35" r="3" fill="#00cbe6" />
                                        <circle cx="80" cy="65" r="3" fill="#00cbe6" />
                                        <circle cx="50" cy="80" r="4" fill="#a078ff" />
                                        <circle cx="20" cy="65" r="3" fill="#00cbe6" />
                                        <circle cx="20" cy="35" r="3" fill="#00cbe6" />
                                        <circle cx="50" cy="50" r="6" fill="url(#brainGradient2)" />
                                        <line x1="50" y1="20" x2="50" y2="50" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.5" />
                                        <line x1="80" y1="35" x2="50" y2="50" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.5" />
                                        <line x1="80" y1="65" x2="50" y2="50" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.5" />
                                        <line x1="50" y1="80" x2="50" y2="50" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.5" />
                                        <line x1="20" y1="65" x2="50" y2="50" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.5" />
                                        <line x1="20" y1="35" x2="50" y2="50" stroke="url(#brainGradient2)" strokeWidth="1" opacity="0.5" />
                                        <line x1="50" y1="20" x2="80" y2="35" stroke="#a078ff" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
                                        <line x1="80" y1="35" x2="80" y2="65" stroke="#00cbe6" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
                                        <line x1="80" y1="65" x2="50" y2="80" stroke="#a078ff" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
                                        <line x1="50" y1="80" x2="20" y2="65" stroke="#00cbe6" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
                                        <line x1="20" y1="65" x2="20" y2="35" stroke="#a078ff" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
                                        <line x1="20" y1="35" x2="50" y2="20" stroke="#00cbe6" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
                                        <defs>
                                            <linearGradient id="brainGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#a078ff" />
                                                <stop offset="100%" stopColor="#00cbe6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_30px_rgba(160,120,255,0.4)]">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-4">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                    <span className="text-[12px] font-mono text-primary">Core AI Engine</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-display font-semibold mb-3">
                                    Emma AI Voice + Text
                                </h3>
                                <p className="text-sm lg:text-base text-muted-foreground max-w-2xl">
                                    The central intelligence powering your entire CRM. Emma processes natural language, generates responses, calls leads autonomously, and orchestrates all communication channels. This is the brain that makes everything work.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                {/* Communication Channels Section */}
                <AnimationContainer animation="fadeUp" delay={0.8} className="lg:col-span-12">
                    <div className="relative overflow-hidden">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-4">
                                Unified Communication Hub
                            </h3>
                            <p className="text-base text-muted-foreground max-w-xl mx-auto">
                                All your channels in one place. iMessages, SMS, RCS, WhatsApp, and Emma AI voice agent working together seamlessly.
                            </p>
                        </div>

                        {/* Messaging Channel cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* iMessage */}
                            <AnimationContainer animation="fadeUp" delay={0.9}>
                                <div className={cn(
                                    "group relative rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer backdrop-blur-xl",
                                    theme === "dark"
                                        ? "bg-surface-container-lowest/40 border border-white/10 hover:border-green-500/50 hover:bg-surface-container-lowest/60"
                                        : "bg-card/40 border border-border/40 hover:border-green-500/50 hover:bg-card/60"
                                )}>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden",
                                            theme === "dark" ? "bg-surface-container" : "bg-muted"
                                        )}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg" alt="iMessage" className="w-10 h-10 object-contain" />
                                        </div>
                                        <span className="text-sm font-display font-medium text-center">iMessages</span>
                                        <div className="flex items-center gap-1 mt-1 justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground">Connected</span>
                                        </div>
                                        <div className="flex items-center justify-center mt-2">
                                            <span className="px-2 py-0.5 text-[10px] font-mono bg-green-500/10 text-green-500 rounded-full">Unlimited</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimationContainer>

                            {/* SMS */}
                            <AnimationContainer animation="fadeUp" delay={1}>
                                <div className={cn(
                                    "group relative rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer backdrop-blur-xl",
                                    theme === "dark"
                                        ? "bg-surface-container-lowest/40 border border-white/10 hover:border-blue-500/50 hover:bg-surface-container-lowest/60"
                                        : "bg-card/40 border border-border/40 hover:border-blue-500/50 hover:bg-card/60"
                                )}>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300",
                                            theme === "dark" ? "bg-surface-container" : "bg-muted"
                                        )}>
                                            <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-display font-medium text-center">SMS</span>
                                        <div className="flex items-center gap-1 mt-1 justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground">Connected</span>
                                        </div>
                                        <div className="flex items-center justify-center mt-2">
                                            <span className="px-2 py-0.5 text-[10px] font-mono bg-blue-500/10 text-blue-500 rounded-full">Unlimited</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimationContainer>

                            {/* RCS */}
                            <AnimationContainer animation="fadeUp" delay={1.1}>
                                <div className={cn(
                                    "group relative rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer backdrop-blur-xl",
                                    theme === "dark"
                                        ? "bg-surface-container-lowest/40 border border-white/10 hover:border-orange-500/50 hover:bg-surface-container-lowest/60"
                                        : "bg-card/40 border border-border/40 hover:border-orange-500/50 hover:bg-card/60"
                                )}>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300",
                                            theme === "dark" ? "bg-surface-container" : "bg-muted"
                                        )}>
                                            <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-display font-medium text-center">RCS</span>
                                        <div className="flex items-center gap-1 mt-1 justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground">Connected</span>
                                        </div>
                                        <div className="flex items-center justify-center mt-2">
                                            <span className="px-2 py-0.5 text-[10px] font-mono bg-orange-500/10 text-orange-500 rounded-full">Unlimited</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimationContainer>

                            {/* WhatsApp */}
                            <AnimationContainer animation="fadeUp" delay={1.2}>
                                <div className={cn(
                                    "group relative rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer backdrop-blur-xl",
                                    theme === "dark"
                                        ? "bg-surface-container-lowest/40 border border-white/10 hover:border-emerald-500/50 hover:bg-surface-container-lowest/60"
                                        : "bg-card/40 border border-border/40 hover:border-emerald-500/50 hover:bg-card/60"
                                )}>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300",
                                            theme === "dark" ? "bg-surface-container" : "bg-muted"
                                        )}>
                                            <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-display font-medium text-center">WhatsApp</span>
                                        <div className="flex items-center gap-1 mt-1 justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground">Connected</span>
                                        </div>
                                        <div className="flex items-center justify-center mt-2">
                                            <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-500 rounded-full">Unlimited</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimationContainer>
                        </div>

                        {/* AI Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <AnimationContainer animation="fadeUp" delay={1.3}>
                                <div className={cn(
                                    "group relative rounded-2xl p-8 flex flex-row items-center justify-center gap-6 transition-all duration-500 cursor-pointer backdrop-blur-xl",
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 hover:border-secondary/50 hover:from-primary/20 hover:to-secondary/20"
                                        : "bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 hover:border-secondary/50 hover:from-primary/20 hover:to-secondary/20"
                                )}>
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(160,120,255,0.4)]">
                                            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative z-10 text-center md:text-left">
                                        <span className="text-xl font-display font-semibold text-center">Emma AI</span>
                                        <div className="flex items-center gap-1 mt-2 justify-center md:justify-start">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                            <span className="text-xs font-mono text-primary ml-1">Brain</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimationContainer>

                            <AnimationContainer animation="fadeUp" delay={1.4}>
                                <div className={cn(
                                    "group relative rounded-2xl p-8 flex flex-row items-center justify-center gap-6 transition-all duration-500 cursor-pointer backdrop-blur-xl",
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/30 hover:border-primary/50 hover:from-secondary/20 hover:to-primary/20"
                                        : "bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/30 hover:border-primary/50 hover:from-secondary/20 hover:to-primary/20"
                                )}>
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/30 border border-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(0,203,230,0.4)]">
                                            <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative z-10 text-center md:text-left">
                                        <span className="text-xl font-display font-semibold text-center">RevRa AI</span>
                                        <div className="flex items-center gap-1 mt-2 justify-center md:justify-start">
                                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                            <span className="text-xs font-mono text-secondary ml-1">Agentic</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimationContainer>
                        </div>

                        {/* Bottom status bar */}
                        <AnimationContainer animation="fadeUp" delay={1.5}>
                            <div className={cn(
                                "mt-8 rounded-xl p-4 flex items-center justify-between backdrop-blur-xl",
                                theme === "dark"
                                    ? "bg-surface-container-lowest/40 border border-white/10"
                                    : "bg-card/40 border border-border/40"
                            )}>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        <div className={cn(
                                            "w-8 h-8 rounded-full bg-primary/20 border-2 flex items-center justify-center",
                                            theme === "dark" ? "border-surface-container-lowest" : "border-card"
                                        )}>
                                            <span className="text-[10px] font-mono text-primary">SMS</span>
                                        </div>
                                        <div className={cn(
                                            "w-8 h-8 rounded-full bg-secondary/20 border-2 flex items-center justify-center",
                                            theme === "dark" ? "border-surface-container-lowest" : "border-card"
                                        )}>
                                            <span className="text-[10px] font-mono text-secondary">AI</span>
                                        </div>
                                        <div className={cn(
                                            "w-8 h-8 rounded-full bg-emerald-500/20 border-2 flex items-center justify-center",
                                            theme === "dark" ? "border-surface-container-lowest" : "border-card"
                                        )}>
                                            <span className="text-[10px] font-mono text-emerald-500">WA</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-mono text-muted-foreground">3 channels synced</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-xs font-mono text-emerald-500">All systems operational</span>
                                </div>
                            </div>
                        </AnimationContainer>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default Features;