"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useTheme } from "@/context/theme-provider";
import { useClickOutside } from "@/hooks";
import { cn } from "@/lib";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon, Moon, Sun, XIcon } from "lucide-react";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import AnimationContainer from "./global/animation-container";

const Navbar = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();

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
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <motion.div
                animate={{
                    backgroundColor: visible
                        ? theme === "dark"
                            ? "rgba(5, 5, 5, 0.8)"
                            : "rgba(248, 249, 252, 0.85)"
                        : theme === "dark"
                            ? "rgba(5, 5, 5, 0)"
                            : "rgba(248, 249, 252, 0)",
                }}
                className={cn(
                    "border-b transition-all duration-300",
                    visible
                        ? theme === "dark"
                            ? "border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                            : "border-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                        : "border-transparent"
                )}
            >
                <div className="flex items-center justify-between h-20 mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/icons/icon.png" alt="RevRa" className="h-10 w-auto" />
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
                                        <Link href={link.link} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </div>
                                </AnimationContainer>
                            ))}
                        </AnimatePresence>
                    </div>

                    <AnimationContainer animation="fadeLeft" delay={0.1}>
                        <div className="hidden lg:flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className={cn(
                                    "h-9 w-9 rounded-lg transition-all duration-200",
                                    theme === "dark"
                                        ? "text-slate-400 hover:text-white hover:bg-white/10"
                                        : "text-slate-600 hover:text-black hover:bg-black/5"
                                )}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={theme}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {theme === "dark" ? (
                                            <Moon className="h-5 w-5" />
                                        ) : (
                                            <Sun className="h-5 w-5" />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </Button>
                            <Link href="/signin" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-display font-medium tracking-tight">
                                Login
                            </Link>
                            <Link href="/signup">
                                <Button size="sm" className={cn(
                                    "font-display font-medium tracking-tight shadow-[0_0_15px_rgba(160,120,255,0.3)]",
                                    theme === "dark"
                                        ? "bg-primary-container text-on-primary-container hover:bg-white/10 hover:text-primary"
                                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                                )}>
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>

                    {/* Mobile hamburger */}
                    <div className="lg:hidden flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className={cn(
                                "h-8 w-8 transition-all duration-200",
                                theme === "dark"
                                    ? "text-slate-400 hover:text-white"
                                    : "text-slate-600 hover:text-black"
                            )}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === "dark" ? (
                                        <Moon className="h-4 w-4" />
                                    ) : (
                                        <Sun className="h-4 w-4" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </Button>
                        <Link href="/signup">
                            <Button size="sm" className={cn(
                                "text-xs px-2 py-1 h-7 font-display font-medium tracking-tight shadow-[0_0_15px_rgba(160,120,255,0.3)]",
                                theme === "dark"
                                    ? "bg-primary-container text-on-primary-container hover:bg-white/10 hover:text-primary"
                                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                            )}>
                                Get Started
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen(!open)}
                            className={cn(
                                "h-8 w-8",
                                theme === "dark" ? "text-white" : "text-foreground"
                            )}
                        >
                            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={cn(
                            "lg:hidden fixed inset-x-0 top-20 bottom-0 backdrop-blur-xl border-b z-40 overflow-x-hidden",
                            theme === "dark"
                                ? "bg-surface-container-lowest/95 border-white/10"
                                : "bg-white/95 border-black/10"
                        )}
                    >
                        <div className="flex flex-col items-start justify-start gap-2 w-full max-w-screen-xl mx-auto px-4 lg:px-20 py-8">
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
                                        className={cn(
                                            "w-full px-4 py-3 rounded-lg transition-colors",
                                            theme === "dark"
                                                ? "text-slate-400 hover:bg-white/5"
                                                : "text-slate-600 hover:bg-black/5"
                                        )}
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
        </header>
    );
};

export default Navbar;