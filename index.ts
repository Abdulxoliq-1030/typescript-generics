// Typescript generic typw

type A<T> = T;

type B = A<string> // B = string
type C = A<number> // C = number
type D = A<boolean> //D = boolean

type E = A<"TS"> // E = "TS"

let arr: number[] = [1, 2, 3]
let arr2: Array<string> = ["asd", "bgs"];


type MyArray<T> = T[];
const arr3: MyArray<boolean | number> = [true, false, 12];

// function echo<T>(x: T): T {
//     return x
// }

// const result1 = echo(12);
// const result2: string = echo("Salom");




const echo = <T>(x: T): T => {
    return x
}

const echo2: <T>(x: T) => T = <T>(x: T): T => {
    return x;
}

type ECHO = <T>(x: T) => T;

const echo3: ECHO = <T>(x: T): T => x;

const result = echo3<string>("TS");
