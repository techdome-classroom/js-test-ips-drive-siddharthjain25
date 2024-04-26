function longestSubstring(s) {
    let longest = 0;
    let start = 0;
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;
        }

        map.set(char, i);
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
}

console.log(longestSubstring("abcabcbb"));

module.exports = { longestSubstring };
