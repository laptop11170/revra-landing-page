"use client";

import { useTheme } from "@/context/theme-provider";
import { cn } from "@/lib";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const AIEverywhereCard = () => {
    const { theme } = useTheme();
    return (
        <div className={cn(
            "flex flex-col items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 group relative overflow-hidden",
            theme === "dark"
                ? "bg-surface-container-lowest/40 border-white/10 hover:border-primary/30"
                : "bg-card/40 border-border/40 hover:border-primary/40"
        )}>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>

            <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(160,120,255,0.3)] transition-all duration-300 relative">
                    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col gap-3 relative z-10 w-full">
                <h3 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">
                    AI Everywhere
                </h3>
                <p className="text-sm text-muted-foreground">
                    AI drafts your SMS, briefs you before calls, summarizes after, and generates your morning briefing, woven into every workflow.
                </p>

                <div className="mt-2">
                    <div className={cn(
                        "rounded-lg border overflow-hidden",
                        theme === "dark"
                            ? "bg-surface/80 border-white/10"
                            : "bg-muted/80 border-border/30"
                    )}>
                        <div className={cn(
                            "flex items-center gap-1.5 px-3 py-2 border-b",
                            theme === "dark"
                                ? "bg-surface-container border-b-white/5"
                                : "bg-muted border-b-border/20"
                        )}>
                            <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                            <span className="text-[10px] font-mono text-muted-foreground ml-2">revra-ai ~ terminal</span>
                        </div>
                        <div className="p-3 font-mono text-[10px] space-y-1.5">
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">AI</span>
                                <span className="text-muted-foreground">Drafting SMS response to Michael...</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-primary">AI</span>
                                <span className="text-muted-foreground">Generating pre-call brief for Sarah</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">AI</span>
                                <span className="text-muted-foreground">Morning briefing: 12 leads updated</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-primary animate-pulse">AI</span>
                                <span className="text-green-500">Call summary complete for David</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AllInOneCard = () => {
    const { theme } = useTheme();
    const tools = [
        { name: 'Dialer', icon: '📞', status: 'active' },
        { name: 'SMS', icon: '💬', status: 'active' },
        { name: 'Email', icon: '✉️', status: 'idle' },
        { name: 'Pipeline', icon: '📊', status: 'active' },
        { name: 'Calendar', icon: '📅', status: 'idle' },
        { name: 'AI', icon: '🤖', status: 'active' },
    ];

    return (
        <div className={cn(
            "flex flex-col items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 group relative overflow-hidden",
            theme === "dark"
                ? "bg-surface-container-lowest/40 border-white/10 hover:border-secondary/30"
                : "bg-card/40 border-border/40 hover:border-secondary/40"
        )}>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500"></div>

            <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-secondary group-hover:shadow-[0_0_20px_rgba(93,230,255,0.3)] transition-all duration-300">
                    <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col gap-3 relative z-10 w-full">
                <h3 className="text-lg font-display font-semibold group-hover:text-secondary transition-colors">
                    All-in-One Workspace
                </h3>
                <p className="text-sm text-muted-foreground">
                    Dialer, SMS, email, pipeline, calendar, and AI unified in a single platform. No more juggling five different tools.
                </p>

                <div className="mt-2">
                    <div className={cn(
                        "relative rounded-lg border p-3 overflow-hidden",
                        theme === "dark"
                            ? "bg-surface/50 border-white/10"
                            : "bg-muted/50 border-border/30"
                    )}>
                        <div className={cn(
                            "flex items-center justify-between mb-2 pb-2 border-b",
                            theme === "dark" ? "border-white/5" : "border-border/20"
                        )}>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[9px] font-mono text-green-500">SYSTEM ONLINE</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="text-[8px] font-mono text-muted-foreground">6 modules</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-1">
                            {tools.map((tool, i) => (
                                <div key={i} className="relative group/tooltip">
                                    <div className={cn(
                                        "flex flex-col items-center justify-center p-1.5 rounded-md border transition-all duration-300",
                                        theme === "dark"
                                            ? "bg-surface-container/50"
                                            : "bg-muted/50",
                                        tool.status === 'active'
                                            ? "border-green-500/30 hover:border-green-500/60 hover:bg-green-500/10"
                                            : "border-black/10 hover:border-black/30 hover:bg-black/5"
                                    )}>
                                        <span className="text-xs">{tool.icon}</span>
                                        <div className={cn(
                                            "w-1 h-1 rounded-full mt-0.5",
                                            tool.status === 'active' ? "bg-green-500" : "bg-black/30"
                                        )} />
                                    </div>

                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-1.5 py-0.5 rounded text-[8px] font-mono text-muted-foreground whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-10">
                                        {tool.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={cn(
                            "mt-2 pt-2 border-t flex items-center justify-between",
                            theme === "dark" ? "border-white/5" : "border-border/20"
                        )}>
                            <div className="flex items-center gap-2">
                                <div className={cn(
                                    "h-1 w-16 rounded-full overflow-hidden",
                                    theme === "dark" ? "bg-surface-container" : "bg-muted"
                                )}>
                                    <div className="h-full bg-gradient-to-r from-secondary to-primary animate-pulse" style={{ width: '75%' }} />
                                </div>
                                <span className="text-[8px] font-mono text-muted-foreground">75%</span>
                            </div>
                            <span className="text-[8px] font-mono text-secondary">UNIFIED</span>
                        </div>

                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const EmmaVoiceCard = () => {
    const { theme } = useTheme();
    return (
        <div className={cn(
            "flex flex-col items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 group relative overflow-hidden",
            theme === "dark"
                ? "bg-surface-container-lowest/40 border-white/10 hover:border-primary/30"
                : "bg-card/40 border-border/40 hover:border-primary/40"
        )}>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>

            <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(160,120,255,0.3)] transition-all duration-300">
                    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col gap-3 relative z-10 w-full">
                <h3 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">
                    Emma AI Voice Agent
                </h3>
                <p className="text-sm text-muted-foreground">
                    Let AI autonomously call your leads after hours, have natural conversations, and book appointments, all logged back into RevRa.
                </p>

                <div className="mt-2">
                    <div className={cn(
                        "rounded-lg border overflow-hidden",
                        theme === "dark"
                            ? "bg-surface/80 border-white/10"
                            : "bg-muted/80 border-border/30"
                    )}>
                        <div className="flex items-center justify-between px-3 py-2 bg-green-500/10 border-b border-green-500/20">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-mono text-green-500">Call in Progress</span>
                            </div>
                            <span className="text-[10px] font-mono text-muted-foreground">02:34</span>
                        </div>
                        <div className="h-12 flex items-center justify-center gap-0.5 px-4">
                            {[8, 14, 11, 20, 16, 10, 18, 12, 22, 16, 14, 20, 18, 12, 16, 24, 10, 14, 18, 12, 16, 14, 10, 20].map((height, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "w-1 rounded-full transition-all",
                                        i % 2 === 0 ? "bg-primary/60" : "bg-secondary/60",
                                        i > 8 && i < 16 && "animate-pulse"
                                    )}
                                    style={{
                                        height: `${height}px`,
                                        animationDelay: `${i * 50}ms`
                                    }}
                                />
                            ))}
                        </div>
                        <div className="px-3 py-2 border-t border-white/5 space-y-1">
                            <div className="flex items-start gap-2">
                                <span className="text-[9px] font-mono text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">Emma</span>
                                <span className="text-[10px] text-muted-foreground">Hi, I&apos;m calling from... are you still interested?</span>
                            </div>
                            <div className="flex items-start gap-2 justify-end">
                                <span className="text-[10px] text-muted-foreground text-right">Yes, when can we meet?</span>
                                <span className="text-[9px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">Lead</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CollaborativeCard = () => {
    const { theme } = useTheme();
    const agents = [
        { initials: 'JD', name: 'James D.', status: 'active', action: 'Shared lead context' },
        { initials: 'SK', name: 'Sarah K.', status: 'active', action: 'Viewing pipeline' },
        { initials: 'MR', name: 'Mike R.', status: 'idle', action: 'On standby' },
    ];

    return (
        <div className={cn(
            "flex flex-col items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 group relative overflow-hidden",
            theme === "dark"
                ? "bg-surface-container-lowest/40 border-white/10 hover:border-secondary/30"
                : "bg-card/40 border-border/40 hover:border-secondary/40"
        )}>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500"></div>

            <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-secondary group-hover:shadow-[0_0_20px_rgba(93,230,255,0.3)] transition-all duration-300">
                    <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col gap-3 relative z-10 w-full">
                <h3 className="text-lg font-display font-semibold group-hover:text-secondary transition-colors">
                    Collaborative Independence
                </h3>
                <p className="text-sm text-muted-foreground">
                    Agents work solo but can instantly share lead context with teammates. Admins get full oversight without being intrusive.
                </p>

                <div className="mt-2">
                    <div className={cn(
                        "rounded-lg border overflow-hidden",
                        theme === "dark"
                            ? "bg-surface/80 border-white/10"
                            : "bg-muted/80 border-border/30"
                    )}>
                        <div className={cn(
                            "flex items-center justify-between px-3 py-2 border-b",
                            theme === "dark"
                                ? "bg-surface-container border-b-white/5"
                                : "bg-muted border-b-border/20"
                        )}>
                            <span className="text-[10px] font-mono text-muted-foreground">Team Activity</span>
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                <span className="text-[9px] font-mono text-green-500">10 online</span>
                            </div>
                        </div>
                        <div className="p-2 space-y-2">
                            {agents.map((agent, i) => (
                                <div key={i} className={cn(
                                    "flex items-center gap-2 p-2 rounded-lg",
                                    theme === "dark" ? "bg-surface-container/50" : "bg-muted/50"
                                )}>
                                    <div className={cn(
                                        "w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-mono",
                                        agent.status === 'active' ? "bg-primary/20 text-primary" : "bg-black/10 text-muted-foreground"
                                    )}>
                                        {agent.initials}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-medium truncate">{agent.name}</div>
                                        <div className="text-[9px] text-muted-foreground truncate">{agent.action}</div>
                                    </div>
                                    <div className={cn(
                                        "w-1.5 h-1.5 rounded-full",
                                        agent.status === 'active' ? "bg-green-500" : "bg-black/30"
                                    )} />
                                </div>
                            ))}
                        </div>
                        <div className={cn(
                            "px-3 py-2 border-t",
                            theme === "dark"
                                ? "border-t-white/5 bg-surface-container/30"
                                : "border-t-border/20 bg-muted/30"
                        )}>
                            <div className="flex items-center gap-2 text-[9px] font-mono text-muted-foreground">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>Admin view: Full pipeline visibility</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <AIEverywhereCard />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <AllInOneCard />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <EmmaVoiceCard />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <CollaborativeCard />
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    );
};

export default Perks;