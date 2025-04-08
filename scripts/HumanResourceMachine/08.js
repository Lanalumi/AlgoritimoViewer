export const exercise08 = (inbox) => {
    const outbox = inbox.map
    ((number) => number * 3);
    return outbox;
};