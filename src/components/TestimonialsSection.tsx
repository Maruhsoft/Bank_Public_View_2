import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      textKey: 'testimonials.testimonial1.text',
      authorKey: 'testimonials.testimonial1.author',
      positionKey: 'testimonials.testimonial1.position',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      textKey: 'testimonials.testimonial2.text',
      authorKey: 'testimonials.testimonial2.author',
      positionKey: 'testimonials.testimonial2.position',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      textKey: 'testimonials.testimonial3.text',
      authorKey: 'testimonials.testimonial3.author',
      positionKey: 'testimonials.testimonial3.position',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transform transition-all duration-700 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.textKey}
              className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {t(testimonial.textKey)}
                </p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={t(testimonial.authorKey)}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {t(testimonial.authorKey)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t(testimonial.positionKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;