import { motion, useAnimation, useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: 19,
    features: ["1 user", "10 projects", "5GB storage", "Basic support"],
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    name: "Pro",
    price: 49,
    features: ["5 users", "50 projects", "100GB storage", "Priority support"],
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["Unlimited users", "Unlimited projects", "1TB storage", "24/7 support"],
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black p-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Choose Your Plan
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`${plan.color} rounded-lg shadow-lg p-6 w-72 text-white`}
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg">/mo</span></p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                >
                  <Check className="mr-2 h-5 w-5" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="w-full bg-white text-gray-800 font-bold py-2 px-4 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Choose Plan
              <Zap className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}