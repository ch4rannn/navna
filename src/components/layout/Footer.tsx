import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  footerServiceLinks,
  footerCompanyLinks,
  footerLegalLinks,
} from "@/data/navigation";
import { founders } from "@/data/founders";

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-50 relative overflow-hidden" role="contentinfo">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />
      <Container className="py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand - takes up 2/4 columns on desktop */}
          <div className="lg:col-span-2 lg:pr-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl text-white hover:text-emerald-400 transition-colors logo-text"
            >
              <img src="/logo.png" alt="NAVNA Logo" className="h-6 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
              NAVNA
            </Link>
            <p className="mt-5 text-[14px] text-slate-400 leading-relaxed max-w-sm">
              A digital growth agency helping businesses establish and improve their online presence with strategy-first design and search visibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {founders.map((founder) => (
                <div key={founder.name} className="flex gap-2.5">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {founder.whatsapp && (
                    <a
                      href={founder.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all shadow-sm"
                      aria-label={`Chat with ${founder.name} on WhatsApp`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services - takes up 1/4 columns on desktop */}
          <div>
            <h3 className="text-[12px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Services</h3>
            <nav aria-label="Footer services navigation">
              <ul className="space-y-3">
                {footerServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company - takes up 1/4 columns on desktop */}
          <div>
            <h3 className="text-[12px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Company</h3>
            <nav aria-label="Footer company navigation">
              <ul className="space-y-3">
                {footerCompanyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-500 font-medium">
            © {new Date().getFullYear()} NAVNA. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-slate-500 hover:text-slate-300 transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
