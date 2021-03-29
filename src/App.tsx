import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 2 }}
      className="bg-gray-400"
    >
      <h1 className="text-8xl font-bold">Super Linter</h1>
      hello world
    </motion.div>
  );
}
