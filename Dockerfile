# Define a imagem a ser utilizada
FROM node:16.13.1-alpine

#define o diretorio do projeto
WORKDIR /app

#copia o package.json
COPY package.json ./

#instala as dependencias do projeto
RUN npm install

#expoe a porta
EXPOSE 4000
#copia todos os arquivos
COPY . .

#define variaveis de ambiente
ENV PORT=4000
#define variaveis de ambiente


#copia o arquivo startup.sh para o conteiner na pasta app
COPY startup.sh /app/startup.sh

#da permissões para a execução do arquivo startup.sh
RUN chmod +x /app/startup.sh

#executa o arquivo startup.sh
CMD ["/app/startup.sh"]