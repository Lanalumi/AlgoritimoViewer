import{ scramblerHandler } from "../../scripts/HumanResourceMachine/04.js";

describe("scramblerHandler", () => {
    test("for each two items, return them reversed", () => {
        const inbox = [1, 8, "G", "G", 1, 7];
        const outbox = [8, 1, "G", "G", 7, 1];

        expect(scramblerHandler(inbox)).toEqual(outbox);
    }
);
}); 