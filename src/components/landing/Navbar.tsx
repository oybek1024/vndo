import {motion} from "framer-motion";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Button} from "antd";
import {VNDOLogo} from "@/components/common/VNDOLogo";
import {cn} from "@/lib/utils.ts";

export const Navbar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => navigate("/")}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <VNDOLogo
                            size={40}
                            color={scrolled ? "#3B82F6" : "#FFFFFF"}
                            animated
                        />
                        <span
                            className={`text-2xl font-bold transition-colors ${
                                scrolled ? "text-gray-900" : "text-white"
                            }`}
                        >
              VNDO
            </span>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            className={`font-medium transition-colors ${
                                scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                            }`}
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className={`font-medium transition-colors ${
                                scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                            }`}
                        >
                            Pricing
                        </a>
                        <a
                            href="#contact"
                            className={`font-medium transition-colors ${
                                scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                            }`}
                        >
                            Contact
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        <Button
                            type="text"
                            onClick={() => navigate("/auth")}
                            className={cn("font-medium", scrolled
                                ? "text-gray-700! hover:text-blue-600!"
                                : "text-white! hover:text-white!")}
                        >
                            Sign In
                        </Button>
                        <Button
                            type={scrolled ? "primary" : "default"}
                            onClick={() => navigate("/auth/signup")}
                            className={`font-semibold ${
                                scrolled
                                    ? "bg-blue-600 border-blue-600"
                                    : "bg-white text-blue-600 border-white hover:bg-gray-100"
                            } shadow-lg`}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

