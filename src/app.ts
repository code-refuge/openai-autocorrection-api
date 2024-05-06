import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
const port = 8080;

// Middleware para analisar corpos de solicitações com content-type application/json
app.use(bodyParser.json());

// Endpoint sendEmail do tipo POST
app.get("/api/mail", async (req: Request, res: Response) => {
  // Aqui você pode adicionar a lógica para enviar o e-mail
  // Suponha que você tenha recebido os dados do e-mail no corpo da solicitação
  const { body } = req.body;

  // const bodyWithoutHtml = body.replace(/<[^>]*>?/gm, "");

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY, // This is the default and can be omitted
  });

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Você irá corrigir erros ortográficos, você deve sempre manter a essência do texto digitado somente corrigindo erros ortográficos",
      },
      { role: "user", content: "bodyWithoutHtml" },
    ],
  });
  console.log(
    "🚀 ~ app.post ~ chatCompletion:",
    JSON.stringify(chatCompletion, null, 2)
  );

  const randomId = Math.floor(Math.random() * 1000);
  // Por simplicidade, vamos apenas criar um objeto de resposta
  const response = {
    id: "martha-sent-" + randomId,
    createdAt: new Date().getTime() - 60000 * randomId,
    folder: "sent",
    from: {
      avatar:
        "https://conteudo.imguol.com.br/c/entretenimento/16/2024/04/26/bebe-rena-amp-1714159098545_v2_1x1.png",
      email: "ma4815162342@yahoo.com.br",
      name: "Martha",
    },
    isImportant: false,
    isStarred: false,
    isUnread: true,
    labelIds: ["personal"],
    message: chatCompletion.choices[0].message.content,
    subject: "no subject",
    to: [
      {
        avatar:
          "https://midias.em.com.br/_midias/jpg/2024/05/02/1000x1000/1_bebe_rena_entenda_o_final_da_nova_serie_da_netflix-36718502.jpg?20240502122657?20240502122657",
        email: "donny.dunn@yahoo.com.br",
        name: "Donny Dunn",
      },
    ],
  };

  // Retornar o objeto como resposta
  res.json(response);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
