interface Dog {
    name: string;
    say(): void;
}
interface DogConstructor {
    new (name: string): Dog;
}
declare const Dog: DogConstructor;
export default Dog;
