import { chatRequestSchema } from "./schemas/chat.schema.js";

const result = chatRequestSchema.safeParse({
  message: "Hello Aegis"
});

console.log(result);

const result2 = chatRequestSchema.safeParse({
    message: "     "
})

console.log(result2.error?.issues);

const result3 = chatRequestSchema.safeParse({
  message: "Hello",
  admin: true
})

console.log(result3.error?.issues);

// console.log("TEST 1: Valid message");
// console.log(result);

// console.log("TEST 2: Empty message");
// console.log(result2);

// console.log("TEST 3: Unexpected field");
// console.log(result3);