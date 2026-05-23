// ===== Tanisi Impex — Static Site Data =====

export const SITE = {
  name: 'Tanisi Impex Private Limited',
  tagline: 'From India to the World!',
  description: 'Premium Indian Export Company — Bridging India\'s Rich Heritage with Global Markets',
  phone: '+91-9152121077',
  whatsapp: '919152121077',
  email: 'biz@tanisiimpex.com',
  address: '1403, A Wing, Vasudev Paradise, Kanakia Road, Near Unique Garden, Mira Road East, Thane, Maharashtra – 401107',
  registeredAddress: 'Shop No. 106, New Cine Prime Mall Premises Co-op Society Ltd, Beverly Park, Kanakia Road, Mira Road East, Thane, Maharashtra – 401107',
  social: {
    linkedin: 'https://linkedin.com/company/tanisiimpex',
    instagram: 'https://instagram.com/tanisiimpex',
    facebook: 'https://facebook.com/tanisiimpex',
    twitter: 'https://twitter.com/tanisiimpex',
  },
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Indian Spices', path: '/products/indian-spices' },
      { label: 'Agro Products', path: '/products/agro-products' },
      { label: 'Fox Nuts / Makhana', path: '/products/makhana' },
      { label: 'Mushrooms', path: '/products/mushrooms' },
      { label: 'Rice & Grains', path: '/products/rice-grains' },
      { label: 'Pulses', path: '/products/pulses' },
      { label: 'Dry Fruits', path: '/products/dry-fruits' },
      { label: 'Organic Products', path: '/products/organic-products' },
      { label: 'Herbal Products', path: '/products/herbal-products' },
      { label: 'Handicrafts', path: '/products/handicrafts' },
      { label: 'Household Products', path: '/products/household-products' },
    ],
  },
  { label: 'Export Process', path: '/export-process' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Global Presence', path: '/global-presence' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const CATEGORIES = [
  {
    id: 'indian-spices',
    name: 'Indian Spices',
    slug: 'indian-spices',
    tagline: 'The Essence of Indian Flavor',
    description: 'Premium quality spices sourced directly from India\'s finest farms. Our spices meet the highest international quality standards.',
    image: '/assets/images/categories/indian-spices.png',
    icon: '🌶️',
    products: ['Turmeric', 'Red Chili', 'Cumin Seeds', 'Coriander', 'Black Pepper', 'Cardamom', 'Cinnamon', 'Cloves', 'Star Anise', 'Fenugreek'],
  },
  {
    id: 'agro-products',
    name: 'Agro Products',
    slug: 'agro-products',
    tagline: 'Farm-Fresh Agricultural Excellence',
    description: 'High-quality agricultural products from India\'s fertile lands, processed and packaged to international export standards.',
    image: '/assets/images/categories/agro-products.png',
    icon: '🌾',
    products: ['Guar Gum', 'Sesame Seeds', 'Groundnuts', 'Cotton', 'Jaggery', 'Sugar'],
  },
  {
    id: 'makhana',
    name: 'Fox Nuts / Makhana',
    slug: 'makhana',
    tagline: 'India\'s Superfood for the World',
    description: 'Premium quality Makhana (Fox Nuts) — the trending superfood. Sourced from Bihar, processed hygienically for global markets.',
    image: '/assets/images/categories/makhana.png',
    icon: '🥜',
    products: ['Raw Makhana', 'Roasted Makhana', 'Flavored Makhana', 'Organic Makhana'],
  },
  {
    id: 'mushrooms',
    name: 'Mushrooms',
    slug: 'mushrooms',
    tagline: 'Cultivated with Precision',
    description: 'Fresh and dried mushroom varieties cultivated under controlled conditions, meeting international food safety standards.',
    image: '/assets/images/categories/mushrooms.png',
    icon: '🍄',
    products: ['Button Mushrooms', 'Oyster Mushrooms', 'Shiitake', 'Dried Mushrooms'],
  },
  {
    id: 'rice-grains',
    name: 'Rice & Grains',
    slug: 'rice-grains',
    tagline: 'The Grain of India',
    description: 'Premium Basmati and non-Basmati rice varieties, along with other grains, exported to over 50 countries worldwide.',
    image: '/assets/images/categories/rice-grains.png',
    icon: '🍚',
    products: ['Basmati Rice', 'Non-Basmati Rice', 'Broken Rice', 'Wheat', 'Millets', 'Corn'],
  },
  {
    id: 'pulses',
    name: 'Pulses',
    slug: 'pulses',
    tagline: 'Protein-Rich Indian Pulses',
    description: 'Wide range of premium quality pulses and lentils. Cleaned, sorted, and packaged for international markets.',
    image: '/assets/images/categories/pulses.png',
    icon: '🫘',
    products: ['Chickpeas', 'Red Lentils', 'Green Moong', 'Toor Dal', 'Urad Dal', 'Kidney Beans'],
  },
  {
    id: 'dry-fruits',
    name: 'Dry Fruits',
    slug: 'dry-fruits',
    tagline: 'Nature\'s Premium Snacks',
    description: 'Hand-picked, premium dry fruits and nuts. Sourced from the best orchards and processed in state-of-the-art facilities.',
    image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&w=800&q=80',
    icon: '🥜',
    products: ['Cashews', 'Almonds', 'Pistachios', 'Walnuts', 'Raisins', 'Dates'],
  },
  {
    id: 'organic-products',
    name: 'Organic Products',
    slug: 'organic-products',
    tagline: 'Pure & Certified Organic',
    description: 'USDA/EU certified organic products from India. Meeting the growing global demand for clean, organic food.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    icon: '🌿',
    products: ['Organic Spices', 'Organic Rice', 'Organic Pulses', 'Organic Tea', 'Organic Honey'],
  },
  {
    id: 'herbal-products',
    name: 'Herbal Products',
    slug: 'herbal-products',
    tagline: 'Ancient Wisdom, Modern Standards',
    description: 'Traditional Indian herbal products and Ayurvedic preparations, manufactured under strict quality controls.',
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80',
    icon: '🌱',
    products: ['Ashwagandha', 'Turmeric Extract', 'Moringa', 'Neem Products', 'Tulsi Products'],
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    slug: 'handicrafts',
    tagline: 'Artistry Meets Tradition',
    description: 'Exquisite Indian handicrafts showcasing centuries of artistic tradition. Perfect for retail, gifting, and décor markets.',
    image: 'https://images.unsplash.com/photo-1654064756910-974764816931?q=80&w=1190&auto=format&fit=crop&w=800&q=80',
    icon: '🏺',
    products: ['Brass Décor', 'Wooden Crafts', 'Marble Items', 'Textile Art', 'Pottery', 'Gemstone Jewelry'],
  },
  {
    id: 'household-products',
    name: 'Household Products',
    slug: 'household-products',
    tagline: 'Quality for Every Home',
    description: 'Premium household products manufactured in India for international markets. Competitive pricing with superior quality.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    icon: '🏠',
    products: ['Cleaning Supplies', 'Kitchen Essentials', 'Storage Solutions', 'Home Décor'],
  },
];

