import {motion, type Variants} from "framer-motion";
import {Icon} from "@iconify/react";

const features = [
    {
        icon: "solar:shop-2-bold",
        title: "Verified Suppliers",
        description:
            "All suppliers are manually approved by administrators, ensuring quality and reliability for your procurement needs.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: "solar:cart-large-3-bold",
        title: "Easy Ordering",
        description:
            "Browse catalogs, add to cart, and place orders with just a few clicks. Streamlined procurement workflow.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: "solar:chart-2-bold",
        title: "Real-time Analytics",
        description:
            "Track your spending, monitor order history, and analyze category-level expenses with comprehensive dashboards.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: "solar:wallet-money-bold",
        title: "Transparent Billing",
        description:
            "Clear subscription tiers and commission structures. Automated invoice generation with manual payment tracking.",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: "solar:bell-bold",
        title: "Smart Notifications",
        description:
            "Stay informed with email and SMS notifications for order updates, confirmations, and important alerts.",
        color: "from-indigo-500 to-blue-500",
    },
    {
        icon: "solar:global-bold",
        title: "Multi-language Support",
        description:
            "Fully localized platform supporting Russian and Uzbek languages for seamless international operations.",
        color: "from-teal-500 to-cyan-500",
    },
    {
        icon: "solar:shield-check-bold",
        title: "Secure & Reliable",
        description:
            "Enterprise-grade security with role-based access control. Your data and transactions are protected.",
        color: "from-red-500 to-pink-500",
    },
    {
        icon: "solar:delivery-bold",
        title: "Order Tracking",
        description:
            "Monitor order status from creation to delivery. Real-time updates on confirmed, shipping, and delivered orders.",
        color: "from-yellow-500 to-orange-500",
    },
];

export const Features = () => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-20 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Powerful Features for
                        <br/>
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Procurement
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to streamline your B2B procurement process
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{y: -8, scale: 1.02}}
                            className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div
                                className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                            />
                            <div className="relative z-10">
                                <motion.div
                                    className={`inline-flex p-4 rounded-xl bg-linear-to-br ${feature.color} mb-4`}
                                    whileHover={{rotate: [0, -10, 10, -10, 0]}}
                                    transition={{duration: 0.5}}
                                >
                                    <Icon
                                        icon={feature.icon}
                                        className="w-8 h-8 text-white"
                                    />
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

