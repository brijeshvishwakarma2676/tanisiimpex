import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, Button, Input, Textarea, Select } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { SITE } from '@/data';

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: 'Call Us', value: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: MapPin, label: 'Visit Us', value: SITE.address, href: '#' },
  { icon: Clock, label: 'Business Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM IST', href: '#' },
];

export default function ContactPage() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you! We will get back to you within 24 hours.'); };

  return (
    <>
      <Helmet>
        <title>Contact Us — Tanisi Impex | Reach Out for Export Inquiries</title>
        <meta name="description" content="Contact Tanisi Impex for export inquiries, product samples, and partnership opportunities. We respond within 24 hours." />
      </Helmet>

      <PageHero
        title="Contact Us"
        subtitle="Have questions about our products or export process? We'd love to hear from you. Reach out and our team will respond within 24 hours."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-section bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <FadeIn direction="right">
                <h2 className="text-h3 font-display text-gray-900 mb-6">Get In Touch</h2>
                <div className="section-divider mb-8" />

                <div className="space-y-6 mb-8">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-emerald-900 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                        <Icon size={20} className="text-gold-400 group-hover:text-emerald-950 transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-body">{label}</p>
                        <p className="text-gray-900 font-body font-medium">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </FadeIn>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <FadeIn direction="left">
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label="Full Name *" placeholder="John Smith" required />
                      <Input label="Company Name" placeholder="Your Company" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label="Email Address *" type="email" placeholder="john@company.com" required />
                      <Input label="Phone Number" type="tel" placeholder="+1 234 567 890" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label="Country *" placeholder="United States" required />
                      <Select
                        label="Subject"
                        options={[
                          { value: '', label: 'Select subject' },
                          { value: 'product-inquiry', label: 'Product Inquiry' },
                          { value: 'bulk-order', label: 'Bulk Order' },
                          { value: 'sample-request', label: 'Sample Request' },
                          { value: 'partnership', label: 'Partnership' },
                          { value: 'other', label: 'Other' },
                        ]}
                      />
                    </div>
                    <Textarea label="Your Message *" placeholder="Tell us about your requirements, products of interest, quantity needed..." required />
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
