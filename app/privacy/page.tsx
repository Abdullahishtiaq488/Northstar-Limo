'use client';

import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { PageHeader } from '@/components/page-header';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide directly, such as your name, email address, phone number, and payment information when you book our services. We also collect information about your device and usage patterns through cookies and similar technologies.',
  },
  {
    title: 'How We Use Your Information',
    content: 'We use your information to process reservations, communicate with you about your booking, provide customer support, improve our services, and comply with legal obligations. Your data helps us personalize your experience and ensure the highest quality service.',
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures to protect your personal information. Our website uses SSL encryption to safeguard data transmission. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: 'Sharing Your Information',
    content: 'We do not sell or share your personal information with third parties for marketing purposes. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.',
  },
  {
    title: 'Your Rights and Choices',
    content: 'You have the right to access, update, or delete your personal information. You can opt out of marketing communications at any time. Please contact us to exercise these rights or for questions about your data.',
  },
  {
    title: 'Cookies',
    content: 'We use cookies to enhance your browsing experience and track website usage. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website features.',
  },
  {
    title: 'Third-Party Links',
    content: 'Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any personal information.',
  },
  {
    title: 'Policy Updates',
    content: 'We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date. Your continued use of our website constitutes acceptance of the updated policy.',
  },
  {
    title: 'Contact Us',
    content: 'For privacy inquiries or concerns, please contact us at privacy@northstarlimo.com or call (475) 341-8410. We will respond to your inquiries within a reasonable timeframe.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <HeaderProfessional />
      <main className="bg-background">
        <PageHeader
          subtitle="Your Privacy Matters"
          title="Privacy Policy"
          description="Understand how North Star Limo collects, uses, and protects your personal information."
        />

        <section className="section-pad-xl bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8 p-4 bg-primary/10 border-l-4 border-primary rounded">
                <p className="text-sm text-foreground-secondary mb-0">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <p className="text-foreground-secondary leading-relaxed mb-8">
                North Star Limo ("we," "us," "our," or "Company") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>

              <div className="space-y-8">
                {sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                      <span className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                      {section.title}
                    </h2>
                    <p className="text-sm text-foreground-secondary leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-foreground-secondary">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at privacy@northstarlimo.com or (475) 341-8410.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterProfessional />
    </>
  );
}
