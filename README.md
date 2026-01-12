
# React Auth Session Timer

SPA em **React** criada com foco em estudo de autenticação básica no front-end, gerenciamento de estado com hooks e controle de sessão utilizando **localStorage** e **timer de expiração**.

O projeto simula um fluxo de login, área pública e área restrita para membros, com sessão temporizada e feedback visual para o usuário.

---

## 🎯 Objetivo do projeto

Demonstrar de forma prática:

- Estruturação de uma aplicação React com **rotas públicas e protegidas**
- Implementação de um fluxo simples de **autenticação client-side**
- Persistência e recuperação do estado de autenticação usando **localStorage**
- Controle de expiração de sessão com **useEffect**, **setInterval** e contador regressivo
- Uso consciente de **hooks** (ciclo de vida, efeitos colaterais e limpeza de timers)

Projeto voltado para demonstrar domínio de conceitos fundamentais de React e boas práticas de front-end.

---

## 🛠 Tecnologias e ferramentas

- **React** (SPA, componentes funcionais, JSX)
- **React Router DOM** (roteamento e rotas protegidas)
- **Hooks**
  - `useState`
  - `useEffect`
- **localStorage**
- **SCSS / CSS Modules**
- **JavaScript (ES6+)**
- **Vite** (bundler e ambiente de desenvolvimento)

---

## 🚀 Funcionalidades principais

### 1. Fluxo de autenticação simples
- Tela de login com formulário controlado
- Validação mínima de campos
- Login simulado no front-end
- Persistência do usuário no estado e no localStorage

### 2. Persistência de sessão
- Usuário salvo como `auth-user`
- Timestamp de expiração salvo como `auth-expires-at`
- Restauração automática da sessão válida ao recarregar a página

### 3. Controle de sessão com contador regressivo
- Contador visível no canto superior da tela
- Sessão expira automaticamente ao chegar a 0
- Limpeza de estado e localStorage
- Exibição de modal informando expiração da sessão

### 4. Rotas públicas e protegidas
- `/` – Home (pública)
- `/login` – Login (pública)
- `/member` – Área restrita
- Redirecionamento automático se não autenticado

---

## 🧱 Arquitetura

### App
- Estado global de autenticação
- Integração com localStorage
- Controle do timer de sessão

### PagesRouter
- Centralização das rotas
- Implementação da rota protegida

### Páginas
- **Home**: pública
- **Login**: autenticação
- **Member**: área restrita

### Componentes
- **Header**: navegação entre páginas

### Estilos
- SCSS modularizado (`*.module.scss`)

---

## 🔍 Pontos técnicos relevantes

- Uso correto e organizado de hooks
- Limpeza adequada de `setInterval`
- Persistência baseada em timestamp (não reinicia ao recarregar)
- Proteção real de rotas no front-end
- Boa experiência de usuário com feedback visual de sessão

---

## ▶️ Como usar o projeto

### Pré-requisitos
- Node.js (versão 18+ recomendada)
- npm

### Passos

```bash
# Instale as dependências
npm install

# Rode o projeto em ambiente de desenvolvimento
npm run dev
```

A aplicação será executada em modo desenvolvimento via **Vite**.

---

## 📌 Observação

Projeto com foco educacional e arquitetural, sem integração com back-end real.
