import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, Card } from "antd";
import { useNavigate } from "react-router";

const consumerTiers = [
  {
    name: "Starter",
    description: "Perfect for small hotels",
    monthlyPrice: "$99",
    purchaseVolume: "Up to $10K/month",
    features: [
      "Unlimited orders",
      "Access to all suppliers",
      "Basic analytics",
      "Email support",
      "7-day grace period",
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing hotel chains",
    monthlyPrice: "$299",
    purchaseVolume: "$10K - $50K/month",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "Priority support",
      "Category-level insights",
      "Order history export",
      "7-day grace period",
    ],
    color: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large hotel groups",
    monthlyPrice: "$799",
    purchaseVolume: "$50K+/month",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom reporting",
      "API access",
      "Multi-location management",
      "7-day grace period",
    ],
    color: "from-indigo-500 to-blue-500",
    popular: false,
  },
];

const supplierInfo = {
  title: "Supplier Commission",
  description: "Simple, transparent pricing for suppliers",
  commission: "2%",
  details: [
    "Only pay on confirmed orders",
    "No monthly fees",
    "Automated calculation",
    "Manual payment tracking",
    "PDF invoice generation",
  ],
};

export const Pricing = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Consumer Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your hotel. All plans include a 7-day
            grace period.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {consumerTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`relative h-full border-2 transition-all duration-300 ${
                  tier.popular
                    ? "border-purple-500 shadow-xl scale-105"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                }`}
                bodyStyle={{ padding: "2rem" }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">
                      {tier.monthlyPrice}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">{tier.purchaseVolume}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon
                        icon="solar:check-circle-bold"
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  type={tier.popular ? "primary" : "default"}
                  size="large"
                  block
                  onClick={() => navigate("/auth/signup")}
                  className={`h-12 font-semibold ${
                    tier.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                      : ""
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Supplier Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Icon
                icon="solar:invoice-2-bold"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {supplierInfo.title}
              </h3>
              <p className="text-xl text-white/90">{supplierInfo.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <span className="text-7xl font-bold">{supplierInfo.commission}</span>
                  <span className="text-2xl ml-2">commission</span>
                </div>
                <p className="text-lg text-white/80 mb-6">
                  Pay only when orders are confirmed. No hidden fees, no monthly
                  subscriptions.
                </p>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => navigate("/auth/signup")}
                  className="bg-white text-purple-600 border-0 hover:bg-gray-100 h-12 px-8 font-semibold"
                >
                  Become a Supplier
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {supplierInfo.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon
                        icon="solar:check-circle-bold"
                        className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

