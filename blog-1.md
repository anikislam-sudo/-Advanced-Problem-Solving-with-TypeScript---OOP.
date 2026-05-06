#### Questions: Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

### Title: `any` vs `unknown` এবং Type Narrowing

## Introduction

TypeScript-এ any একটা popular type। কিন্তু এটা safe না। এর বদলে unknown ব্যবহার করা ভালো।
আজকে এই দুইটার পার্থক্য নিচে দেখব:

## "any" — Type Safety Hole

`any` দিলে TypeScript কোনো check করে না। যেকোনো ভুল করলেও সে চুপ থাকে।

typescript->

let data: any = getApiData();
console.log(data.name.toUpperCase()); // runtime-এ crash করবে, কিন্তু TypeScript কিছু বলবে না

এটাই হলো **type safety hole** — TypeScript-এর সুরক্ষা ব্যবস্থায় একটা বড় ফাঁকা।

---

## `unknown` — Safe বিকল্প

unknown`-ও যেকোনো value রাখতে পারে, কিন্তু use করার আগে type check বাধ্যতামূলক

```typescript
let data: unknown = getApiData();

if (typeof data === "string") {
  console.log(data.toUpperCase()); // safe
}
```

## Type Narrowing

Condition দিয়ে broad type থেকে specific type-এ আসার প্রক্রিয়াকে বলে **Type Narrowing।**

```typescript
function handle(value: unknown) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else if (Array.isArray(value)) {
    console.log("Array length:", value.length);
  }
}
```

---

## Conclusion

`any` avoid করা, `unknown` ব্যবহার করা, আর সবসময় type narrowing করা।
এটুকুই TypeScript-কে সত্যিকারের useful করে তোলে।
