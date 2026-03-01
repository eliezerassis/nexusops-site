import { Zap, Github } from "lucide-react";

const links = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Planos", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="flex items-center gap-2 text-white font-bold text-lg">
            <Zap className="w-5 h-5 text-indigo-400" />
            Nexus Ops
          </a>
          <p className="text-slate-500 text-xs">
            Gestão operacional para empresas de serviços.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* GitHub + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://github.com/eliezerassis/nexusops-site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <p className="text-xs text-slate-600">
            © {year} Nexus Ops. Feito com Next.js + Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
