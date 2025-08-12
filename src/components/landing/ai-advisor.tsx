
"use client";

import { useState, useRef, type FormEvent } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";


const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
        <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.16-.24.52-1.6 1.55-2.28 1.63-.68.07-1.17.21-1.57.16-.39-.05-1.07-.21-2.04-.82-.97-.61-1.74-1.4-2.3-2.14-.56-.74-.93-1.39-1.09-1.69-.16-.3-.04-.51.12-.66.15-.15.31-.18.43-.18.13,0,.25-.03.35.01.1.04.16.18.24.46.08.28.12.58.18.68.06.1.02.21-.06.33-.08.12-.13.18-.21.28-.08.1-.18.21-.26.31l-.02.02c-.11.11-.01.26.06.39.07.13.48.71 1.04 1.22.56.51 1.06.84 1.25.96.19.12.3.1.41-.04.11-.14.49-.57.63-.77.14-.2.28-.16.48-.1.2.06.75.36.88.43.13.07.21.1.23.15zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    </svg>
);


export function AiAdvisor() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [location, setLocation] = useState("");
  const [criticality, setCriticality] = useState("");

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`);
            const data = await response.json();
            if (data.results && data.results[0]) {
              const address = data.results[0].formatted_address;
              setLocation(address);
               toast({
                title: "Localização Obtida!",
                description: "Seu endereço foi preenchido com sucesso.",
              });
            } else {
               throw new Error("Não foi possível encontrar o endereço.");
            }
          } catch (error) {
             console.error("Error fetching address:", error);
             const locationString = `Lat: ${latitude.toFixed(5)}, Lon: ${longitude.toFixed(5)}`;
             setLocation(locationString);
             toast({
                variant: "destructive",
                title: "Erro ao obter endereço",
                description: "Não foi possível obter o endereço. Usando coordenadas.",
             });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            variant: "destructive",
            title: "Erro ao obter localização",
            description: "Não foi possível obter sua localização. Por favor, verifique as permissões do seu navegador.",
          });
        }
      );
    } else {
      toast({
        variant: "destructive",
        title: "Navegador não suportado",
        description: "Seu navegador não suporta a API de Geolocalização.",
      });
    }
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
        const formData = new FormData(formRef.current);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const businessType = formData.get("businessType") as string;
        const numComputers = formData.get("numComputers") as string;
        const locationValue = formData.get("location") as string;
        const message = formData.get("message") as string;
        
        const whatsappMessage = `Olá, gostaria de um orçamento!\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Ramo da Empresa:* ${businessType}\n*Nº de Computadores:* ${numComputers}\n*Nível de Criticidade:* ${criticality}\n*Localização:* ${locationValue || 'Não informada'}\n\n*Mensagem:* ${message || 'N/A'}`;

        const whatsappUrl = `https://wa.me/5541998135875?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, "_blank");
        formRef.current.reset();
        setLocation("");
        setCriticality("");
    }
  }


  return (
    <section id="contato" className="w-full py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
             <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mx-auto w-fit mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <CardTitle className="font-headline text-3xl">Orçamento Rápido e Detalhado</CardTitle>
            <CardDescription className="text-lg">
             Preencha o formulário para agilizar seu orçamento e falar com um especialista.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Seu Nome</Label>
                  <Input id="name" name="name" placeholder="Ex: João da Silva" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Ex: (41) 99813-5875" required />
                </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="businessType">Qual o ramo da sua empresa?</Label>
                    <Input id="businessType" name="businessType" placeholder="Ex: Contabilidade, Advocacia" required />
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="numComputers">Quantos computadores possui?</Label>
                    <Input id="numComputers" name="numComputers" type="number" placeholder="Ex: 5" required />
                 </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="criticality">Qual a criticidade dos computadores?</Label>
                 <Select name="criticality" required onValueChange={setCriticality}>
                    <SelectTrigger id="criticality">
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Muito Crítico - param toda a operação">Muito Crítico - param toda a operação</SelectItem>
                      <SelectItem value="Importante - afetam bastante">Importante - afetam bastante</SelectItem>
                      <SelectItem value="Pouco Crítico - usamos para tarefas secundárias">Pouco Crítico - usamos para tarefas secundárias</SelectItem>
                    </SelectContent>
                  </Select>
              </div>

               <div className="space-y-2">
                  <Label htmlFor="location">Localização (Opcional)</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      id="location" 
                      name="location" 
                      placeholder="Ex: Rua, Bairro ou Coordenadas"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)} 
                    />
                    <Button type="button" variant="outline" size="icon" onClick={handleLocationClick} aria-label="Obter localização atual">
                      <MapPin className="h-4 w-4"/>
                    </Button>
                  </div>
               </div>
              
               <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea id="message" name="message" placeholder="Descreva suas necessidades, como principais problemas, etc." rows={4} />
              </div>
              
              <div className="text-center pt-4">
                <Button 
                    type="submit"
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#1DA851] text-white"
                >
                    <WhatsAppIcon />
                    Solicitar Orçamento via WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

    