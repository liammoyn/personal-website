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
    { name: '"LLM Stats Leaderboard," llm-stats.com', href: 'https://llm-stats.com/models/compare/claude-opus-4-1-20250805-vs-deepseek-v3.1-vs-chatgpt-4o-latest' },
]

interface NPSArticleProps {
    onNavigate: (page: Page) => void;
}

export default function NVSArticle({ onNavigate }: NPSArticleProps) {
    const { activeSection, sectionProgress, sectionDots, showToc } = useTableOfContents({ sections });

    return (
        <div className="min-h-screen bg-white">
            <Navigation onNavigate={onNavigate} onPage='new-venture-strategy' />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">

                    <div className="prose prose-gray lg:prose-lg">
                        <h1>New Venture Strategy</h1>
                    </div>
                </div>
                <div className="relative prose prose-gray lg:prose-lg max-w-3xl mx-auto">
                    {/* TOC slides in from left when cursor enters left quarter */}
                    <div className={`absolute top-0 h-full hidden lg:block left-[calc((100vw-48rem)/-4)] transition-all duration-300 ease-out ${showToc ? 'opacity-100 -translate-x-1/2' : 'opacity-0 -translate-x-full'}`}>
                        <TableOfContents sections={sections} activeSection={activeSection} sectionProgress={sectionProgress} sectionDots={sectionDots} />
                    </div>
                    <div className="article-body">
                        <h2 id="about">About the Class</h2>
                        <p>New Venture Strategy is an essential class at Booth for aspiring entrepreneurs and venture capitalists.</p>
                        <p>Taught by Gregory Bunch, the course helps students develop and evaluate new business ideas. Through intensive case analysis, the course builds models for success and failure in entrepreneurial ventures, drawing on principles from microeconomics and game theory.</p>
                        <p>Gregory D. Bunch is an adjunct professor of economics at Chicago Booth with years of experience as an entrepreneur and strategist. He founded Masterplan International Corporation, a strategy consulting firm, and co-founded Oration, a Bay Area healthcare software startup. He also worked as a partner at Brandtrust, a brand strategy consultancy. Professor Bunch is one of the most passionate professors I've had at Booth, bringing infectious energy to every one of our early morning classes.</p>
                        <p>New Venture Strategy teaches the 4 steps required for any startup venture. Weeks 1-2 focus on generating startup ideas. Weeks 3-5 tackle judging ideas and evaluating an opportunity's success potential. Weeks 6 and 9 cover how to fund an idea and work with VCs. Finally, throughout the course, students execute their ideas by working in groups to build their own startups, culminating in a final pitch during weeks 7 and 8. This class is indispensable for startup founders, operators, and investors, and I've found myself revisiting its lessons throughout my time at Booth.</p>
                        <h2 id="learned">What I learned</h2>
                        {/* TODO: Make into quote block */}
                        <p>"A startup is a temporary organization in search of a business model"</p>
                        <p>The class began by introducing several frameworks for understanding how to think about startups and the role of their leadership.</p>
                        <p>Every startup founding consists of 4 explicit or implicit steps. Founders generate and judge ideas before picking a single idea to fund and execute. Each stage requires its own operations and skillsets, presenting unique opportunities to go awry. Throughout all of them, though, a founder needs to respect 3 limits on their scope. They should focus on a single technology or offering, staying focused on the right idea. They should cater to a single market, allowing them to do it right before taking on the world. And they should work within a limited time frame to avoid dragging out a mistaken path.</p>
                        <p>As a startup grows, its goals must evolve and CEOs must juggle competing stakeholders and incentives. Bunch breaks this down into four stages, each with its own central question and primary stakeholders to consider.</p>
                        <ul>
                            <li><p><span className="font-bold">Pre-start</span>: "Is this a good idea?" – Focus on your customers</p></li>
                            <li><p><span className="font-bold">Initial Operations</span>: "How shall we survive?" – Focus on customers and employees</p></li>
                            <li><p><span className="font-bold">Liquidity Event</span>: "How do we realize value?" – Focus on owners</p></li>
                            <li><p><span className="font-bold">Corporate</span>: "How shall we grow?" – Focus on customers, employees, owners, and society</p></li>
                        </ul>
                        <p>These stages inevitably bleed into each other, and it's impossible to answer one question without considering the others. That's why New Venture Strategy touches on all these aspects in some capacity.</p>
                        <p>In Week 2 we focused on harnessing creative thinking to generate startup ideas. Like in New Products and Services, NVS encouraged using brainstorming techniques and creativity frameworks to generate lots of ideas before narrowing in on any one path. Bunch adds an extra layer to this process by encouraging us to frame our brainstorming in the context of living in a VUCA world. VUCA is an acronym borrowed from the military that stands for Volatile, Uncertain, Complex, and Ambiguous. VUCA captures the chaotic nature of modern business environments. Startup leaders need to acknowledge the limitations these different forces create and direct their thinking so they can adapt to the tumult of the real world. The two strategies to do this are world-building and perspective-shifting.</p>
                        <p>World-building is an approach focused on understanding the conditions and rules that define the external world. It asks founders to think deeply about the environment their business operates in and build up a "story-world" that organizes the assumptions they're working under. This world should at minimum encompass the categories described in a PESTLE analysis, and it needs to constantly adapt to new information. Creative thinking then asks founders to consider what happens if one key condition or rule in this "story-world" changes, and how that shift might introduce risks or present new opportunities.</p>
                        <p>Perspective-shifting is an exercise in empathy that asks founders to think from the viewpoint of different stakeholders in their business. Most often, this means your intended customer, but it can also include employees, competitors, shareholders, regulators, suppliers, or critics. Successful perspective-shifting requires actually talking to and observing these stakeholders, leading to a deeper understanding of why people behave the way they do and how your business might engage with them. Crucially, this process requires building self-awareness alongside your understanding of others. Bunch advocates using the Enneagram framework to develop better self-awareness so you can account for your own biases when assuming a new perspective (I discovered that I'm a type 1 with a 9 wing).</p>
                        <p>Weeks 3 and 4 transitioned to the next stage of idea refinement and introduced the POP framework for evaluating a startup's chance of success. POP combines three evaluation frameworks to judge a startup's People, Opportunity, and Proof.</p>
                        {/* TODO: Spacing break */}
                        <p></p>
                        <p>Evaluating how well-suited a startup's people are for a specific deal comes down to another acronym: SKIN, which stands for Scrappiness, Knowledge, Integrity, and Network.</p>
                        <ul>
                            <li><p><span className="font-bold">Scrappiness</span>: Does this person have the drive, grit, and resilience a startup demands? Startups operate in a VUCA world and need people who can push through adversity. Judge this based on stories about overcoming setbacks.</p></li>
                            <li><p><span className="font-bold">Knowledge</span>: What does this person know about their domain and function? This includes knowledge about operating a business in this specific domain and expertise in the job function they're in.</p></li>
                            <li><p><span className="font-bold">Integrity</span>: Can we trust them? This one is harder to judge but critical to a deal's success. Don't fall for charlatans!</p></li>
                            <li><p><span className="font-bold">Network</span>: Who do they know? Like it or not, having a strong network is a powerful predictor of success. VCs can help with this, but founders need to proactively reach out and expand their own networks.</p></li>
                        </ul>
                        {/* TODO: Spacing break */}
                        <p></p>
                        <p>Opportunity is the heart of the POP framework. This step evaluates the strategy behind the startup's core idea. It requires answering several universal questions for every startup, as well as specific questions based on the model this startup follows. I'll cover the eight different startup models and their relevant questions later, but for any business idea, you'll always need to answer:</p>
                        <ul>
                            <li><p><span className="font-bold">Who is the customer?</span> Identify the target audience. Demographics matter, but psychographics matter more, understand how your target audiences' behavior.</p></li>
                            <li><p><span className="font-bold">Why do they buy?</span> Figure out both why customers buy in this category and why they'd buy from this specific company. Combine industry research with a clear definition of the startup's value proposition and competitive advantage.</p></li>
                            <li><p><span className="font-bold">What is their strategy model?</span> There are countless startup ideas, but only a handful of viable business strategies. Match their approach to one of the models below and answer the relevant questions.</p></li>
                            <li><p><span className="font-bold">What is the scale vs. the risk?</span> Understand the size of the opportunity. Can this company scale large enough to deliver a successful exit for you? Weigh this potential against the investment risk required to capture it.</p></li>
                            
                        </ul>

                        {/* TODO: Spacing break */}
                        <p></p>
                        <p>Proof is the final step in POP, and this is where theory meets reality. For each step of POP, a startup needs to generate evidence supporting their assumptions and claims. Without it, even the most polished pitch deck is worthless. But not all proof carries equal weight. During this step, evaluate each piece of evidence the startup presents using the following criteria:</p>
                        <ul>
                            <li><p><span className="font-bold">Interesting</span>: Make a judgment. Is this source stating the obvious, or does it add real value to their argument?</p></li>
                            <li><p><span className="font-bold">Source</span>: True or false. Is the data source legitimate and reliable? If not, disregard the claim.</p></li>
                            <li><p><span className="font-bold">Accurate</span>: True or false. Is this claim actually true? Fact-check it yourself. The more the startup depends on this claim, the more verification it requires.</p></li>
                            <li><p><span className="font-bold">Powerful</span>: Make a judgment. Does this claim predict a successful exit? Keep your eye on the prize, make sure each data point moves this startup closer to success.</p></li>
                        </ul>

                        {/* TODO: Spacing break */}
                        <p></p>
                        <p>Now let's backtrack and examine the 8 different strategy models a startup can follow. Sometimes companies fit into multiple categories, but most new ventures should focus on just one as their core. While this list isn't necessarily exhaustive, if you can't fit a startup into one of these buckets, make damn sure they have a good reason, and don't confuse a lack of direction with innovation.</p>
                        <p><span className="font-bold">1. Geography</span></p>
                        <p>Most commercial stores fall into this category. Geography strategies leverage a business's physical location to drive sales. For example, Starbucks has historically tried to saturate areas around their stores to push out competition and create a natural monopoly.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>How good is the site selection?</p></li>
                            <li><p>Who can move next door?</p></li>
                        </ul>
                        <p><span className="font-bold">2. Eliminate the Middle Person</span></p>
                        <p>The direct-to-consumer trend exemplifies this strategy in action. Eliminate the Middle Person strategies lower costs by removing double marginalization from intermediaries in the supply chain. The modern economy is vast and interconnected, creating opportunities for this approach, but it's important to understand why the market is structured the way it is before you try to reinvent it.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>Do we have more expertise than the incumbents?</p></li>
                            <li><p>Do we have more capital than the incumbents?</p></li>
                        </ul>
                        <p><span className="font-bold">3. Brand</span></p>
                        <p>Many consumer products integrate some element of this strategy. Brand strategies work by building a recognizable image of the firm or product in consumers' minds. A good brand framework is BCD: the brand should show the product is Better, Cheaper, or Differentiated from its competitors.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>How will we create the image/brand?</p></li>
                            <li><p>How will we sustain the image/brand?</p></li>
                        </ul>
                        <p><span className="font-bold">4. Low-Cost Producer</span></p>
                        <p>Many Chinese DTC companies lean into this strategy. Low-Cost Producer strategies deliver a product or service at a lower cost than the competition. This often involves harnessing economies of scale, special expertise, innovation, or geographical advantages.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>How did we get to be low cost?</p></li>
                            <li><p>Are we committed to high volume?</p></li>
                            <li><p>How hard will it be to leapfrog us?</p></li>
                        </ul>
                        <p><span className="font-bold">5. New Technology</span></p>
                        <p>These firms are on the cutting edge of innovation. New Technology strategies use new technology to better meet a need underserved by the market. A downside of this strategy is that technology can become obsolete over time, while brands comparatively grow in value.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>Does it work?</p></li>
                            <li><p>Does the market care?</p></li>
                            {/* TODO: Make sub bullets */}
                            <li><p>Is there a user base?</p></li>
                            <li><p>Is it better than what's available?</p></li>
                            <li><p>Is it economically viable? (switching cost, price to solve, etc.)</p></li>
                            {/* End sub bullets */}
                            <li><p>Can we protect it?</p></li>
                        </ul>
                        <p><span className="font-bold">6. Commodity Producer</span></p>
                        <p>Firms selling undifferentiated goods face specific constraints. Commodity Producer strategies involve offering goods in an undifferentiated, typically competitive market. For these reasons, these firms tend to have lower profit margins than other businesses.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>Can we control the input costs?</p></li>
                            <li><p>Can we control the output prices?</p></li>
                        </ul>
                        <p><span className="font-bold">7. Marketplace</span></p>
                        <p>Marketplaces and platforms provide users with a directed search mechanism. Marketplace strategies involve the firm acting as an intermediary between one or more groups with interconnected needs.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>How will we get big fast on each side?</p></li>
                            <li><p>How will we ensure trust between parties?</p></li>
                            <li><p>How will we monetize it?</p></li>
                        </ul>
                        <p><span className="font-bold">8. Be a Crook</span></p>
                        <p>Okay, so you probably shouldn't actually do this one, but there are plenty of instances of businesses skirting the law to exploit opportunities unavailable to more honest brokers. When someone presents you with a new business idea, make sure they're not making money because they're a crook.</p>
                        <p>Questions to Answer:</p>
                        <ul>
                            <li><p>When do we go to jail?</p></li>
                        </ul>
                        
                        {/* TODO: Spacing break */}
                        <p></p>
                        <p>The POP framework and business models are really the heart of New Venture Strategy. For VCs, it provides a framework for weeding through startup ideas, and for founders, it's a model to measure against and identify your own weaknesses. This framework should drive a startup's pitch deck, but when talking to VCs, there are some idiosyncrasies hard to capture in frameworks. The last three weeks of class were spent building intuition around working with VCs through guest speakers and pitching our own group startup ideas to a panel of investors.</p>
                        <p>Sam Gill, president of the Doris Duke Foundation, came during week 7 to talk about impact investing and the faults of the venture capital industry. Joyce J. Shen, a partner at Together Expedition and professor at UC Berkeley, came during week 9 to discuss investing rounds and how to calculate your ROI as a founder. The takeaway from both speakers was to practice caution. It's almost always better to avoid taking VC money if possible because you sacrifice your autonomy while staying at the bottom of the payout ladder.</p>
                        <p>Finally, I want to end with a few short-form takeaways from class. Despite how many frameworks are covered in NVS, Professor Bunch enjoys teaching non-linearly and often drops his idioms throughout a lecture. Startups are complex and messy endeavors, and you'll have to build up your own bank of idioms through experience. But for now, remember:</p>
                        {/* TODO: Make all into quote blocks */}
                        <p>Moving first is not an advantage unless you can defend it</p>
                        <p>Focus on the salient facts and derive your judgments from them</p>
                        <p>Don't go to court!</p>
                        <p>Build your data, representations, and patterns and you'll uncover more problems worth solving</p>
                        <p>Exploration is a cost in search of future profits</p>
                        <p>Patterns solve puzzles</p>
                        <p>Customers buy when you put the right person in the right place with the right solution</p>
                        <p>The world needs more entrepreneurs (committed to human flourishing)!</p>
                        {/* End quote blocks */}

                        <h2 id="deep-dive">Deep dive: Strategic Models of Major AI Companies</h2>
                        <h3>OpenAI: New Technology</h3>
                        <p>OpenAI kicked off the AI wave we've been riding for the last half-decade when they released ChatGPT. Powered by GPT-3, ChatGPT was the first commercial LLM application to deliver on the promises of general computer intelligence, and it took the world by storm. OpenAI has continued iterating on their product and prides itself on releasing at the industry's frontier, even as new players enter the market. This focus on the cutting edge is what makes OpenAI's strategic model a New Technology play. They've had incredible growth and early success, but to assess their long-term prospects, we need to examine their model's critical questions.</p>
                        <h4>Does it Work?</h4>
                        <p>The goalposts for frontier models have moved considerably over the last few years, but it's hard to argue that ChatGPT hasn't provided enormous new capabilities to its users. Hallucinations plagued early GPT-3 releases, but increasingly powerful models combined with more robust reasoning frameworks have enabled AI to be used across dozens of sectors and enterprises today. So yes, this works!</p>
                        <h4>Does the Market Care?</h4>
                        <p>ChatGPT broke the record for time to 1 million users in just 5 days. Since then, AI usage has exploded, with an estimated 40 million daily Chat users today. LLMs can solve problems that would normally require humans with specialized training hours in just minutes at a fraction of the cost. ChatGPT's online web application made individual adoption essentially free, and switching costs for enterprises have been steadily lowering as compliance features roll out. There has never been a more instantly disruptive technology, so of course the market cares.</p>
                        <h4>Can we Protect It?</h4>
                        <p>Here's where things get a little iffy. OpenAI was the first mover, and they initially believed their expertise would keep them one step ahead of the competition. However, OpenAI has faced intense competition across the board, and their market share has dropped considerably. Anthropic's Claude focused on large context windows and optimized for coding workflows, winning over the critical developer market. Google used their vast resources to build comprehensive AI development toolkits that integrate with their Gemini model and provide more complete offerings. While OpenAI and GPT still command a dominant market position, it's becoming less clear whether they have the moat they need to protect their tech.</p>

                        <h3>DeepSeek: Low-Cost Producer</h3>
                        <p>DeepSeek released its R1 model in early 2025 and promptly wiped out about $1 trillion in market cap from US tech stocks. They built their model without access to the highest-end chips yet still matched the performance of leading models. Since then, they've been selling API access at a fraction of competitors' prices<Citation number={1} citations={citations} />. Their focus on slashing training and inference costs upended industry assumptions. To understand their future prospects, though, we need to examine their strategy model's questions.</p>
                        <h4>How did we get to be low cost?</h4>
                        <p>DeepSeek achieved their low-cost advantage through technical innovation. Their Mixture of Experts (MoE) architecture reduces the number of active parameters for any given inference, lowering the computational burden. Hardware optimization lets them squeeze more performance from older chips without increasing costs. Innovation drives step-change improvements in capabilities, but it also exposes this strategy to the same weakness facing any new technology: without a strong IP or an expertise moat, competitors can simply copy your approach.</p>
                        <h4>Are we committed to high volume?</h4>
                        <p>Daily active user numbers for major AI providers are proprietary, but DeepSeek is likely the 3rd or 4th largest model provider today. Their low-cost offering appeals to high-volume developer workflows, and they have unique access to China's massive market. Like all model providers, they've experienced explosive growth and continue scaling their offerings as fast as possible.</p>
                        <h4>How hard will it be to leapfrog us?</h4>
                        <p>A low-cost strategy built on technological innovation leaves DeepSeek vulnerable to imitation. OpenAI has already released open-source mini and nano models at comparable prices, and a wave of cheap open-weight models has flooded the market in recent years. While DeepSeek has maintained its market position so far, it's unclear whether they'll remain the dominant low-cost option.</p>
                        
                        <h3>Hugging Face: Marketplace</h3>
                        <p>Hugging Face started as a chatbot app but pivoted into a marketplace for sharing and running AI models. They allow AI researchers and labs to publish their models so developers and enterprises can use them through Hugging Face's interface. Hugging Face established itself as the standard for model sharing by developing open-source tooling and offering a generous free tier. To understand how sustainable their position is, we need to look at their strategy model's questions.</p>
                        <h4>How will we get big fast on each side?</h4>
                        <p>On the supply side, Hugging Face grew by providing desperately needed tooling to AI researchers in a "neutral" ecosystem (as opposed to AWS SageMaker or Google Vertex). They built an open-source, framework-agnostic Python Transformers library, then created an easy-to-use platform that freed researchers to focus on their core competency: building models. On the demand side, Hugging Face abstracted the complexity of using pre-trained models and provided a framework that let developers onboard easily without locking themselves into any specific model or ecosystem.</p>
                        <h4>How will we ensure trust between parties?</h4>
                        <p>Hugging Face has invested heavily in safety features to build platform trust. They've developed auto-scanning capabilities, sandboxed execution, and a safe model weight format to reduce the risk of malicious model injections. Their commitment to open-source has helped build credibility with developers, while enterprise-level compliance tools have enabled adoption from the industry's biggest players.</p>
                        <h4>How will we monetize it?</h4>
                        <p>Hugging Face has followed the monetization playbook of many enterprise software companies: offer a freemium model for individuals alongside paid enterprise plans. Model suppliers can pay for private hosting and enterprise-level compliance tooling, while developers can pay for managed inference and compute. This freemium strategy keeps their growth pipeline intact by attracting individual users while capitalizing on enterprise customers who need advanced features.</p>

                        {/* TODO: Spacing break */}
                        <p></p>
                        <p>Analyzing companies through the lens of strategy models helps you focus on the important questions they need to answer to succeed. OpenAI's rise has been meteoric, but they'll need to find new moats to protect their advantage, and their runway might be shorter than their valuation implies. DeepSeek lowered the cost floor for the entire industry, but to make this profitable, they need to continue scaling their volume while aggressively protecting their low-cost advantages. Hugging Face has positioned itself to benefit from a fragmented AI industry, but their long-term success depends on their ability to serve both sides of their market while monetizing intelligently. I encourage any aspiring founder to take the time to define their own strategy model and answer the questions their business will rely on.</p>
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