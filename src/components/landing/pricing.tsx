
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Básico",
        price: "R$ 249",
        description: "Ideal para empresas que precisam de suporte essencial e economia.",
        features: [
            "1 Visita presencial por mês",
            "2 Suportes remotos",
            "2 Formatações com backup",
            "2 Instalações de aplicativos",
            "Atendimento prioritário",
            "40% de desconto em reparos avançados",
            "Peças a preço de distribuidor",
        ],
        cta: "Solicitar Contato",
        variant: "outline"
    },
    {
        name: "Intermediário",
        price: "R$ 349",
        description: "O mais popular. Para empresas que buscam mais suporte e agilidade.",
        features: [
            "2 Visitas presenciais por mês",
            "4 Suportes remotos",
            "4 Formatações com backup",
            "4 Instalações de aplicativos",
            "Atendimento prioritário",
            "40% de desconto em serviços avançados",
            "Peças a preço de distribuidor",
        ],
        cta: "Solicitar Contato",
        variant: "default"
    },
    {
        name: "Premium",
        price: "Sob Consulta",
        description: "Para empresas que precisam de uma solução de TI robusta e personalizada.",
        features: [
            "Plano totalmente personalizado",
            "Visitas e suporte conforme a necessidade",
            "Gestão completa dos ativos de TI",
            "Consultoria estratégica contínua",
            "Segurança avançada e monitoramento",
            "Tempo de resposta mínimo garantido",
        ],
        cta: "Consultar Valor",
        variant: "outline"
    },
]

export function Pricing() {
    return (
        <section id="planos" className="w-full py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
                        Planos Flexíveis para Cada Negócio
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                        Escolha o pacote de manutenção que melhor se adapta às suas necessidades e orçamento.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto items-start">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col rounded-xl transition-transform transform hover:scale-105 ${plan.name === 'Intermediário' ? 'border-primary shadow-2xl scale-105' : 'border-border'}`}>
                             {plan.name === 'Intermediário' && (
                                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold rounded-t-xl">
                                    MAIS POPULAR
                                </div>
                            )}
                            <CardHeader className="text-center pt-8">
                                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                                 <div className="my-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                   {plan.price !== "Sob Consulta" && <span className="text-muted-foreground">/mês</span>}
                                </div>
                                {plan.name !== 'Premium' && (
                                    <p className="text-xs text-muted-foreground -mt-3 mb-3">Contrato mínimo de 3 meses</p>
                                )}
                                <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="p-6">
                                <Button asChild className="w-full" size="lg" variant={plan.name === 'Intermediário' ? 'default' : 'outline'}>
                                  <Link href={`https://wa.me/5541998135875?text=${encodeURIComponent(`Olá! Tenho interesse no plano ${plan.name}.`)}`} target="_blank" rel="noopener noreferrer">{plan.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
