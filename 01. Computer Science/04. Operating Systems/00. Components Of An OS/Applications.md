# Applications

## Apps vs Runtimes

At the end of the day, both an app like Adobe Photoshop and a tool like Node are just programs installed on your computer — compiled code sitting on disk that the OS loads into memory and executes.

The meaningful differences are in purpose and how they run:

- **Photoshop** is a standalone app. You launch it, it runs, you close it. It's self-contained — it doesn't need other programs to run on top of it.

- **Node** is a runtime environment. Its whole job is to take someone else's code (your JS files) and execute it. It's more like a platform than an app — similar to how the JVM runs Java programs, or how Python runs `.py` files.

Photoshop is like a finished product. Node is more like an engine that powers other things. But underneath all of that, they're both just executables on your machine that the OS treats the same way.

## Mac App Bundles vs CLI Tools

Mac apps in `/Applications` are actually folders with a specific structure — they contain the executable, icons, resources, and an `Info.plist` that tells macOS how to display and launch them. That whole bundle format is what gives them a Dock icon, an Applications folder entry, etc.

Node skips all of that and just drops its executable directly into `/usr/local/bin/node` (or wherever nvm puts it). It has no GUI, no window, nothing for macOS to "launch" in the traditional sense — so there's no reason for it to be in `/Applications`. You interact with it purely through the terminal.

The same is true for Git, Python, Ruby, etc. — they all live in `bin` directories on your PATH, not in `/Applications`.
