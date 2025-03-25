export const scramblerHandler = (inbox) => {
    const outbox = [];
    let count = 0;

    while(count < inbox.length){
        outbox.push(inbox[count + 1]); //8
        outbox.push(inbox[count]); //1
        count += 2;
    }
    
    return outbox;

};
