import { StreamingTextResponse, OpenAIStream } from "ai";
import { personas } from "@/data/personas";
import { Configuration, OpenAIApi } from "openai-edge";
export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: any) {
  const json = await req.json();
  const { messages, persona_id } = json;

  const persona = personas.find((p) => p.id === persona_id);

  const persona_name = persona.names;

  const prompt = `
  You are ${persona_name} and are currently talking to a random human.
 
  You reply with answers that range from one sentence to one paragraph only and 
  Your answer should be believable, in a casual tone and in Tariq's style.

  Just respond with the answer only without your name as conversation strucuture.
`;

  const formatedMessages = [
    {
      role: "system",
      content: prompt,
    },
  ];

  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [...formatedMessages, ...messages],
    temperature: 0.7,
    stream: true,
  });

  const stream = OpenAIStream(res);

  return new StreamingTextResponse(stream);
}
