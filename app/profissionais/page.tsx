'use client';
import React from 'react';
import { PageWrapper } from '../components/Layout/PageWrapper';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import Link from 'next/link';
import { Reveal } from "../components/UI/Reveal";
import { Squares } from "../components/Effects/Squares";

export default function Profissionais() {
  return (
    <PageWrapper backgroundEffect={<Squares color="#00ffff" opacity={0.15} speed={0.8} />}>
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              PRO <span className="text-cyan-400">TEAM</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              A elite do suporte. Nossa equipe de profissionais qualificados está pronta para masterizar sua jornada.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24">

          {/* SECTION 1: PROFILES GRID */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '👨‍💼', title: 'Career Coach', desc: 'Estratégia pura para dominar o mercado corporativo ou empreender.' },
                { icon: '🧠', title: 'Psicólogos', desc: 'Blindagem mental. Controle de ansiedade e foco absoluto.' },
                { icon: '💪', title: 'Trainers', desc: 'Engenharia corporal. Treinos periodizados para resultados estéticos.' },
                { icon: '⚡', title: 'Productivity', desc: 'Hackeie seu tempo. Otimização de rotina e sistemas de eficiência.' },
                { icon: '📚', title: 'Mentores', desc: 'Aceleração de aprendizado. Absorva conhecimento 10x mais rápido.' },
                { icon: '🎯', title: 'Strategists', desc: 'Definição e execução de metas de alta complexidade.' },
              ].map((pro) => (
                <Card key={pro.title} className="group hover:border-cyan-400/50">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{pro.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{pro.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">{pro.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* SECTION 2: PROCESS */}
          <section className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />

            <div className="space-y-12">
              {[
                { step: '01', title: 'Selection', text: 'Analise o perfil técnico de cada especialista.' },
                { step: '02', title: 'Booking', text: 'Agendamento direto pelo app, sem burocracia.' },
                { step: '03', title: 'Execution', text: 'Sessão intensa de alinhamento e estratégia.' },
                { step: '04', title: 'Follow-up', text: 'Acompanhamento de métricas e recalibragem.' },
              ].map((item) => (
                <div key={item.step} className="grid grid-cols-[auto_1fr] gap-8 items-start relative bg-black/20 p-6 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-cyan-600 flex items-center justify-center font-bold text-white z-10 shadow-[0_0_20px_rgba(255,51,149,0.5)]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-cyan-400 mb-2 uppercase italic">{item.title}</h3>
                    <p className="text-white/70 max-w-xl">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: CTA */}
          <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-t from-pink-900/20 to-transparent rounded-3xl border border-white/5">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 text-center uppercase tracking-tighter">
              Construa seu time.<br />
              <span className="text-pink-500">Domine o jogo.</span>
            </h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/agendamento"><Button variant="outline">Ver Agendamentos</Button></Link>
              <Link href="/contato"><Button variant="primary" glow>Falar com Suporte</Button></Link>
            </div>
          </section>

        </div>
      </div>
    </PageWrapper>
  );
}
