'use client';
import React from 'react';
import { PageWrapper } from '../components/Layout/PageWrapper';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { Reveal } from "../components/UI/Reveal";

export default function Contato() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16 space-y-6">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              FALE <span className="text-cyan-400">CONOSCO</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">Estamos online. Como podemos ajudar?</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center bg-white/5 hover:border-pink-500">
            <div className="w-12 h-12 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center text-2xl mb-4">📧</div>
            <h3 className="font-bold text-white mb-2">Email Oficial</h3>
            <p className="text-xs text-gray-400 mb-4">Dúvidas gerais e suporte técnico</p>
            <a href="mailto:suporte@pablife.com.br" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm">suporte@pablife.com.br</a>
          </Card>

          <Card className="text-center bg-white/5 hover:border-pink-500">
            <div className="w-12 h-12 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center text-2xl mb-4">📸</div>
            <h3 className="font-bold text-white mb-2">Instagram</h3>
            <p className="text-xs text-gray-400 mb-4">Novidades e direct</p>
            <a href="https://instagram.com/pablife" target="_blank" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm">@pablife</a>
          </Card>

          <Card className="text-center bg-white/5 hover:border-pink-500">
            <div className="w-12 h-12 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center text-2xl mb-4">⏰</div>
            <h3 className="font-bold text-white mb-2">Horário</h3>
            <p className="text-xs text-gray-400">Seg-Sex: 09h às 18h</p>
            <p className="text-xs text-gray-400">Sáb: 09h às 13h</p>
          </Card>
        </div>

        <section className="bg-black/40 rounded-3xl p-8 border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-pink-500 pl-4">FAQ - Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "O app está disponível onde?", a: "Atualmente na App Store e Google Play. Busque por 'PABLIFE'." },
              { q: "É gratuito?", a: "Sim, com funcionalidades premium opcionais para quem quer acelerar resultados." },
              { q: "Como agendo mentorias?", a: "Diretamente pelo app na aba 'Mentores'. É instantâneo." },
              { q: "Meus dados são seguros?", a: "Criptografia de ponta a ponta. Sua privacidade é inegociável." }
            ].map((faq, i) => (
              <div key={i} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  );
}
