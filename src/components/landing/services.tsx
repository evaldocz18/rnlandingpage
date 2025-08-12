import { Wrench, ShieldCheck, Cpu, HardDrive } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Reparo de Placa-Mãe",
    description: "Soluções avançadas para um dos componentes mais críticos do seu notebook.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Reparo de Carcaça e Upgrades",
    description: "Restauramos a estrutura do seu equipamento e melhoramos seu desempenho com upgrades.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Manutenção Preventiva",
    description: "Evite problemas antes que aconteçam com nossas rotinas de checagem e otimização.",
  },
  {
    icon: <HardDrive className="w-8 h-8 text-primary" />,
    title: "Recuperação de Dados",
    description: "Protegemos e recuperamos suas informações importantes contra perdas e falhas.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="w-full py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Especialistas em Reparos Avançados
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Do suporte diário à prevenção de crises, cuidamos da tecnologia para que você possa cuidar do seu negócio. Somos especialistas em reparos de placa-mãe, carcaças e upgrades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg space-y-4">
              <div className="inline-block bg-muted p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-headline">{service.title}</h3>
              <p className="text-foreground/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
