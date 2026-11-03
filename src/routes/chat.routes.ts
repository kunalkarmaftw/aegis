import { processChat } from "../services/chat.service.js";
import type { FastifyInstance } from "fastify";
import { chatRequestSchema } from "../schemas/chat.schema.js";
import {
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

export async function chatRoutes(app: FastifyInstance) {

    //Enable Zod type inference for this route module
    const typedApp = app.withTypeProvider<ZodTypeProvider>();

  typedApp.post("/v1/chat", {
    schema:{
        body: chatRequestSchema
    }
  }, async (request,reply) =>{
    const { message } = request.body; 

    const result = await processChat(message)

    return reply.send(result);

  })

}