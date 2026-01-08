interface GitHubIconProps {
  className?: string;
}

export function GitHubIcon({ className }: GitHubIconProps) {
  return <img src="/github.svg" className={className} alt="GitHub" />;
}
