#### Questions: How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

### Title: TypeScript Generics — Reusable এবং Strictly Typed Code

## Introduction

একই কাজ বিভিন্ন type-এর জন্য বারবার লেখা ঠিক না। Generics দিয়ে এমন function বা component বানানো যায় যা যেকোনো type-এর সাথে কাজ করে। Type safety-ও ঠিক থাকে। নিচে দেখব।

## Generics

//প্রতিটি type-এর জন্য আলাদা function লিখতে হচ্ছে

function getFirstNumber(arr: number[]): number { return arr[0]; }
function getFirstString(arr: string[]): string { return arr[0]; }
function getFirstBoolean(arr: boolean[]): boolean { return arr[0]; }

এটা DRY না। একই logic বারবার লেখা হচ্ছে।

## Generic Function

<T> হলো একটা type placeholder। Function call করার সময় TypeScript নিজেই বুঝে নেয় কোন type।

// একটা function, সব type-এর জন্য

function getFirst<T>(arr: T[]): T {
return arr[0];
}

const num = getFirst([1, 2, 3]); // type: number
const str = getFirst(["a", "b", "c"]); // type: string
const bool = getFirst([true, false]); // type: boolean

## Generic Interface

typescriptinterface ApiResponse<T> {
data: T;
status: number;
message: string;
}

// User response
const userRes: ApiResponse<{ name: string; email: string }> = {
data: { name: "Rahim", email: "rahim@example.com" },
status: 200,
message: "Success",
};

// Product response — same interface, different type
const productRes: ApiResponse<{ title: string; price: number }> = {
data: { title: "Laptop", price: 50000 },
status: 200,
message: "Success",
};
একটা interface দিয়েই দুই ধরনের response handle হচ্ছে।

## Constraint দিয়ে Generic সীমিত করা

সব type allow না করে শুধু নির্দিষ্ট structure-এর type নেওয়া যায়।

// T-তে অবশ্যই id থাকতে হবে

function findById<T extends { id: number }>(
items: T[],
id: number
): T | undefined {
return items.find((item) => item.id === id);
}

const users = [{ id: 1, name: "Rahim" }, { id: 2, name: "Karim" }];
const found = findById(users, 1);
console.log(found?.name); // "Rahim"

## Conclusion

Generics শিখলে code অনেক বেশি reusable হয়। একবার লিখে বারবার ব্যবহার করা যায়। Type safety-ও নষ্ট হয় না। বড় project-এ Generics ছাড়া কাজ করা কঠিন হয়ে যায়।
