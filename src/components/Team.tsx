import { Github, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from '@/lib/animation-configs';

const Team = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section 
      id="team" 
      className="py-24 bg-slate-950 relative"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundSize: '60px 60px'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center tracking-tight"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          Meet the Team
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="group bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col" variants={animations.fadeInUp}>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">Conner</h3>
              <p className="font-medium mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Full-Stack Developer</p>
              <p className="text-gray-300 leading-relaxed">
                Computer Science student @ CU Boulder, Synthetic Biology Software Research Assistant, and SWE Team Lead @ Blueprint Boulder.
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.connergroth.com" className="text-slate-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/connergroth/" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://github.com/connergroth" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </motion.div>

          <motion.div className="group bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col" variants={animations.fadeInUp}>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">Isaias</h3>
              <p className="font-medium mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Full-Stack Developer</p>
              <p className="text-gray-300 leading-relaxed">
                Computer Science student @ CU Boulder, Machine Learning Research Assistant, and SWE Intern @ PolyLabs.
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://isaias-perez-portfolio.onrender.com/." className="text-slate-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/isaias-perez21/" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://github.com/IP-04" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </motion.div>

          <motion.div className="group bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col" variants={animations.fadeInUp}>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">Jake</h3>
              <p className="font-medium mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Legal + Product Strategy</p>
              <p className="text-gray-300 leading-relaxed">
                Pre-Law student @ Liberty, Legal Intern.
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/jake-pechart-2516732b9/" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>  
    </section>
  );
};

export default Team; 