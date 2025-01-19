function commonContexts(text: Array<string>, words: Array<string>): Array<string> {
    if (text.length === 0 || words.length === 0 || words.some(word => word.length === 0)) {
        return [];
    }
    const wordsOfLine: Array<Array<string>> = text.map(t => t.toLocaleLowerCase().split(" "));
    words = words.map(w => w.toLocaleLowerCase());

    const contexts = words.map((word: string) => {
        const context: Array<string> = [];
        for (let i = 0; i < wordsOfLine.length; i++) {
            const line = wordsOfLine[i];
            const index = line.indexOf(word);

            if (index > -1) {
                const pre = Math.max(0, index - 1);
                const post = Math.min(line.length, index + 1);
                context.push(`${line[pre]}_${line[post]}`);
            }
        }
        return context;
    });

    const firstContext = contexts[0];
    const out: Array<string> = firstContext.map(
        (c: string) => contexts.every(
            (context: Array<string>) => context.includes(c)) ? c : ""
    )
        .filter(c => !!c);

    return out;
}


export { commonContexts };
