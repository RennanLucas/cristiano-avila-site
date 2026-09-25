import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CLINIC_CONTACT } from "@/data/content";

export const metadata = {
  title: "Política de Privacidade & Sigilo Clínico | Cristiano Ávila",
  description: "Diretrizes de proteção de dados (LGPD) e sigilo profissional absoluto conforme o Código de Ética do Psicólogo (CFP).",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-black transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar ao Início
          </Link>

          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-4">
            Conformidade LGPD & Código de Ética CFP
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black mb-6">
            Política de Privacidade & <br />
            <span className="text-zinc-400">Sigilo Clínico.</span>
          </h1>

          <p className="text-base sm:text-lg text-textMuted font-light leading-relaxed mb-12">
            Esta política estabelece os compromissos de confidencialidade, tratamento ético de dados e proteção da privacidade de pacientes e visitantes, em conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong> e o <strong>Código de Ética Profissional do Psicólogo (CFP)</strong>.
          </p>

          <div className="space-y-10 text-zinc-700 font-light leading-relaxed text-sm sm:text-base border-t border-zinc-100 pt-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3">
                1. Sigilo Profissional e Confidencialidade
              </h2>
              <p className="mb-3">
                O atendimento psicológico realizado pelo <strong>Dr. Cristiano Ávila da Silva</strong> é estritamente regido pelo Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/2005). Todas as informações compartilhadas em consultas — presenciais ou online — são resguardadas por <strong>sigilo profissional absoluto</strong>.
              </p>
              <p>
                Os registros e anotações clínicas (prontuários) são mantidos em ambiente seguro, protegido por senhas e criptografia, sem acesso a terceiros, exceto nos casos estritos previstos em lei ou ordem judicial fundamentada.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3">
                2. Coleta e Finalidade de Dados no Site
              </h2>
              <p className="mb-3">
                Quando você utiliza os formulários ou canais de contato deste site (WhatsApp, telefone, e-mail), coletamos apenas as informações voluntariamente fornecidas por você:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Nome completo:</strong> para identificação no agendamento e acolhimento;</li>
                <li><strong>Número de WhatsApp / telefone:</strong> para confirmação de horários e esclarecimento de dúvidas;</li>
                <li><strong>Preferência de modalidade e horário:</strong> para viabilizar o alinhamento da agenda clínica.</li>
              </ul>
              <p>
                Esses dados são utilizados <strong>exclusivamente</strong> para comunicação direta com a nossa equipe clínica. Jamais comercializamos, cedemos ou compartilhamos dados com terceiros para fins publicitários.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3">
                3. Atendimento Psicológico Online e Segurança
              </h2>
              <p>
                As sessões online são conduzidas através de plataformas criptografadas que atendem integralmente à <strong>Resolução CFP nº 11/2018</strong>. Recomenda-se que o paciente participe das sessões em ambiente privativo, utilizando fones de ouvido e rede de internet segura para garantir a integridade da confidencialidade.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3">
                4. Cookies e Tecnologias de Navegação
              </h2>
              <p>
                Este site utiliza cookies essenciais para garantir o carregamento correto de estilos, vídeos de fundo, segurança e preferências de navegação. Não utilizamos cookies invasivos de rastreamento transacional.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3">
                5. Seus Direitos (Titular dos Dados)
              </h2>
              <p className="mb-3">
                Nos termos do Art. 18 da LGPD, você possui o direito de:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmar a existência de tratamento de seus dados pessoais;</li>
                <li>Acessar, corrigir ou atualizar seus dados cadastrais;</li>
                <li>Solicitar a eliminação de dados pessoais que não sejam de guarda obrigatória por exigência legal ou do Conselho Regional de Psicologia.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3">
                6. Canal de Atendimento e Encarregado de Dados
              </h2>
              <p>
                Para quaisquer solicitações, esclarecimentos ou exercício dos seus direitos de privacidade, entre em contato direto pelo e-mail oficial:{" "}
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="text-black font-semibold underline">
                  {CLINIC_CONTACT.email}
                </a>{" "}
                ou via WhatsApp no número{" "}
                <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-black font-semibold underline">
                  {CLINIC_CONTACT.phone}
                </a>.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-100 flex items-center justify-between text-xs text-textMuted">
            <span>Última atualização: Setembro de 2026</span>
            <Link href="/" className="font-semibold text-black hover:underline">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
