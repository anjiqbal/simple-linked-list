export class Element {
  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor(array) {
    this._head = null;
    this._length = 0;

    if (Array.isArray(array) && array.length > 0) {
      this._head = new Element(array[array.length - 1]);
      let current = this._head;
      this._length++;

      for (let i = array.length - 2; i >= 0; i--) {
        current._next = new Element(array[i], current._next);
        this._length++;
        current = current._next;
      }
    }
  }

  add(value) {
    let next = this._head;
    this._head = new Element(value.value, next);
    this._length++;
    return this._head;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let length = this._length;

    let arr = new Array(length);

    let current = this._head;
    let index = 0;
    while (current) {
      arr[index++] = current.value;
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let current = this._head;
    let previous = null;

    while (current) {
      let newNode = new Element(current._value, previous);
      previous = newNode;
      current = current._next;
    }

    const reversedList = new List();
    reversedList._head = previous;
    reversedList._length = this._length;

    return reversedList;
  }
}
