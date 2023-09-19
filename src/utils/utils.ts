import { type Letter } from "./types";
import { LETTERS } from "./constants";

export function isUnlikely(letter: Letter) {
    return Math.random() > letter.likeliness;
}

export function getRandomLetter() {
    let randomNumber = Math.floor(Math.random() * 26);

    while (isUnlikely(LETTERS[randomNumber])) {
        randomNumber = Math.floor(Math.random() * 26);
    }
    return LETTERS[randomNumber].letter;
}


