"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonContexts = commonContexts;
function commonContexts(text, words) {
    if (text.length === 0 || words.length === 0 || words.some(word => word.length === 0)) {
        return [];
    }
    const wordsOfLine = text.map(t => t.toLocaleLowerCase().split(" "));
    words = words.map(w => w.toLocaleLowerCase());
    const contexts = words.map((word) => {
        const context = [];
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
    const out = firstContext.map((c) => contexts.every((context) => context.includes(c)) ? c : "")
        .filter(c => !!c);
    return out;
}
//# sourceMappingURL=common-contexts.js.map