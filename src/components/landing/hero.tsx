import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              Atendimento Rápido e Eficaz
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary font-headline">
              Manutenção de Computadores e Notebooks para Empresas em Curitiba
            </h1>
            <p className="max-w-[600px] text-lg text-foreground/80 md:text-xl">
              Mais de 50 clientes satisfeitos no Google. Oferecemos atendimento rápido, manutenções preventivas e corretivas para garantir que sua empresa nunca pare.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="default">
                <Link href="https://wa.me/5541998135875?text=Olá, gostaria de um orçamento!" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#planos">
                  Conheça Nossos Planos
                </Link>
              </Button>
            </div>
             <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <span>Baseado em 50+ avaliações no Google</span>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/imgs/tecnico-laboratorio.jpg"
              alt="Técnico de laboratório consertando um notebook"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              data-ai-hint="computer repair technician"
            />
             <div className="absolute -bottom-8 -right-8 hidden lg:block bg-card p-4 rounded-lg shadow-lg border w-64">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Visita de Avaliação</p>
                        <p className="text-sm text-green-600 font-semibold">Gratuita!</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
