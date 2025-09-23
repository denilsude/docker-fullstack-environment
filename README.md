# Ambiente de Desenvolvimento Full-Stack com Docker Compose

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 📜 Descrição do Projeto

Este projeto cria um ambiente de desenvolvimento full-stack padronizado e reprodutível utilizando Docker Compose. O objetivo é orquestrar um ecossistema completo com Frontend, Backend, Banco de Dados, Admin de Banco de Dados e um Proxy Reverso, garantindo que toda a equipe de desenvolvimento possa trabalhar em um ambiente idêntico e simplificado.

## ✨ Features

-   **Containerização Completa:** Todos os 5 serviços (Nginx, Frontend, Backend, DB, DB Admin) rodam em contêineres Docker isolados.
-   **Proxy Reverso com Nginx:** Um único ponto de entrada (`localhost`) que direciona o tráfego para o serviço correto.
-   **Hot-Reloading:** Alterações no código do Frontend (React) e Backend (Node.js) são refletidas em tempo real sem a necessidade de reiniciar os contêineres.
-   **Persistência de Dados:** Os dados do PostgreSQL e as configurações do pgAdmin são mantidos em volumes Docker, sobrevivendo à recriação dos contêineres.
-   **Configuração Centralizada:** Todas as variáveis (portas, senhas, etc.) são gerenciadas em um único arquivo `.env`.

## 🛠️ Tecnologias Utilizadas

-   **Orquestração:** Docker, Docker Compose
-   **Proxy Reverso:** Nginx
-   **Frontend:** React (com Vite)
-   **Backend:** Node.js (pronto para NestJS)
-   **Banco de Dados:** PostgreSQL
-   **Admin de BD:** pgAdmin4

## 🚀 Como Executar o Projeto

**Pré-requisitos:**
-   [Git](https://git-scm.com)
-   [Docker](https://www.docker.com/get-started/)
-   [Docker Compose](https://docs.docker.com/compose/install/) (geralmente já vem com o Docker)

**Passos:**
1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/docker-fullstack-environment.git](https://github.com/seu-usuario/docker-fullstack-environment.git)
    ```
2.  Navegue para a pasta do projeto:
    ```bash
    cd docker-fullstack-environment
    ```
3.  Crie seu arquivo de configuração a partir do exemplo:
    ```bash
    cp .env.example .env
    ```
4.  Suba todos os serviços com Docker Compose:
    ```bash
    docker compose up -d --build
    ```

## ⚙️ Configuração (`.env`)

O arquivo `.env` controla todas as configurações do ambiente:

| Variável                 | Descrição                                         | Padrão          |
| ------------------------ | ------------------------------------------------- | --------------- |
| `NGINX_PORT`             | Porta de acesso principal do projeto (via Nginx)  | `80`            |
| `FRONTEND_PORT`          | Porta para acesso direto ao Frontend (Vite)       | `5173`          |
| `BACKEND_PORT`           | Porta para acesso direto ao Backend (Node.js)     | `9090`          |
| `PGADMIN_PORT`           | Porta de acesso ao pgAdmin                        | `5050`          |
| `POSTGRES_DB`            | Nome do banco de dados no PostgreSQL              | `mydatabase`    |
| `POSTGRES_USER`          | Usuário do banco de dados                         | `myuser`        |
| `POSTGRES_PASSWORD`      | Senha do banco de dados                           | `mysecretpassword` |
| `PGADMIN_DEFAULT_EMAIL`  | Email de login para o pgAdmin                     | `admin@example.com` |
| `PGADMIN_DEFAULT_PASSWORD` | Senha de login para o pgAdmin                     | `admin`         |


## 🌐 Pontos de Acesso (Endpoints)

Após executar `docker compose up`, os serviços estarão acessíveis em:

-   **Aplicação (Frontend via Nginx):** `http://localhost/`
-   **API (Backend via Nginx):** `http://localhost/api/`
-   **pgAdmin:** `http://localhost:5050/`

---
_Projeto desenvolvido como parte de um exercício acadêmico, com a mentoria da IA Gemini._
