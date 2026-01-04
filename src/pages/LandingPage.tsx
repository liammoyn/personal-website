import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { ArrowRight, GraduationCap, Briefcase, Code2, Rocket, Mail, ChevronDown, FileText } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { socials } from '../public/linkconfig';
import { Page } from '../utils/types';


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
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full h-[50vh] lg:w-[50vw] lg:h-screen relative overflow-hidden">
          <ImageWithFallback
            src="HQ_Portrait.jpg"
            alt="Minimalist workspace"
            className="object-fill lg:object-cover lg:h-screen relative top-[var(--image-margin)] lg:top-0"
            style={{ '--image-margin': `${imageMargin}px` } as React.CSSProperties}
          />
        </div>
        <div className="flex flex-row lg:flex-col lg:w-[50vw] justify-center p-12 lg:py-16 font-serif">
          <div>
            <img src="hi.webp" />
            <p className="text-4xl py-10">My name is Liam and I'm an engineer and product developer</p>
          </div>
          <div>
            <h4 className="text-2xl">See what I've been up to:</h4>
            <ul className='text-lg pl-1'>
              <li><a>MBA Writing</a></li>
              <li><a>Personal Projects</a></li>
              <li><a>Work Experience</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Looking For Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-white relative">
        <LookingForSection onNavigate={onNavigate} />
        <div className="absolute top-8 right-8 text-gray-300 text-sm">Now</div>
      </section>

      {/* MBA Section - Most Recent */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gray-50 relative">
        <MBASection onNavigate={onNavigate} />
        <div className="absolute top-8 right-8 text-gray-400 text-sm">2022-2024</div>
      </section>

      {/* Amazon Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-white relative">
        <AmazonSection onNavigate={onNavigate} />
        <div className="absolute top-8 right-8 text-gray-500 text-sm">2018-2022</div>
      </section>

      {/* Undergrad Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gray-50 relative">
        <UndergradSection onNavigate={onNavigate} />
        <div className="absolute top-8 right-8 text-gray-600 text-sm">2014-2018</div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 px-6 bg-gray-900 text-white">
        <FadeInSection delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl mb-8">Let's Build Something</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              I'm looking for opportunities to join innovative teams and create products that matter. 
              Let's connect.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a
                href={socials.email}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Download Resume
              </a>
            </div>

            <div className="border-t border-gray-800 pt-12">
              <p className="text-gray-500 mb-6">Explore More</p>
              <div className="flex flex-wrap gap-6 justify-center">
                <button
                  onClick={() => onNavigate('school')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Education
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <a href={socials.linkedIn} className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href={socials.github} className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </footer>
    </div>
  );
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
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
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm tracking-wider mb-6">
          Chicago Booth MBA
        </div>
        <h2 className="text-5xl md:text-7xl text-gray-900 mb-6">
          Business Strategy & Leadership
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: GraduationCap, label: 'Top Business School', sublabel: 'Class of 2024' },
          { icon: Rocket, label: 'Product Management', sublabel: 'Focus Area' },
          { icon: Briefcase, label: 'Consulting Internship', sublabel: 'Summer 2023' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: -5 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            className="bg-white p-6 rounded-lg border border-gray-900 shadow-sm"
          >
            <item.icon className="w-8 h-8 text-gray-900 mb-4" />
            <h3 className="text-lg text-gray-900 mb-1">{item.label}</h3>
            <p className="text-sm text-gray-600">{item.sublabel}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Developed business acumen and strategic thinking skills. Focused on product management, 
          entrepreneurship, and leveraging technology for business impact.
        </p>
        <button
          onClick={() => onNavigate('school')}
          className="group inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all"
        >
          <span className="text-lg">Learn about my education</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-gray-800 text-white text-sm tracking-wider mb-6">
              SOFTWARE DEVELOPER
            </div>
            <h2 className="text-5xl md:text-7xl text-gray-900 mb-6">
              Amazon Web Services
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Built scalable systems and led technical initiatives for AWS services. 
              Worked with distributed systems, cloud infrastructure, and served millions of customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
          </motion.div>

          <motion.button
            onClick={() => onNavigate('work')}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all"
          >
            <span className="text-lg">See my work experience</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {[
            { title: 'Senior SDE', desc: 'Led team on infrastructure scaling', year: '2020-2022' },
            { title: 'SDE II', desc: 'Built distributed caching system', year: '2019-2020' },
            { title: 'SDE I', desc: 'Developed API services for AWS', year: '2018-2019' }
          ].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-gray-50 p-6 border-l-4 border-gray-800"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg text-gray-900">{role.title}</h3>
                <Briefcase className="w-5 h-5 text-gray-800" />
              </div>
              <p className="text-gray-600 text-sm mb-1">{role.desc}</p>
              <p className="text-gray-500 text-xs">{role.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function UndergradSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  const projects = [
    { title: 'Senior Design Project', tech: 'Embedded Systems' },
    { title: 'Research Assistant', tech: 'Computer Vision' },
    { title: 'Hackathon Winner', tech: 'Mobile App' },
    { title: 'Teaching Assistant', tech: 'Data Structures' }
  ];

  return (
    <div ref={ref} className="max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-block px-4 py-2 bg-gray-700 text-white text-sm tracking-wider mb-6">
          COMPUTER ENGINEERING
        </div>
        <h2 className="text-5xl md:text-7xl text-gray-900 mb-6">
          Northeastern University
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Built a strong foundation in computer science, mathematics, and engineering principles. 
          Discovered my passion for building technology that solves real problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -10 : 10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -10 : 10 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="bg-white p-8 rounded-lg border border-gray-700 hover:border-gray-900 transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Code2 className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{project.tech}</span>
            </div>
            <h3 className="text-xl text-gray-900">{project.title}</h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <button
          onClick={() => onNavigate('school')}
          className="group inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all"
        >
          <span className="text-lg">Explore my education journey</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}