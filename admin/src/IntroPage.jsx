import { motion } from 'framer-motion';
import { Code2, Rocket, Star, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';

export default function IntroPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleNavigate = () => {
    window.location.href = '/gallery';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-6"
          >
            <Sparkles className="w-16 h-16 mx-auto text-pink-500" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              FSP Gallery
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A community-driven space to showcase student projects
          </motion.p>

          <motion.button
            onClick={handleNavigate}
            className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Left: Image/Illustration */}
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 aspect-square flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎨</div>
                  <div className="text-6xl">💻</div>
                  <div className="text-8xl mt-4">✨</div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Student Built
              </motion.div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What is FSP Gallery?
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                FSP Gallery is a collaborative learning platform built by students, for students. 
                Each project you see here is crafted with passion, creativity, and code.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in learning by doing, sharing knowledge, and celebrating every milestone 
                in the journey of becoming a developer. This is more than a gallery — it's a community.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 text-pink-500 font-semibold">
                  <Code2 className="w-5 h-5" />
                  <span>Real Projects</span>
                </div>
                <div className="flex items-center gap-2 text-purple-500 font-semibold">
                  <Star className="w-5 h-5" />
                  <span>Real Growth</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Three simple steps to showcase your work and inspire others
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Build Your Project
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create something amazing using React, Tailwind, or any tech stack you love. 
                Let your creativity shine through code.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Deploy on Vercel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Take your project live with Vercel's seamless deployment. 
                Share your creation with the world in minutes.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Get Featured
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Submit your project link and see it shine in the FSP Gallery. 
                Inspire peers and celebrate your growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer/Mentor Section */}
      <footer className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl text-gray-700 mb-6">
              Created with <span className="text-red-500 text-3xl">❤️</span> by{' '}
              <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Shibiraj
              </span>{' '}
              and the FSP Community
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <motion.a
                href="https://github.com/shibi22/FSP-Gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-pink-100 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-gray-700" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shibiraj-r/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-purple-100 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-gray-700" />
              </motion.a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2024 FSP Gallery. Empowering student developers, one project at a time.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}