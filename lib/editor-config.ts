export const LANGUAGE_VALUE_BY_LABEL: Record<string, string> = {
    TypeScript: "typescript",
    Python: "python",
    Java: "java",
    "C++": "cpp",
    Go: "go",
    JavaScript: "javascript",
  }

  export const LANGUAGE_EXTENSION: Record<string, string> = {
  typescript: "solution.ts",
  python: "solution.py",
  javascript: "solution.js",
  java: "Solution.java",
  cpp: "solution.cpp",
  go: "solution.go",
  }

  export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}
  
  export const LANGUAGE_LABELS = Object.keys(LANGUAGE_VALUE_BY_LABEL)
  
  export const CODE_TEMPLATE_BY_LANGUAGE: Record<string, string> = {
    typescript: `function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (seen.has(complement)) return [seen.get(complement)!, i];
      seen.set(nums[i], i);
    }
  
    return [];
  }
  `,
    python: `def two_sum(nums, target):
      seen = {}
  
      for i, num in enumerate(nums):
          complement = target - num
          if complement in seen:
              return [seen[complement], i]
          seen[num] = i
  
      return []
  `,
    java: `import java.util.*;
  
  class Solution {
      public int[] twoSum(int[] nums, int target) {
          Map<Integer, Integer> seen = new HashMap<>();
  
          for (int i = 0; i < nums.length; i++) {
              int complement = target - nums[i];
              if (seen.containsKey(complement)) {
                  return new int[] { seen.get(complement), i };
              }
              seen.put(nums[i], i);
          }
  
          return new int[] {};
      }
  }
  `,
    cpp: `#include <vector>
  #include <unordered_map>
  using namespace std;
  
  vector<int> twoSum(vector<int>& nums, int target) {
      unordered_map<int, int> seen;
  
      for (int i = 0; i < (int)nums.size(); i++) {
          int complement = target - nums[i];
          if (seen.count(complement)) {
              return {seen[complement], i};
          }
          seen[nums[i]] = i;
      }
  
      return {};
  }
  `,
    go: `package main
  
  func twoSum(nums []int, target int) []int {
      seen := map[int]int{}
  
      for i, num := range nums {
          complement := target - num
          if idx, ok := seen[complement]; ok {
              return []int{idx, i}
          }
          seen[num] = i
      }
  
      return []int{}
  }
  `,
    javascript: `function twoSum(nums, target) {
    const seen = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (seen.has(complement)) return [seen.get(complement), i];
      seen.set(nums[i], i);
    }
  
    return [];
  }
  `,
  }