---
title: 'Exploring Rust - Part I: The Turbofish Syntax and Type Inference'
date: 'April 22, 2024'
excerpt: 'My first attempt to write Rust.'
---

Now I'm currently learning Rust, the approach I'm following is to use whatever code I see from the lessons I watch or read, then try to grok its syntax. One piece of code I tried to dissect is this one about vectors:

```rust
fn main() {
    let mut words: Vec<String> = Vec::new();
}
```

Focusing on the first line after the function declaration, the part where a new vector was initialized, made me ask this question: "why is `<String>` not declared on the `Vec::new()` part, like `Vec<String>::new()`"? Will it hurt if I also declare `<String>` on the initialization part, just to keep things uniform?

Acting on that idea, I rewrote my code to this:

```rust
fn main() {
    let mut words: Vec<String> = Vec<String>::new();
}
```

Then I re-compiled my code, but the Rust compiler rejected it and returned the following messages:

```
- error: comparison operators cannot be chained
- help: use `::<...>` instead of `<...>` to specify lifetime, type, or const arguments
```

I fixed my code by following the second message, with it being more useful as it's a direct solution to the problem. Why should it be written that way though?

Honestly, at this stage, I don't know yet. But here are my takeaways:

1. The creators intended it to be that way. Just follow the "turbofish" syntax: `::<>`. It looks like a fish right?
2. Trust the compiler that it will do its work. Let it do type inference for you. This also saves you a few keystrokes.

## Working code

```rust
fn main() {

    // The commented code works fine, but for the sake of
    //   brevity, just infer the type of the vector.
    //let mut words: Vec<String> = Vec::<String>::new();

    let mut words: Vec<String> = Vec::new();
    words.push(String::from("Foo"));
    println!("words: {:?}", words);
}
```
