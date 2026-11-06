import { describe, it, expect } from "vitest";
import { processChat } from "./chat.service.js";

describe("processChat", ()=>{
    it("should return the message successfully", async ()=>{
        const result = await processChat("Hello Aegis");

        expect(result).toEqual({
            success: true,
            message: "Hello Aegis",
        });

    });
});