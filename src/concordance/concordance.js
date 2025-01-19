﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concordance = concordance;
exports.concordanceCaseSensitive = concordanceCaseSensitive;
function concordance(text, word) {
    if (word.length === 0 || text.length === 0) {
        return [[], []];
    }
    word = word.toLocaleLowerCase();
    const out = [];
    const lineNumbers = [];
    for (let i = 0; i < text.length; i++) {
        const line = text[i].toLocaleLowerCase();
        if (line.includes(word)) {
            const index = line.indexOf(word);
            const start = Math.max(0, index - 5);
            const end = Math.min(line.length, index + 5);
            out.push(line.substring(start, end));
            lineNumbers.push(i);
        }
    }
    return [out, lineNumbers];
}
function concordanceCaseSensitive(text, word) {
    if (word.length === 0 || text.length === 0) {
        return [[], []];
    }
    const out = [];
    const lineNumbers = [];
    for (let i = 0; i < text.length; i++) {
        const line = text[i];
        if (line.includes(word)) {
            const index = line.indexOf(word);
            const start = Math.max(0, index - 5);
            const end = Math.min(line.length, index + 5);
            out.push(line.substring(start, end));
            lineNumbers.push(i);
        }
    }
    return [out, lineNumbers];
}
//# sourceMappingURL=concordance.js.map