import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, XCircle, Calendar, Clock, GraduationCap, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Verify Certificate",
  description: "Verify the authenticity of a Sketch Robotics certificate.",
  robots: { index: false, follow: false },
};

// --- Types ---------------------------------------------------------------
interface CertRecord {
  cert_no: string;
  candidate: string;
  completion_date: string;
  duration: string;
  program_name: string;
  modules: string[];
  issued_on: string;
}

// --- Helpers -------------------------------------------------------------
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const dotPatternStyle = {
  backgroundImage:
    "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1.5px, transparent 2px)",
  backgroundSize: "24px 24px",
  maskImage: "radial-gradient(circle, black 40%, transparent 70%)",
  WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)",
} as const;

const UNBOUNDED = { fontFamily: "'Unbounded', sans-serif" } as const;

function formatDate(value: string): string {
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

async function lookupCertificate(id: string): Promise<CertRecord | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key || !UUID_RE.test(id)) return null;

  try {
    const res = await fetch(`${url}/rest/v1/rpc/verify_certificate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({ p_token: id }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const rows = (await res.json()) as CertRecord[];
    return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
  } catch {
    return null;
  }
}

// --- Small presentational pieces ----------------------------------------
function DotBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 right-0 z-0 opacity-80"
        style={{ ...dotPatternStyle, width: "37.5rem", height: "37.5rem", right: "-6.25rem", top: "-3.125rem" }}
      />
      <div
        className="absolute bottom-0 left-0 z-0 opacity-60"
        style={{ ...dotPatternStyle, width: "43.75rem", height: "43.75rem", left: "-9.375rem", bottom: "-6.25rem" }}
      />
      <div className="absolute top-20 right-0 w-[31.25rem] h-[31.25rem] opacity-20 z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
      </div>
    </div>
  );
}

function InfoTile({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-[1.25rem] border border-white/10 bg-white/[0.02]">
      <div className="shrink-0 w-11 h-11 rounded-full bg-[rgba(255,136,0,0.1)] border border-[rgba(255,136,0,0.2)] flex items-center justify-center">
        <Icon className="w-5 h-5 text-[rgba(255,136,0,0.87)]" />
      </div>
      <div>
        <p className="text-white/40 text-[0.7rem] uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white text-sm sm:text-base" style={UNBOUNDED}>{value}</p>
      </div>
    </div>
  );
}

// --- States --------------------------------------------------------------
function ValidCertificate({ cert }: { cert: CertRecord }) {
  return (
    <div className="animate-slide-up">
      {/* Verified badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,136,0,0.3)] bg-[rgba(255,136,0,0.1)] mb-8">
        <CheckCircle2 className="w-4 h-4 text-[rgba(255,136,0,0.87)]" />
        <span className="text-[rgba(255,136,0,0.87)] text-xs tracking-wide" style={UNBOUNDED}>
          Verified Certificate
        </span>
      </div>

      {/* Candidate */}
      <p className="text-white/40 text-xs uppercase tracking-widest mb-2">This certifies that</p>
      <h1 className="text-white text-[clamp(1.75rem,5vw,3rem)] leading-[1.1] font-normal mb-6" style={UNBOUNDED}>
        {cert.candidate}
      </h1>

      {/* Program */}
      <p className="text-white/40 text-xs uppercase tracking-widest mb-2">has completed the</p>
      <h2 className="text-white/90 text-lg sm:text-xl leading-snug mb-8" style={UNBOUNDED}>
        {cert.program_name}
      </h2>

      {/* Cert no */}
      <div className="inline-flex items-center gap-2 mb-10">
        <ShieldCheck className="w-4 h-4 text-white/40" />
        <span className="text-white/70 text-sm font-mono tracking-wide">{cert.cert_no}</span>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <InfoTile icon={Calendar} label="Completion Date" value={formatDate(cert.completion_date)} />
        <InfoTile icon={Clock} label="Duration" value={cert.duration} />
      </div>

      {/* Modules */}
      <div className="p-6 rounded-[1.25rem] border border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-3 mb-5">
          <GraduationCap className="w-5 h-5 text-[rgba(255,136,0,0.87)]" />
          <h3 className="text-white text-sm uppercase tracking-widest" style={UNBOUNDED}>Modules Covered</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {cert.modules.map((m) => (
            <span
              key={m}
              className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/80 text-xs sm:text-[0.8rem]"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <p className="text-white/30 text-xs mt-8 leading-relaxed">
        This record is verified directly against the Sketch Robotics certificate database.
        Issued on {formatDate(cert.issued_on)}.
      </p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="animate-slide-up max-w-xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
        <XCircle className="w-4 h-4 text-red-400" />
        <span className="text-red-400 text-xs tracking-wide" style={UNBOUNDED}>Not Verified</span>
      </div>
      <h1 className="text-white text-[clamp(1.5rem,4vw,2.5rem)] leading-tight font-normal mb-4" style={UNBOUNDED}>
        Certificate not found
      </h1>
      <p className="text-white/50 text-sm sm:text-base leading-relaxed">
        This link doesn&apos;t match a valid certificate in our records. The code may be
        mistyped, or the certificate may have been revoked. If you believe this is an error,
        contact Sketch Robotics with the certificate number printed on the document.
      </p>
    </div>
  );
}

// --- Page ----------------------------------------------------------------
export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const cert = id ? await lookupCertificate(id) : null;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="relative overflow-hidden min-h-screen bg-black pt-28 pb-20 sm:pt-32 sm:pb-24">
        <DotBackground />
        <div className="w-full max-w-[48rem] mx-auto px-5 sm:px-6 md:px-10 lg:px-[3.75rem] relative z-10">
          {cert ? <ValidCertificate cert={cert} /> : <NotFound />}
        </div>
      </section>
      <Footer />
    </div>
  );
}
