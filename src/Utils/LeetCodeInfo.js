const BASE_URL = "https://alfa-leetcode-api.onrender.com";

export const getLeetCodeData = async (username) => {
  try {
    const [
      profile,
      solved,
      contest,
      badges,
      submissions,
      skills,
      languages,
    ] = await Promise.all([
      fetch(`${BASE_URL}/${username}`).then(res => res.json()),
      fetch(`${BASE_URL}/${username}/solved`).then(res => res.json()),
      fetch(`${BASE_URL}/${username}/contest`).then(res => res.json()),
      fetch(`${BASE_URL}/${username}/badges`).then(res => res.json()),
      fetch(`${BASE_URL}/${username}/submission?limit=10`).then(res => res.json()),
      fetch(`${BASE_URL}/${username}/skill`).then(res => res.json()),
      fetch(`${BASE_URL}/${username}/language`).then(res => res.json()),
    ]);

    return {
      profile,
      solved,
      contest,
      badges,
      submissions,
      skills,
      languages,
    };
  } catch (error) {
    console.error("LeetCode API Error:", error);
    throw error;
  }
};