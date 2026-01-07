import ProgressIndicator from "./ProgressIndicator";

export const sections = [
    { id: 'about', title: 'About the Class' },
    { id: 'learned', title: 'What I Learned' },
    { id: 'deep-dive', title: 'Deep Dive' },
];

interface TableOfContentsProps {
    activeSection: string;
    sectionProgress: Record<string, number>;
    sectionDots: Record<string, number>;
}

export default function TableOfContents({ activeSection, sectionProgress, sectionDots }: TableOfContentsProps) {
    return (
        <nav className="sticky top-[10vh] py-2 px-4">
                <div className="space-y-1">
                    {sections.map((section) => (
                        <div key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`block text-sm no-underline transition-colors ${
                                    activeSection === section.id
                                        ? 'text-gray-900 font-medium'
                                        : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                {section.title}
                            </a>
                            <ProgressIndicator
                                progress={sectionProgress[section.id] || 0}
                                isActive={activeSection === section.id}
                                dotCount={sectionDots[section.id] || 3}
                            />
                        </div>
                    ))}
                </div>
            </nav>
    );
}