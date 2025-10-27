"use client";

import Header from "@/components/Header";
import SideImages from "@/components/SideImages";
import MapSection from "@/components/MapSection";
import CarouselSection from "@/components/CarouselSection";
import InfoFormSection from "@/components/InfoFormSection";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-100 to-white overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-aico-red/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-aico-green/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-aico-black/5 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Header */}
        <Header />

        {/* Side Images - Fixed Position */}
        <SideImages side="left" />
        <SideImages side="right" />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Section 1: Map */}
          <MapSection />

          {/* Section 2: Carousel */}
          <CarouselSection />

          {/* Section 3: Info + Form */}
          <InfoFormSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
