const steps = [
  {
    number: "01",
    title: "Cadastre sua empresa e configure sua equipe",
    description:
      "Crie sua conta, adicione os membros da equipe e configure os módulos que fazem sentido para a sua operação.",
  },
  {
    number: "02",
    title: "Atribua cronogramas e gerencie tarefas diárias",
    description:
      "Defina checklists, escale equipes, controle abastecimentos e registre tudo em tempo real pelo celular ou desktop.",
  },
  {
    number: "03",
    title: "Acompanhe tudo em tempo real com relatórios automáticos",
    description:
      "Dashboards ao vivo, relatórios gerados automaticamente e evidências fotográficas para decisões rápidas e assertivas.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/2">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simples de começar, poderoso para crescer
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Em três passos você coloca sua operação no ar e começa a ganhar controle total.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-8 items-start group">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-indigo-500/60 bg-indigo-600/20 text-indigo-300 font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-indigo-500/40 to-transparent mt-2 h-16" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
