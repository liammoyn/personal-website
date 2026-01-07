import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Page } from "./Navigation";
import { socials } from "../public/linkconfig";
import { Mail } from "lucide-react";



export default function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >

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
              {/* TODO: Add resume download link */}
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 pt-12">
          <p className="text-gray-500 mb-6">Explore More</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              onClick={() => onNavigate('writing')}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Writing
            </a>
            <a
              onClick={() => onNavigate('work')}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Experience
            </a>
            <a
              onClick={() => onNavigate('projects')}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a href={socials.linkedIn} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              LinkedIn
            </a>
            <a href={socials.github} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
