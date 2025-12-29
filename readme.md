# 📌 Types of module in Node.js

---

## 1️⃣ local module (user defined/custom)

|- modules that you create yourself in your project.

```js
export const sum = (a, b)=>{
        return a + b;
}
```

---

## 2️⃣ Third party modules (npm modules)

|- that we install from npm

---

## 3️⃣ global module / Builtin module

(i) global core module — (don't need to require them)

[
  console.log()
  buffer
]

(ii) Non-global core (we have to require them)

[
  path
  fs
  os
  http
]

---

🔯🔯🔯=========  path module ========🔯🔯🔯

path module is a built-in node.js modules that provides tools for handling and transforming file paths accross different OS.

since windows uses backslashes(\) and POSIX systems (linux,macOS) uses forword slashes(/) the path madules helps to write cross-platform code that works correctly on any system.

---

## ✅✅ key benefits:

cross platform path handling  
path manipulation and normalization  
Easy file extension extraction  
path resolution and joining  
workinng with relative and absolute path  

---

There are three imp. method

|- join()  
|- resolve()  
|- basename()

```js
const {join,resolve,basename} = require("path");
```

---

📝📝📝📝📝 join()

safely combined the path

```js
const filepath = join("public","styles","style.css")
// -> public/styles/style.css
```

---

📝📝📝📝📝 resolve()

✅ creates an absolute path

```js
const respath = resolve("public")
// -> "E:\\White Hat Coders-----Vipin\\Full stack Web Development\\backend\\ExpressJs\\public"
```

builds a full absolute path starting from your current working directory  
🔯🔯 (where your name server is runing)

📝
--------
in simple words resolve() returns an absolute path starting from your current working directory.
where node was executed.
--------
📝

---

📝======================= baseename() =======================📝

👉 It returns ONLY the last part of a path (the file or folder name).

It does NOT care about Node, server, routes, cwd, etc.  
It simply works on the string path you give it.

```js
basename("/users/vipin/project/app.js");
// -> "app.js"
```

---

```js
const resPath = basename("public", "style.css");
console.log(resPath);
// -> public
```

👉 Why?

Because "public" is treated as the whole path string.  
basename() just returns the last segment — which is "public".

The second argument does NOT join paths.

---

✨ Special feature: remove file extension

The second argument is only for removing an extension.

```js
basename("/public/style.css", ".css");
// -> "style"
```

If the extension does NOT match, nothing is removed:

```js
basename("/public/style.css", ".js");
// -> "style.css"
```
