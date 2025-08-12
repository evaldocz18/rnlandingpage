import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { SocialProof } from "@/components/landing/social-proof";
import { Services } from "@/components/landing/services";
import { Pricing } from "@/components/landing/pricing";
import { AiAdvisor } from "@/components/landing/ai-advisor";
import { Footer } from "@/components/landing/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Manutenção de Computadores e Notebooks para Empresas em Curitiba',
  description: 'Serviços de manutenção preventiva e corretiva de notebooks e computadores para empresas em Curitiba. Atendimento rápido e mais de 50 clientes satisfeitos.',
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Services />
        <Pricing />
        <AiAdvisor />
      </main>
      <Footer />
    </div>
  );
}
