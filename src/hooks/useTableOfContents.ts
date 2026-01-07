import { useState, useEffect } from 'react';

export interface Section {
    id: string;
    title: string;
}

interface UseTableOfContentsOptions {
    sections: Section[];
    totalDots?: number;
}

interface UseTableOfContentsReturn {
    activeSection: string;
    sectionProgress: Record<string, number>;
    sectionDots: Record<string, number>;
    showToc: boolean;
}

export function useTableOfContents({ sections, totalDots = 16 }: UseTableOfContentsOptions): UseTableOfContentsReturn {
    const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');
    const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});
    const [sectionDots, setSectionDots] = useState<Record<string, number>>({});
    const [showToc, setShowToc] = useState(false);

    useEffect(() => {
        const calculateSectionLengths = () => {
            const lengths: Record<string, number> = {};
            let totalLength = 0;

            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                const nextElement = index < sections.length - 1
                    ? document.getElementById(sections[index + 1].id)
                    : document.querySelector('footer');

                if (element) {
                    const sectionTop = element.offsetTop;
                    const sectionEnd = nextElement
                        ? (nextElement as HTMLElement).offsetTop
                        : document.documentElement.scrollHeight;
                    lengths[section.id] = sectionEnd - sectionTop;
                    totalLength += lengths[section.id];
                }
            });

            // Distribute dots proportionally, ensuring at least 1 dot per section
            const dots: Record<string, number> = {};
            let assignedDots = 0;

            sections.forEach((section) => {
                const proportion = lengths[section.id] / totalLength;
                const dotCount = Math.max(1, Math.round(proportion * totalDots));
                dots[section.id] = dotCount;
                assignedDots += dotCount;
            });

            // Adjust to ensure exactly totalDots (add/remove from largest section)
            const diff = totalDots - assignedDots;
            if (diff !== 0) {
                const largestSection = sections.reduce((max, s) =>
                    (lengths[s.id] > lengths[max.id] ? s : max), sections[0]);
                dots[largestSection.id] = Math.max(1, dots[largestSection.id] + diff);
            }

            setSectionDots(dots);
        };

        const handleScroll = () => {
            const progress: Record<string, number> = {};
            let currentActive = sections[0]?.id ?? '';

            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                const nextElement = index < sections.length - 1
                    ? document.getElementById(sections[index + 1].id)
                    : document.querySelector('footer');

                if (element) {
                    const sectionTop = element.offsetTop;
                    const sectionEnd = nextElement
                        ? (nextElement as HTMLElement).offsetTop
                        : document.documentElement.scrollHeight;
                    const scrollY = window.scrollY + window.innerHeight * 0.3;

                    if (scrollY < sectionTop) {
                        progress[section.id] = 0;
                    } else if (scrollY >= sectionEnd) {
                        progress[section.id] = 1;
                    } else {
                        progress[section.id] = (scrollY - sectionTop) / (sectionEnd - sectionTop);
                        currentActive = section.id;
                    }
                }
            });

            setSectionProgress(progress);
            setActiveSection(currentActive);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const leftQuarter = window.innerWidth * 0.25;
            setShowToc(e.clientX < leftQuarter);
        };

        // Calculate section lengths on mount and resize
        calculateSectionLengths();
        window.addEventListener('resize', calculateSectionLengths);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        handleScroll();

        return () => {
            window.removeEventListener('resize', calculateSectionLengths);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [sections, totalDots]);

    return { activeSection, sectionProgress, sectionDots, showToc };
}
