import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white flex flex-col justify-between">
      <Header />

      <section className="pt-44 pb-28 px-6 flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">
            Erro 404 • Página não encontrada
          </span>

          <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-black mb-6">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-4">
            A página que você procura não está disponível.
          </h2>

          <p className="text-base text-zinc-500 font-light leading-relaxed mb-10 max-w-lg mx-auto">
            O endereço pode ter mudado ou a página foi movida. Use os atalhos abaixo para continuar navegando ou entre em contato diretamente com nossa equipe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-primary py-3.5 px-8 text-xs font-semibold w-full sm:w-auto shadow-apple"
            >
              Voltar para o Início
            </Link>

            <Link
              href="/unidades"
              className="btn-outline py-3.5 px-8 text-xs font-semibold w-full sm:w-auto"
            >
              Consultórios Físicos
            </Link>

            <a
              href={buildWhatsAppLink("Olá! Estava navegando no site e preciso de ajuda com horários ou agendamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors w-full sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
