const sumTwoNumbers = (a, b) => a + b

export const exercise06 = (inbox) => {
    const outbox = [];
    let count = 0;
    while (count < inbox.length) {
        outbox.push(sumTwoNumbers(inbox[count], inbox[count + 1]));
        count += 2;
    }

    return outbox;
}