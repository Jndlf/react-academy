
/**
 * Übung 4: Interfaces and Objects
 *******************************************/

interface Person {
    name: string;
    nr: number;
    pets: string[];
    isNterrianer(): boolean;
  }
  
  const person: Person = {
    name: "Jan",
    nr: 42,
    pets: ["cat", "dog"],
    isNterrianer: () => true,
  };
  
  function printPets(person: Person): void {
    const prefix: string = person.isNterrianer() ? "nterra - " : "";
    person.pets.forEach((pet: string) => {
      console.log(`${prefix}${pet}`);
    });
  }