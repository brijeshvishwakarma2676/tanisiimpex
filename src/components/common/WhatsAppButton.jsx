import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE } from '@/data';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hello Tanisi Impex! I\'m interested in your export products. Please share more details.');
  const url = `https://wa.me/${SITE.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="hidden sm:inline text-sm font-semibold font-accent">Chat with Us</span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
