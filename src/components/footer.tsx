"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";

const PRODUCT_LINKS = [
    { label: "AI Lead Scoring", href: "#features" },
    { label: "Morning Briefing", href: "#features" },
    { label: "Pipeline Manager", href: "#how-it-works" },
    { label: "Emma AI Voice Agent", href: "#features" },
];

const RESOURCES_LINKS = [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Status Page", href: "#" },
];

const COMPANY_LINKS = [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
];

const SOCIAL_LINKS = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 bg-[#050505] pt-16 pb-8 w-full overflow-hidden">
            <Wrapper className="">
                <div className="grid gap-12 xl:grid-cols-3 xl:gap-8">
                    <AnimationContainer animation="fadeRight" delay={0.4}>
                        <div className="flex flex-col items-start justify-start md:max-w-[300px]">
                            <Link href="/" className="flex items-center gap-2">
                                <span className="text-2xl font-bold tracking-tighter text-white font-display drop-shadow-[0_0_8px_rgba(160,120,255,0.5)]">
                                    RevRa
                                </span>
                            </Link>
                            <p className="text-muted-foreground mt-4 text-sm font-body">
                                AI-native CRM built for high-velocity sales teams. Engineered for intelligence.
                            </p>
                            <div className="mt-4 text-sm text-muted-foreground font-mono">
                                <p>support@revra.io</p>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <AnimationContainer
                                        key={index}
                                        animation="fadeUp"
                                        delay={0.6 + (index * 0.1)}
                                    >
                                        <Link
                                            href={social.href}
                                            className="text-slate-500 hover:text-secondary transition-colors duration-200"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    </AnimationContainer>
                                ))}
                            </div>
                        </div>
                    </AnimationContainer>

                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <AnimationContainer animation="fadeUp" delay={0.5}>
                                <div>
                                    <h3 className="text-base font-display font-semibold">Product</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                        {PRODUCT_LINKS.map((link, index) => (
                                            <AnimationContainer
                                                key={index}
                                                animation="fadeLeft"
                                                delay={0.6 + (index * 0.1)}
                                            >
                                                <li>
                                                    <Link
                                                        href={link.href}
                                                        className="hover:text-secondary transition-colors duration-200"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            </AnimationContainer>
                                        ))}
                                    </ul>
                                </div>
                            </AnimationContainer>

                            <AnimationContainer animation="fadeUp" delay={0.5}>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-base font-display font-semibold">Resources</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                        {RESOURCES_LINKS.map((link, index) => (
                                            <AnimationContainer
                                                key={index}
                                                animation="fadeLeft"
                                                delay={0.7 + (index * 0.1)}
                                            >
                                                <li>
                                                    <Link
                                                        href={link.href}
                                                        className="hover:text-secondary transition-colors duration-200"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            </AnimationContainer>
                                        ))}
                                    </ul>
                                </div>
                            </AnimationContainer>
                        </div>

                        <AnimationContainer animation="fadeUp" delay={0.5}>
                            <div>
                                <h3 className="text-base font-display font-semibold">Company</h3>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    {COMPANY_LINKS.map((link, index) => (
                                        <AnimationContainer
                                            key={index}
                                            animation="fadeLeft"
                                            delay={0.8 + (index * 0.1)}
                                        >
                                            <li>
                                                <Link
                                                    href={link.href}
                                                    className="hover:text-secondary transition-colors duration-200"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        </AnimationContainer>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

                <AnimationContainer animation="fadeUp" delay={1}>
                    <div className="mt-16 border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-center">
                        <p className="text-sm text-slate-500 font-mono">
                            © {new Date().getFullYear()} RevRa CRM. Engineered for high-velocity intelligence.
                        </p>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </footer>
    );
};

export default Footer;