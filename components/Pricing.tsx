import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black p-4">
      <h2 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`${plan.color} rounded-lg shadow-lg p-6 w-72 text-white`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
                  transition={{ delay: index * 0.2 + i * 0.1 }}
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
      </div>
    </div>
  );
}