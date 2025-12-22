'use client';
import React from 'react';
import { PageWrapper } from '../components/Layout/PageWrapper';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import Link from 'next/link';
import { Reveal } from "../components/UI/Reveal";
import { Squares } from "../components/Effects/Squares";

export default function Mentorias() {
  return (
    <PageWrapper backgroundEffect={<Squares opacity={0.2} speed={0.5} />}>
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Mentoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(255,0,85,0.4)]">Elite</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Conecte-se com profissionais qualificados e acelere seu desenvolvimento pessoal e profissional.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24">

          {/* SECTION 1: INTRO */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                <span className="text-pink-500">///</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">O Que São?</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  As Mentorias PABLife foram criadas para pessoas que desejam sair do modo automático e construir uma vida com clareza, disciplina e alta performance, por meio de um método estruturado, humano e aplicável à rotina real.
                </p>
              </div>
            </div>
            <Card className="bg-pink-900/10 border-pink-500/30 hover:border-pink-500/50 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10"></div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-6 bg-black/60 rounded-lg text-center border border-pink-500/20 hover:border-pink-500/40 transition-all">
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">1:1</div>
                  <div className="text-xs uppercase tracking-widest text-pink-400 font-mono">Exclusivo</div>
                </div>
                <div className="p-6 bg-black/60 rounded-lg text-center border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">24h</div>
                  <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono">Suporte</div>
                </div>
                <div className="col-span-2 p-6 bg-black/60 rounded-lg text-center border border-white/20 hover:border-white/40 transition-all">
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white font-mono">Focado em você</div>
                </div>
              </div>
            </Card>
          </section>

          {/* SECTION 2: STEPS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">
              <span className="text-cyan-400">///</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-500">Como Funciona</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'ESCOLHA', desc: 'Navegue pelo app e Encontre sua mentoria ideal' },
                { step: '02', title: 'AGENDE', desc: 'Selecione o melhor horário para a sua rotina.' },
                { step: '03', title: 'PARTICIPE', desc: 'Conecte-se pela mentoria desejada.' },
                { step: '04', title: 'EVOLUA', desc: 'Aplique o conhecimento e acompanhe seu progresso.' },
              ].map((item) => (
                <Card key={item.step} className="group hover:-translate-y-4 hover:border-pink-500/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-pink-500/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="text-7xl font-black text-pink-500/20 mb-4 group-hover:text-pink-500/40 transition-colors relative z-10">{item.step}</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wider relative z-10">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed relative z-10">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* SECTION 3: AREAS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Áreas de Atuação</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: '💼', label: 'Carreira' },
                { icon: '🧠', label: 'Saúde Mental' },
                { icon: '⚡', label: 'Produtividade' },
                { icon: '💪', label: 'Fitness' },
                { icon: '📚', label: 'Estudos' },
                { icon: '🎯', label: 'Metas' },
              ].map((area) => (
                <Card key={area.label} className="text-center hover:bg-white/10 hover:border-cyan-500/50 cursor-default transition-all duration-300 group">
                  <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all">{area.icon}</div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">{area.label}</h4>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/20 to-transparent blur-3xl -z-10" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">Pronto para começar?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">Baixe o aplicativo Pablife e tenha acesso a mentores de elite na palma da sua mão.</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/contato"><Button variant="primary" glow size="lg">Falar com Suporte</Button></Link>
              <Link href="/"><Button variant="ghost" size="lg">Voltar ao Início</Button></Link>
            </div>
          </section>

        </div>
      </div>
    </PageWrapper>
  );
}