export const STATS = [
  { value: 50, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Products Exported' },
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
];

export const EXPORT_STEPS = [
  { step: 1, title: 'Inquiry & Consultation', description: 'Share your requirements via our form, WhatsApp, or email. Our team responds within 24 hours.' },
  { step: 2, title: 'Product Selection & Sampling', description: 'Choose from our catalog. We send product samples for quality verification before bulk orders.' },
  { step: 3, title: 'Quotation & Negotiation', description: 'Receive competitive pricing with transparent breakdown. Flexible MOQs for first-time buyers.' },
  { step: 4, title: 'Order Confirmation', description: 'Confirm your order with agreed terms. We handle all export documentation and compliance.' },
  { step: 5, title: 'Quality Control & Packaging', description: 'Multi-stage quality checks. Export-grade packaging with custom labeling available.' },
  { step: 6, title: 'Shipping & Delivery', description: 'Door-to-port or door-to-door delivery. Real-time tracking and dedicated logistics support.' },
];

export const WHY_CHOOSE_US = [
  { title: 'Certified Quality', description: 'ISO, FSSAI, APEDA, and international certifications ensuring the highest product standards.', icon: 'Shield' },
  { title: 'Competitive Pricing', description: 'Direct sourcing from farmers and manufacturers eliminates middlemen, offering best-in-class pricing.', icon: 'TrendingDown' },
  { title: 'Custom Packaging', description: 'Private label and OEM packaging solutions tailored to your brand and market requirements.', icon: 'Package' },
  { title: 'Reliable Logistics', description: 'Partnered with top shipping lines for timely, safe delivery to any port worldwide.', icon: 'Truck' },
  { title: 'Scalable Supply', description: 'From sample orders to full container loads — we scale with your business growth.', icon: 'BarChart3' },
  { title: 'Dedicated Support', description: '24/7 export advisory and after-sales support with a dedicated account manager.', icon: 'Headphones' },
];

export const CERTIFICATIONS = [
  { name: 'APEDA', full: 'Agricultural & Processed Food Products Export Development Authority' },
  { name: 'FSSAI', full: 'Food Safety & Standards Authority of India' },
  { name: 'ISO 9001', full: 'Quality Management System' },
  { name: 'ISO 22000', full: 'Food Safety Management' },
  { name: 'HACCP', full: 'Hazard Analysis Critical Control Points' },
  { name: 'Spice Board', full: 'Spice Board of India Registered' },
  { name: 'IEC', full: 'Import Export Code Holder' },
  { name: 'GST', full: 'Goods & Services Tax Registered' },
];

export const TESTIMONIALS = [
  {
    quote: 'Tanisi Impex has been our trusted partner for Indian spices. Their quality consistency and professional approach make them stand out.',
    author: 'Ahmed Al-Rashid',
    role: 'Procurement Director',
    company: 'Gulf Foods Trading LLC',
    country: 'UAE',
  },
  {
    quote: 'We\'ve been sourcing Makhana and dry fruits from Tanisi Impex for 3 years. Exceptional quality, competitive pricing, and reliable delivery.',
    author: 'Sarah Mitchell',
    role: 'Import Manager',
    company: 'EuroHealth Foods',
    country: 'Germany',
  },
  {
    quote: 'The team at Tanisi Impex understands international standards. Their export documentation is always flawless and shipments arrive on time.',
    author: 'James Okonkwo',
    role: 'CEO',
    company: 'AfriTrade Distributors',
    country: 'Nigeria',
  },
];

export const INDUSTRIES = [
  { name: 'Supermarkets & Retail Chains', icon: 'ShoppingCart' },
  { name: 'Hotels & Restaurants', icon: 'UtensilsCrossed' },
  { name: 'Food Processing Companies', icon: 'Factory' },
  { name: 'Wholesale Distributors', icon: 'Warehouse' },
  { name: 'Amazon / Walmart Sellers', icon: 'Globe' },
  { name: 'Private Label Brands', icon: 'Tag' },
  { name: 'FMCG Companies', icon: 'Boxes' },
  { name: 'Organic & Health Stores', icon: 'Leaf' },
];

export const TEAM = [
  {
    name: 'Vishakha Manish Agarwal',
    role: 'Founder & Director',
    bio: 'With deep expertise in global sourcing, logistics orchestration, and brand positioning, Vishakha guides Tanisi Impex Private Limited\'s primary international operations and corporate strategy.',
    image: '/images/team/vishakha.jpg',
  },
  {
    name: 'Nausheen Farooq Khan',
    role: 'Director',
    bio: 'A strategic specialist in corporate compliance and trade governance, Nausheen ensures the company\'s import and export channels comply flawlessly with statutory customs regulations.',
    image: '/images/team/nausheen.jpg',
  },
];

export const FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our MOQ varies by product category. For spices and food products, the typical MOQ starts from 500 kg. For first-time buyers, we offer flexible MOQs to build trust. Contact us for specific product MOQs.',
  },
  {
    q: 'Which countries do you export to?',
    a: 'We export to 50+ countries across the Middle East, Europe, Africa, USA, Southeast Asia, and Australia. Our products comply with international food safety and import regulations.',
  },
  {
    q: 'Do you offer private labeling and custom packaging?',
    a: 'Yes, we provide complete private label solutions including custom packaging design, branding, and labeling that meet your market\'s regulatory requirements.',
  },
  {
    q: 'What certifications do your products have?',
    a: 'Our products are certified by FSSAI, APEDA, ISO 9001, ISO 22000, HACCP, and the Spice Board of India. We can provide additional certifications as per buyer requirements.',
  },
  {
    q: 'How do I request a product sample?',
    a: 'Simply fill out our inquiry form or contact us via WhatsApp. We\'ll arrange product samples shipped to your location for quality evaluation before you place a bulk order.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We accept L/C (Letter of Credit), T/T (Telegraphic Transfer), and other internationally accepted payment methods. Payment terms are discussed based on order value and relationship.',
  },
];

