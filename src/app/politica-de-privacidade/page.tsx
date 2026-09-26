import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CLINIC_CONTACT } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export const metadata = {
  title: "Política de Privacidade | Cristiano Ávila",
  description: "Informações sobre privacidade, LGPD, dados pessoais e sigilo profissional no site de Cristiano Ávila.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-black transition-colors mb-10">
            ← Voltar ao início
          </Link>

          <span className="inline-block text-[11px] font-semibold tracking-[0.16em] text-zinc-500 uppercase mb-4">
            Privacidade • LGPD • Ética profissional
          </span>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-black mb-6">
            Política de Privacidade
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed mb-12">
            Esta página explica, em linguagem clara, como dados pessoais podem ser tratados nos canais digitais vinculados ao atendimento de <strong>{CLINIC_CONTACT.fullName}</strong>, Psicólogo • <strong>{PROFESSIONAL_REGISTRATION}</strong>.
          </p>

          <div className="space-y-10 text-zinc-700 font-light leading-relaxed text-sm sm:text-base border-t border-zinc-100 pt-10">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mb-3">1. Sigilo profissional</h2>
              <p>
                Informações obtidas no contexto do atendimento psicológico são tratadas conforme o Código de Ética Profissional do Psicólogo e as normas aplicáveis. O dever de sigilo possui hipóteses e limites previstos nas normas profissionais e na legislação; quando houver fundamento para compartilhamento, devem ser observados necessidade, proporcionalidade e o menor prejuízo possível.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mb-3">2. Dados usados no primeiro contato</h2>
              <p className="mb-3">
                O site direciona o visitante para canais como WhatsApp, telefone e e-mail. Para agendamento, recomenda-se compartilhar inicialmente apenas os dados necessários à organização do contato, como nome, modalidade desejada, cidade e preferência de horário.
              </p>
              <p>
                Para sua privacidade, evite enviar detalhes clínicos sensíveis em mensagens iniciais. Informações de saúde devem ser tratadas apenas quando necessárias e em contexto apropriado.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mb-3">3. Atendimento mediado por tecnologias</h2>
              <p>
                O atendimento psicológico por tecnologias digitais deve observar as regras profissionais vigentes do Conselho Federal de Psicologia, incluindo a Resolução CFP nº 9/2024 e eventuais normas posteriores que venham a substituí-la ou complementá-la.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mb-3">4. Cookies e armazenamento local</h2>
              <p>
                O site pode utilizar tecnologias estritamente necessárias para funcionamento, segurança e armazenamento de preferências, como o registro local da escolha feita no aviso de privacidade. Caso ferramentas adicionais de métricas ou publicidade sejam instaladas futuramente, esta política e o mecanismo de consentimento deverão ser atualizados antes da ativação.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mb-3">5. Direitos do titular</h2>
              <p className="mb-3">Nos termos da LGPD, o titular pode solicitar, quando aplicável:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>confirmação da existência de tratamento;</li>
                <li>acesso e correção de dados;</li>
                <li>informações sobre uso e compartilhamento;</li>
                <li>eliminação ou anonimização quando cabível, respeitadas obrigações legais e profissionais de guarda.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mb-3">6. Contato sobre privacidade</h2>
              <p>
                Solicitações podem ser encaminhadas para <a href={`mailto:${CLINIC_CONTACT.email}`} className="text-black font-semibold underline">{CLINIC_CONTACT.email}</a> ou pelo telefone/WhatsApp <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-black font-semibold underline">{CLINIC_CONTACT.phone}</a>.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500">
            <span>Última atualização: 25 de setembro de 2026</span>
            <Link href="/" className="font-semibold text-black hover:underline">Voltar ao início</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
