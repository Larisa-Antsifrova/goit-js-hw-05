console.log(
  "Task 4 ------------------------------------------------------------"
);

class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = this._value + str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    return this.prepend(str) + this.append(str);
  }
}

// console.log(typeof StringBuilder);
// 'function'

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
