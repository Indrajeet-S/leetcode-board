function greet(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());
