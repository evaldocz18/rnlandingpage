import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <article className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl text-primary mb-8">Política de Cookies</h1>
          
          <p><strong>Última atualização:</strong> 29 de julho de 2024</p>

          <p>Esta Política de Cookies explica o que são cookies e como os utilizamos. Você deve ler esta política para entender o que são cookies, como os usamos, os tipos de cookies que usamos, ou seja, as informações que coletamos usando cookies e como essas informações são usadas e como controlar as preferências de cookies.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">O que são cookies?</h2>
          <p>Cookies são pequenos arquivos de texto usados para armazenar pequenas informações. Eles são armazenados no seu dispositivo quando o site é carregado no seu navegador. Esses cookies nos ajudam a fazer o site funcionar corretamente, torná-lo mais seguro, proporcionar uma melhor experiência ao usuário e entender como o site funciona e analisar o que funciona e onde precisa de melhorias.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">Como usamos os cookies?</h2>
          <p>Como a maioria dos serviços online, nosso site usa cookies primários e de terceiros para diversos fins. Os cookies primários são principalmente necessários para que o site funcione da maneira correta e não coletam nenhum dos seus dados de identificação pessoal.</p>
          <p>Os cookies de terceiros usados em nosso site são principalmente para entender como o site funciona, como você interage com nosso site, manter nossos serviços seguros, fornecer anúncios que são relevantes para você e, em geral, fornecer uma experiência de usuário melhor e aprimorada e ajudar a acelerar suas futuras interações com nosso site.</p>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">Que tipos de cookies usamos?</h2>
          <ul>
            <li><strong>Cookies Essenciais:</strong> Alguns cookies são essenciais para que você possa experimentar a funcionalidade completa do nosso site. Eles nos permitem manter as sessões do usuário e prevenir quaisquer ameaças à segurança. Eles não coletam ou armazenam nenhuma informação pessoal.</li>
            <li><strong>Cookies de Estatísticas:</strong> Esses cookies armazenam informações como o número de visitantes do site, o número de visitantes únicos, quais páginas do site foram visitadas, a origem da visita, etc. Esses dados nos ajudam a entender e analisar o quão bem o site funciona e onde precisa de melhorias.</li>
            <li><strong>Cookies de Marketing:</strong> Nosso site pode exibir anúncios. Esses cookies são usados para personalizar os anúncios que mostramos a você para que sejam significativos para você. Esses cookies também nos ajudam a acompanhar a eficiência dessas campanhas publicitárias.</li>
            <li><strong>Cookies Funcionais:</strong> Estes são os cookies que ajudam certas funcionalidades não essenciais em nosso site. Essas funcionalidades incluem incorporar conteúdo como vídeos ou compartilhar conteúdo do site em plataformas de mídia social.</li>
            <li><strong>Cookies de Preferências:</strong> Esses cookies nos ajudam a armazenar suas configurações и preferências de navegação, como preferências de idioma, para que você tenha uma experiência melhor e mais eficiente em futuras visitas ao site.</li>
          </ul>

          <h2 className="font-headline text-2xl text-primary mt-8 mb-4">Como posso controlar as preferências de cookies?</h2>
          <p>Você pode gerenciar suas preferências de cookies a qualquer momento. Diferentes navegadores fornecem métodos diferentes para bloquear e excluir cookies usados por sites. Você pode alterar as configurações do seu navegador para bloquear/excluir os cookies. Para saber mais sobre como gerenciar e excluir cookies, visite wikipedia.org, www.allaboutcookies.org.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
