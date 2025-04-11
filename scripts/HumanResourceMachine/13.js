const isEqual = (n1, n2) => n1 === n2;

export const exercise13 = (inbox) => {
    const outbox = [];
    let count = 0;

    while(count < inbox.length){
        if(isEqual(inbox[count], inbox[count + 1])){
            outbox.push(inbox[count]);
        }
        count += 2;
    }

    return outbox;
};