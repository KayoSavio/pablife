'use client';
import React from 'react';
import { PageWrapper } from '../components/Layout/PageWrapper';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import Link from 'next/link';
import { GridMotion } from "../components/Effects/GridMotion";
import { Reveal } from "../components/UI/Reveal";

export default function Sobre() {
  return (
    <PageWrapper backgroundEffect={<GridMotion color="#ff0055" />}>
      <div className="max-w-4xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16 space-y-6">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              QUEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(255,0,85,0.4)]">SOMOS</span>
            </h1>
            <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/30 shadow-[0_0_50px_rgba(255,0,85,0.2)] mt-8 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
                A <strong className="text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,85,0.5)]">PABLIFE</strong> é uma plataforma de alta performance que une <span className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">psicologia, nutrição e organização</span>.
                Nosso propósito é forjar sua evolução pessoal através de dados, método e comunidade.
              </p>
            </div>
          </Reveal>
        </div>

        {/* MISSION */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '🎯', title: 'Profissional', text: 'Suporte de elite com especialistas certificados.' },
            { icon: '⚡', title: 'Alta Performance', text: 'Ferramentas de produtividade para quem não aceita o médio.' },
            { icon: '📚', title: 'Conhecimento', text: 'Conteúdo validado cientificamente.' },
          ].map(item => (
            <Card key={item.title} className="text-center hover:bg-white/10 hover:border-pink-500/50 group transition-all duration-500">
              <div className="absolute inset-0 bg-pink-500/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform relative z-10">{item.icon}</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2 uppercase tracking-wider relative z-10">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.text}</p>
            </Card>
          ))}
        </section>

        {/* MANIFESTO */}
        <section className="relative overflow-hidden rounded-3xl bg-black/40 border border-white/10 p-12 text-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">O Que Acreditamos</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['DISCIPLINA', 'CLAREZA', 'EQUILÍBRIO', 'DADOS', 'RESULTADO'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-mono tracking-widest text-pink-500 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Somos uma startup que acredita que o caos é apenas falta de método. Aqui você encontra as ferramentas para construir sua melhor versão. Todos os dias.
          </p>
        </section>

        {/* CONTACT TEASER */}
        <div className="text-center">
          <p className="text-pink-500/70 mb-6 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">FAÇA PARTE DO MOVIMENTO</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
            PABLIFE <span className="text-cyan-400 text-lg align-top ml-2 border border-cyan-400/30 px-2 py-1 rounded">BETA</span>
          </h2>
          <Link href="/contato"><Button variant="primary" glow size="lg">Falar com a Equipe</Button></Link>
        </div>

      </div>
    </PageWrapper>
  );
}
