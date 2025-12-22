'use client';
import React from 'react';
import { PageWrapper } from '../components/Layout/PageWrapper';

export default function Privacidade() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-black text-white mb-2 uppercase">Política de Privacidade</h1>
        <p className="text-gray-500 text-sm font-mono mb-12">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">1. Informações que Coletamos</h2>
            <p>
              O PABLIFE coleta informações que você nos fornece diretamente quando utiliza nosso aplicativo,
              incluindo dados de cadastro, informações de saúde e metas pessoais para personalização do algoritmo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">2. Uso de Dados</h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-pink-500">
              <li>Fornecer e melhorar nossos serviços de IA;</li>
              <li>Personalizar sua experiência no ecossistema;</li>
              <li>Enviar notificações e relatórios de progresso;</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">3. Segurança</h2>
            <p>
              Não vendemos seus dados. Utilizamos criptografia de nível bancário para proteger suas informações pessoais contra acesso não autorizado.
              Sua jornada é privada.
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h2 className="text-lg font-bold text-white mb-2">Dúvidas sobre seus dados?</h2>
            <p className="mb-4">Nosso encarregado de dados está à disposição.</p>
            <a href="mailto:Suporte@pablife.com.br" className="text-pink-500 hover:text-pink-400 font-mono">Suporte@pablife.com.br</a>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
