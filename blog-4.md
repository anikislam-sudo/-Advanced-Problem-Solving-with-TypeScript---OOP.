#### Questions: How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

### Title: OOP-এর চার স্তম্ভ in TypeScript

## Introduction

বড় project-এ code গুছিয়ে রাখা কঠিন হয়ে যায়। OOP-এর চারটা concept এই সমস্যা সমাধান করে। Encapsulation, Abstraction, Inheritance আর Polymorphism — এই চারটা ভালোভাবে বুঝলে TypeScript-এ বড় project manage করা অনেক সহজ হয়। নিচে দেখব।

## Encapsulation — Data লুকিয়ে রাখো

বাইরে থেকে সরাসরি data বদলানো বন্ধ করতে private ব্যবহার করা হয়।

class BankAccount {
private balance: number = 0;

deposit(amount: number): void {
if (amount > 0) this.balance += amount;
}

getBalance(): number {
return this.balance;
}
}

const acc = new BankAccount();
acc.deposit(5000);
console.log(acc.getBalance()); // 5000
// acc.balance = -9999;// Error — private, বাইরে থেকে access নেই

Data নিরাপদ থাকে। শুধু নির্দিষ্ট method দিয়েই বদলানো যায়।

## Abstraction — জটিলতা লুকাও

abstract class দিয়ে common structure ঠিক করা হয়। ভেতরের কাজ subclass করে।

abstract class Notification {
abstract send(message: string): void;

log(message: string): void {
console.log(`[LOG]: ${message}`);
}
}

class EmailNotification extends Notification {
send(message: string): void {
console.log(` Email: ${message}`);
this.log(message);
}
}

class SMSNotification extends Notification {
send(message: string): void {
console.log(` SMS: ${message}`);
this.log(message);
}
}
User শুধু send() জানলেই হয়। ভেতরে কী হচ্ছে জানতে হয় না।

## Inheritance — Code পুনরায় ব্যবহার করো

Parent class-এর সব কিছু child class পেয়ে যায়। আলাদা করে লিখতে হয় না।

class Animal {
constructor(public name: string) {}

move(): void {
console.log(`${this.name} is moving`);
}
}

class Dog extends Animal {
bark(): void {
console.log(`${this.name} says: Woof!`);
}
}

const dog = new Dog("Rex");
dog.move(); // Animal থেকে পাওয়া
dog.bark(); // Dog-এর নিজের
Common logic একবার লেখা হয়। সব child class-এ পাওয়া যায়।

## Polymorphism — একই call, ভিন্ন কাজ

একই method call করলে object ভেদে ভিন্ন কাজ হয়।

class Shape {
area(): number { return 0; }
}

class Circle extends Shape {
constructor(private radius: number) { super(); }
area(): number { return Math.PI \* this.radius \*\* 2; }
}

class Rectangle extends Shape {
constructor(private w: number, private h: number) { super(); }
area(): number { return this.w \* this.h; }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(s => console.log(s.area().toFixed(2)));
// 78.54
// 24.00

নতুন shape যোগ করলে বাকি code ছুঁতে হয় না।

## Conclusion

OOP-এর এই চারটা concept TypeScript-এ ব্যবহার করলে বড় project সহজে manage করা যায়। Code পরিষ্কার থাকে। Logic গুছানো থাকে। আর নতুন feature যোগ করতে পুরানো code ভাঙতে হয় না।
