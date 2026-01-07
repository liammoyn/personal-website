import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { Navigation, Page } from "../../components/Navigation";

const sections = [
    { id: 'about', title: 'About the Class' },
    { id: 'learned', title: 'What I Learned' },
    { id: 'deep-dive', title: 'Deep Dive' },
];

interface ProgressIndicatorProps {
    progress: number;
    isActive: boolean;
    dotCount: number;
}

function ProgressIndicator({ progress, isActive, dotCount }: ProgressIndicatorProps) {
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
                    className={`text-xs transition-colors ${
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

interface TableOfContentsProps {
    activeSection: string;
    sectionProgress: Record<string, number>;
    sectionDots: Record<string, number>;
    tocTop: number;
}

function TableOfContents({ activeSection, sectionProgress, sectionDots, tocTop }: TableOfContentsProps) {
    return (
        <div
            className="fixed left-[calc((100vw-48rem)/4)] -translate-x-1/2 z-40 hidden lg:block group"
            style={{ top: `${tocTop}px` }}
        >
            <nav className="py-2 px-4">
                <div className="space-y-1">
                    {sections.map((section) => (
                        <div key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`block text-sm transition-colors ${
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
        </div>
    );
}

interface CompStratArticleProps {
    onNavigate: (page: Page) => void;
}

const TOTAL_DOTS = 16;

export default function CompStratArticle({ onNavigate }: CompStratArticleProps) {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});
    const [sectionDots, setSectionDots] = useState<Record<string, number>>({});
    const [tocTop, setTocTop] = useState(0);

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
                const dotCount = Math.max(1, Math.round(proportion * TOTAL_DOTS));
                dots[section.id] = dotCount;
                assignedDots += dotCount;
            });

            // Adjust to ensure exactly TOTAL_DOTS (add/remove from largest section)
            const diff = TOTAL_DOTS - assignedDots;
            if (diff !== 0) {
                const largestSection = sections.reduce((max, s) =>
                    (lengths[s.id] > lengths[max.id] ? s : max), sections[0]);
                dots[largestSection.id] = Math.max(1, dots[largestSection.id] + diff);
            }

            setSectionDots(dots);
        };

        const handleScroll = () => {
            const progress: Record<string, number> = {};
            let currentActive = sections[0].id;

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

            // Calculate TOC position constrained within article-body bounds
            const articleBody = document.querySelector('.article-body');
            if (articleBody) {
                const bodyTop = (articleBody as HTMLElement).offsetTop;
                const bodyBottom = bodyTop + (articleBody as HTMLElement).offsetHeight;
                const tocHeight = 200; // approximate TOC height
                const scrollY = window.scrollY;

                // Calculate viewport-relative position, clamped to article bounds
                const viewportTop = Math.max(
                    bodyTop - scrollY,  // Don't go above article-body
                    Math.min(
                        window.innerHeight * 0.25,  // Ideal: 25% from top
                        bodyBottom - scrollY - tocHeight  // Don't go below article-body
                    )
                );
                setTocTop(viewportTop);
            }
        };

        // Calculate section lengths on mount and resize
        calculateSectionLengths();
        window.addEventListener('resize', calculateSectionLengths);
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('resize', calculateSectionLengths);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navigation onNavigate={onNavigate} onPage='competitive-strategy' />
            <TableOfContents activeSection={activeSection} sectionProgress={sectionProgress} sectionDots={sectionDots} tocTop={tocTop} />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto prose prose-gray lg:prose-lg">
                    <h1>Competitive Strategy</h1>
                    <div className="article-body">
                        <h2 id="about">About the Class</h2>
                        <p>Taught by Thomas Wollman, the course used applied microeconomics to analyze the decisions managers face in business environments. It focused on deciphering the economics of industrial organization to justify strategic decisions that drive profits.</p>
                        <p>Professor Wollman earned his PhD in Business Economics from Harvard before working as an investment banker and entrepreneur. His work has been published in leading economic journals including The American Economic Review and American Economic Review: Insights. You can read more about him on his <span className="cursor-pointer"><a href="https://sites.google.com/view/thomaswollmann">personal website here</a></span>. In my experience, Wollman is one of the sharpest professors at Booth, and he pushed his students to think quickly and critically.</p>
                        <p>Competitive strategy is often called the management consulting course because it covers so many ideas critical to understanding effective business strategy. The class is case-based, and each week explored a different aspect of determining firm or industry-level profitability. Each case required a pre-class write-up, but most of the learning happened through in-class discussions as Professor Wollman worked through the details of each case to extract universal lessons.</p>
                        <h2 id="learned">What I Learned</h2>
                        <p>Weeks 1-4 focused on the levers of firm and industry profitability in isolation. The goal was to understand the probability of success for a particular strategy within a static business environment.</p>
                        <p>Week 1 introduced the class framework and discussed constrained optimization, essentially how an industry maximizes profits given customers’ willingness to pay and fixed costs of production.</p>
                        <p>Week 2 covered Porter’s 5 Forces for industrial analysis and explored some of the model’s shortcomings. Porter’s 5 Forces, Rivalry, Threat of Entry, Supplier Power, Buyer Power, and Substitutes, provides a framework for understanding why industries organize in different ways. Analyzing these five factors reveals why some industries have just a few large companies earning high margins (like telecommunications), while others have many small companies earning relatively thin margins (like clothing apparel). However, this framework falls short when you consider the ambiguity in how these forces are defined. For example, what distinguishes a rival from a substitute? How far should you extend what counts as a substitute? And how do you actually measure the intensity of rivalry? Wollman proposed solving these ambiguities by examining cross-product price elasticities to measure how demand shifts between products in response to price changes. This quantitative approach removes the distinction between rivals and substitutes and allows a more rigorous analysis of competing forces.</p>
                        <p>In week 3, we turned to the question of how firms create competitive advantage. Traditional frameworks tend to frame this as a linear choice between low cost and high quality, but competitive advantage is really about understanding all the dimensions on which a product is positioned and identifying which areas of those dimensions are most profitable. These dimensions provide guidelines for how different products can be positioned in the market. Positioning along these dimensions falls into two distinct categories: vertical and horizontal. Vertical positioning describes categories where, all else being equal, customers agree on the preferential order along a dimension. This is essentially “quality”, customers always prefer longer battery life, more durable materials, or faster performance. Horizontal positioning describes categories where customers do not agree on the preferential order. These come down to customer “preferences.” Some people prefer a muted, classy aesthetic; others prefer a loud, distinctive look. In both cases, positioning your product requires weighing the tradeoffs associated with each area. You need to position to maximize your proximity to high-value customers’ preferences along various dimensions while minimizing your proximity to competitors’ products to avoid price competition.</p>
                        <p>Week 4 explored the factors that define a firm’s boundaries, the classic Make vs Buy dilemma. In a perfect market, firms focus exclusively on what they do best, but reality is messier. Problems like the Principal-Agent problem, the Hold-up problem, and Double Marginalization inefficiencies complicate the decision. In summary, firms should prefer buying (outsourcing) when agent effort matters, controlling agents is costly, or when markets are liquid and prices are easily negotiated. Firms should make (vertically integrate) when transaction costs are high, assets are relationship-specific, the threat of opportunism from outside forces is high, or there is significant market power upstream or downstream.</p>
                        <p>In the second half of class, we shifted from static business environments to the strategic interactions between multiple parties.</p>
                        <p>Week 6 introduced Nash Equilibriums as a framework for analyzing these complex multi-party systems. We then examined collusion in industry, covering the factors that determine whether firms want to collude, can collude, and will sustain collusion over time. Collusion thrives in industries with high barriers to entry, low market supply elasticity, undifferentiated products, just a few large firms with minimal fringe competitors, perfect competitive information, low bankruptcy risk for incumbents, and credible punishment mechanisms for defectors.</p>
                        <p>Week 7 flipped the perspective from incumbents to potential entrants and the challenges they face from existing competitors. Like collusion, predatory pricing is illegal but much harder to prove. Prices often drop during market entry anyway, giving incumbents cover to price below cost and drive out new rivals. For new entrants, the key takeaway are to not underestimate predation threats, and to consider committing to positioning that signals you’re avoiding direct competition.</p>
                        <p>In the final two weeks of class, we focused on network effects for both product adoption and platform competition. Network effects arise when a product’s value to users increases with the size of its network. Understanding network effects is critical. Most hyper-scaling unicorns of the last two decades have leveraged them in some form. In the next section, I’ll apply lessons from these weeks to the foundational AI model industry and explore how likely it is to “tip” toward one main winner.</p>
                        <h2 id="deep-dive">Deep Dive: Platform Economics & Foundational AI Models</h2>
                        <p>The last few years of tech headlines have been dominated by companies releasing and re-releasing new AI models, each trying to one-up the others on whatever latest benchmark Hugging Face is advertising. OpenAI’s ChatGPT, Anthropic’s Claude, Google’s Gemini, xAI’s Grok, and a handful of others are all in this scrum. These massive companies are locked in a struggle for dominance in the AI model field, and the winner will claim trillions in market value while reshaping the tech industry. This deep dive uses a Four Factor framework to analyze the industry and hint at what the AI model landscape might look like ten years from now.</p>
                        <p>First, it’s important to understand the possible market configurations. A winner-take-all arrangement is the most extreme, it results in a complete or effective monopoly where all users engage with the same platform. Mono-homing arrangements still have users interacting with just a single platform, but different users may choose different platforms. Multi-homing arrangements relax constraints further, allowing users to interact with more than one platform at the same time. Industries can evolve between these structures, and while the AI model industry currently exists in a mixed mono-homing and multi-homing state, there’s no guarantee it will stay that way. To understand how this arrangement may evolve, we’ll examine four factors that help determine industry structure.</p>
                        <h4>1. Scale economies</h4>
                        <p>When fixed costs dominate variable costs, firms compete in scale economies where size is massively rewarded. With high fixed costs, fewer firms can front those costs and grow to profitable sizes. With fewer platforms, consolidation into a winner-take-all structure becomes more likely. A typical example is telecommunication companies, which must invest heavily in infrastructure and naturally tend toward monopolies.</p>
                        <p>Currently, AI models are defined by huge upfront training costs, exemplified by Sam Altman’s call for multi-trillion-dollar investments into OpenAI. These massive upfront costs suggest market consolidation, but unlike in telecom, there’s no natural monopoly since multiple players can afford the necessary capex to compete.</p>
                        <h4>2. Homing costs</h4>
                        <p>Homing costs refer to the hassle and expense for users to maintain presence on multiple platforms. These costs can take the form of upfront onboarding costs, ongoing maintenance, or termination procedures and fees. All platforms have some homing costs, but the size of these costs vary enormously. For example, credit cards are easy to acquire and switch between, but cell phone platforms like iPhone and Android require large time and money investments for users to onboard and switch. As homing costs increase, users gravitate toward a single product and market consolidation becomes more likely.</p>
                        <p>For AI models, homing costs vary by use case. For basic API calls and prompting, it’s quite easy to switch between ChatGPT or Gemini. But as enterprises build on top of models and invest in fine-tuning and prompt refinement, switching costs grow substantially. This effect may strengthen as the AI industry matures, but homing costs are unlikely to decisively determine whether the market tips.</p>
                        <h4>3. Strength of Network Effects</h4>
                        <p>Only sometimes network effects are an all-or-nothing feature. Often, products can still provide value on limited networks. Dating apps, for example, only need to reach a certain adoption threshold to become valuable to their users. In contrast, something like the protocol to send emails requires that everyone in the network adopts the same standard or users lose significant value. As the strength of these network effects increases, the likelihood of the industry tipping to a single winner increases.</p>
                        <p>Users’ choices for AI models don’t directly affect the value for everyone else on the platform, so network effects here are relatively weak compared to something like a social network. However, they’re not zero. Indirect network effects exist as users build and release plugins and integrations for specific models. Think of this like the network effects that exist for different programming languages. My choice to write code in Java doesn’t impact your choice to write in C++, but if I create a library that would provide value to you, you miss out on that benefit by not being in the Java network. Like homing costs, the value of a model’s network will continue to grow over time, but overall, these effects are unlikely to be strong enough to drive consolidation.</p>
                        <h4>4. Preferences for Variety of Platforms</h4>
                        <p>The final factor to consider is whether consumers have a “taste for variety”. In some industries, consumers maintain very different preferences and like trying different products if they’re differentiated in cost or quality. The clothing industry will likely never have a single dominant firm because individuals place wildly different value on style, cost, and brand. In industries where strong heterogeneous preferences exist, more platforms are expected to coexist, and tipping towards a single winner becomes less likely.</p>
                        <p>Over the last year, AI models have started to differentiate themselves and encourage users to favor one model over another depending on the specific task at hand. Personally, I use Claude for coding, Gemini for organizing my class notes, and Perplexity for search. This favors coexistence in the AI model industry, but it’s far from a guarantee that this differentiation will persist. Industry leaders constantly harp on the idea of AGI, and this promise suggests that models would eventually coalesce towards a single general intelligence. Personally, I think the promises of AGI are overblown and I expect some degree of specialization in AI models to remain.</p>
                        <h4>What does this all mean?</h4>
                        <p>The foundation AI model industry isn’t clearly headed towards either winner-take-all or peaceful coexistence. Large fixed costs have concentrated the number of players, and increasing homing costs and network effects could push additional platforms out as the industry matures. At the same time, we’ve begun to see increasing specialization in models, and user preferences have fostered a multi-homed arrangement so far. This ambiguity has led to fierce competition between companies fighting for market share through discounts and subsidization as everyone tries to avoid being the first one out.</p>
                        <p>I believe the outcome will vary based on the AI use case. While AI coding may become a monopolized space, search or image generation may support multiple competitors. The takeaways for the current and future environment depend on who you are and how you see the market evolving, but I’ve summarized my broadest advice below.</p>
                        <p className="font-bold">For AI Labs</p>
                        <ul>
                            <li>Don’t assume your space is winner-take-all. Differentiation and positioning matter</li>
                            <li>Build switching costs into your model. Encourage fine-tuning, develop enterprise integrations, and create proprietary data flywheels</li>
                        </ul>
                        <p className="font-bold">For AI Users</p>
                        <ul>
                            <li>Currently low multi-homing costs let you diversify and mitigate the risk of over-investing in the wrong competitor</li>
                            <li>Avoid vendor lock-in until the market structure clarifies, or you may face opportunism by a dominant firm</li>
                        </ul>
                        <p className="font-bold">For Investors</p>
                        <ul>
                            <li>AI models aren’t a winner-take-all bet. Valuing companies as future monopolies may be wrong</li>
                            <li>Cloud computing is likely the closest comparison for AI models: a concentrated but multi-homed industry with strong margins</li>
                        </ul>
                        <p>In conclusion, the foundational model market is still up for grabs. While the entire industry is unlikely to tip towards a single competitor, there’s still potential for increased consolidation and profits for the winners. The race is ongoing, but I predict the victors will be those who understand they’re playing a positioning game, not a race to a tipping point.</p>
                        <p>The lesson from platform economics is that market structure is predictable, but only if you look at the right factors. Through disciplined market evaluation, you can make smarter, long-term strategy decisions.</p>
                    </div>
                    <hr></hr>
                </div>
            </div>

            <footer className="py-32 px-6 bg-gray-900 text-white">
                <Footer onNavigate={onNavigate} />
            </footer>
        </div>
    )
}