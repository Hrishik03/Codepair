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
    typescript: `console.log("Hello, TypeScript");
`,
    python: `print("Hello, Python")
`,
    java: `class Solution {
    public static void main(String[] args) {
        System.out.println("Hello, Java");
    }
}
`,
    cpp: `#include <iostream>

int main() {
    std::cout << "Hello, C++" << std::endl;
    return 0;
}
`,
    go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go")
}
`,
    javascript: `console.log("Hello, JavaScript");
`,
  }
