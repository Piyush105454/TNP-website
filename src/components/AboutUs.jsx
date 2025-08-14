// import React from 'react';
import { GraduationCap, Briefcase, LineChart } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="relative bg-white text-gray-800 px-4 py-16">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="relative inline-block text-4xl font-bold mb-4">
          About Us
          <span className="absolute bottom-[-0.5rem] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-red-600 to-red-800 rounded-sm"></span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 italic mb-12 leading-relaxed">
          Dedicated to bridging the gap between academia and industry through comprehensive training
          and placement services.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-gray-50 rounded-xl shadow-md p-6 text-left border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-red-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <GraduationCap className="text-red-600 w-10 h-10 mb-4 transition-all duration-300 drop-shadow-sm group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-lg" />
            <h3 className="text-xl font-semibold mb-2 relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-8 after:h-[2px] after:bg-gradient-to-r after:from-red-600 after:to-red-800 after:rounded-sm after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
              Quality Education
            </h3>
            <p className="text-gray-500 leading-relaxed first-letter:text-red-600 first-letter:font-semibold first-letter:text-lg">
              Providing world-class education and training to prepare students for industry demands.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-50 rounded-xl shadow-md p-6 text-left border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-red-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <Briefcase className="text-red-600 w-10 h-10 mb-4 transition-all duration-300 drop-shadow-sm group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-lg" />
            <h3 className="text-xl font-semibold mb-2 relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-8 after:h-[2px] after:bg-gradient-to-r after:from-red-600 after:to-red-800 after:rounded-sm after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
              Industry Connect
            </h3>
            <p className="text-gray-500 leading-relaxed first-letter:text-red-600 first-letter:font-semibold first-letter:text-lg">
              Strong partnerships with leading companies ensuring excellent placement opportunities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gray-50 rounded-xl shadow-md p-6 text-left border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-red-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <LineChart className="text-red-600 w-10 h-10 mb-4 transition-all duration-300 drop-shadow-sm group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-lg" />
            <h3 className="text-xl font-semibold mb-2 relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-8 after:h-[2px] after:bg-gradient-to-r after:from-red-600 after:to-red-800 after:rounded-sm after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
              Career Growth
            </h3>
            <p className="text-gray-500 leading-relaxed first-letter:text-red-600 first-letter:font-semibold first-letter:text-lg">
              Supporting students in their professional development and career advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
