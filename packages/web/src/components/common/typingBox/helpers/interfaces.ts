export interface typingBoxProps {
    mode: "easy" | "hard";
    colorCodes: {
        wrong: string;
        correct: string;
        notTyped: string;
    };
}
export interface typedArrayInterface {
    word: string;
    state: "correct" | "wrong";
    time: number | null;
    wpm: number;
    accuracy: number;
    timeUsed: string;
    uncorrectedwpm: number;
}

export interface DataBoxType<T> {
    dataProp: Array<T>;
}