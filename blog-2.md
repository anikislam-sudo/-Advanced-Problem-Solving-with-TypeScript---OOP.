#### Questions: How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

### Title: ও Omit দিয়ে DRY Code in TypeScript

## Introduction

একটা বড় interface থেকে বারবার নতুন interface লেখা boring।
একটা field বদলালে সব জায়গায় manually বদলাতে হয়। এই সমস্যা সমাধান করে TypeScript-এর Pick আর Omit।
নিচে দেখব কীভাবে।

## Master Interface -

interface User {
id: number;
name: string;
email: string;
password: string;
role: "admin" | "user";
createdAt: Date;
}

এই একটা interface থেকেই সব ধরনের type বানানো যাবে।

## Pick -

নির্দিষ্ট কিছু field বেছে নিয়ে নতুন type বানানো যায়।

type UserProfile = Pick<User, "id" | "name" | "email">;

type LoginData = Pick<User, "email" | "password">;

const profile: UserProfile = {
id: 1,
name: "Rahim",
email: "rahim@example.com",
// password দেওয়া যাবে না — TypeScript error দেবে
};

## Omit -

কিছু field বাদ দিয়ে বাকি সব নিয়ে type বানানো যায়।

type SafeUser = Omit<User, "password">;

type CreateUser = Omit<User, "id" | "createdAt">;

const newUser: CreateUser = {
name: "Karim",
email: "karim@example.com",
password: "hashed_pass",
role: "user",
};

## DRY-

DRY = Don't Repeat Yourself। একই জিনিস বারবার না লেখা।

// User বদলালে এখানেও manually বদলাতে হবে
interface UserProfile {
id: number;
name: string;
email: string;
}

//User বদলালে আপনাআপনি ঠিক হয়ে যাবে
type UserProfile = Pick<User, "id" | "name" | "email">;

Master interface একবার বদলালে সব derived type আপনাআপনি update হয়।

## Conclusion

Pick আর Omit ব্যবহার করলে code DRY থাকে। একজায়গায় বদলালে সব জায়গায় আপডেট হয়।
Duplication কমে। আর type safety-ও নষ্ট হয় না। বড় project-এ এটা অনেক কাজে আসে।
