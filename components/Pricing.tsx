"use client";

import { useState } from "react";
import { Check, Star } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  highlight: boolean;
  trial?: boolean;
  features: string[];
};

const pfPlans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "R$0",
    priceNote: "por 7 dias",
    description: "Experimente o DwellMate Ops sem compromisso.",
    highlight: false,
    trial: true,
    features: [
      "1 usuário",
      "1 imóvel",
      "Módulo de Cronograma",
      "Módulo de Pessoas",
      "Suporte por e-mail",
    ],
  },
  {
    id: "solo",
    name: "Solo",
    price: "R$49,90",
    priceNote: "/mês",
    description: "Para profissionais autônomos que gerenciam sua própria operação.",
    highlight: false,
    features: [
      "1 usuário",
      "Até 5 imóveis",
      "Todos os módulos incluídos",
      "Banco de Fotos",
      "Suporte prioritário",
    ],
  },
  {
    id: "pf_team",
    name: "PF Team",
    price: "R$149,90",
    priceNote: "/mês",
    description: "Para pequenas equipes de pessoa física com até 5 colaboradores.",
    highlight: true,
    features: [
      "Até 5 usuários",
      "Até 15 imóveis",
      "Todos os módulos incluídos",
      "Relatórios avançados",
      "Frotas e Inventário",
      "Suporte prioritário",
    ],
  },
];

const pjPlans: Plan[] = [
  {
    id: "pj_starter",
    name: "PJ Starter",
    price: "R$999,99",
    priceNote: "/mês",
    description: "Para empresas que estão começando a estruturar sua operação.",
    highlight: false,
    features: [
      "Até 20 usuários",
      "Até 50 imóveis",
      "Todos os módulos incluídos",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
  },
  {
    id: "pj_pro",
    name: "PJ Pro",
    price: "R$1.999,99",
    priceNote: "/mês",
    description: "Para empresas em crescimento com operações mais complexas.",
    highlight: true,
    features: [
      "Até 50 usuários",
      "Até 200 imóveis",
      "Todos os módulos incluídos",
      "Relatórios avançados",
      "Frotas e Inventário",
      "Integração via API",
      "Suporte dedicado",
    ],
  },
  {
    id: "pj_enterprise",
    name: "PJ Enterprise",
    price: "R$2.999,99",
    priceNote: "/mês",
    description: "Para grandes operações com necessidades personalizadas.",
    highlight: false,
    features: [
      "Usuários ilimitados",
      "Imóveis ilimitados",
      "Personalização completa",
      "SLA garantido",
      "Onboarding dedicado",
      "Treinamento presencial",
      "Gerente de conta exclusivo",
    ],
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<"pf" | "pj">("pj");
  const plans = tab === "pf" ? pfPlans : pjPlans;

  return (
    <section id="pricing" className="py-24 px-6 bg-white/2">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Planos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Sem surpresas. Escolha entre pessoa física ou jurídica e encontre o plano certo para a sua operação.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1 gap-1">
            <button
              onClick={() => setTab("pf")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === "pf"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Pessoa Física
            </button>
            <button
              onClick={() => setTab("pj")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === "pj"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Pessoa Jurídica
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
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

              {plan.trial && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  7 dias grátis
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-2xl mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  {plan.priceNote && (
                    <span className="text-slate-400 text-sm">{plan.priceNote}</span>
                  )}
                </div>
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
                {plan.trial ? "Começar grátis" : "Consultar plano"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
