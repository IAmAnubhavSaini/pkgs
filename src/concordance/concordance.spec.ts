import { concordance, concordanceCaseSensitive } from "./concordance";

describe("@concordance", () =>{
    const text = [
`ong the former , one was of a most monstrous size . ... This came towards us , `,
`ON OF THE PSALMS . " Touching that monstrous bulk of the whale or ork we have r`,
`ll over with a heathenish array of monstrous clubs and spears . Some were thick`,
`d as you gazed , and wondered what monstrous cannibal and savage could ever hav`,
`that has survived the flood ; most monstrous and most mountainous ! That Himmal`,
`they might scout at Moby Dick as a monstrous fable , or still worse and more de`,
`th of Radney .'" CHAPTER 55 Of the Monstrous Pictures of Whales . I shall ere l`,
`ing Scenes . In connexion with the monstrous pictures of whales , I am strongly`,
`ere to enter upon those still more monstrous stories of them which are to be fo`,
`ght have been rummaged out of this monstrous cabinet there is no telling . But `,
`of Whale - Bones ; for Whales of a monstrous size are oftentimes cast up dead u`,
    ];
    it("finds the concordance", () => {
        const word = "monstrous";
        const [lines, numbers] = concordance(text, word);
        expect(lines.length).toEqual(text.length);
        expect(numbers.length).toEqual(text.length);
    });
    it("finds the case sensitive only concordance", () => {
        const word = "Monstrous";
        const [lines, numbers] = concordanceCaseSensitive(text, word);
        expect(lines.length).toEqual(1);
        expect(numbers.length).toEqual(1);
    });

    it("cannot find the concordance if text is empty", () => {
        const word = "monstrous";
        const [lines, numbers] = concordance([], word);
        expect(lines.length).toEqual(0);
        expect(numbers.length).toEqual(0);
    });
    it("cannot find the case sensitive only concordance if text is empty", () => {
        const word = "Monstrous";
        const [lines, numbers] = concordanceCaseSensitive([], word);
        expect(lines.length).toEqual(0);
        expect(numbers.length).toEqual(0);
    });
});
