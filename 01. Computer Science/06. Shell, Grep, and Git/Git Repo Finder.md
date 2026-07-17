# Git Repo in Mac Finder

## Does Finder show which branch you're on?

No — Finder has no git awareness. It doesn't display branch names or any git metadata.

## So what files does Finder show?

Finder simply displays the current state of the filesystem. When you switch branches (in VS Code, terminal, etc.), git swaps the files on disk, and Finder reflects that in real time because the actual files changed.

It's not that Finder is "aware" of branches — it's just showing the directory contents, which happen to be whatever branch is currently checked out.

**Summary:** Finder always shows whichever branch is currently checked out in that repo's working directory.

## Seeing branch info

To actually see the current branch name you need:
- Terminal (`git branch` or shell prompt if configured)
- A git GUI app (Tower, Fork, GitKraken, etc.)
- Your IDE (VS Code shows it in the bottom-left status bar)
