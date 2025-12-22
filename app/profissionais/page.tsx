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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              PRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]">TEAM</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              A elite do suporte. Nossa equipe de profissionais qualificados está pronta para masterizar sua jornada.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24">

          {/* SECTION 1: PROFESSIONALS GRID */}
          <section>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Nossos Especialistas</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🧠',
                  title: 'Psicólogos',
                  desc: 'Blindagem mental. Controle de ansiedade e foco absoluto.',
                  specialties: ['Ansiedade', 'Depressão', 'Autoestima', 'Relacionamentos'],
                  color: 'pink'
                },
                {
                  icon: '🥗',
                  title: 'Nutricionistas',
                  desc: 'Engenharia nutricional. Planos alimentares para performance e longevidade.',
                  specialties: ['Emagrecimento', 'Hipertrofia', 'Saúde Metabólica', 'Nutrição Esportiva'],
                  color: 'cyan'
                },
              ].map((pro) => (
                <Card key={pro.title} className={`group hover:border-${pro.color}-500/50 transition-all duration-500 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-${pro.color}-500/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{pro.icon}</div>
                    <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">{pro.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">{pro.desc}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Especialidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {pro.specialties.map((spec) => (
                          <span key={spec} className={`px-3 py-1 bg-${pro.color}-500/10 border border-${pro.color}-500/30 rounded-full text-xs font-mono tracking-wider text-${pro.color}-400 hover:bg-${pro.color}-500/20 transition-all`}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* SECTION 2: PROCESS */}
          <section className="relative">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">
              <span className="text-cyan-400">///</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-500">Como Funciona</span>
            </h2>
            <div className="absolute left-[19px] top-24 bottom-0 w-[2px] bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 opacity-30 hidden md:block" />

            <div className="space-y-12">
              {[
                { step: '01', title: 'Selection', text: 'Analise o perfil técnico de cada especialista.', color: 'pink' },
                { step: '02', title: 'Booking', text: 'Agendamento direto pelo app, sem burocracia.', color: 'purple' },
                { step: '03', title: 'Execution', text: 'Sessão intensa de alinhamento e estratégia.', color: 'cyan' },
                { step: '04', title: 'Follow-up', text: 'Acompanhamento de métricas e recalibragem.', color: 'pink' },
              ].map((item) => (
                <div key={item.step} className="grid grid-cols-[auto_1fr] gap-8 items-start relative bg-black/20 p-6 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all duration-500 group">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-cyan-600 flex items-center justify-center font-black text-white z-10 shadow-[0_0_20px_rgba(255,0,85,0.5)] group-hover:shadow-[0_0_30px_rgba(255,0,85,0.8)] transition-all`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-cyan-400 mb-2 uppercase italic tracking-tight">{item.title}</h3>
                    <p className="text-white/70 max-w-xl leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: CTA */}
          <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-t from-pink-900/20 via-purple-900/10 to-transparent rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 text-center uppercase tracking-tighter">
              Construa seu time.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Domine o jogo.</span>
            </h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/agendamento"><Button variant="outline" size="lg">Ver Agendamentos</Button></Link>
              <Link href="/contato"><Button variant="primary" glow size="lg">Falar com Suporte</Button></Link>
            </div>
          </section>

        </div>
      </div>
    </PageWrapper>
  );
}
