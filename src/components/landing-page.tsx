'use client'

import * as React from "react"
import { Calendar, Mail, FileText, MessageSquare, ArrowRight, Github, Star, Check, X, HelpCircle, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const useWordRotation = (words: string[], interval: number) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return words[currentIndex]
}

export function LandingPageComponent() {
  const rotatingWord = useWordRotation(['Calendar', 'Docs', 'Mail', 'Time'], 2000)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const start = window.pageYOffset
      const target = section.getBoundingClientRect().top + window.pageYOffset
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime()

      function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime()
        const time = Math.min(1, ((now - startTime) / 1000))
        const ease = easeInOutCubic(time)
        
        window.scroll(0, start + (target - start) * ease)

        if (time < 1) {
          requestAnimationFrame(scroll)
        }
      }

      function easeInOutCubic(t: number): number {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      requestAnimationFrame(scroll)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#001116] text-[#E0E7F7]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        :root {
          --color-background: 0 17 22;
          --color-primary: 100 92 255;
          --color-secondary: 224 231 247;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }

        body, p, a, li, span {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="px-4 lg:px-6 h-14 flex items-center justify-between fixed w-full z-50 bg-[#001116]/50 backdrop-blur-md"
      >
        <a 
          className="flex items-center cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          <Calendar className="h-6 w-6 mr-2 text-[#645CFF]" />
          <span className="font-bold text-xl font-['Space_Grotesk']">MedLabs</span>
        </a>
        <a 
          className="text-sm font-medium hover:text-[#645CFF] transition-colors cursor-pointer" 
          onClick={() => scrollToSection('features')}
        >
          Features
        </a>
      </motion.header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto text-center"
          >
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
              className="mb-8"
            >
              
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 pb-2 bg-gradient-to-r from-[#645CFF] to-[#E0E7F7] text-transparent bg-clip-text font-['Space_Grotesk'] flex flex-wrap justify-center items-center">
                <span className="mr-2">AI-Powered</span>
                <span className="relative inline-flex items-center justify-center min-w-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWord}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 right-0"
                    >
                      <span className="text-[#645CFF]">{rotatingWord}</span>
                    </motion.span>
                  </AnimatePresence>
                  <span className="invisible">Calendar</span>
                </span>
                <span className="ml-2">Management</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#E0E7F7]/80 max-w-3xl mx-auto font-['Poppins']">
                Streamline your schedule, emails, and documents with the power of artificial intelligence.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#645CFF] hover:bg-[#645CFF]/80 transition-colors duration-300">
                Talk to us
              </Button>
              <Button size="lg" variant="outline" className="text-[#645CFF] border-[#645CFF] hover:bg-[#645CFF]/20 transition-colors duration-300">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </section>
        
        <section id="features" className="w-full py-12 md:py-24 px-4 md:px-6 bg-[#001116]/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center font-['Space_Grotesk']">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: "Smart Scheduling", description: "AI-powered event planning and conflict resolution." },
                { icon: Mail, title: "Intelligent Email", description: "Automated email sorting and smart replies." },
                { icon: FileText, title: "Document Assistance", description: "AI-enhanced document creation and editing." },
                { icon: MessageSquare, title: "Chat Integration", description: "Seamless messaging app connectivity." },
                { icon: Github, title: "Version Control", description: "Track changes and collaborate effortlessly." },
                { icon: ArrowRight, title: "Workflow Automation", description: "Streamline repetitive tasks with AI." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-[#645CFF] border-[#E0E7F7]/20 h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-[#E0E7F7]/20">
                    <CardHeader>
                      <feature.icon className="h-8 w-8 mb-2 text-[#E0E7F7]" />
                      <CardTitle className="text-xl font-semibold font-['Space_Grotesk'] text-[#E0E7F7]">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#E0E7F7] font-['Poppins']">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 px-4 md:px-6 bg-gradient-to-r from-[#001116] to-[#645CFF]/20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Space_Grotesk']">Ready to Revolutionize Your Productivity?</h2>
            <p className="text-xl mb-8 text-[#E0E7F7]/80 max-w-2xl mx-auto font-['Poppins']">
              Join thousands of users who have transformed their digital life with Calendar Helper.
            </p>
            <Button size="lg" className="bg-[#645CFF] hover:bg-[#645CFF]/80 text-[#E0E7F7] transition-colors duration-300">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>
      </main>
      <footer className="py-6 px-4 md:px-6 border-t border-[#645CFF]/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#E0E7F7]/60 font-['Poppins']">© 2024 MedLabs®. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a className="text-sm text-[#E0E7F7]/60 hover:text-[#645CFF] transition-colors font-['Poppins']" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-[#E0E7F7]/60 hover:text-[#645CFF] transition-colors font-['Poppins']" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-[#E0E7F7]/60 hover:text-[#645CFF] transition-colors font-['Poppins']" href="#">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
