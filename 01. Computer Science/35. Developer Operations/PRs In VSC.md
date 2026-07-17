# Reviewing PRs in VS Code

## Approach 1: GitHub Pull Requests Extension

1. Install "GitHub Pull Requests and Issues" from the Extensions marketplace
2. Sign in to GitHub when prompted
3. Open the PR panel in the sidebar (GitHub icon)
4. Open PRs are listed — click one to check out the branch and review diffs inline

### Pros
- See diffs inline with color-coded additions/deletions
- Leave review comments directly from VS Code (they show up on GitHub)
- Approve/request changes without leaving the editor
- See PR description, linked issues, and conversation thread

### Cons
- Requires signing in and setup
- Can feel clunky for large PRs with many files
- Another extension to manage

## Approach 2: git fetch + checkout

```bash
git fetch origin
git checkout pr-branch-name
```

Diff against main:

```bash
git diff main..pr-branch-name
```

### Pros
- No extra tooling needed
- You can actually run the code, test it, poke around freely
- Full control — use any diff tool you want (git diff, difftool, etc.)

### Cons
- No way to leave review comments from the terminal (you'd go to GitHub for that)
- Have to remember to switch back to your branch when done
- git diff output can be hard to read for large changes

## Summary

Use the extension if you want to leave comments and do a formal review. Use git fetch + checkout if you want to actually run and test the code. You can do both — checkout the branch to test, then use the extension to submit your review.
