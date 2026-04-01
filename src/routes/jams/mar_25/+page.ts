import type { PageLoad } from './$types';
import type { JamGameCard } from '$lib/types/jams';

export const load: PageLoad = () => {
    let cards: JamGameCard[] = [
        {
            title: "Switcharoo",
            imgPath: "/jams/mar_25/hero_1.png",
            link: "https://coffandro.itch.io/switcheroo",
            creator: "BreadBird Games"
        },
        {
            title: "Quandary",
            imgPath: "/jams/mar_25/hero_4.png",
            link: "https://muffe05.itch.io/quandary",
            creator: "Muffe05"
        },
        {
            title: "Gears of Rage",
            imgPath: "/jams/mar_25/hero_2.png",
            link: "https://zyralis.itch.io/gearsofrage",
            creator: "Zyralis, World of Pixels"
        },
        {
            title: "Employee at SHAPES",
            imgPath: "/jams/mar_25/hero_3.png",
            link: "https://twinklesunnysun.itch.io/employee-at-shapes",
            creator: "twinklesunnysun, Panthy <3"
        }
    ];

    return {
        submissions: cards
    };
};