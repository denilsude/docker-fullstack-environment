# Usa a imagem oficial do Node.js na versão LTS e Alpine
FROM node:lts-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de dependências primeiro
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o resto dos arquivos do código-fonte
COPY . .

# Expõe a porta padrão do Vite para documentação
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento do Vite
# O '--host' é CRUCIAL para que o servidor seja acessível de fora do contêiner
CMD ["npm", "run", "dev", "--", "--host"]