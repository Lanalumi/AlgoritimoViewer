import { exercise06 } from "../../scripts/HumanResourceMachine/06.js";
test("", () => {
    const inbox = [3, 7, 9, 8, -1, 3, 7, -5];
    const outbox = [10, 17, 2, 2];
    expect(outbox).toEqual(exercise06(inbox))
})