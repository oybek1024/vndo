import {motion, type Variants} from "framer-motion";
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router";
import {Button, Tag} from "antd";

export const Hero = () => {
    const navigate = useNavigate();

    const containerVariants: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const floatingAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <Tag color="blue">
                            <div className="w-full flex items-center gap-2">
                                <Icon icon="solar:verified-check-bold" className="w-4 h-4"/>
                                <span>B2B Procurement Marketplace</span>
                            </div>
                        </Tag>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Connect Hotels with
                        <br/>
                        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trusted Suppliers
            </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Streamline your procurement process. Hotels purchase goods from
                        approved suppliers with ease, transparency, and efficiency.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            type="primary"
                            size="large"
                            icon={<Icon icon="solar:user-plus-bold" className="w-5 h-5"/>}
                            onClick={() => navigate("/auth/signup")}
                            className="h-12 px-8 text-base font-semibold bg-linear-to-r from-blue-600 to-purple-600 border-0 shadow-lg"
                        >
                            Sign Up Now
                        </Button>
                        <Button
                            size="large"
                            icon={<Icon icon="solar:login-3-bold" className="w-5 h-5"/>}
                            onClick={() => navigate("/auth")}
                            className="h-12 px-8 text-base font-semibold bg-white text-gray-700 border-0 shadow-md hover:shadow-lg"
                        >
                            Sign In
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-gray-300"
                    >
                        <motion.div
                            className="flex items-center gap-2"
                            whileHover={{scale: 1.1}}
                        >
                            <Icon
                                icon="solar:shield-check-bold"
                                className="w-6 h-6 text-green-400"
                            />
                            <span className="font-medium">Verified Suppliers</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2"
                            whileHover={{scale: 1.1}}
                        >
                            <Icon
                                icon="solar:chart-2-bold"
                                className="w-6 h-6 text-blue-400"
                            />
                            <span className="font-medium">Real-time Analytics</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2"
                            whileHover={{scale: 1.1}}
                        >
                            <Icon
                                icon="solar:global-bold"
                                className="w-6 h-6 text-purple-400"
                            />
                            <span className="font-medium">Multi-language</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Floating icons */}
                <motion.div
                    className="absolute top-1/4 left-10 hidden lg:block"
                    animate={floatingAnimation as any}
                >
                    <Icon
                        icon="solar:shop-2-bold"
                        className="w-16 h-16 text-blue-300 opacity-50"
                    />
                </motion.div>
                <motion.div
                    className="absolute top-1/3 right-10 hidden lg:block"
                    animate={floatingAnimation as any}
                    transition={{delay: 1}}
                >
                    <Icon
                        icon="solar:delivery-bold"
                        className="w-16 h-16 text-purple-300 opacity-50"
                    />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{y: [0, 10, 0]}}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Icon
                    icon="solar:alt-arrow-down-bold"
                    className="w-8 h-8 text-gray-300"
                />
            </motion.div>
        </section>
    );
};

