"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O Nexus Ops funciona no celular?",
    a: "Sim! A plataforma é totalmente responsiva e funciona em qualquer dispositivo — smartphone, tablet ou desktop. Nada para instalar.",
  },
  {
    q: "Precisa instalar algum aplicativo?",
    a: "Não. O Nexus Ops roda diretamente no navegador. Sem downloads, sem instalações. Acesse de qualquer lugar com internet.",
  },
  {
    q: "Quantos usuários posso adicionar?",
    a: "Depende do plano escolhido. O Basic suporta até 10 usuários, o Pro até 50, e o Enterprise é ilimitado. Consulte nossa equipe para mais detalhes.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "Os planos são cobrados mensalmente ou anualmente (com desconto). Entre em contato com nossa equipe para obter uma proposta personalizada.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Não há fidelidade mínima. Você pode cancelar seu plano a qualquer momento sem multas ou taxas adicionais.",
  },
  {
    q: "O suporte é em português?",
    a: "Sim! Todo o suporte, documentação e atendimento são realizados em português. Estamos aqui para ajudar sua equipe.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-slate-400">
            Não encontrou o que procura? Fale com nossa equipe.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-medium hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
