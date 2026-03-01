import {
  CalendarDays,
  Truck,
  Package,
  Users,
  BarChart3,
  Camera,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Cronograma",
    description:
      "Atribua tarefas, defina checklists diários e acompanhe a execução da equipe em tempo real.",
  },
  {
    icon: Truck,
    title: "Frotas",
    description:
      "Controle veículos, abastecimentos e manutenções com histórico completo e alertas automáticos.",
  },
  {
    icon: Package,
    title: "Inventário",
    description:
      "Gerencie produtos, equipamentos e insumos com controle de estoque e movimentações.",
  },
  {
    icon: Users,
    title: "Pessoas",
    description:
      "Cadastre funcionários e prestadores, controle presença e centralize informações da equipe.",
  },
  {
    icon: BarChart3,
    title: "Relatórios",
    description:
      "Dashboards e relatórios automáticos para decisões baseadas em dados reais da operação.",
  },
  {
    icon: Camera,
    title: "Banco de Fotos",
    description:
      "Registre e organize fotos por ambiente, data e responsável. Evidências organizadas e acessíveis.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Funcionalidades
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tudo que sua operação precisa
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Módulos integrados que cobrem todas as áreas críticas de uma operação de serviços.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 hover:border-indigo-500/40 transition-all"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 group-hover:bg-indigo-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
