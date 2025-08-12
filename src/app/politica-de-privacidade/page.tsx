import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <article className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl text-primary mb-8">Política de Privacidade</h1>
          
          <p><strong>Última atualização:</strong> 29 de julho de 2024</p>

          <p>A sua privacidade é importante para nós. É política do Repare Notebooks respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Repare Notebooks, e outros sites que possuímos e operamos.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">1. Informações que coletamos</h2>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">2. Uso de dados</h2>
          <p>Utilizamos os dados coletados para:</p>
          <ul>
            <li>Operar e manter nosso serviço;</li>
            <li>Melhorar, personalizar e expandir nosso serviço;</li>
            <li>Entender e analisar como você usa nosso serviço;</li>
            <li>Comunicar com você, diretamente ou através de um dos nossos parceiros, incluindo para atendimento ao cliente, para lhe fornecer atualizações e outras informações relacionadas ao serviço, e para fins de marketing e promocionais;</li>
            <li>Enviar emails;</li>
            <li>Encontrar e prevenir fraudes.</li>
          </ul>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">3. Cookies</h2>
          <p>Nosso site pode usar cookies para coletar informações sobre você e sua atividade em nosso site. Um cookie é um pequeno pedaço de dados que nosso site armazena no seu computador e acessa cada vez que você visita, para que possamos entender como você usa nosso site. Isso nos ajuda a servi-lo conteúdo com base nas preferências que você especificou.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">4. Links para outros sites</h2>
          <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">5. Seus direitos</h2>
          <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">6. Alterações à nossa Política de Privacidade</h2>
          <p>Podemos atualizar nossa política de privacidade de tempos em tempos. Aconselhamos que você revise esta página periodicamente para quaisquer alterações. Notificaremos você sobre quaisquer alterações, publicando a nova política de privacidade nesta página.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">7. Contato</h2>
          <p>Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
