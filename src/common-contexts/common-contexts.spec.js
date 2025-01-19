"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_contexts_1 = require("./common-contexts");
describe("@commonContexts", () => {
    const text = [
        `ong the former , one was of a most monstrous size . ... This came towards us , `,
        `ON OF THE PSALMS . " Touching that monstrous bulk of the whale or ork we have r`,
        `ll over with a heathenish array of monstrous clubs and spears . Some were thick`,
        `d as you gazed , and wondered what monstrous cannibal and savage could ever hav`,
        `that has survived the flood ; most monstrous and most mountainous ! That Himmal`,
        `they might scout at Moby Dick as a monstrous dark , or still worse and more de`,
        `th of Radney .'" CHAPTER 55 Of the Monstrous Pictures of Whales . I shall ere l`,
        `ing Scenes . In connexion with the monstrous pictures of whales , I am strongly`,
        `ere to enter upon those still more monstrous stories of them which are to be fo`,
        `ght have been rummaged out of this monstrous hour there is no telling . But `,
        `of Whale - Bones ; for Whales of a monstrous size are oftentimes cast up dead u`,
        `horse - whales , which had bones of very great value for their teeth , of whi`,
        `n inward bruise ." -- KING HENRY . " Very like a whale ." -- HAMLET . " Which `,
        `itself ," said Mr . Webster , " is a very striking and peculiar portion of the`,
        `egree , some time or other , cherish very nearly the same feelings towards the`,
        `o eat and sleep meanwhile . It was a very dubious - looking , nay , a very dar`,
        `s a very dubious - looking , nay , a very dark and dismal night , bitingly col`,
        `to it , I thought that here was the very spot for cheap lodgings , and the be`,
        `emned old craft . On one side hung a very large oilpainting so thoroughly besm`,
        `mean ?" " Sartain , and that ' s the very reason he can ' t sell it , I guess `,
        `hirt sleeves . But beginning to feel very cold now , half undressed as I was ,`,
        `home at all that night , it being so very late , I made no more ado , but jump`,
        `g - plaster shirt . Still more , his very legs were marked , as if a parcel of`,
        `jambs and all the bricks inside were very sooty , so that I thought this fire `,
        `t I thought this fire - place made a very appropriate little shrine or chapel `,
        `shing the fire , he took the idol up very unceremoniously , and bagged it agai`,
        `explain the mystery . Nay , to this very hour , I often puzzle myself with it`,
        `g the supernatural hand in mine were very similar , in their strangeness , to `,
        `under the circumstances , this is a very size overture ; but , the truth`,
        `at top by donning his beaver hat , a very tall one , by the by , and then -- s`,
        `t been a small degree civilized , he very probably would not have troubled him`,
        `. At last , he emerged with his hat very much dented and crushed down over hi`,
        `e window , and that the street being very narrow , the house opposite commande`,
        `room accosted the grinning landlord very pleasantly . I cherished no malice t`,
        `d of travel , I say , may not be the very best mode of attaining a high social`,
        `towards him . But THAT was certainly very coolly done by him , and every one k`,
    ];
    it("finds common contexts", () => {
        const actual = (0, common_contexts_1.commonContexts)(text, ["monstrous", "very"]);
        expect(actual.length).toEqual(2);
    });
});
//# sourceMappingURL=common-contexts.spec.js.map