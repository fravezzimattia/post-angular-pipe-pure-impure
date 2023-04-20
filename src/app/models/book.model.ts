export class Book {
    title!: string;
    imei!: string;
    pipeCounter!: Number;
}


export const BOOK_INIT_VALUES: Book[] = [
    {
        title: " primo libro",
        imei: "1234-1234-1234-1234",
        pipeCounter: 0
    }, {
        title: " secondo libro",
        imei: "1234-1234-1234-1234",
        pipeCounter: 0
    }, {
        title: " terzo libro",
        imei: "1234-1234-1234-1234",
        pipeCounter: 0
    }
]