import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '@/app/layouts/PublicLayout';

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('@/features/home/HomePage'));
const AboutPage = lazy(() => import('@/features/about/AboutPage'));
const ProductsPage = lazy(() => import('@/features/products/ProductsPage'));
const CategoryDetailPage = lazy(() => import('@/features/products/CategoryDetailPage'));
const ExportProcessPage = lazy(() => import('@/features/export-process/ExportProcessPage'));
const CertificationsPage = lazy(() => import('@/features/certifications/CertificationsPage'));
const GlobalPresencePage = lazy(() => import('@/features/global-presence/GlobalPresencePage'));
const InfrastructurePage = lazy(() => import('@/features/infrastructure/InfrastructurePage'));
const BlogPage = lazy(() => import('@/features/blog/BlogPage'));
const ContactPage = lazy(() => import('@/features/contact/ContactPage'));
const BulkInquiryPage = lazy(() => import('@/features/inquiry/BulkInquiryPage'));
const GalleryPage = lazy(() => import('@/features/gallery/GalleryPage'));

import ErrorPage from '@/features/errors/ErrorPage';

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-gold-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 text-sm font-body">Loading...</p>
      </div>
    </div>
  );
}

function SuspenseWrapper({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SuspenseWrapper><HomePage /></SuspenseWrapper> },
      { path: 'about', element: <SuspenseWrapper><AboutPage /></SuspenseWrapper> },
      { path: 'products', element: <SuspenseWrapper><ProductsPage /></SuspenseWrapper> },
      { path: 'products/:slug', element: <SuspenseWrapper><CategoryDetailPage /></SuspenseWrapper> },
      { path: 'export-process', element: <SuspenseWrapper><ExportProcessPage /></SuspenseWrapper> },
      { path: 'certifications', element: <SuspenseWrapper><CertificationsPage /></SuspenseWrapper> },
      { path: 'global-presence', element: <SuspenseWrapper><GlobalPresencePage /></SuspenseWrapper> },
      { path: 'infrastructure', element: <SuspenseWrapper><InfrastructurePage /></SuspenseWrapper> },
      { path: 'blog', element: <SuspenseWrapper><BlogPage /></SuspenseWrapper> },
      { path: 'contact', element: <SuspenseWrapper><ContactPage /></SuspenseWrapper> },
      { path: 'bulk-inquiry', element: <SuspenseWrapper><BulkInquiryPage /></SuspenseWrapper> },
      { path: 'gallery', element: <SuspenseWrapper><GalleryPage /></SuspenseWrapper> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
