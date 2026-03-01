import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Para equipes pequenas que precisam de organização essencial.",
    highlight: false,
    features: [
      "Até 10 usuários",
      "Módulo de Cronograma",
      "Módulo de Pessoas",
      "Banco de Fotos básico",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Pro",
    description: "Para equipes médias que querem controle total da operação.",
    highlight: true,
    features: [
      "Até 50 usuários",
      "Todos os módulos incluídos",
      "Relatórios avançados",
      "Frotas e Inventário",
      "Suporte prioritário",
      "Integração via API",
    ],
  },
  {
    name: "Enterprise",
    description: "Para grandes operações com necessidades personalizadas.",
    highlight: false,
    features: [
      "Usuários ilimitados",
      "Personalização completa",
      "SLA garantido",
      "Onboarding dedicado",
      "Treinamento presencial",
      "Gerente de conta exclusivo",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white/2">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Planos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Sem surpresas. Fale com nossa equipe e encontre o plano certo para o tamanho da sua operação.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.highlight
                  ? "border-indigo-500/60 bg-indigo-600/10 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  <Star className="w-3 h-3" />
                  Mais popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://dwellmate-ops.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                    : "border border-white/20 hover:border-white/40 text-white"
                }`}
              >
                Consultar plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
