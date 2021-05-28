class SomeClass {
  // todo: need to add babel for eslint to recognize
  #name;

  constructor(name) {
    this.#name = name;
  }

  sayHello() {
    return this.#name;
  }
}

export default SomeClass;
