import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MapPin, ArrowLeft, Mail } from "lucide-react";
import { getJobBySlug, jobOpenings } from "../jobs";

export function generateStaticParams() {
  return jobOpenings
    .filter((job) => job.sections)
    .map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers | Sketch Robotics`,
    description: job.description,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job || !job.sections || job.status === "closed") {
    notFound();
  }

  const mailtoHref = `mailto:${job.applyEmail}?subject=${encodeURIComponent(
    job.applySubject ?? `Application – ${job.title}`
  )}`;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="bg-black py-16 sm:py-20 md:py-24 relative overflow-hidden min-h-screen">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-0 w-[31.25rem] h-[31.25rem] opacity-20 z-0">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          {/* Back link */}
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 sm:mb-10 text-xs sm:text-sm"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO CAREERS
          </Link>

          {/* Header */}
          <div className="mb-10 sm:mb-12">
            {job.department && (
              <p
                className="text-[rgba(255,136,0,0.87)] text-xs sm:text-sm mb-3 tracking-wider"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {job.department.toUpperCase()}
              </p>
            )}
            <h1
              className="font-normal text-2xl sm:text-3xl md:text-[2.25rem] text-white/90 mb-4 leading-tight"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span
                  className="text-xs sm:text-sm"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {job.location}
                </span>
              </div>
            </div>
          </div>

          {/* JD Sections */}
          <div className="space-y-10 sm:space-y-12 mb-12 sm:mb-16">
            {job.sections.map((section) => (
              <div key={section.heading}>
                <h2
                  className="text-lg sm:text-xl font-normal text-white mb-4"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-light text-sm sm:text-[0.9375rem] text-white/60 leading-relaxed mb-4"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 font-light text-sm sm:text-[0.9375rem] text-white/60 leading-relaxed"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                      >
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[rgba(255,136,0,0.6)] mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Apply CTA */}
          <div
            className="rounded-[1.25rem] md:rounded-[1.875rem] p-6 sm:p-8 border border-white/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{
              background:
                "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
            }}
          >
            <div>
              <h3
                className="text-white text-base sm:text-lg font-normal mb-2"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                Ready to Apply?
              </h3>
              <p
                className="font-light text-xs sm:text-sm text-white/60 leading-relaxed"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                Send your resume and portfolio to {job.applyEmail}
              </p>
            </div>
            <a
              href={mailtoHref}
              className="shrink-0 h-[2.75rem] sm:h-[3rem] px-6 sm:px-8 rounded-[0.9375rem] sm:rounded-[1.25rem] bg-[rgba(255,136,0,0.15)] hover:bg-[rgba(255,136,0,0.3)] border border-[rgba(255,136,0,0.3)] flex items-center justify-center gap-2 text-xs sm:text-sm text-[rgba(255,136,0,0.87)] transition-all duration-300"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              APPLY NOW
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
