function concordance(text: string[], word: string): [Array<string>, Array<number>] {
    if(word.length === 0 || text.length === 0) {
        return [[], []];
    }
    word = word.toLocaleLowerCase();
    const out : Array<string> = [];
    const lineNumbers: Array<number> = [];
    for(let i =0; i < text.length; i++) {
        const line = text[i].toLocaleLowerCase().split(" ");
        const index = line.indexOf(word);
        if(index > -1) {
            const start = Math.max(0, index - 5);
            const end = Math.min(line.length, index + 5);
            out.push(line.slice(start, end).join(' '));
            lineNumbers.push(i);
        }
    }
    return [out, lineNumbers];
}

function concordanceCaseSensitive(text: string[], word: string): [Array<string>, Array<number>] {
    if(word.length === 0 || text.length === 0) {
        return [[], []];
    }
    const out : Array<string> = [];
    const lineNumbers: Array<number> = [];
    for(let i =0; i < text.length; i++) {
        const line = text[i].split(" ");
        const index = line.indexOf(word);
        if(index > -1) {
            const start = Math.max(0, index - 5);
            const end = Math.min(line.length, index + 5);
            out.push(line.slice(start, end).join(' '));
            lineNumbers.push(i);
        }
    }
    return [out, lineNumbers];
}
export { concordance, concordanceCaseSensitive };
