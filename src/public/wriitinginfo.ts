
export interface ArticleSummary {
    courseName: string,
    wordCount: string,
    summary: string,
    deepDiveTopic: string,
    isFinished: boolean,
}

const CompStrat: ArticleSummary = {
    courseName: "Competitive Strategy",
    wordCount: "2.4k",
    summary: "This class goes over industrial anaylsis and decision making in a competitive business environment",
    deepDiveTopic: "Platform Economics & Foundational AI Models",
    isFinished: true,
}

const NPS: ArticleSummary = {
    courseName: "New Products and Services",
    wordCount: "3.1k",
    summary: "User centered design and scaling innovation",
    deepDiveTopic: "Concept Testing AI Products",
    isFinished: true,
}

const NVS: ArticleSummary = {
    courseName: "New Venture Strategy",
    wordCount: "2.6k",
    summary: "What determines if a startup succeeds or fails and what rules can be pulled from the randomness",
    deepDiveTopic: "Competitive Advantage of Major AI Companies",
    isFinished: true,
}

const MarStrat: ArticleSummary = {
    courseName: "Marketing Strategy",
    wordCount: "",
    summary: "How do marketers use data to make good products resonate with people",
    deepDiveTopic: "",
    isFinished: false,
}

const BuildAI: ArticleSummary = {
    courseName: "Building an AI Company",
    wordCount: "",
    summary: "How does the startup math change when working with AI",
    deepDiveTopic: "",
    isFinished: false,
}

const CorpFin: ArticleSummary = {
    courseName: "Corporate Finance",
    wordCount: "",
    summary: "What are the tools and mechanisms corporations use finance their ventures",
    deepDiveTopic: "",
    isFinished: false,
}

export const coursesData: ArticleSummary[] = [
    CompStrat,
    NPS,
    NVS,
    MarStrat,
    BuildAI,
    CorpFin,
]

