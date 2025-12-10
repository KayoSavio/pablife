'use client';
import React from 'react';
import { PageWrapper } from '../components/Layout/PageWrapper';

export default function Termos() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-black text-white mb-2 uppercase">Termos de Uso</h1>
        <p className="text-gray-500 text-sm font-mono mb-12">Disponível desde: 01/01/2024</p>

        <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">1. Aceitação</h2>
            <p>
              Ao acessar o ecossistema PABLIFE, você concorda em cumprir estes termos. Nossa plataforma é destinada a alta performance e desenvolvimento pessoal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">2. Responsabilidades</h2>
            <p>
              Você é responsável por manter a segurança da sua conta. O PABLIFE fornece ferramentas, mas a execução e os resultados dependem do uso consistente do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, metodologia, design e código do PABLIFE são protegidos por direitos autorais. O uso não autorizado é proibido.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8 mt-12">
            <p className="text-xs text-gray-500 text-center">
              PABLIFE TECNOLOGIA LTDA. Todos os direitos reservados.
            </p>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
