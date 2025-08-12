# Documentação da Estrutura de Páginas (`/app`)

Esta pasta contém todas as rotas e a interface do usuário principal da aplicação, utilizando o **App Router** do Next.js.

## Roteamento Baseado em Arquivos

O Next.js utiliza um sistema de roteamento onde cada pasta dentro de `/app` corresponde a um segmento de URL. Um arquivo especial `page.tsx` dentro de uma pasta torna essa rota publicamente acessível.

Por exemplo, `src/app/politica-de-privacidade/page.tsx` cria a rota `http://seusite.com/politica-de-privacidade`.

## Arquivos Especiais

-   **`layout.tsx`**: Este é o layout raiz da aplicação. Todo o conteúdo das outras páginas é renderizado dentro deste componente. Ele é ideal para adicionar elementos que se repetem em todo o site, como o cabeçalho (`<Header>`), o rodapé (`<Footer>`), e provedores de contexto (como o `ThemeProvider` para temas claro/escuro).

-   **`page.tsx`**: Este é o arquivo que define o conteúdo da página principal (a rota `/`). Ele compõe a landing page importando e organizando os diversos componentes da pasta `src/components/landing`.

-   **`globals.css`**: Contém os estilos globais da aplicação, incluindo as variáveis de cor do Tailwind CSS e do tema ShadCN. É aqui que a identidade visual do site (cores primárias, de fundo, etc.) é definida.

## Estrutura das Páginas de Políticas

As páginas de políticas (`politica-de-privacidade`, `politica-de-cookies`, `termos-de-servico`) seguem uma estrutura simples:
1.  Uma pasta com o nome da rota (ex: `politica-de-privacidade`).
2.  Dentro dela, um arquivo `page.tsx` que exporta um componente React.
3.  O componente renderiza o `<Header>`, o conteúdo principal (`<main>`) com o texto da política, e o `<Footer>`.

Essa abordagem mantém o código limpo e organizado, garantindo consistência visual em todo o site.
