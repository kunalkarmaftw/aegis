import fastify from "fastify";
import type { FastifyError } from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";


import { chatRoutes } from "./routes/chat.routes.js";

export function buildApp() {
    const app = fastify({
        logger : true, // to enable fastify built in logging feature
    });

    // Configure Zod validation and serialization
    app.setValidatorCompiler(validatorCompiler);
    app.setSerializerCompiler(serializerCompiler);

    //error handling
    app.setErrorHandler((error: FastifyError, request, reply) =>{
        app.log.error(error)
    
        const statusCode = error.statusCode ?? 500; //what is "??" -> it is called nullish coalescing. that means ki statuscode agar null ya undefined hua toh 500 use hoga nhi toh jo statuscode h wo use hoga.
    
        return reply.status(statusCode).send({
            success: false,
            error: 
            statusCode >= 500 ? "Internal server error" : error.message,
        })
    })

    //health check endpoint
    app.get("/health",async ()=>{
        return {
            status: "ok",
            service: "aegis",
        }
    })
    
    // Register chat routes
    app.register(chatRoutes);

    return app;


}