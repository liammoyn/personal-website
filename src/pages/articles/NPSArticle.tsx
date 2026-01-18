import Citation from "../../components/Citation";
import Footer from "../../components/Footer";
import { Navigation, Page } from "../../components/Navigation";
import TableOfContents from "../../components/TableOfContents";
import { useTableOfContents } from "../../hooks/useTableOfContents";

const sections = [
    { id: 'about', title: 'About the Class' },
    { id: 'learned', title: 'What I Learned' },
    { id: 'deep-dive', title: 'Deep Dive' },
];

const citations = [
    { name: '"The Voice of the Customer," Griffin and Hauser, Marketing Science', href: 'https://pubsonline.informs.org/doi/10.1287/mksc.12.1.1' },
    { name: '"Idea Generation, Creativity, and Prototypicality", Toubia and Netzer, Marketing Science', href: 'https://pubsonline.informs.org/doi/10.1287/mksc.2016.0994' },
]

interface NPSArticleProps {
    onNavigate: (page: Page) => void;
}

export default function NPSArticle({ onNavigate }: NPSArticleProps) {
    const { activeSection, sectionProgress, sectionDots, showToc } = useTableOfContents({ sections });

    return (
        <div className="min-h-screen bg-white">
            <Navigation onNavigate={onNavigate} onPage='new-products-services' />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">

                    <div className="prose prose-gray lg:prose-lg">
                        <h1>New Product Services</h1>
                    </div>
                </div>
                <div className="relative prose prose-gray lg:prose-lg max-w-3xl mx-auto">
                    {/* TOC slides in from left when cursor enters left quarter */}
                    <div className={`absolute top-0 h-full hidden lg:block left-[calc((100vw-48rem)/-4)] transition-all duration-300 ease-out ${showToc ? 'opacity-100 -translate-x-1/2' : 'opacity-0 -translate-x-full'}`}>
                        <TableOfContents sections={sections} activeSection={activeSection} sectionProgress={sectionProgress} sectionDots={sectionDots} />
                    </div>
                    <div className="article-body">
                        <h2 id="about">About the Class</h2>
                        <p>New Products and Services is an ambitious class that tackles the massive and nebulous problem of systemizing innovation through a rigorous Design Thinking process.</p>
                        <p>Taught by Art Middlebrook, the course provides an in-depth understanding of state-of-the-art practices for developing new products and services with hands-on, practical innovation experience.</p>
                        <p>Professor Middlebrook has spent years as a consultant and educator in the innovation space. He's a former senior director of marketing and product development for DigitalWork Inc. and a partner with Kuczmarski Innovation. He's also coauthored two books: Innovating the Corporation and Market Leadership Strategies for Service Companies. Professor Middlebrook has worked with companies from a broad range of industries, including mobile apps, consumer packaged goods, e-commerce, energy, financial services, telecommunications, and information technology, and he brings that breadth of experience to his class to offer practical advice for innovation across industries.</p>
                        <p>New Products and Services is an essential Product Management course for any Booth student. It touches on every step of the work that needs to be done to lay the groundwork for the successful execution of an engineering project. The class centers around a quarter-long group project that has students going into depth to understand and solve a real-world product problem. We followed a Design Thinking approach that took us through a 5-step process for product development: empathize, define, ideate, prototype, and test.</p>
                        <img src="designthinking.png" alt="Design Thinking Approach"/>
                        <h2 id="learned">What I learned</h2>
                        <p>The primary thesis of Design Thinking is that innovation happens in two stages. The first deals exclusively with understanding and defining the problem, and only then does the second stage tackle finding a solution. This course followed the same template: weeks 1-4 focused on the problem space while weeks 5-9 shifted to the solution space.</p>
                        <p>The first step in the approach is to empathize. This step is all about building an understanding of the problem space you're trying to address. While this includes market and industry research, the focus of my first two weeks in NPS was on the users. The primary purpose of this step is to generate an organized and actionable list of user insight statements that provide a guideline of the criteria successful solutions for the problem space will need to address.</p>
                        <p>Week 2 kicked off with a guest speaker from the legendary design firm IDEO. Will Notini, a senior design researcher lead at IDEO, walked us through how to conduct successful customer interviews. The goal of customer interviews is to discover a list of articulated user needs. These are needs that users are at least instinctively aware of and can be drawn out through conversation. Research shows that 8-10 user interviews typically uncover 90% of a user group's needs, resulting in about 75-125 distinct need statements<Citation number={1} citations={citations} />. Getting the most out of these interviews is partly an art, but here are my key tips for success:</p>
                        <ul>
                            <li><p><span className="font-bold">Be strategic in who you interview</span>: Extreme users, either fanatics of the current product or hardened skeptics, often reveal insights you'd miss with an "average" user.</p></li>
                            <li><p><span className="font-bold">Be prepared, but conversational</span>: Create a discussion guide with sample questions and an intended flow, but keep things conversational and don't be afraid to follow interesting threads off the beaten path.</p></li>
                            <li><p><span className="font-bold">Listen and follow up</span>: Give users space to talk in their own voice. Don't be afraid of silence if there's more to say. Use multiple "why" questions to probe to the heart of the need they're expressing.</p></li>
                            <li><p><span className="font-bold">Record and debrief</span>: Get consent to record interviews so you can focus on the conversation instead of note-taking. Debrief with your team immediately afterward while impressions are still fresh.</p></li>
                        </ul>
                        <p>Weeks 3 and 4 tackled the challenge of synthesizing this large, disjointed list of need statements into something actionable. The first step is grouping statements into no more than a dozen user need themes. You can organize these themes by different steps along the user journey, different occasions for using the product, the job-to-be-done for the user, or some combination of the three. Then, grade each theme based on its importance to users and their satisfaction with current solutions. If everything goes well, you'll end up with a curated list of important, unmet user needs.</p>
                        <p>The final artifact of this stage is to refine these important, unmet needs into user insight statements. These insight statements are succinct, standalone sentences that explain the user's current state, their dilemma or need, and the change they wish for. While these statements may seem simple on the surface, they encode why or how a phenomenon is happening and include a "so what" element that demonstrates why this matters to your intended customers. The work done to generate these statements ensures that when designers move to the solutioning stage, they don't waste time designing for problems that don't exist or don't matter.</p>
                        <p>Week 5 began the solutioning phase of the Design Thinking approach, which starts with brainstorming. Group brainstorming can sometimes feel tedious and unproductive, but processes exist that can alleviate common frustrations. Olivia Toubia of Columbia Business School describes a method for group brainstorming that follows the principles of being anonymous, asynchronous, and individual<Citation number={2} citations={citations} />. The method essentially uses an online message board to post new ideas and build on each other's ideas over a fixed period of 1-2 weeks. This method works because anonymity allows participants to feel comfortable sharing strange or wild ideas, asynchrony gives participants time to ruminate and revisit ideas, and individuality prevents conformity or groupthink from seeping into the process.</p>
                        <p>The biggest challenge successful brainstorming sessions need to overcome is fixedness in participants' thinking. One framework for expanding the range of ideas considered is Systematic Inventive Thinking (SIT). SIT describes patterns found in successful product innovations and challenges brainstorming participants to work within the constraints of these patterns. Counterintuitively, introducing these constraints leads to less constrained, more innovative thinking because the patterns provide an impetus to go outside the box. The five patterns of SIT are described below.</p>
                        <ul>
                            <li><p><span className="font-bold">Subtraction</span>: Remove an essential attribute and think about how the product would work without it.</p></li>
                            <li><p><span className="font-bold">Task Unification</span>: Add additional jobs-to-be-done to a product and see what it might be able to do.</p></li>
                            <li><p><span className="font-bold">Division</span>: Split a product into component parts and think about how the parts might work on their own.</p></li>
                            <li><p><span className="font-bold">Multiplication</span>: Make one or more copies of a product component but alter it in some way.</p></li>
                            <li><p><span className="font-bold">Attribute Dependency</span>: Create or remove dependencies between product components and explore how one thing changes as another changes in tandem.</p></li>
                        </ul>
                        <p>Weeks 6 and 7 focused on narrowing down brainstorming results into concept statements, or "paper prototypes." These brief but detailed descriptions of a product idea allow collecting early user feedback before investing heavily in development. Each statement should stay under 100 words, focus on a single primary benefit, and use simple, customer-friendly language. Once you've written these statements, you can solicit and synthesize user feedback, which I'll explore more in the deep dive.</p>
                        <p>Week 8 shifted gears to consider branding options for new products. For established firms launching new lines of business, this comes down to choosing between a branded house and a house of brands approach. A branded house strategy uses a single brand to represent many different products, think Apple unifying its product portfolio under the iOS umbrella. A house of brands strategy flips this: instead of one overarching brand, each product gets its own distinct brand under a single parent company. Meta follows this approach with Facebook, Instagram, and WhatsApp, each maintaining unique brands and positioning.</p>
                        <p>The class wrapped up in weeks 9 and 10 with groups presenting their quarter-long design projects. My group had been scoping and designing a short-distance parcel delivery service for DoorDash. We conducted user interviews, designed and tested concept statements, and created mockups and implementation timelines for the feature. I pitched our idea to the class and consolidated the quarter's lessons into a meaningful, information-dense deliverable.</p>
                        <p>Since taking New Products and Services, I've used the design thinking process several times. But it's important to understand how your product category's nuances affect the process. In the deep dive, I'll discuss how one step of the process needs to be adapted for the unique challenges of building AI products.</p>
                        <h2 id="deep-dive">Deep dive: Concept Testing AI Products</h2>
                        <p>Months of development, QA cycles, and meticulous designer polish all leading up to one big product launch and… no one cares. The tech bro startup building a solution to a problem no one has is as cliché as it gets. And while moving fast with constant iteration can be a genuine strategy to avoid this trap, once the initial investment grows and the time to turn the ship increases, throwing more developers at the problem will only burn through money faster.</p>
                        <p>Concept testing was developed as the lowest investment option to validate or debunk the hypothesis that people will care when your product launches. Instead of building out entire products, concept testing uses quantitative analysis to compare product ideas based on simple, cheap-to-produce concept statements. This technique works across industries, but with the rise of AI, concept testing must be adapted to fit the unique quirks of this new and constantly evolving product category.</p>
                        <h4>So what is concept testing?</h4>
                        <p>Concept testing starts with concept statements, short descriptions and feature lists that convey the <span className="italic">idea</span> behind a potential product. Successful concept statements need to be clear enough that users can understand the product or feature and provide actionable feedback on it. While the format varies from company to company, they should all follow a few key guidelines:</p>
                        <ul>
                            <li><p><span className="font-bold">Singular in Focus</span>: Don't tack on multiple features. Focus on a single primary benefit.</p></li>
                            <li><p><span className="font-bold">Brief</span>: Aim for ~100 words or less. It should only take users about 30 seconds to read.</p></li>
                            <li><p><span className="font-bold">Objective</span>: Don't be overly persuasive. Focus on concrete value drivers.</p></li>
                            <li><p><span className="font-bold">Understandable</span>: Use the language of the customer. Avoid potentially confusing technical jargon.</p></li>
                            <li><p><span className="font-bold">Standardized</span>: As you prepare for testing, make sure all your concept statements use the same format and are about the same length.</p></li>
                        </ul>
                        <p>Once you've prepared 2-4 concept statements to validate your product ideas, it's time to move to testing. One important consideration is to include a concept statement for a known successful project that can serve as a benchmark. Ideally this is an old internal project with known sales figures, but external projects work too if you're relatively aware of their performance.</p>
                        <p>During testing, users will read and rate each concept statement on 5 standardized vectors. Typically, you'll ask them to respond on a 5-point scale from "very likely" to "not likely at all." Use additional screening questions to confirm interviewees fall into your target market and use this opportunity to also gather qualitative feedback.</p>
                        <p>The 5 vectors concept testing will measure are:</p>
                        <ul>
                            <li><p><span className="font-bold">Purchase/Usage Intent</span>: How likely are you to buy or use a product like this?</p></li>
                            <li><p><span className="font-bold">Frequency of Purchase/Usage</span>: How often would you buy or use a product like this?</p></li>
                            <li><p><span className="font-bold">Value for Money/Time</span>: How valuable would this product be for you given the cost?</p></li>
                            <li><p><span className="font-bold">Newness</span>: How new or original does this product seem?</p></li>
                            <li><p><span className="font-bold">Believability</span>: How believable is it that a product claiming these features would deliver?</p></li>
                        </ul>
                        <p>With these results, you can rank product ideas and compare them against your benchmark. The higher each concept statement ranks in each category, the better your chances of having a winning idea.</p>
                        <p>This format has worked well for traditional products for years. But the rise of AI products has introduced unique challenges for translating concept testing results into actual marketplace success.</p>
                        <h4>Why believability is difficult for AI products</h4>
                        <p>Believability is a critical vector in concept testing. Ideas with low believability face an uphill battle convincing users to trust the product enough to try it. Ideas with high believability have great initial trust, but they also set high expectations and users will have little tolerance for any shortcomings.</p>
                        <p>AI creates a unique challenge here because most people don't understand what AI can and cannot do. This gap manifests in two paradoxically opposite problems: under-belief and over-belief.</p>
                        <p>Under-belief is the problem of dealing with overly skeptical cynicism about AI's capabilities. Users might read about a tool that writes emails for them and doubt the AI could ever produce adequate results. Even if the tool writes perfect emails and users want the feature, the concept test would show low believability and consequently low purchase intent.</p>
                        <p>This happens because of a combination of anecdotal disappointments with AI output and a trained numbness to years of AI marketing hype. You'd be hard-pressed to find an American adult who hasn't dealt with "AI slop", and these negative experiences clash with oversold AI marketing to create a natural defensiveness against claims of human-like AI performance. When users evaluate AI concept statements, this defensiveness makes it impossible for them to distinguish between a genuine breakthrough in AI capability and just another overpromise followed by an underdelivery.</p>
                        <p>Over-belief is the opposite but equally problematic phenomenon where users assume AI can do more than it's actually capable of. They might read a concept statement about an AI personal assistant and imagine an all-knowing, all-powerful tool. This leads to inflated purchase intent scores during concept testing, followed by jaded disappointment when they actually use the product.</p>
                        <p>Over-belief happens because non-technical users lack a real mental model for how AI tools work. In their minds, the "magic" in modern LLM tools isn't much different from the real magic required to meet some of their expectations. This blurs the lines around an AI product's perceived capabilities and makes it harder to translate concept testing results into product performance reality.</p>
                        <h4>What can be done</h4>
                        <p>For concept testing to work, users need to accurately envision the product experience. Fundamentally, under-belief and over-belief happen because AI products are uniquely difficult for users to picture. Traditional concept statements might tackle this by adding longer, more descriptive text or higher-fidelity visuals, but this risks either increasing over-belief with "magic"-looking visuals or undercutting user trust with awkward caveats about what the product <span className="italic">isn't</span>.</p>
                        <p>It's also tempting to ignore these problems and "just trust the data," hoping everything ultimately cancels out. This is wishful thinking and risks reverting to a world where concept testing gets skipped entirely and teams release products just hoping they'll land. Miscalibration in concept testing cuts both ways, and without acknowledging and accounting for the challenges of AI believability, product teams will essentially be flying blind.</p>
                        <p>One real solution is to push concept testing further down the pipeline until users can try actual demos of the product. This grounds their understanding, but it also significantly increases testing costs and risks wasting development time on dead-end projects. With this approach, product teams need to balance validating ideas early while still creating an experience comparable to the final product.</p>
                        <p>Another solution is to calibrate believability scores during concept testing. Ask users which AI capabilities they believe are possible and mix real features with impossible ones. This data helps product teams anticipate potential under or over belief in their concept statements and adjust their scores accordingly. This strategy keeps concept testing early and inexpensive, but it requires accepting some ambiguity in the results.</p>
                        <p>Concept testing is an important tool that can save millions in development costs by catching misguided ideas early, but its value depends on understanding the context users bring to their evaluations. AI capabilities are changing every week, and for AI companies to properly evaluate their ideas, they need to account for the challenges users face visualizing these products. Done right, concept testing can decrease iteration time and lead to breakthrough product success. Done wrong, teams may find themselves releasing a product only to be left wondering why no one cares.</p>
                    </div>
                </div>
                <hr className="max-w-3xl mx-auto" />
            </div>

            <footer className="py-32 px-6 bg-gray-900 text-white">
                <Footer onNavigate={onNavigate} />
            </footer>
        </div>
    )
}