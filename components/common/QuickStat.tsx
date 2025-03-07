import { motion } from "framer-motion";

interface QuickStatsProps {
  length: Number;
}

const QuickStats = ({ length }: QuickStatsProps) => {
  return (
    <div className="mt-8 grid cursor-pointer grid-cols-2 gap-4 sm:mt-12 md:grid-cols-4">
      {/* Thẻ stats */}
      {[
        { value: length, label: "Bài viết" },
        { value: "100%", label: "Uy tín" },
        { value: "24/7", label: "Hỗ trợ" },
        { value: "100+", label: "Khách hàng" },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <div className="mb-1 text-2xl font-bold text-white sm:text-3xl">
            {item.value.toString()}
          </div>
          <div className="text-sm text-gray-200 sm:text-base">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickStats;
