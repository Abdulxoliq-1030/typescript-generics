var List = /** @class */ (function () {
    function List() {
        this.elements = [];
    }
    List.prototype.add = function (element) {
        this.elements.push(element);
    };
    return List;
}());
var list = new List();
list.add(12);
list.add(23);
list.add("as");
console.log(list);
var list2 = new List();
list2.add(undefined);
list2.add(true);
console.log(list2);
var List2 = /** @class */ (function () {
    function List2() {
        this.elements = [];
    }
    List2.prototype.add = function (element) {
        this.elements.push(element);
    };
    return List2;
}());
var list3 = new List2();
list3.add("Hello world");
list3.add("World");
