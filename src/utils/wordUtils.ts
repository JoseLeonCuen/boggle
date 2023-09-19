
// import { type Ref } from "vue";

export function addWord(list: string[] , word: string) : string[] {    
    return [
        ...list,
        word
    ];
}