export const GLOBAL_REGIONS = [
  { region: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'], highlight: true },
  { region: 'Europe', countries: ['Germany', 'UK', 'Netherlands', 'France', 'Italy', 'Spain'], highlight: true },
  { region: 'Africa', countries: ['Nigeria', 'South Africa', 'Kenya', 'Ghana', 'Ethiopia'], highlight: true },
  { region: 'North America', countries: ['USA', 'Canada'], highlight: true },
  { region: 'Southeast Asia', countries: ['Singapore', 'Malaysia', 'Thailand', 'Vietnam'], highlight: false },
  { region: 'Oceania', countries: ['Australia', 'New Zealand'], highlight: false },
];

export const BLOG_POSTS = [
  {
    slug: 'indian-spices-global-demand-2024',
    title: 'Why Indian Spices Dominate Global Markets in 2024',
    excerpt: 'India exports $4 billion worth of spices annually. Discover why international buyers prefer Indian spices for quality, variety, and competitive pricing.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    date: '2024-10-15',
    category: 'Industry Insights',
    readTime: '5 min',
  },
  {
    slug: 'makhana-superfood-export-guide',
    title: 'Makhana: The Indian Superfood Taking the World by Storm',
    excerpt: 'Fox nuts (Makhana) exports have grown 300% in 5 years. Learn about this trending superfood and how to source it for your market.',
    image: 'https://images.unsplash.com/photo-1695653422259-8a74ffe90401?auto=format&fit=crop&w=600&q=80',
    date: '2024-09-28',
    category: 'Product Spotlight',
    readTime: '4 min',
  },
  {
    slug: 'how-to-import-from-india-complete-guide',
    title: 'Complete Guide: How to Import Products from India',
    excerpt: 'A step-by-step guide for international buyers looking to source products from India. Regulations, documentation, and best practices.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    date: '2024-09-10',
    category: 'Export Guide',
    readTime: '8 min',
  },
];
