import React, { useEffect, useState } from "react";
import { Code2, Building2, TrendingUp, Zap } from "lucide-react";

const PythonInfoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 1.5;

      if (scrollPosition > triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen py-20 px-4" style={{ zIndex: 2 }}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700/50">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-12 text-center">
            Python Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Code2 className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Versatile & Powerful
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Python is a high-level, interpreted programming language
                    known for its clear syntax and readability. It supports
                    procedural, object-oriented, and functional programming.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <TrendingUp
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Most Popular Language
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Python is one of the most popular languages, used by
                    millions of developers worldwide for everything from web
                    apps to AI systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Zap className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Rich Ecosystem
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    With over 400,000 packages in PyPI, Python offers tools for
                    data science, AI, automation, web development, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Building2
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Industry Standard
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Python powers infrastructure in tech companies, research
                    labs, and enterprise software across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8 text-center">
              What Companies Build with Python
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Web Applications
                </h3>
                <p className="text-slate-300 mb-4">
                  Instagram, Spotify, and Pinterest use Python with Django and
                  Flask to build scalable web apps.
                </p>
                <div className="text-sm text-amber-500 font-medium">
                  Django • Flask • FastAPI
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data Science & AI
                </h3>
                <p className="text-slate-300 mb-4">
                  Google, Netflix, and OpenAI use Python for machine learning,
                  AI pipelines, and data analysis.
                </p>
                <div className="text-sm text-amber-500 font-medium">
                  TensorFlow • PyTorch • Pandas
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Automation & DevOps
                </h3>
                <p className="text-slate-300 mb-4">
                  Dropbox and Reddit use Python for automation, deployment
                  scripts, and infrastructure management.
                </p>
                <div className="text-sm text-amber-500 font-medium">
                  Ansible • Docker SDK • Pytest
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Financial Technology
                </h3>
                <p className="text-slate-300 mb-4">
                  Banks use Python for algorithmic trading, financial modeling,
                  and risk systems.
                </p>
                <div className="text-sm text-amber-500 font-medium">
                  NumPy • SciPy • QuantLib
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Scientific Computing
                </h3>
                <p className="text-slate-300 mb-4">
                  NASA and CERN use Python for simulations, data processing, and
                  scientific research.
                </p>
                <div className="text-sm text-amber-500 font-medium">
                  Matplotlib • Jupyter • SymPy
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Game Development
                </h3>
                <p className="text-slate-300 mb-4">
                  Studios use Python for scripting, tools, and rapid prototyping
                  of game mechanics.
                </p>
                <div className="text-sm text-amber-500 font-medium">
                  Pygame • Panda3D • Ren'Py
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </section>
  );
};

export default PythonInfoSection;
