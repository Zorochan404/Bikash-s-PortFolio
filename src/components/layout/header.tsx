"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Type definitions
interface NavItem {
    path: string;
    name: string;
}

interface LogoProps {
    ref?: React.RefObject<HTMLAnchorElement>;
}

interface NavLinkProps {
    item: NavItem;
    onClick?: () => void;
    className?: string;
}

interface CTAButtonProps {
    ref?: React.RefObject<HTMLAnchorElement>;
    onClick?: () => void;
    className?: string;
}

const navItems: NavItem[] = [
    { path: "#works", name: "Process" },
    { path: "#testimonials", name: "Testimonials" },
    { path: "#whyus", name: "Features" },
    { path: "#faq", name: "Faqs" },
];

// Memoized components to prevent unnecessary re-renders
const Logo: React.FC<LogoProps> = ({ ref }) => (
    <Link href="/" className="text-2xl font-bold" ref={ref}>
        <span className="text-gray-300">BIX</span>
        <span className="text-[#9929EA]">Media</span>
    </Link>
);

const NavLink: React.FC<NavLinkProps> = ({
    item,
    onClick,
    className = "text-gray-300 hover:text-white transition-colors duration-200"
}) => (
    <Link
        href={item.path}
        onClick={onClick}
        className={className}
    >
        {item.name}
    </Link>
);

const CTAButton: React.FC<CTAButtonProps> = ({
    ref,
    onClick,
    className = "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-2 rounded-lg transition-colors duration-200"
}) => (
    <Link
        href="#contact"
        onClick={onClick}
        className={className}
        ref={ref}
    >
        Get in touch
    </Link>
);

export default function Header() {
    const pathname = usePathname() || "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    // Refs for GSAP animations
    const logoRef = useRef<HTMLAnchorElement | null>(null);
    const ctaButtonRef = useRef<HTMLAnchorElement | null>(null);
    const headerRef = useRef<HTMLElement | null>(null);

    const toggleMobileMenu = useCallback((): void => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback((): void => {
        setIsMobileMenuOpen(false);
    }, []);

    // GSAP scroll animations
    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            // Hide logo and CTA button on scroll (desktop only)
            gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top -50px",
                    end: "+=1",
                    toggleActions: "play none reverse none",
                    onUpdate: (self) => {
                        // Only apply on desktop screens
                        if (window.innerWidth >= 768) {
                            const progress = self.progress;
                            gsap.to([logoRef.current, ctaButtonRef.current], {
                                opacity: 1 - progress,
                                scale: 1 - (progress * 0.1),
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }
                    }
                }
            });

            // Add background blur effect on scroll
            gsap.to(headerRef.current, {
                scrollTrigger: {
                    trigger: "body",
                    start: "top -50px",
                    end: "+=1",
                    toggleActions: "play none reverse none",
                    onUpdate: (self) => {
                        const progress = self.progress;
                        if (headerRef.current) {
                            headerRef.current.style.backdropFilter = `blur(${progress * 20}px)`;
                            headerRef.current.style.backgroundColor = `rgba(0, 0, 0, ${progress * 0.8})`;
                        }
                    }
                }
            });
        }, headerRef);

        // Handle window resize to reset animations on mobile
        const handleResize = (): void => {
            if (window.innerWidth < 768) {
                gsap.set([logoRef.current, ctaButtonRef.current], {
                    opacity: 1,
                    scale: 1
                });
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            ctx.revert();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Memoize navigation items to prevent recreation on each render
    const desktopNavItems = useMemo(() =>
        navItems.map((item) => (
            <NavLink key={item.path} item={item} />
        )), []
    );

    const mobileNavItems = useMemo(() =>
        navItems.map((item) => (
            <NavLink
                key={item.path}
                item={item}
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
            />
        )), [closeMobileMenu]
    );

    // Animation variants for better performance
    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-[100] bg-transparent border-b border-gray-800/30 overflow-visible transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - Hidden on scroll (desktop only) */}
                    <div className="flex items-center">
                        <Logo ref={logoRef as React.RefObject<HTMLAnchorElement>} />
                    </div>

                    {/* Desktop Navigation - Always visible */}
                    <nav className="hidden md:flex items-center space-x-8 bg-black/80 backdrop-blur-md border border-gray-800/30 px-10 py-4 rounded-lg">
                        {desktopNavItems}
                    </nav>

                    {/* Desktop CTA Button - Hidden on scroll */}
                    <div className="hidden md:block">
                        <CTAButton ref={ctaButtonRef as React.RefObject<HTMLAnchorElement>} />
                    </div>

                    {/* Mobile Menu Button - Always visible on mobile */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
                        aria-label="Toggle mobile menu"
                        type="button"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with AnimatePresence for better animations */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 md:hidden bg-black/80 backdrop-blur-md border-t border-gray-800/30 z-[60]"
                    >
                        <div className="px-4 py-6">
                            <nav className="space-y-4">
                                {mobileNavItems}
                            </nav>
                            <div className="mt-6">
                                <CTAButton
                                    onClick={closeMobileMenu}
                                    className="block w-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg text-center transition-colors duration-200"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}