"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BarChart3, Globe, Smartphone, Megaphone, Search, Users } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-bg">
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col text-left max-w-[650px] mx-auto lg:mx-0">
            <AnimateIn>
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
                Digital Growth Agency
              </p>
              
              <h1 className="text-[40px] sm:text-[48px] lg:text-[64px] xl:text-[76px] font-bold tracking-tight leading-[1.05] text-text">
                We help businesses{" "}
                <span className="text-accent">build and grow</span>{" "}
                their online presence.
              </h1>
              
              <p className="mt-6 text-[17px] sm:text-[18px] lg:text-[19px] text-text-secondary leading-[1.6]">
                Establish your brand, get found on search, and reach the right customers through websites, SEO, advertising, and social media.
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" className="w-full sm:w-auto">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </div>
            </AnimateIn>
          </div>

          {/* Right Column: Visual Service Cards */}
          <AnimateIn delay={150} className="hidden lg:block">
            <div className="relative h-[600px] w-full bg-surface-2 rounded-2xl border border-border p-8 overflow-hidden flex items-center justify-center">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              
              <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                {/* Visual Card 1: Website */}
                <div className="bg-white rounded-xl p-5 border border-border shadow-card flex flex-col justify-between transform translate-y-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm mb-3">Website</h3>
                    
                    {/* High-fidelity mini browser */}
                    <div className="w-full border border-slate-200 rounded-md overflow-hidden flex flex-col bg-white">
                      {/* Browser top bar */}
                      <div className="h-3 w-full bg-slate-50 border-b border-slate-200 flex items-center px-1.5 gap-0.5">
                        <div className="w-1 h-1 rounded-full bg-rose-400" />
                        <div className="w-1 h-1 rounded-full bg-amber-400" />
                        <div className="w-1 h-1 rounded-full bg-emerald-400" />
                      </div>
                      {/* Browser body / wireframe */}
                      <div className="p-1.5 flex flex-col gap-1.5 bg-white">
                        <div className="h-1 w-1/3 bg-slate-200 rounded-sm" />
                        <div className="flex gap-1">
                          <div className="h-4 w-1/2 bg-blue-100 rounded-sm" />
                          <div className="h-4 w-1/2 bg-slate-100 rounded-sm" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Visual Card 2: Google Business */}
                <div className="bg-white rounded-xl p-5 border border-border shadow-card flex flex-col justify-between transform -translate-y-2 hover:-translate-y-4 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Search className="w-5 h-5" />
                    </div>
                    <span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Local
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm">Google Business</h3>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="h-1.5 w-16 bg-slate-100 mt-2 rounded-full" />
                  </div>
                </div>

                {/* Visual Card 3: Meta Ads */}
                <div className="bg-white rounded-xl p-5 border border-border shadow-card flex flex-col justify-between transform translate-y-6 hover:-translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-indigo-700 tracking-wider">LIVE</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm flex items-center justify-between">
                      Meta Ads
                      <span className="text-xs text-text-muted font-medium">Optimized</span>
                    </h3>
                    <div className="flex gap-1 mt-2 items-center">
                      <div className="h-1.5 w-1/2 bg-indigo-500 rounded-full" />
                      <div className="h-1.5 w-1/4 bg-slate-200 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Visual Card 4: Social Media */}
                <div className="bg-white rounded-xl p-5 border border-border shadow-card flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-500">JD</div>
                      <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-600">AM</div>
                      <div className="w-6 h-6 rounded-full bg-rose-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-rose-600">+9</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm flex items-center gap-2">
                      Social Media
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-rose-600">Growth</span>
                      <span className="text-[10px] text-text-muted">Strategy</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Card 5: Traffic/Analytics */}
                <div className="bg-white rounded-xl p-5 border border-border shadow-card flex flex-col justify-between transform translate-y-2 hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <span className="flex items-center text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full">
                      Uptrend
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm">Website Traffic</h3>
                    <div className="flex items-end gap-1.5 h-8 mt-2">
                      <div className="w-full bg-cyan-100 h-[30%] rounded-t-sm" />
                      <div className="w-full bg-cyan-200 h-[50%] rounded-t-sm" />
                      <div className="w-full bg-cyan-400 h-[70%] rounded-t-sm" />
                      <div className="w-full bg-cyan-500 h-[100%] rounded-t-sm" />
                    </div>
                  </div>
                </div>

                {/* Visual Card 6: Mobile */}
                <div className="bg-white rounded-xl p-5 border border-border shadow-card flex flex-col justify-between transform -translate-y-4 hover:-translate-y-6 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="w-5 h-8 border-2 border-slate-200 rounded-sm flex flex-col p-0.5 gap-0.5">
                      <div className="w-full h-2 bg-slate-200 rounded-sm" />
                      <div className="w-full flex-1 bg-slate-100 rounded-sm" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm">Mobile Optimized</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-2 h-2 rounded-full bg-success"></span>
                      <span className="text-[10px] text-text-muted font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
