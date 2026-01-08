interface LeetCodeIconProps {
  className?: string;
}

export function LeetCodeIcon({ className }: LeetCodeIconProps) {
  return <img src="/leetcode.svg" className={className} alt="LeetCode" />;
}
