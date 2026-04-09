'use client';

import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { DemoBrowserFrame } from './DemoBrowserFrame';
import { DemoMobileFrame } from './DemoMobileFrame';
import { DemoApp } from './DemoApp';
import { analytics } from '@/lib/analytics';

type ViewMode = 'desktop' | 'mobile';

export function InteractiveDemo() {
    const [viewMode, setViewMode] = useState<ViewMode>('desktop');
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const hasTrackedView = useRef(false);

  // Auto-detect if user is on a small screen and default to mobile view
  useEffect(() => {
        if (typeof window !== 'undefined') {
                const small = window.innerWidth < 640;
                setIsSmallScreen(small);
                if (small) {
                          setViewMode('mobile');
                }
        }
  }, []);

  // Track when demo section comes into view
  useEffect(() => {
        const observer = new IntersectionObserver(
                (entries) => {
                          if (entries[0].isIntersecting && !hasTrackedView.current) {
                                      analytics.trackDemoInteraction('demo_viewed');
                                      hasTrackedView.current = true;
                          }
                },
          { threshold: 0.3 }
              );

                if (sectionRef.current) {
                        observer.observe(sectionRef.current);
                }

                return () => observer.disconnect();
  }, []);

  const handleViewModeChange = (mode: ViewMode) => {
        analytics.trackDemoInteraction('view_mode_changed', { mode });
        setViewMode(mode);
  };

  return (
        <section
                ref={sectionRef}
                className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50"
                aria-labelledby="demo-heading"
                role="region"
              >
          {/* Background decoration */}
              <div className="absolute inset-0 bg-pattern-grid opacity-[0.02]" />
        
              <div className="container-width relative z-10">
                {/* Section header */}
                      <div className="text-center mb-10 sm:mb-12">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-sm font-medium mb-4">
                                            <span className="relative flex h-2 w-2">
                                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>span>
                                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>span>
                                            </span>span>
                                            Interactive Demo
                                </div>div>
                                <h2 id="demo-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                            Experience Relius in action
                                </h2>h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                            Explore the platform that helps churches serve their communities better. Click around to see how it works.
                                </p>p>
                      </div>div>
              
                {/* View mode toggle - hidden on small screens where mobile is forced */}
                      <div className="hidden sm:flex justify-end max-w-6xl mx-auto mb-4">
                                <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white shadow-sm" role="group" aria-label="Demo view mode">
                                            <button
                                                            onClick={() => handleViewModeChange('desktop')}
                                                            aria-label="View desktop version"
                                                            aria-pressed={viewMode === 'desktop'}
                                                            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                                                                              viewMode === 'desktop' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                                                            }`}
                                                          >
                                                          <Monitor className="w-4 h-4" aria-hidden="true" />
                                                          <span>Desktop</span>span>
                                            </button>button>
                                            <button
                                                            onClick={() => handleViewModeChange('mobile')}
                                                            aria-label="View mobile version"
                                                            aria-pressed={viewMode === 'mobile'}
                                                            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                                                                              viewMode === 'mobile' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                                                            }`}
                                                          >
                                                          <Smartphone className="w-4 h-4" aria-hidden="true" />
                                                          <span>Mobile</span>span>
                                            </button>button>
                                </div>div>
                      </div>div>
              
                {/* Demo container */}
                      <div className="max-w-6xl mx-auto">
                        {isSmallScreen ? (
                            /* On small screens, render mobile app directly without phone frame */
                            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
                                          <div className="h-[500px] overflow-hidden bg-gray-50">
                                                          <DemoApp isMobileView />
                                          </div>div>
                            </div>div>
                          ) : viewMode === 'desktop' ? (
                            <DemoBrowserFrame>
                                          <DemoApp />
                            </DemoBrowserFrame>DemoBrowserFrame>
                          ) : (
                            <DemoMobileFrame>
                                          <DemoApp isMobileView />
                            </DemoMobileFrame>DemoMobileFrame>
                                )}
                      </div>div>
              
                {/* Hint text */}
                      <p className="text-center mt-6 text-sm text-slate-500">
                        {isSmallScreen || viewMode === 'mobile'
                                      ? 'Use the bottom navigation to explore different views. Tap on items to interact.'
                                      : 'Try clicking on sidebar items to navigate between views. Add new people or groups using the buttons.'}
                      </p>p>
              
                {/* CTA to get started */}
                      <div className="mt-10 text-center">
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
                                            <span className="text-slate-700 font-medium">
                                                          Want to explore all features?
                                            </span>span>
                                            <Link
                                                            href="/pricing"
                                                            onClick={() => analytics.trackDemoInteraction('demo_cta_clicked')}
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm hover:shadow"
                                                          >
                                                          Get Started Free
                                                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                            </Link>Link>
                                </div>div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
