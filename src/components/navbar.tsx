"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useClickOutside } from "@/hooks";
import { cn } from "@/lib";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";

const Navbar = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState<boolean>(false);

    const mobileMenuRef = useClickOutside(() => {
        if (open) setOpen(false);
    });

    const { scrollY } = useScroll({
        target: ref as RefObject<HTMLDivElement>,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <header className="fixed top-0 w-full z-50 transition-all duration-300">
            <motion.div
                animate={{
                    backgroundColor: visible ? "rgba(5, 5, 5, 0.8)" : "rgba(5, 5, 5, 0)",
                }}
                className={cn(
                    "border-b transition-all duration-300",
                    visible ? "border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "border-transparent"
                )}
            >
                <Wrapper className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold tracking-tighter text-white font-display drop-shadow-[0_0_8px_rgba(160,120,255,0.5)]">
                                RevRa
                            </span>
                        </Link>
                    </motion.div>

                    <div className="hidden lg:flex flex-row items-center gap-8 font-display font-medium tracking-tight">
                        <AnimatePresence>
                            {NAV_LINKS.map((link, index) => (
                                <AnimationContainer
                                    key={index}
                                    animation="fadeDown"
                                    delay={0.1 * index}
                                >
                                    <div className="relative">
                                        <Link href={link.link} className="text-slate-400 hover:text-white transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </div>
                                </AnimationContainer>
                            ))}
                        </AnimatePresence>
                    </div>

                    <AnimationContainer animation="fadeLeft" delay={0.1}>
                        <div className="flex items-center gap-4">
                            <Link href="/signin" className="text-slate-400 hover:text-white transition-colors duration-200 font-display font-medium tracking-tight hidden md:block">
                                Login
                            </Link>
                            <Link href="/signup">
                                <Button size="sm" className="bg-primary-container text-on-primary-container hover:bg-white/10 hover:text-primary font-display font-medium tracking-tight shadow-[0_0_15px_rgba(160,120,255,0.3)]">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>
                </Wrapper>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed inset-0 top-20 bg-surface-container-lowest/95 backdrop-blur-xl border-b border-white/10 z-40"
                    >
                        <div className="flex flex-col items-start justify-start gap-2 w-full px-6 py-8">
                            {NAV_LINKS.map((navItem: any, idx: number) => (
                                <AnimationContainer
                                    key={`link-${idx}`}
                                    animation="fadeRight"
                                    delay={0.1 * (idx + 1)}
                                    className="w-full"
                                >
                                    <Link
                                        href={navItem.link}
                                        onClick={() => setOpen(false)}
                                        className="text-slate-400 hover:bg-white/5 w-full px-4 py-3 rounded-lg transition-colors"
                                    >
                                        <span className="font-display font-medium">{navItem.name}</span>
                                    </Link>
                                </AnimationContainer>
                            ))}
                            <AnimationContainer animation="fadeUp" delay={0.5} className="w-full mt-4">
                                <Link href="/signin" className="w-full">
                                    <Button
                                        onClick={() => setOpen(false)}
                                        variant="secondary"
                                        className="block w-full"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup" className="w-full mt-2">
                                    <Button
                                        onClick={() => setOpen(false)}
                                        className="block w-full"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </AnimationContainer>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile hamburger */}
            <div className="lg:hidden fixed top-6 right-6 z-50">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(!open)}
                    className="text-white"
                >
                    {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </Button>
            </div>
        </header>
    );
};

export default Navbar;