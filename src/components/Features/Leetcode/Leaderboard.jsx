import React, { useState, useEffect, useMemo } from "react";
import { getLeetCodeData } from "@/Utils/LeetCodeInfo";
import LeetCodeCard from "./LeetCodeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Trophy, Users, Star, Target, Info } from "lucide-react";

const INITIAL_USERS = ["Sumitr995"];
const STORAGE_KEY = "enrolled_leetcode_users";

const calculateScore = (data) => {
  if (!data || !data.solved) return 0;
  
  const easy = Number(data.solved.easySolved || 0);
  const medium = Number(data.solved.mediumSolved || 0);
  const hard = Number(data.solved.hardSolved || 0);
  const rating = Number(data.contest?.contestRating || 0);

  // Scoring Logic: Easy (1), Medium (3), Hard (5), Contest Rating contribution
  return (easy * 1) + (medium * 3) + (hard * 5) + Math.floor(rating / 10);
};

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const storedUsers = saved ? JSON.parse(saved) : [];
    setUsers([...new Set([...INITIAL_USERS, ...storedUsers])]);
  }, []);

  useEffect(() => {
    if (users.length === 0) return;

    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        const results = await Promise.all(
          users.map(async (username) => {
            try {
              const data = await getLeetCodeData(username);
              return {
                username,
                data,
                score: calculateScore(data),
                displayName: data.profile?.name || data.profile?.realName || username,
                avatar: data.profile?.avatar || null,
                totalSolved: data.solved?.totalSolved || 0
              };
            } catch (err) {
              console.error(`Failed to fetch for ${username}`, err);
              return null;
            }
          })
        );
        
        const validResults = results.filter(r => r !== null).sort((a, b) => b.score - a.score);
        setLeaderboardData(validResults);
      } catch (err) {
        setError("Failed to update leaderboard");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [users]);

  const handleEnroll = async (e) => {
    e.preventDefault();
    const username = newUsername.trim();
    if (!username) return;
    if (users.includes(username)) {
      setError("User already enrolled!");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      // Validate user exists
      const data = await getLeetCodeData(username);
      if (data && data.profile) {
        const updatedUsers = [...users, username];
        setUsers(updatedUsers);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers.filter(u => !INITIAL_USERS.includes(u))));
        setNewUsername("");
      } else {
        setError("User not found on LeetCode");
      }
    } catch (err) {
      setError("Error validating username. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Enrollment Section */}
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Join the Challenge</h2>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          Compete with fellow coders! Enter your LeetCode username to see your rank. 
          Points are calculated based on: <span className="text-green-500 font-medium">Easy (1pt)</span>, 
          <span className="text-yellow-500 font-medium"> Medium (3pts)</span>, 
          <span className="text-red-500 font-medium"> Hard (5pts)</span> and your Contest Rating.
        </p>
        
        <form onSubmit={handleEnroll} className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="LeetCode Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="rounded-xl flex-1"
          />
          <Button type="submit" disabled={isLoading} className="rounded-xl bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white">
            {isLoading ? "Validating..." : "Enroll Now"}
          </Button>
        </form>
        {error && (
          <Alert variant="destructive" className="mt-4 rounded-xl">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>

      {/* Leaderboard Table */}
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Live Leaderboard</h2>
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
            Real-time Sync
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 text-[10px] uppercase tracking-wider text-zinc-500">
                <th className="px-6 py-4 font-semibold">Rank</th>
                <th className="px-6 py-4 font-semibold">User</th>
                <th className="px-6 py-4 font-semibold text-center">Solved</th>
                <th className="px-6 py-4 font-semibold text-right">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {leaderboardData.map((item, index) => (
                <React.Fragment key={item.username}>
                  <tr 
                    onClick={() => setSelectedUser(selectedUser === item.username ? null : item.username)}
                    className={`cursor-pointer transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50 ${selectedUser === item.username ? 'bg-zinc-50 dark:bg-zinc-800/50' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 font-bold text-zinc-700 dark:text-zinc-300">
                        {index === 0 && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                        #{index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100">
                          {item.avatar && <img src={item.avatar} alt="" className="w-full h-full object-cover" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">{item.displayName}</div>
                          <div className="text-[10px] text-zinc-500">@{item.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {item.totalSolved}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {item.score}
                      </div>
                    </td>
                  </tr>
                  {selectedUser === item.username && (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 bg-zinc-50/50 dark:bg-zinc-800/20">
                        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                           <LeetCodeCard username={item.username} className="mt-0 border-none shadow-none bg-transparent" />
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
              {leaderboardData.length === 0 && !isLoading && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-zinc-500">
                    No users enrolled yet. Be the first!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center gap-2 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
        <Info className="w-4 h-4 shrink-0" />
        <p className="text-[10px] sm:text-xs">
          Your enrollment is saved locally on this browser. Others will see their own competitive group.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
