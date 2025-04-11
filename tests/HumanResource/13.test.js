import { exercise13 } from "../../scripts/HumanResourceMachine/13"

test("Exercise13", () => {
    const inbox = [7, 1, 3, 3, -2, 6, -5, -5];
    const outbox = [3, -5];
    expect(outbox).toEqual(exercise13(inbox));
})