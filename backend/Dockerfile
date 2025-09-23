# Usa a imagem oficial do Node.js na versão LTS (Long Term Support) e Alpine (super leve)
FROM node:lts-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de dependências primeiro para aproveitar o cache do Docker
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o resto dos arquivos do código-fonte
COPY . .

# Comando que será executado quando o contêiner iniciar
# 'start:dev' é o comando padrão do NestJS para rodar em modo de desenvolvimento com hot-reloading
CMD ["npm", "run", "start:dev"]
