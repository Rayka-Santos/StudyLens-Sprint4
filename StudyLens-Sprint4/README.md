# StudyLens - Sprint 4

Projeto integrado de Front-end Design e Web Development: landing page, acesso de usuário e central de estudos.

## Tecnologias

React, JavaScript/JSX, Vite, Tailwind CSS, React Router e Axios.

## Executar

Use Node.js 22.12 ou superior. Confira com `node --version`.

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite, normalmente `http://localhost:5173`.

Para compilar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

Nesta etapa, o `index.html` da raiz é o arquivo de entrada do Vite. O comando de build cria uma pasta `dist` para publicação. Não edite os arquivos gerados.

## API e login

A aplicação utiliza uma API externa, conforme o padrão de Axios da aula. Não há back-end próprio ou outro servidor a iniciar.

- Endpoint: `POST https://dummyjson.com/auth/login`.
- Usuário público de teste: `emilys`.
- Senha pública de teste: `emilyspass`.
- Documentação: https://dummyjson.com/docs/auth

Use somente a conta de teste. O login exige conexão com a internet. Em caso de falha, a tela informa o erro e permite tentar novamente.

Rotas públicas: `/`, `/home` e `/login`. Rota privada: `/central`. Sem usuário autenticado, a Central encaminha para o login. Sair ou recarregar a página encerra o acesso. A sessão fica no estado do React, sem persistência no navegador.

A proteção de rota controla a interface do protótipo. Não substitui a autorização de um servidor para uma aplicação com dados reais.

## Organização do código

```text
src/
  main.jsx
  App.jsx
  index.css
  pages/
    home/Home.jsx
    login/Login.jsx
    central/Central.jsx
  components/
    navbar/Navbar.jsx
    Header.jsx
    Footer.jsx
    PrivateRoute.jsx
    Body/
      Body.jsx
      CaptureForm.jsx
      ContentList.jsx
      ContentCard.jsx
      GeneratedContent.jsx
      SubjectFolders.jsx
      Trash.jsx
  hooks/
    useLogin.js
    useMateriais.js
  services/
    Service.js
public/
  img/
```

- `pages` e `components`: apresentação e composição das telas.
- `hooks`: estados, validação dos formulários e operações sobre o material.
- `services`: configuração do Axios e comunicação com a API.
- `App.jsx`: rotas e estado do usuário, repassado aos filhos por props.
- `index.css`: import e tema do Tailwind. As classes ficam nos componentes.

A organização principal de Header, Body e Footer foi mantida do projeto anterior. As páginas e o serviço seguem o modelo da aula de React.

## Funcionalidades

1. Navegação pela apresentação da solução, público, galeria, equipe e contato.
2. Login pela API externa e controle de acesso à Central.
3. Registro de título, matéria, trecho de estudo e data de revisão.
4. Edição do material e revisão com conteúdo oculto ou revelado.
5. Consulta da matéria e recuperação de um material pela lixeira.

A Central trabalha com um material aberto e um material na lixeira. Os dados permanecem ao alternar entre Central, Matéria e Lixeira, mas são descartados ao sair dessa página, sair da conta ou recarregar. Não há upload de imagem, leitura automática de foto, geração de conteúdo ou exportação. As imagens da galeria são os protótipos da proposta.

## Responsividade

Grid e Flex organizam as seções. A equipe usa `md:grid-cols-2 lg:grid-cols-4`, mantendo os quatro integrantes na mesma linha em telas largas. Formulários e imagens usam larguras relativas.

## Teste manual

1. Acesse `/central` sem login e confira o redirecionamento.
2. Entre com a conta pública de teste.
3. Cadastre um título de pelo menos 3 caracteres e um trecho de pelo menos 10 caracteres.
4. Salve, confira e oculte o conteúdo.
5. Edite o título e a matéria e salve novamente.
6. Mova para a lixeira e restaure.
7. Saia da conta e confira novamente a rota privada.
8. Confira a apresentação em 360 px, 768 px e 1366 px.

## Git e Vercel

Repositório: https://github.com/Rayka-Santos/StudyLens-Sprint4.git
Deploy: https://studylens-sprint4.vercel.app/


## Verificação

A compilação de produção e os testes isolados da lógica de materiais e login passaram. A revisão visual no navegador não foi concluída neste ambiente. O teste anterior da API pelo cliente de script recebeu HTTP 403, código 1010 do Cloudflare; o login real ainda deve ser conferido pelo navegador. Os testes de lógica usaram um serviço simulado e não comprovam a disponibilidade da API externa.

## Equipe

Os quatro integrantes e RMs estão em `INTEGRANTES.TXT`.
