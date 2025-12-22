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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              FALE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]">CONOSCO</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">Estamos online. Como podemos ajudar?</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center bg-black/40 hover:border-pink-500/50 group transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-pink-500/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="w-12 h-12 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10 border border-pink-500/30">📧</div>
            <h3 className="font-bold text-white mb-2 uppercase tracking-wider relative z-10">Email Oficial</h3>
            <p className="text-xs text-gray-400 mb-4 relative z-10">Dúvidas gerais e suporte técnico</p>
            <a href="mailto:Suporte@pablife.com.br" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm relative z-10 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Suporte@pablife.com.br</a>
          </Card>

          <Card className="text-center bg-black/40 hover:border-pink-500/50 group transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-pink-500/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="w-12 h-12 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10 border border-pink-500/30">📸</div>
            <h3 className="font-bold text-white mb-2 uppercase tracking-wider relative z-10">Instagram</h3>
            <p className="text-xs text-gray-400 mb-4 relative z-10">Novidades e direct</p>
            <a href="https://instagram.com/pablife" target="_blank" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm relative z-10 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">@pablife_app</a>
          </Card>

          <Card className="text-center bg-black/40 hover:border-pink-500/50 group transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-pink-500/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="w-12 h-12 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10 border border-pink-500/30">⏰</div>
            <h3 className="font-bold text-white mb-2 uppercase tracking-wider relative z-10">Horário</h3>
            <p className="text-xs text-gray-400 relative z-10">Seg-Sex: 09h às 18h</p>
            <p className="text-xs text-gray-400 relative z-10">Sáb: 09h às 13h</p>
          </Card>
        </div>

        <section className="bg-black/40 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 border-l-4 border-pink-500 pl-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">FAQ - Perguntas Frequentes</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "O app está disponível onde?", a: "Atualmente na App Store e Google Play. Busque por 'PABLIFE'." },
              { q: "É gratuito?", a: "Sim, com funcionalidades premium opcionais para quem quer acelerar resultados." },
              { q: "Como agendo mentorias?", a: "Diretamente pelo app na aba 'Mentores'. É instantâneo." },
              { q: "Meus dados são seguros?", a: "Criptografia de ponta a ponta. Sua privacidade é inegociável." }
            ].map((faq, i) => (
              <div key={i} className="pb-6 border-b border-white/5 last:border-0 last:pb-0 hover:border-pink-500/20 transition-all">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 uppercase tracking-wide">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  );
}
