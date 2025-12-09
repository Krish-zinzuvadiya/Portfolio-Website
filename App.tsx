import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Moon, Sun, Github, Linkedin, Mail, Instagram, 
  ExternalLink, ChevronDown, ChevronUp, ArrowUp, Download
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PERSONAL_DETAILS, SKILLS, EDUCATION_DATA, PROJECTS, SOCIAL_LINKS } from './constants';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSem, setExpandedSem] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSem = (sem: number) => {
    setExpandedSem(expandedSem === sem ? null : sem);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct mailto link
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-neon-blue selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-card border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                KZ.
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['About', 'Education', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-card"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['About', 'Education', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 dark:text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm md:text-lg font-medium text-neon-blue mb-4 tracking-wider uppercase">
              Welcome to my world
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">{PERSONAL_DETAILS.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              {PERSONAL_DETAILS.title}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/40 transform hover:-translate-y-1 transition-all"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 mb-8 md:mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full opacity-20 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                  alt="Profile" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-10 h-1 bg-neon-blue rounded-full"></span> About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {PERSONAL_DETAILS.bio}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gray-200 dark:border-gray-700`}
                  >
                    <skill.icon size={18} className={skill.color} />
                    <span className="text-sm font-medium dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <a 
                  href={PERSONAL_DETAILS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple font-medium transition-colors group"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neon-purple"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education Journey</h2>
            <p className="text-gray-500 dark:text-gray-400">{PERSONAL_DETAILS.university} ({PERSONAL_DETAILS.duration})</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EDUCATION_DATA.map((sem) => (
              <motion.div
                layout
                key={sem.semester}
                onClick={() => toggleSem(sem.semester)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: sem.semester * 0.05 }}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 glass-card 
                  ${expandedSem === sem.semester ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white/10 dark:bg-white/5 border-neon-blue/50' : 'hover:border-gray-400 dark:hover:border-gray-500'}
                `}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Semester {sem.semester}</h3>
                  {expandedSem === sem.semester ? <ChevronUp className="text-neon-blue" /> : <ChevronDown className="text-gray-400" />}
                </div>

                <AnimatePresence>
                  {expandedSem === sem.semester && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {sem.isUpcoming ? (
                        <div className="flex items-center justify-center h-48 rounded-lg overflow-hidden relative">
                           <div className="absolute inset-0 bg-gray-200/20 dark:bg-black/20 backdrop-blur-md"></div>
                           <h3 className="relative z-10 text-2xl font-bold tracking-[0.2em] text-gray-500/80 dark:text-gray-400/80 uppercase">
                             Upcoming...
                           </h3>
                        </div>
                      ) : (
                        <>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-neon-purple mb-2 uppercase tracking-wide">Key Subjects</h4>
                            <ul className="grid grid-cols-2 gap-2">
                              {sem.subjects.map((sub, idx) => (
                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue"></span>
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-neon-pink mb-2 uppercase tracking-wide">Projects</h4>
                            <div className="space-y-3">
                              {sem.projects.map((proj, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                  <p className="font-medium text-gray-900 dark:text-gray-100">{proj.name}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{proj.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {!expandedSem && (
                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                     Click to view subjects & projects
                   </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">A selection of things I've built</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-neon-blue/20 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                       <a 
                         href={project.githubLink} 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-3 bg-white rounded-full text-black hover:bg-neon-blue hover:text-white transition-colors transform hover:scale-110 shadow-lg"
                         title="View GitHub"
                       >
                         <Github size={20} />
                       </a>
                       <a 
                         href={project.liveLink} 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-3 bg-white rounded-full text-black hover:bg-neon-purple hover:text-white transition-colors transform hover:scale-110 shadow-lg"
                         title="View Live Site"
                       >
                         <ExternalLink size={20} />
                       </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-blue/5 to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 text-gray-700 dark:text-gray-200 hover:text-neon-blue transition-colors p-4 rounded-xl glass-card">
                  <div className="p-3 bg-neon-blue/10 rounded-full text-neon-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                    <p className="font-semibold">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>
                
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 dark:text-gray-200 hover:text-neon-purple transition-colors p-4 rounded-xl glass-card">
                  <div className="p-3 bg-neon-purple/10 rounded-full text-neon-purple">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="font-semibold">Connect Professionally</p>
                  </div>
                </a>

                <div className="flex gap-4 mt-8">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                    <Github size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/40 transform hover:-translate-y-1 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-neon-blue text-white shadow-lg hover:bg-neon-purple transition-colors z-50"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;