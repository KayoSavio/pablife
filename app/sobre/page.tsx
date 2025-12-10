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
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              QUEM <span className="text-pink-500">SOMOS</span>
            </h1>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/30 shadow-[0_0_50px_rgba(255,51,149,0.15)] mt-8">
              <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
                A <strong className="text-pink-500">PABLIFE</strong> é uma plataforma de alta performance que une <span className="text-cyan-400 font-bold">psicologia, nutrição e organização</span>.
                Nosso propósito é forjar sua evolução pessoal através de dados, método e comunidade.
              </p>
            </div>
          </Reveal>
        </div>

        {/* MISSION */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🎯', title: 'Profissional', text: 'Suporte de elite com especialistas certificados.' },
            { icon: '⚡', title: 'Alta Performance', text: 'Ferramentas de produtividade para quem não aceita o médio.' },
            { icon: '📚', title: 'Conhecimento', text: 'Conteúdo validado cientificamente.' },
          ].map(item => (
            <Card key={item.title} className="text-center hover:bg-white/10 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2 uppercase">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </Card>
          ))}
        </section>

        {/* MANIFESTO */}
        <section className="relative overflow-hidden rounded-3xl bg-black/40 border border-white/10 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wider">O Que Acreditamos</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['DISCIPLINA', 'CLAREZA', 'EQUILÍBRIO', 'DADOS', 'RESULTADO'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-pink-500">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Somos uma startup que acredita que o caos é apenas falta de método. Aqui você encontra as ferramentas para construir sua melhor versão. Todos os dias.
          </p>
        </section>

        {/* CONTACT TEASER */}
        <div className="text-center">
          <p className="text-gray-500 mb-6 font-mono text-sm">FAÇA PARTE DO MOVIMENTO</p>
          <h2 className="text-4xl font-black text-white mb-8">PABLIFE <span className="text-cyan-400 text-lg align-top ml-2">BETA</span></h2>
          <Link href="/contato"><Button glow>Falar com a Equipe</Button></Link>
        </div>

      </div>
    </PageWrapper>
  );
}
