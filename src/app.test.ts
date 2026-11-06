import {
    describe,
    it,
    expect,
    beforeAll,
    afterAll
} from "vitest"

import {buildApp } from "./app.js"
import { success } from "zod";

describe("Aegis API integration tests", ()=>{
    const app = buildApp();

    beforeAll(async ()=>{  
        await app.ready()
    }); // beforeAll runs before the main test cases

    afterAll(async ()=>{
        await app.close()
    }) // afterAll runs after main test cases

    it("should return a successful chat response", async ()=>{
        const response = await app.inject({
            method: "POST",
            url: "/v1/chat",
            payload: {
                message: "Hello Aegis"
            }
        });

        expect(response.statusCode).toBe(200);

        expect(response.json()).toEqual({
            success: true,
            message: "Hello Aegis",
        })
    })

    it("should reject an invalid chat request", async()=>{
        const response = await app.inject({
            method: "POST",
            url: "/v1/chat",
            payload: {
                message: 12345,
            }
        })

        expect(response.statusCode).toBe(400)
    })

    it("should reject an empty message", async ()=>{
        const response = await app.inject({
            method: "POST",
            url: "/v1/chat",
            payload: {
                message: "",
            },
        })

        expect(response.statusCode).toBe(400)
    })

    it("should reject unexpected fields", async()=>{
        const response = await app.inject({
            method: "POST",
            url: "/v1/chat",
            payload: {
                message: "Hello Aegis",
                admin: true,
            }
        })

        expect(response.statusCode).toBe(400)
    })

    it("should return 404 for an unknown endpoint", async ()=>{
        const response = await app.inject({
            method: "POST",
            url: "/v1/unknown",
            payload: {},
        })

        expect(response.statusCode).toBe(404)
    })

})