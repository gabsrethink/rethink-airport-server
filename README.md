# ✈️ Rethink Airport - Backend (Strapi)

Este é o repositório do backend para o projeto Rethink Airport, desenvolvido com Strapi v5.

---

## 🚀 Como Rodar o Projeto (Setup Local)

Siga estes passos para configurar e rodar o projeto localmente com os dados iniciais.

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- `npm`

### 1. Clone o Repositório

```bash
git clone [https://github.com/gabsrethink/rethink-airport-server.git]
cd rethink-airport-server
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Importe os Dados Iniciais (Seeding)  DATABASE 🌱

Este passo é **crucial** para popular seu banco de dados local com o conteúdo existente (voos, promoções, páginas, usuários, etc.).

Execute o seguinte comando no terminal:
```bash
npm run strapi import -f export_20250721172400.tar.gz -- --force
```
> **Nota:** Se a importação falhar, tente apagar a pasta `.tmp` que o Strapi cria e execute o comando de importação novamente.

### 4. Rode o Projeto em Modo de Desenvolvimento

```bash
npm run develop
```

Seu backend Strapi estará rodando em `http://localhost:1337`.

O painel de administração estará acessível em `http://localhost:1337/admin`. As credenciais de administrador são as mesmas do ambiente que foi exportado.

---

##  Scripts Úteis

### `npm run develop`
Inicia a aplicação em modo de desenvolvimento com hot-reload.

### `npm run export -- --no-encrypt`
Cria um novo arquivo `.tar.gz` na raiz do projeto com todos os dados atuais. Use este comando sempre que quiser atualizar os dados iniciais para a equipe.

### `npm run import -f <nome-do-arquivo>.tar.gz`
Importa os dados de um arquivo de exportação para o seu banco de dados local.

---

## 📚 Documentação

Para mais informações sobre o Strapi, consulte a [documentação oficial](https://docs.strapi.io).