import {motion} from "framer-motion";
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router";
import {Button, Tag} from "antd";

export const CTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"
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
                    className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"
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
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <Tag color="default">
                        <div className="w-full flex items-center gap-2">
                            <Icon icon="solar:rocket-2-bold" className="w-4 h-4"/>
                            <span>Get Started Today</span>
                        </div>
                    </Tag>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your
                        <br/>
                        Procurement Process?
                    </h2>

                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join hotels and suppliers already using our platform to streamline
                        their B2B procurement operations.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.2, duration: 0.6}}
                    >
                        <Button
                            type="primary"
                            size="large"
                            icon={<Icon icon="solar:user-plus-bold" className="w-5 h-5"/>}
                            onClick={() => navigate("/auth/signup")}
                            className="h-12 px-8 text-base font-semibold bg-white text-purple-600 border-0 shadow-xl hover:shadow-2xl hover:bg-gray-50"
                        >
                            Create Free Account
                        </Button>
                        <Button
                            size="large"
                            icon={<Icon icon="solar:login-3-bold" className="w-5 h-5"/>}
                            onClick={() => navigate("/auth")}
                            className="h-12 px-8 text-base font-semibold bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20"
                        >
                            Sign In
                        </Button>
                    </motion.div>

                    <motion.div
                        className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{delay: 0.4, duration: 0.6}}
                    >
                        <div className="flex items-center gap-2">
                            <Icon
                                icon="solar:check-circle-bold"
                                className="w-5 h-5 text-green-300"
                            />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon
                                icon="solar:check-circle-bold"
                                className="w-5 h-5 text-green-300"
                            />
                            <span>Quick approval process</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon
                                icon="solar:check-circle-bold"
                                className="w-5 h-5 text-green-300"
                            />
                            <span>24/7 support</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

