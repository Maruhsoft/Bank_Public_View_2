import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface HeroSlide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  ctaKey: string;
  backgroundImage: string;
  backgroundGradient: string;
}

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const slides: HeroSlide[] = [
    {
      id: 1,
      titleKey: 'hero.slide1.title',
      subtitleKey: 'hero.slide1.subtitle',
      ctaKey: 'hero.slide1.cta',
      backgroundImage: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1920',
      backgroundGradient: 'from-blue-900/70 to-blue-600/70'
    },
    {
      id: 2,
      titleKey: 'hero.slide2.title',
      subtitleKey: 'hero.slide2.subtitle',
      ctaKey: 'hero.slide2.cta',
      backgroundImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
      backgroundGradient: 'from-indigo-900/70 to-indigo-600/70'
    },
    {
      id: 3,
      titleKey: 'hero.slide3.title',
      subtitleKey: 'hero.slide3.subtitle',
      ctaKey: 'hero.slide3.cta',
      backgroundImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
      backgroundGradient: 'from-slate-900/70 to-slate-600/70'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section 
      ref={ref}
      className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentSlideData.backgroundImage})`,
            transform: inView ? 'scale(1)' : 'scale(1.1)',
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.backgroundGradient}`} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div
              className={`transform transition-all duration-700 ease-out ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {t(currentSlideData.titleKey)}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                {t(currentSlideData.subtitleKey)}
              </p>
              <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-all duration-200 transform hover:scale-105 group">
                <span>{t(currentSlideData.ctaKey)}</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;