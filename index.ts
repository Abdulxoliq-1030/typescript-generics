class List<T> {
    elements: T[] = [];

    add(element: T): void {
        this.elements.push(element);
    }
}


let list = new List<number | string>();


list.add(12);

list.add(23);
list.add("as")


console.log(list);


let list2 = new List<boolean | undefined>();

list2.add(undefined);
list2.add(true)

console.log(list2)



interface IList<T> {
    elements: T[];
    add(element: T): void;
    // new(name: string, age: number): void; /// constructor
}


type ListType = string | number | boolean

class List2 implements IList<ListType> {
    elements: string[] = [];
    add(element: string): void {
        this.elements.push(element)
    }
}

let list3 = new List2()



list3.add("Hello world");
list3.add("World");


