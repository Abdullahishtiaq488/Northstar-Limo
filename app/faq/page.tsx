'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { PageHeader } from '@/components/page-header';

const faqData = [
  {
    category: 'Genzeral Information',
    items: [
      {
        question: 'What types of services does North Star Limo offer?',
        answer: 'North Star Limo offers a wide range of services, including airport transfers, corporate transportation, special event services (weddings, proms, parties), city tours, and hourly charters.',
      },
      {
        question: 'How can I book a limo with North Star Limo?',
        answer: 'You can book a limo by visiting our website, calling our customer service number, or using our mobile app.',
      },
      {
        question: 'What areas do you serve?',
        answer: 'We primarily serve New York City and surrounding areas, including Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. We also offer transportation to and from major airports like JFK, LaGuardia, and Newark.',
      },
    ],
  },
  {
    category: 'Booking and Payments',
    items: [
      {
        question: 'How far in advance should I book my limo?',
        answer: 'We recommend booking your limo at least 24 hours in advance to ensure availability. For special events, it\'s best to book as early as possible.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also accept payments via PayPal and bank transfers.',
      },
      {
        question: 'Is a deposit required when booking?',
        answer: 'Yes, a deposit is required to confirm your reservation. The deposit amount will be specified during the booking process.',
      },
      {
        question: 'Can I cancel my reservation?',
        answer: 'Yes, you can cancel your reservation. Please refer to our cancellation policy on our website for specific details and any applicable fees.',
      },
    ],
  },
  {
    category: 'Services and Vehicles',
    items: [
      {
        question: 'What types of vehicles are available in your fleet?',
        answer: 'Our fleet includes luxury sedans, SUVs, stretch limousines, party buses, and executive vans. All vehicles are equipped with modern amenities for your comfort and convenience.',
      },
      {
        question: 'Are your vehicles insured and licensed?',
        answer: 'Yes, all our vehicles are fully licensed and insured in accordance with local and state regulations.',
      },
      {
        question: 'Do your chauffeurs undergo background checks and training?',
        answer: 'Absolutely. All our chauffeurs undergo thorough vetting, comprehensive background checks, and extensive training to ensure your safety and comfort.',
      },
      {
        question: 'Can I request a specific vehicle or chauffeur?',
        answer: 'While we cannot guarantee specific vehicle or chauffeur requests, we will do our best to accommodate your preferences.',
      },
    ],
  },
  {
    category: 'Special Requests and Customization',
    items: [
      {
        question: 'Can you accommodate special requests for events like weddings or proms?',
        answer: 'Yes, we specialize in providing customized services for special events. Please contact us with your specific requirements, and we\'ll create a tailored package for you.',
      },
      {
        question: 'Do you offer child seats?',
        answer: 'Yes, we provide child seats upon request. Please specify the type and number of child seats needed when making your reservation.',
      },
      {
        question: 'Can you arrange for decorations or refreshments in the limo?',
        answer: 'Yes, we can arrange for decorations and refreshments upon request. Please let us know your requirements in advance so we can make the necessary arrangements.',
      },
    ],
  },
  {
    category: 'Pricing and Discounts',
    items: [
      {
        question: 'How are your rates determined?',
        answer: 'Our rates are based on the type of vehicle, duration of service, and distance traveled. For a detailed quote, please use our online booking tool or contact our customer service team.',
      },
      {
        question: 'Do you offer any discounts or promotions?',
        answer: 'Yes, we offer various discounts and promotions throughout the year. Please check our website or sign up for our newsletter to stay informed about our latest offers.',
      },
      {
        question: 'Are there any additional charges I should be aware of?',
        answer: 'Additional charges may include tolls, parking fees, and gratuity. All applicable fees will be detailed in your booking confirmation.',
      },
    ],
  },
  {
    category: 'Safety and Cleanliness',
    items: [
      {
        question: 'What measures do you take to ensure the cleanliness and safety of your vehicles?',
        answer: 'We adhere to strict cleanliness protocols, including thorough cleaning and sanitization of vehicles before and after each ride. Our chauffeurs follow all recommended safety guidelines to ensure your well-being.',
      },
      {
        question: 'How do you handle lost items?',
        answer: 'If you believe you have left an item in one of our vehicles, please contact our customer service team as soon as possible. We will do our best to locate and return your item.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-background-secondary hover:bg-background-secondary/80 transition-colors text-left"
      >
        <span className="font-semibold text-sm text-foreground">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border">
          <p className="text-sm text-foreground-secondary leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <HeaderProfessional />
      <main className="bg-background">
        <PageHeader
          subtitle="Have Questions?"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, booking process, vehicles, and more."
        />

        <section className="section-pad-xl bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-12">
              {faqData.map((category, categoryIdx) => (
                <div key={categoryIdx}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                    <h2 className="text-lg font-bold text-foreground">{category.category}</h2>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((faq, idx) => (
                      <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 pt-12 border-t border-border">
              <div className="text-center">
                <p className="text-sm text-foreground-secondary mb-4">Can't find your answer?</p>
                <h3 className="text-lg font-bold mb-6">Get in Touch With Our Team</h3>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterProfessional />
    </>
  );
}
