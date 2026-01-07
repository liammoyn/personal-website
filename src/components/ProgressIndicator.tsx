
interface ProgressIndicatorProps {
    progress: number;
    isActive: boolean;
    dotCount: number;
}

export default function ProgressIndicator({ progress, isActive, dotCount }: ProgressIndicatorProps) {
    const highlightedDots = Math.round(progress * dotCount);

    return (
        <div
            className={`flex flex-col items-center space-y-0.5 overflow-hidden transition-all duration-300 ease-out ${
                isActive ? 'max-h-32 opacity-100 my-2' : 'max-h-0 opacity-0 my-0'
            }`}
        >
            {Array.from({ length: dotCount }).map((_, i) => (
                <span
                    key={i}
                    className={`text-xs cursor-default transition-colors ${
                        i < highlightedDots
                            ? 'text-gray-900'
                            : 'text-gray-300'
                    }`}
                >
                    o
                </span>
            ))}
        </div>
    );
}