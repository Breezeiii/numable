interface Dog {
  name: string;
  say(): void;
}

interface DogConstructor {
  new (name: string): Dog;
}

const Dog = function (this: Dog, name: string) {
  this.name = name;
} as unknown as DogConstructor;

console.log(new Dog("123"));

export default Dog;
