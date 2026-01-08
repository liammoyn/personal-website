import { Page } from "../components/Navigation"

export interface ArticleSummary {
    courseName: string,
    wordCount: string,
    summary: string,
    deepDiveTopic: string,
    isFinished: boolean,
    page?: Page,
}

const CompStrat: ArticleSummary = {
    courseName: "Competitive Strategy",
    wordCount: "2.4k",
    summary: "Using applied microeconomics to guide firm decision making in uncertain and competitive business environments",
    deepDiveTopic: "Platform Economics & Foundational AI Models",
    isFinished: true,
    page: 'competitive-strategy',
}

const NPS: ArticleSummary = {
    courseName: "New Products and Services",
    wordCount: "3.1k",
    summary: "Hands on user centered design provides a framework to scale innovation for new and existing busineses",
    deepDiveTopic: "Concept Testing AI Products",
    isFinished: false,
}

const NVS: ArticleSummary = {
    courseName: "New Venture Strategy",
    wordCount: "2.6k",
    summary: "Startups succeed or fail for a variety of reasons but rules and models can be used to understand their prospects and make sense from the randomness",
    deepDiveTopic: "Competitive Advantage of Major AI Companies",
    isFinished: false,
}

const MarStrat: ArticleSummary = {
    courseName: "Marketing Strategy",
    wordCount: "",
    summary: "Modern marketing is quantative and data driven in its approach to help products resonate with their audiences",
    deepDiveTopic: "",
    isFinished: false,
}

const BuildAI: ArticleSummary = {
    courseName: "Building an AI Company",
    wordCount: "",
    summary: "AI changes what's possible, but firms need to understand their limitations and opportunities in the AI space if they want to be successful",
    deepDiveTopic: "",
    isFinished: false,
}

const CorpFin: ArticleSummary = {
    courseName: "Corporate Finance",
    wordCount: "",
    summary: "Corporations need to constantly balance opportunity costs and funding avenues to intelligently navigate the bredth of available projects for them to invest in",
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

