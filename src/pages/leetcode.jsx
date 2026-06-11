import React from "react";
import Leaderboard from "@/components/Features/Leetcode/Leaderboard";

const LeetCode = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="w-full md:w-3/4 lg:w-2/3 px-4 md:px-0 space-y-2">
        <div className="text-sm font-semibold dark:text-zinc-500 text-zinc-400 uppercase tracking-widest">Community</div>
        <div className="text-zinc-900 dark:text-zinc-100 font-black text-4xl md:text-5xl">LeetCode Challenge</div>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg">
          An interactive arena to track progress, compare stats, and push your algorithmic limits with the community.
        </p>
        
        <div className="pt-8">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default LeetCode;
