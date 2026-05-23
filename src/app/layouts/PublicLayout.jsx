import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";
import { LayoutPreloader } from "@/components/ui";

export default function PublicLayout() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only play preloader on first entrance of session
    const hasPlayed = sessionStorage.getItem("tanisi_preloader_played");
    if (!hasPlayed) {
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("tanisi_preloader_played", "true");
    setShowPreloader(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] relative">
      {showPreloader && (
        <LayoutPreloader onComplete={handlePreloaderComplete} />
      )}
      
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
}

