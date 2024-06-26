import { createContext } from "react"

export const Items = createContext([]);
export function handle(arr) {
    console.log(arr);
    const newlist = [...list, arr];
    setlist(newlist);
}
export function del(ind) {
    const newlist = list.filter((_, index) => {
        return index != ind;
    })
    setlist(newlist);
}
