import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { ArrowRight, Code2, FileText } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/generated/carousel';
import { ImageWithFallback } from '../components/generated/ImageWithFallback';
import { Page } from '../components/Navigation';
import { projectData } from '../public/projectinfo';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';


export default function LandingPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [imageMargin, setImageMargin] = useState(0);

  useEffect(() => {
    const updateMargin = () => {
      const vhVwDiff = window.innerHeight - window.innerWidth;
      setImageMargin(vhVwDiff * 0.25);
    };

    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} onPage='home' />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row min-h-screen bg-linear-to-b from-white to-gray-50">
        <HeroSection imageMargin={imageMargin} />
      </section>

      {/* MBA Section - Most Recent */}
      <section id="mba" className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-gray-100 to-gray-50 relative">
        <MBASection onNavigate={onNavigate} />
        <div className="absolute top-8 right-8 text-gray-400 text-sm">2024-2026</div>
      </section>

      {/* Amazon Section */}
      <section id="aws" className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-white to-gray-50 relative">
        <AmazonSection onNavigate={onNavigate} />
        <div className="absolute top-8 right-8 text-gray-500 text-sm">2021-2024</div>
      </section>

      {/* Projects Section */}
      <section id="proj" className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-gray-100 to-gray-50 relative">
        <ProjectsSection onNavigate={onNavigate} />
        <div className="absolute top-8 right-8 text-gray-500 text-sm">2020-2026</div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 px-6 bg-gray-900 text-white">
        <Footer onNavigate={onNavigate} />
      </footer>
    </div>
  );
}

function HeroSection({ imageMargin }: { imageMargin: number }) {
  return (
    <>
      <motion.div
        className="w-full h-[50vh] lg:w-[50vw] lg:h-screen relative overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ImageWithFallback
          src="HQ_Portrait.jpg"
          alt="Minimalist workspace"
          className="object-fill lg:object-cover lg:h-screen relative top-(--image-margin) lg:top-0"
          style={{ '--image-margin': `${imageMargin}px` } as React.CSSProperties}
        />
      </motion.div>
      <div className="flex flex-row lg:flex-col lg:w-[50vw] justify-center p-12 lg:py-16 font-serif">
        <div>
          <motion.img
            src="hi.webp"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-4xl py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My name is Liam, I'm an engineer and product developer
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-2xl">See what I've been up to:</h4>
          <ul className='text-lg pl-4'>
            {[
              { title: "MBA Writing", link: "#mba" },
              { title: "Work Experience", link: "#aws" },
              { title: "Personal Projects", link: "#proj" },
            ].map((item, index) => (
              <li key={index} className="mt-1">
                <a className="inline-flex items-center gap-1 hover:gap-4 transition-all" href={item.link}>
                  {item.title} <ArrowRight className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  )
}

function LookingForSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <div ref={ref} className="max-w-4xl mx-auto w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm tracking-wider mb-6">
          WHAT I'M LOOKING FOR
        </div>
        <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
          Product Development at a Startup
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          I'm seeking to join an early-stage startup where I can leverage my technical background
          and business training to build products that solve real problems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
      >
        <button
          onClick={() => onNavigate('projects')}
          className="group p-8 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
        >
          <Code2 className="w-10 h-10 mx-auto mb-4 text-gray-900 group-hover:text-white transition-colors" />
          <h3 className="text-xl mb-2">Computer Science Projects</h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-sm mb-4">
            Technical work spanning ML, web apps, and systems
          </p>
          <span className="inline-flex items-center gap-2 text-sm">
            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <a
          href="#"
          className="group p-8 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
        >
          <FileText className="w-10 h-10 mx-auto mb-4 text-gray-900 group-hover:text-white transition-colors" />
          <h3 className="text-xl mb-2">Business Writing</h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-sm mb-4">
            Case studies, strategy docs, and product thinking
          </p>
          <span className="inline-flex items-center gap-2 text-sm">
            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </motion.div>
    </div>
  );
}

function MBASection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <div ref={ref} className="max-w-5xl mx-auto w-full">
      <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm tracking-wider mb-6">
        Business Strategy & Leadership
      </div>
      <h2 className="text-5xl md:text-7xl text-gray-900 mb-6">
        Chicago Booth MBA
      </h2>

      <div>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          I joined Booth's MBA program to grow as a holistic product developer. I'm blending my technical ability with business understanding to solve more complex real-world problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[
          { label: 'Applied AI, Strategic Management, and Entreprenuership', sublabel: 'Concentrations' },
          { label: 'Chair of Booth AI Group, Student Mentor for Booth Tech Group', sublabel: 'Club Affiliations' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-900 shadow-sm"
          >
            <h3 className="text-lg text-gray-900 mb-1">{item.label}</h3>
            <p className="text-sm text-gray-600">{item.sublabel}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => onNavigate('writing')}
        className="group cursor-pointer inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all"
      >
        <span className="text-lg">Read about my takeaways from class</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function AmazonSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <div ref={ref} className="max-w-5xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div>
            <div className="inline-block px-4 py-2 bg-gray-800 text-white text-sm tracking-wider mb-6">
              Software & Product Engineering
            </div>
            <h2 className="text-5xl md:text-7xl text-gray-900 mb-6">
              Amazon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              I designed and scaled distributed systems, leading technical initiatives across multiple Amazon services to deliver reliable, high-performance solutions for millions of customers.
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div className="text-center">
              <div className="text-4xl text-gray-900 mb-1">4</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-gray-900 mb-1">3</div>
              <div className="text-sm text-gray-600">Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-gray-900 mb-1">10M+</div>
              <div className="text-sm text-gray-600">Users</div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('work')}
            className="group cursor-pointer inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all"
          >
            <span className="text-lg">See all of my work experience</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div
          className="space-y-4"
        >
          {[
            { title: 'Techincal Product Managment Internship', desc: 'Defined product and technical requirements for Amazon Grocery\'s marketing technology assessment strategy', year: '2025-2025', team: 'Amazon Grocery' },
            { title: 'Software Development Engineer II', desc: 'Led team architecting and building green-field distributed work execution system for CloudWatch Application Signals', year: '2023-2024', team: 'AWS CloudWatch' },
            { title: 'Software Development Engineer I', desc: 'Designed and developed full-stack features for online A/B testing framework service CloudWatch Evidently', year: '2021-2023', team: 'AWS CloudWatch' },
          ].map((role, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 border-l-4 border-gray-800"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg text-gray-900">{role.title}</h3>
                <p className="text-gray-500 text-xs">{role.year}</p>
              </div>
              <p className="text-gray-600 text-sm mb-1">{role.desc}</p>
              <p className="text-gray-500 text-xs">{role.team}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  const featuredProjects = projectData.filter(p => p.featured)

  return (
    <div ref={ref} className="max-w-5xl mx-auto w-full">
      <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm tracking-wider mb-6">
        Engineering and Business Development
      </div>
      <h2 className="text-5xl md:text-7xl text-gray-900 mb-6">
        Featured Projects
      </h2>

      <Carousel className="w-full mb-8" opts={{ loop: true, dragFree: true }}>
        <CarouselContent>
          {featuredProjects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <ProjectCard project={project} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <button
        onClick={() => onNavigate('projects')}
        className="group cursor-pointer inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all"
      >
        <span className="text-lg">Browse my entire portfolio</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
