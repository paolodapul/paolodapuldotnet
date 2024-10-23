---
title: 'Binaries vs. Libraries in Go'
date: 'October 23, 2024'
excerpt: 'Basics of Go compilation'
---

In Go, there are two types of compilation you can do: compilation as a library or as an executable (or binary). I discovered this by writing the following Go code:

```go
package hello

import (
	"fmt"
)

func main() {
	fmt.Println("hello world!")
}
```

Once I started compiling the code using `go build hello.go`, it won't create a new file that I can run. I found out that the reason why it won't output anything was I wasn't referring to the package as `package main`.

TIL that Go requires a `main` package to produce a binary i.e. a program that can be run.

---

Corrected code for compilation as a binary:

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello world!")
}

```
