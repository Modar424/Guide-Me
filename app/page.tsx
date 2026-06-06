import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex-1 bg-[#FAF6F1]">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF6F1] via-[#F0E6D6] to-[#E8D5BC] py-32 px-8">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D4A86A] opacity-15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#8B5E3C] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C49A6C] opacity-5 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B5E3C]/10 text-[#8B5E3C] text-xs font-bold tracking-widest uppercase rounded-full mb-8 border border-[#8B5E3C]/25 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] animate-pulse" />
            Trusted by Industry Professionals
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#3B2107] leading-[1.1] mb-6 tracking-tight">
            Before You Code,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#8B5E3C]">Understand</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#D4A86A]/30 rounded-full -z-0" />
            </span>{" "}
            Your Project Deeply
          </h1>

          <p className="text-base md:text-lg text-[#7A5230] max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Access premium, architecturally sound blueprints for complex software systems. Skip the initial friction and build on proven, scalable logic frameworks designed by industry veterans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#8B5E3C] text-[#FAF6F1] font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-[#5C3D1E] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Explore Marketplace</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/resources"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-xl hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Browse Resources
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A0784E] font-medium">
            {["No credit card required", "Free to get started", "Cancel anytime"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#8B5E3C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B2107] mb-3">Everything You Need</h2>
          <p className="text-[#7A5230] text-base">Built for developers, teams, and enterprises alike.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🛒", title: "Marketplace", desc: "Browse thousands of curated blueprints, frameworks, and tools ready to deploy.", href: "/marketplace" },
            { icon: "💡", title: "Solutions", desc: "Tailored architectural answers to your engineering challenges.", href: "/solutions" },
            { icon: "🏢", title: "Enterprise", desc: "Scalable infrastructure and dedicated support for growing teams.", href: "/enterprise" },
            { icon: "📚", title: "Resources", desc: "A rich library of articles, research, and deep-dive technical insights.", href: "/resources" },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group bg-white border border-[#E8D5BC] rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-[#C49A6C] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{card.icon}</div>
              <h3 className="text-[#3B2107] font-bold text-lg mb-2 group-hover:text-[#8B5E3C] transition-colors duration-200">{card.title}</h3>
              <p className="text-[#7A5230] text-sm leading-relaxed">{card.desc}</p>
              <div className="mt-4 flex items-center text-[#8B5E3C] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1">
                Learn more <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-gradient-to-r from-[#5C3D1E] via-[#8B5E3C] to-[#5C3D1E] py-14 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { value: "10K+", label: "Blueprints Available" },
            { value: "5K+", label: "Active Teams" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-4xl md:text-5xl font-extrabold text-[#FAF6F1] mb-1 tracking-tight group-hover:scale-110 transition-transform duration-300 inline-block">{stat.value}</div>
              <div className="text-[#D4A86A] text-sm font-semibold tracking-wide uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 text-center bg-gradient-to-t from-[#E8D5BC] to-[#FAF6F1]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B2107] mb-4">Ready to Build Smarter?</h2>
        <p className="text-[#7A5230] mb-10 max-w-xl mx-auto text-base leading-relaxed">
          Join thousands of engineers and teams who skip the guesswork and ship with confidence.
        </p>
        <Link
          href="/marketplace"
          className="group relative inline-flex items-center gap-2 px-12 py-4 bg-[#5C3D1E] text-[#FAF6F1] font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 bg-[#3B2107] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">Get Started Free</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </section>

    </main>
  )
}
