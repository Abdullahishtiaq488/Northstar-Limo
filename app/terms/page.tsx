'use client';

import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { PageHeader } from '@/components/page-header';

const sections = [
  {
    title: 'Agreement to Terms',
    content: 'By accessing and using North Star Limo\'s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
  },
  {
    title: 'Use License',
    content: 'Permission is granted to temporarily download one copy of the materials (information or software) on North Star Limo\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify the materials, copy or print the materials for anything other than your personal, non-commercial use.',
  },
  {
    title: 'Disclaimer',
    content: 'The materials on North Star Limo\'s website are provided "as is". North Star Limo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
  },
  {
    title: 'Limitations',
    content: 'In no event shall North Star Limo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on North Star Limo\'s website.',
  },
  {
    title: 'Accuracy of Materials',
    content: 'The materials appearing on North Star Limo\'s website could include technical, typographical, or photographic errors. North Star Limo does not warrant that any of the materials on its website are accurate, complete, or current. North Star Limo may make changes to the materials contained on its website at any time without notice.',
  },
  {
    title: 'Links',
    content: 'North Star Limo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by North Star Limo of the site. Use of any such linked website is at the user\'s own risk.',
  },
  {
    title: 'Modifications',
    content: 'North Star Limo may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
  },
  {
    title: 'Governing Law',
    content: 'These terms and conditions are governed by and construed in accordance with the laws of Connecticut, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
  },
  {
    title: 'Booking and Cancellation Policy',
    content: 'Reservations must be made at least 24 hours in advance. A deposit is required to confirm your reservation. Cancellations made more than 24 hours prior to the scheduled service will receive a full refund of the deposit. Cancellations made less than 24 hours prior may be subject to fees. No-shows will result in the forfeiture of the entire booking fee.',
  },
  {
    title: 'Passenger Conduct',
    content: 'Passengers must comply with all applicable laws and regulations. North Star Limo reserves the right to refuse service to any passenger who is intoxicated, disruptive, or violates these terms. No smoking, illegal substances, or weapons are permitted in any vehicle. Passengers are responsible for any damage to vehicles beyond normal wear and tear.',
  },
];

export default function TermsPage() {
  return (
    <>
      <HeaderProfessional />
      <main className="bg-background">
        <PageHeader
          subtitle="Legal Information"
          title="Terms of Service"
          description="Please read these terms carefully before booking our services."
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
                Welcome to North Star Limo. These Terms of Service ("Agreement") constitute a legally binding agreement between you and North Star Limo regarding your use of our website and services. Please read this Agreement carefully.
              </p>

              <div className="space-y-8">
                {sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                      <span className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                      {idx + 1}. {section.title}
                    </h2>
                    <p className="text-sm text-foreground-secondary leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-foreground-secondary">
                  If you have any questions about these Terms of Service, please contact us at legal@northstarlimo.com or (475) 341-8410.
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
