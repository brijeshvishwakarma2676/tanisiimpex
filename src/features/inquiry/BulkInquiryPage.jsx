import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/common/PageHero';
import { Container, Button, Input, Textarea, Select } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { CATEGORIES } from '@/data';

const categoryOptions = [
  { value: '', label: 'Select product category' },
  ...CATEGORIES.map((c) => ({ value: c.slug, label: c.name })),
];

export default function BulkInquiryPage() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you! Your inquiry has been submitted. We will send a quotation within 24 hours.'); };

  return (
    <>
      <Helmet>
        <title>Bulk Inquiry — Tanisi Impex | Request a Quote for Indian Products</title>
        <meta name="description" content="Submit your bulk inquiry for premium Indian products. Get competitive pricing and custom packaging options. Response within 24 hours." />
      </Helmet>

      <PageHero
        title="Bulk Inquiry & RFQ"
        subtitle="Looking for bulk quantities of premium Indian products? Fill out the form below and our export team will get back with a competitive quotation within 24 hours."
        breadcrumbs={[{ label: 'Bulk Inquiry' }]}
      />

      <section className="py-section bg-white">
        <Container size="sm">
          <FadeIn>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-h3 font-display text-gray-900 mb-2">Request for Quotation</h2>
              <p className="text-gray-500 font-body mb-8">Fields marked with * are required</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Contact Person *" placeholder="Full name" required />
                  <Input label="Company Name *" placeholder="Your company" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Email Address *" type="email" placeholder="you@company.com" required />
                  <Input label="Phone / WhatsApp *" type="tel" placeholder="+1 234 567 890" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Country *" placeholder="United States" required />
                  <Input label="City" placeholder="New York" />
                </div>
                <Select label="Product Category *" options={categoryOptions} required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Specific Product(s)" placeholder="e.g., Turmeric Powder, Basmati Rice" />
                  <Input label="Required Quantity" placeholder="e.g., 5 MT, 1 FCL, 500 kg" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Select
                    label="Packaging Preference"
                    options={[
                      { value: '', label: 'Select preference' },
                      { value: 'standard', label: 'Standard Export Packaging' },
                      { value: 'private-label', label: 'Private Label / Custom' },
                      { value: 'bulk', label: 'Bulk (No Retail Packaging)' },
                      { value: 'discuss', label: 'Need Guidance' },
                    ]}
                  />
                  <Select
                    label="Delivery Terms"
                    options={[
                      { value: '', label: 'Select terms' },
                      { value: 'fob', label: 'FOB' },
                      { value: 'cif', label: 'CIF' },
                      { value: 'cfr', label: 'CFR' },
                      { value: 'exw', label: 'EXW' },
                      { value: 'other', label: 'Other / Discuss' },
                    ]}
                  />
                </div>
                <Input label="Destination Port / City" placeholder="e.g., Jebel Ali, Rotterdam, New York" />
                <Textarea label="Additional Requirements" placeholder="Any specific quality requirements, certifications needed, target price range, or other details..." />

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Inquiry
                  </Button>
                  <p className="text-xs text-gray-400 font-body mt-3">
                    Your information is secure and will only be used for quotation purposes.
                  </p>
                </div>
              </form>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
