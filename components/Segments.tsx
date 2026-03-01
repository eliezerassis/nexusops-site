import { Sparkles, Building2, BedDouble, Wrench } from "lucide-react";

const segments = [
  {
    icon: Sparkles,
    title: "Limpeza e Conservação",
    description:
      "Controle checklists de limpeza, escale equipes por área e registre evidências fotográficas de cada ambiente.",
  },
  {
    icon: Building2,
    title: "Condomínios",
    description:
      "Gestão de porteiros, zeladores e prestadores. Controle de acesso, manutenções e relatórios de ocorrências.",
  },
  {
    icon: BedDouble,
    title: "Hospitalidade",
    description:
      "Organize a preparação de quartos, controle de amenities e turnover de equipes em hotéis e resorts.",
  },
  {
    icon: Wrench,
    title: "Manutenção Predial",
    description:
      "Registro de ordens de serviço, controle de peças e histórico completo de manutenções corretivas e preventivas.",
  },
];

export default function Segments() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Segmentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Feito para o seu setor
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            O Nexus Ops foi pensado para empresas de serviços que precisam de controle operacional real.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-violet-500/40 hover:bg-white/8 transition-all"
              >
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{seg.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{seg.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
