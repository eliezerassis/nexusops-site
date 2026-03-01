import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-violet-600/10 p-12 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-600/20 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pronto para transformar sua operação?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Junte-se a empresas que já ganharam controle, previsibilidade e eficiência com o Nexus Ops.
            </p>
            <a
              href="https://dwellmate-ops.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 text-lg transition-colors"
            >
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-xs text-slate-500">
              Sem cartão de crédito · Configuração em minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
