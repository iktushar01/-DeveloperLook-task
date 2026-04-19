import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-[#faf4ec] text-[#161616] py-24 px-[2.5em] font-['Inter',sans-serif]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Large Typography Section */}
        <div className="max-w-[1000px] mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-semibold tracking-tight">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h2>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          
          {/* Left: Profile Image */}
          <div className="md:col-span-4">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gray-200">
              <img 
                src="/api/placeholder/600/750" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center: Description and Button */}
          <div className="md:col-span-5 md:pb-8">
            <p className="text-[1.25rem] leading-[1.4] font-medium mb-10 max-w-md">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
              Nooit meer content zonder resultaat.
            </p>
            
            <button className="group flex items-center gap-2 bg-white border border-[#161616] rounded-full pl-6 pr-1.5 py-1.5 hover:bg-[#161616] hover:text-white transition-all duration-300">
              <span className="font-semibold text-sm">Leer ons kennen</span>
              <div className="bg-[#161616] group-hover:bg-white p-2 rounded-full transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover:text-[#161616]" />
              </div>
            </button>
          </div>

          {/* Right: Floating Scroll Button */}
          <div className="md:col-span-3 flex justify-end md:pb-8">
            <button className="border border-[#161616]/30 p-4 rounded-2xl hover:bg-white transition-colors duration-300">
              <ArrowDown className="w-6 h-6 text-[#161616]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;