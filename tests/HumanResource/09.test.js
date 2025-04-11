import { exercise09 } from "../../scripts/HumanResourceMachine/09";

test('Exercise09', () => { 
    const inbox = [2, 0, 9, "A", 0, 0, -3, 0]
    const outbox = [ 0, 0, 0, 0];

    expect(outbox).toEqual(exercise09(inbox))
})