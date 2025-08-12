import { Laptop, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <Laptop className="h-6 w-6" />
            <span className="font-bold font-headline text-lg">Repare Notebooks</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground/80">
            <Link href="/politica-de-privacidade" className="hover:underline">
              Política de Privacidade
            </Link>
             <Link href="/politica-de-cookies" className="hover:underline">
              Política de Cookies
            </Link>
            <Link href="/termos-de-servico" className="hover:underline">
              Termos de Serviço
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
             <Link href="https://maps.app.goo.gl/xFSWuLvhWgaok2Vi6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:underline">
                <MapPin className="h-4 w-4" />
                Endereço
             </Link>
             <Link href="mailto:reparenotebooks@gmail.com" className="text-sm hover:underline">
                reparenotebooks@gmail.com
             </Link>
             <Link href="tel:+5541998135875" className="text-sm hover:underline">
                (41) 99813-5875
             </Link>
          </div>
        </div>
         <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Repare Notebooks. Todos os direitos reservados.</p>
          </div>
      </div>
    </footer>
  );
}
