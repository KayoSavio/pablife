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
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              Mentoria <span className="text-pink-500">Elite</span>
            </h1>
            <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto font-light leading-relaxed">
              Conecte-se com profissionais qualificados e acelere seu desenvolvimento pessoal e profissional.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24">

          {/* SECTION 1: INTRO */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                <span className="text-pink-500">///</span> O Que São?
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  Nossas mentorias são sessões personalizadas com profissionais especializados em diversas áreas,
                  incluindo desenvolvimento pessoal, produtividade, saúde mental, e carreira.
                </p>
                <p>
                  Cada sessão é adaptada às suas necessidades específicas, oferecendo orientação prática e
                  estratégias comprovadas para ajudá-lo a alcançar seus objetivos.
                </p>
              </div>
            </div>
            <Card className="bg-pink-900/10 border-pink-500/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/40 rounded-lg text-center">
                  <div className="text-4xl mb-2">1:1</div>
                  <div className="text-xs uppercase tracking-widest text-pink-400">Exclusivo</div>
                </div>
                <div className="p-4 bg-black/40 rounded-lg text-center">
                  <div className="text-4xl mb-2">24h</div>
                  <div className="text-xs uppercase tracking-widest text-cyan-400">Suporte</div>
                </div>
                <div className="col-span-2 p-4 bg-black/40 rounded-lg text-center">
                  <div className="text-4xl mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Focado em você</div>
                </div>
              </div>
            </Card>
          </section>

          {/* SECTION 2: STEPS */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider text-center">
              <span className="text-cyan-400">///</span> Como Funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Escolha', desc: 'Navegue pelo catálogo e encontre o mentor ideal.' },
                { step: '02', title: 'Agende', desc: 'Selecione o melhor horário para a sua rotina.' },
                { step: '03', title: 'Participe', desc: 'Conecte-se via vídeo ou presencialmente.' },
                { step: '04', title: 'Evolua', desc: 'Aplique o conhecimento e acompanhe seu progresso.' },
              ].map((item) => (
                <Card key={item.step} className="group hover:-translate-y-4 transition-transform duration-500">
                  <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-pink-500/20 transition-colors">{item.step}</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* SECTION 3: AREAS */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider text-center">
              Áreas de Atuação
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
                <Card key={area.label} className="text-center hover:bg-white/10 cursor-default">
                  <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-all">{area.icon}</div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">{area.label}</h4>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent blur-3xl -z-10" />
            <h2 className="text-4xl font-black text-white mb-6 uppercase italic">Pronto para começar?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Baixe o aplicativo Pablife e tenha acesso a mentores de elite na palma da sua mão.</p>
            <div className="flex justify-center gap-6">
              <Link href="/contato"><Button variant="primary" glow>Falar com Suporte</Button></Link>
              <Link href="/"><Button variant="ghost">Voltar ao Início</Button></Link>
            </div>
          </section>

        </div>
      </div>
    </PageWrapper>
  );
}
