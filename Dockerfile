# Define a imagem a ser utilizada
FROM node:16.13.1-alpine

#define o diretorio do projeto
WORKDIR /usr/src/app

#copia o package.json
COPY package.json ./

#instala as dependencias do projeto
RUN npm install

#copia todos os arquivos
COPY . .

#copia o arquivo startup.sh para o conteiner na pasta app
COPY startup.sh /app/startup.sh

#da permissões para a execução do arquivo startup.sh
RUN chmod +x /app/startup.sh

#executa o arquivo startup.sh
CMD ["/app/startup.sh"]