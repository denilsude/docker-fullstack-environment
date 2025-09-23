# Usa a imagem oficial e leve do Nginx
FROM nginx:alpine

# Remove a configuração padrão do Nginx para evitar conflitos
RUN rm /etc/nginx/conf.d/default.conf

# Copia nosso arquivo de configuração customizado para o lugar certo dentro do contêiner
COPY nginx.conf /etc/nginx/conf.d