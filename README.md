# README - Refúgio Code Email Fake API

[![Assista ao vídeo explicativo no YouTube](https://img.youtube.com/vi/O_n0z51UOes/0.jpg)](https://youtu.be/O_n0z51UOes)

Este repositório contém uma API falsa de envio de e-mails, desenvolvida para simular o envio de mensagens utilizando a biblioteca OpenAI. Esta API foi criada com o objetivo de demonstrar como integrar a correção automática de ortografia em um chat, inspirado pela série "Bebe Rena" da Netflix.

Para um tutorial detalhado sobre como integrar esta API em seu projeto, confira o vídeo no [YouTube](https://youtu.be/O_n0z51UOes).

### Como Usar o Projeto

1. **Instalação:**
   Para começar, clone este repositório em sua máquina local utilizando o seguinte comando:

   ```
   git clone https://github.com/seu-usuario/refugiocode-email-fake-api.git
   ```

   Em seguida, navegue até o diretório do projeto:

   ```
   cd refugiocode-email-fake-api
   ```

   E instale as dependências do projeto utilizando o npm:

   ```
   npm install
   ```

2. **Iniciando a API:**
   Após instalar as dependências, você precisará configurar a API key da OpenAI no arquivo `.env`. Abra o arquivo e localize a linha onde é definida a variável `OPENAI_KEY`. Substitua o valor "YOUR_API_KEY_GOES_HERE" pela sua chave de API da OpenAI.

3. **Executando a API:**
   Para iniciar a API, execute o seguinte comando no terminal:

   ```
   npm start
   ```

   Isso iniciará o servidor da API na porta 8080.

### Arquivos Relevantes

- `src/app.ts`: Arquivo principal da API, contendo a lógica para o envio de e-mails simulado utilizando a OpenAI.
