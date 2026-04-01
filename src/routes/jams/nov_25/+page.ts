import type { PageLoad } from './$types';
import type { JamGameCard } from '$lib/types/jams';

export const load: PageLoad = () => {
    let cards: JamGameCard[] = [
        {
            title: "To Be Delivered",
            imgPath: "/jams/nov_25/hero_1.png",
            link: "https://eliasg2.itch.io/to-be-delivered",
            creator: "Jasmin, EliasG2, Laurits og Andreas"
        },
        {
            title: "To Be Bee",
            imgPath: "/jams/nov_25/hero_2.png",
            link: "https://coffandro.itch.io/tobebee",
            creator: "BreadBird Games"
        }
    ];

    return {
        submissions: cards
    };
};