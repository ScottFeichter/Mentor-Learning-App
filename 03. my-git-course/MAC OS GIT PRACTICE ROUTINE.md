# MAC OS GIT PRACTICE ROUTINE

## 

[WTF IS GIT	2](#wtf-is-git)

[GIT IS CLI	2](#interfacing-with-git)

[GIT IS DISTRIBUTED VCS	3](#git-is-distributed-vcs)

[GIT SYNTAX	3](#git-syntax)

[GIT TERMINOLOGY	4](#git-terminology)

[GENERAL	4](#general)

[VOLATILE DIRECTORIES	4](#volatile-directories)

[HISTORY	4](#history)

[BRANCHES	5](#branches)

[DISTRIBUTED COLLABORATIVE WORKING	5](#distributed-collaborative-working)

[ACTIONS	5](#actions)

[GIT LIGHTNING BOLT SYMBOL	6](#git-lightning-bolt-symbol)

[TASK: PRACTICE GIT	6](#task:-practice-git)

[DO I HAVE GIT?	6](#do-i-have-git?)

[CONFIGURATION	6](#configuration)

[SET DEFAULT TO MAIN	7](#set-default-to-main)

[CONFIGURE COMMAND PROMPT	7](#configure-command-prompt)

[GIT HELP	7](#git-help)

[GIT COMMANDS CAN BE DIVIDED INTO TWO CATEGORIES	8](#git-commands-can-be-divided-into-two-categories)

[VIEW LIST OF ALL GIT REPOS ON A MACHINE	8](#view-list-of-all-git-repos-on-a-machine)

[BASIC WORKFLOW	8](#basic-workflow)

[STATUS AND DIFF	8](#status-and-diff)

[DISCARDING CHANGES WITH RESTORE	9](#discarding-changes-with-restore)

[UNSTAGE WITH RESET	9](#unstage-with-reset)

[Unstage changes from staging directory: git reset HEAD \<file\>	9](#unstage-changes-from-staging-directory:-git-reset-head-\<file\>)

[AMEND THE MOST RECENT COMMIT	9](#amend-the-most-recent-commit)

[UNDO CHANGES	9](#undo-changes)

[RETRIEVE OLD VERSIONS	10](#retrieve-old-versions)

[REVERT A COMMIT	10](#revert-a-commit)

[REMOVE AND TRASH UNTRACKED FILES	10](#remove-and-trash-untracked-files)

[IGNORE (NOT TRACK) FILES	10](#ignore-\(not-track\)-files)

[Create .gitignore: touch .gitignore	10](#create-.gitignore:-touch-.gitignore)

[HOW TO TRACK EMPTY DIRECTORY	10](#how-to-track-empty-directory)

[VIEWING A COMMIT	11](#viewing-a-commit)

[VIEWING COMMIT ANCESTRY	11](#viewing-commit-ancestry)

[VIEWING THE COMMIT LOG	11](#viewing-the-commit-log)

[VIEWING THE COMMIT LOG WITH FILTERS	12](#viewing-the-commit-log-with-filters)

[VIEWING THE COMMIT LOG WITH FORMATTING	12](#viewing-the-commit-log-with-formatting)

[MISC	13](#misc)

[TREE-ISH	13](#tree-ish)

[CREATE BRANCHES	13](#create-branches)

[VIEWING THE HEAD	13](#viewing-the-head)

[SWITCH BRANCHES	14](#switch-branches)

[COMPARE BRANCHES	14](#compare-branches)

[RENAME BRANCHES	14](#rename-branches)

[DELETE BRANCHES	14](#delete-branches)

[RESET BRANCHES	15](#reset-branches)

[MERGE BRANCHES	15](#merge-branches)

[MERGE CONFLICTS	15](#merge-conflicts)

[STASH CHANGES	16](#stash-changes)

[SET UP A REMOTE	17](#set-up-a-remote)

[Add (push) a remote repository to local: git remote add origin \<URL\>	17](#add-\(push\)-a-remote-repository-to-local:-git-remote-add-origin-\<url\>)

[COLLABORATE WITH A REMOTE	17](#collaborate-with-a-remote)

[A ROUTINE	18](#a-routine)

[GIT ESSENTIAL TRAINING: THE BASICS	19](#git-essential-training:-the-basics)

[GIT: BRANCHES, MERGES, AND REMOTES	39](#git:-branches,-merges,-and-remotes)

[MISC GIT	46](#misc-git)

[Cheatsheet	48](#cheatsheet)

## 

# WTF IS GIT {#wtf-is-git}

## 

GIT is version control software useful for tracking changes in files and directories over time. 

The word GIT does not really mean anything in particular, according to the inventor. 

## **INTERFACING WITH GIT** {#interfacing-with-git}

## In Shells

GIT does not have a GUI therefore it is utilized via CLI.  

Third party GUI’s exist but they are not very useful as of writing. 

GIT is usually factory installed on unix-like machines such as Mac and Linux. 

It can be installed on most any machine and is accessed in various CLI shells.

**NOTE: git branches are not seen in Finder (que una lastima)**

**NOTE: directories that are git repos are seen in Finder but indistinguishable** 

### The GH CLI

GIT is only local. However, it is often used with GitHub. 

GitHub is storage place in the cloud for repositories. 

There are others besides GitHub for example GitLab. 

Usually a local repo is mirrored in the cloud for the purpose of collaboration. 

GitHub offers a program that one can download on their local machine that provides an extension to the users local machine shell so they can use command line commands to complete tasks on GitHub instead of using the browser. 

This is call GitHub CLI and requires download and learning the commands. 

## **GIT IS DISTRIBUTED VCS** {#git-is-distributed-vcs}

## 

GIT can be used locally only, for example a project for a single user, only on their machine.  

GIT can be used in a distributed manner with a server/cloud (aka remote) repository and/or  many client/local repositories that mirror the remote repository in a peer to peer manner.  

This is a bit different from a client/server approach of centralized VCS because each user has a working copy and the full change history. 

GIT uses parallel branches running on different computers to allow for collaborative development of source code during software development. 

## 

## **GIT SYNTAX** {#git-syntax}

## 

The basic Git syntax is program | utility | flag | argument or destination

* git add . is read as git | add | . the period represents everything in the current directory;  
    
* git commit \-m "message" is read as git | commit | \-m | "message";   
    
* git status is read as git | status;

**NOTE: The flag, like in other unix commands, is not always needed.** 

**NOTE: When no destination is specified it uses the current directory.**  

	

## **GIT TERMINOLOGY** {#git-terminology}

### 

### GENERAL {#general}

## 

REPO: short for Repository 

REPOSITORY: a place where things are stored

### VOLATILE DIRECTORIES {#volatile-directories}

WORKING: short for The Working Directory

STAGING: short for The Staging Index

STASH: an area to temporarily store changes without committing

### HISTORY {#history}

### 

### 

COMMIT: short for The Commit Tree

COMMIT TREE: essentially a timeline of branches and committed changes

HEAD: 

### BRANCHES {#branches}

*MAIN BRANCH: the timeline of changes following the main project version \- this is usually the live aka production environment version*

*DEV BRANCH:* 

*FEATURE BRANCH: the timeline of changes following NOT the main aka production project version and NOT the development version but a version for a specific feature one is working on. Usually when a feature is finished and tested the feature branch gets merged into the dev branch. The changes are then tested again and when it is ready, the dev branch is then merged in to the main aka production branch.* 

*ORIGIN:*

### DISTRIBUTED COLLABORATIVE WORKING {#distributed-collaborative-working}

*REMOTE: the repo on GitHub (in the cloud)*

*LOCAL: the repo on your machine*

### ACTIONS {#actions}

*TRACKING: git records deltas (changes)*

*ADDING:*

*COMMITTING:* 

*CLONING: creates repo copy on local machine but changes do not automatically link*

*BRANCHING: only keeps track of the deltas (the deltas are the changes)*

*CHECKING OUT: There is always a branch checked out (main is default, used to be master). This is the branch you are currently working in.*  

*MERGING: Bringing in the changes from another branch and check for conflicting changes (git merge \<branchname\>)*

*PUSHING: to send committed changes from the local repo to the remote repo (git push)*

*PULLING: to send committed changes from a remote repo to the local repo (git pull) or to merge branch changes from one remote repo to another remote repo (github pull request)*

*FORKING: makes a copy of the whole repository on GitHub*

### GIT LIGHTNING BOLT SYMBOL {#git-lightning-bolt-symbol}

***NOTE: the lightning bolt may need the command “git status” to show if terminal is stale***

#  TASK: PRACTICE GIT {#task:-practice-git}

## 

## DO I HAVE GIT? {#do-i-have-git?}

**Check if I have git:** which git

**Check which version of git I have:** git –version

### CONFIGURATION {#configuration}

### 

**Edit configuration:** git config OR WITH –system OR WITH –global  
*NOTE: if no flag/argument this enters the config of project scope*

**Define author name for all commits in current repo:** git config user.name \<name\>  
*NOTE: Devs commonly use \--global flag to set config options for current user.*

**To look at the config file use the following:** cat .git/config

### SET DEFAULT TO MAIN {#set-default-to-main}

**If you haven’t already, set your local default git branch to main:**   
git config \--global init.defaultBranch main

### CONFIGURE COMMAND PROMPT {#configure-command-prompt}

### 

**Check if you have git-prompt:** \_\_git\_ps1 (bash)  
*NOTE: This is complicated but provides customization of the prompt*  
*NOTE: Might be different for ZSH*

### GIT HELP {#git-help}

**Open git help:** git help

**Open git help \-a:** git help \-a

**Open git help \-g:** git help \-g

**Open git help \<command\>:** git help \<command\>

**Open git help \<concept\>:** git help \<concept\>

**Open git help git:** git help git

**Read about git:**

### GIT COMMANDS CAN BE DIVIDED INTO TWO CATEGORIES {#git-commands-can-be-divided-into-two-categories}

HIGH-LEVEL (PORCELAIN)

LOW LEVEL (PLUMBING)

### 

### VIEW LIST OF ALL GIT REPOS ON A MACHINE {#view-list-of-all-git-repos-on-a-machine}

### 

**VIEW ALL .GIT FOLDERS:** find \~ \-name .git

**SHOW HIDDEN FILES IN FINDER:** Cmd \+ Shift \+ .

**SHOW HIDDEN FILES IN TERMINAL:** ls \-a

### BASIC WORKFLOW {#basic-workflow}

**Create empty Git repo in specified directory:** git init \<directory\>  
*NOTE: Run with no arguments to initialize the current directory as a git repository*

**Stage all changes in \<directory\> for the next commit:** git add \<directory\>  
*NOTE: Replace \<directory\> with a \<file\> to change a specific file or use git add .*

**Commit the staged snapshot:** git commit \-m “\<message\>”  
*NOTE: instead of launching a text editor, use \<message\> as the commit message*

### STATUS AND DIFF {#status-and-diff}

**List which files are staged, unstaged, and untracked:** git status  
*NOTE: can show changes to WD (displayed in red)*

**Show unstaged changes between your staging index (?) and working directory:** git diff

### DISCARDING CHANGES WITH RESTORE {#discarding-changes-with-restore}

**Discard changes in working directory:** git restore

**Discard changes in staging directory:** git restore –staged

### UNSTAGE WITH RESET {#unstage-with-reset}

### 

### **Unstage changes from staging directory:** git reset HEAD \<file\> {#unstage-changes-from-staging-directory:-git-reset-head-<file>}

### 

### 

### AMEND THE MOST RECENT COMMIT {#amend-the-most-recent-commit}

### 

git commit –amend \-m “message”

### 

### UNDO CHANGES  {#undo-changes}

### 

***EDITS WHICH UNDO SHOULD BE NEW COMMITS\!\!\!***

### RETRIEVE OLD VERSIONS {#retrieve-old-versions}

### 

**Get the previous file from a commit:** git checkout \<sha\> \<file\>

### REVERT A COMMIT {#revert-a-commit}

### 

**Revert:** git revert \<sha\> 

### REMOVE AND TRASH UNTRACKED FILES {#remove-and-trash-untracked-files}

### 

**See what files would be removed:** git clean \-n

**See interactive steps:** git clean \-i

**Removes and trashes files:** git clean \-f

### IGNORE (NOT TRACK) FILES {#ignore-(not-track)-files}

### 

### **Create .gitignore:** touch .gitignore {#create-.gitignore:-touch-.gitignore}

*NOTE: You need to make a .gitnore file in the root main*  
*NOTE: You need to add the files to ignore to the list in the .gitignore (many ways)*

### HOW TO TRACK EMPTY DIRECTORY {#how-to-track-empty-directory}

### 

**Create .gitkeep:** touch .gitkeep  
*NOTE: Git does NOT track empty directories (it won’t show them in git status)*  
*NOTE: This is an invisible dot file with the convention of naming it .gitkeep so dir not empty*

### VIEWING A COMMIT {#viewing-a-commit}

**View the most recent commit:** git show

**View any commit:** git show \<sha\> 

**Reference a commit using HEAD:** git show HEAD

**Reference a commit using SHA:** git show \<SHA\>

### VIEWING COMMIT ANCESTRY {#viewing-commit-ancestry}

**Show parent commit:** git show HEAD^ or git show HEAD\~1 

**Show grandparent commit:** git show HEAD^^ or git show HEAD\~2 

**Show great grandparent commit:** git show HEAD^^^ or git show HEAD\~3

### 

### VIEWING THE COMMIT LOG {#viewing-the-commit-log}

**Display the entire commit history using the default format:** git log  
*NOTE: For customization see additional options.*

**Learn about further options for log:** git help log 

**Examine git log and practice navigation:** git log   
f to go forward   
b to go backward  
q to quite out of it

### VIEWING THE COMMIT LOG WITH FILTERS {#viewing-the-commit-log-with-filters}

### 

**Filter a git log of only 3 commits:** git log \-3 (git log \-n3)(?)

**Filter a git log by time:** git log 

\-–since=2019-01-01 (--after=2019-01-01 also works for this)

\-–until=2019-01-01 (--before=2019-01-01 also works for this)

These are by absolute date. Can use relative dates \- ie 2.weeks

**Filter a git log by author:** git log –author=”Scott”

**Filter a git log by string:** git log –grep=”Initial”   
*NOTE: Grep means globally search for regular expressions.*

**Filter a git log by range:** git log \<SHA\>..\<SHA\>

**Filter a git log by changes to a file or directory:** git log \<filename\> or \<directory\>

**Look at the change set from one condition to another:** git log \-p

**Look at the statistics of the changes from one condition to another:** git log –stat

### VIEWING THE COMMIT LOG WITH FORMATTING {#viewing-the-commit-log-with-formatting}

**Change the format of the info displayed in git log:** git log –format=

		oneline   
		short   
		medium (default)  
		full   
		fuller   
		email  
		raw

**Change the format of the info displayed in git log oneline have SHA:** git log –online

**Change the format of the info displayed in git log to a graph:** git log –graph

**Change the format in git log to a graph further still:** git log –graph –all –oneline –decorate

### MISC {#misc}

git commit \-a \-m “type a message”

git diff –staged (can also git diff –cached it is the same)

git checkout – filename.txt   

git mv filename.txt NEWFOLDER/filename.txt

### TREE-ISH {#tree-ish}

NOTE: A Tree-ish is a directory, commit, or reference.   
NOTE: In ls-tree a “tree” is a directory and a “blob” are files (binary large object)

**Use git help to understand ls-tree better:** git help ls-tree

**List the contents of a tree object:** git ls-tree \<treesish\> 

**Specify a path after the tree-ish:** git ls-tree HEAD \<path\>

### CREATE BRANCHES {#create-branches}

**Show a list of branches \- \* indicates currently checkout branch:** git branch

**Create a branch:** git branch \<branch\_name\>

### VIEWING THE HEAD {#viewing-the-head}

**Look where the HEAD is pointing:** cat .git/HEAD

**Look in the directory that has the references:** ls \-la .git/refs/heads/

**Look in the content that has the references:** ls \-la .git/refs/heads/main

### SWITCH BRANCHES {#switch-branches}

### 

**Switch to a branch:** git checkout \<branchname\>

**Create a new branch and switch to it:** git checkout \-b \<newbranchname\>

**Stashing uncommitted changes:**  
*NOTE: Use to switch to a branch with Uncommited Changes*  
*NOTE: You cannot switch if changes in working are conflict*

### COMPARE BRANCHES {#compare-branches}

### 

**Compare two branches:** git diff \<branchname\>..\<branchname\>

**Compare two branches with color:** git diff –color-words \<branchname\>..\<branchname\>

**See what branches commits are merged into a branch:** git branch –merged

### RENAME BRANCHES {#rename-branches}

### 

**Rename branch:** git branch \-m \[\<oldbranchname\>\] \<newbranchname\>

### DELETE BRANCHES {#delete-branches}

### 

**Delete branch:** git branch \-d \<branchname\>  
*NOTE: You cannot be on the branch you want to delete.*  
*NOTE: You will be prompted to use \-D if there are commits that are not yet merged.* 

### RESET BRANCHES {#reset-branches}

### 

**Soft reset branch:** git reset \--soft \<tree-ish\>  
*NOTE: Moves HEAD to specified commit*  
*NOTE: Does NOT change staging index*   
*NOTE: Does NOT change working directory* 

**Mixed reset branch:** git reset \--mixed \<tree-ish\>  
*NOTE: Moves HEAD to specified commit*  
*NOTE: Change staging index*   
*NOTE: Does NOT change working directory*  
*NOTE: This is the default choice: git reset \<tree-ish\> is a mixed reset*

**Hard reset branch:** git reset \--hard \<tree-ish\>  
*NOTE: Moves HEAD to specified commit*  
*NOTE: Change staging index*   
*NOTE: Changes working directory*

### MERGE BRANCHES {#merge-branches}

### 

**Merge branch:** git merge  \<branchToBringIn\>  
*NOTE: Do this while in the receiving branch*  
*NOTE: There is a difference between fast-forward merge and true merge*

**To see a merged branch:** git branch –merged   
*NOTE: Have a clean WD before doing merges*

### 

### MERGE CONFLICTS {#merge-conflicts}

**Abort merge branch:** git merge –abort   
*NOTE: If there are conflicts and you don’t want to fix them*

**Resolve conflicts manually:** use merge conflict indicators in file:  
*NOTE: Be sure to erase the indicators*

*\<\<\<\<\<\<HEAD*  
*Content in current branch*  
*\===========*  
*Content in other branch version*  
*\>\>\>\>\>\>\>\<other branch\>*

**Compare differences:** git diff –color-words main..text edits OR git show –color-words

**Use mergetool:** git help mergetool  
*NOTE: There are GUIs for this*

### STASH CHANGES {#stash-changes}

### 

**Stash uncommitted changes:** git stash save \<nameForStash\>  
*NOTE: Does not include untracked files unless you use \-u flag*

**View list of stashed uncommitted changes:** git stash list

**View a stash of uncommitted changes:** git stash show \-p \<stash@(num)\>

**Retrieve most recent stashed uncommitted changes:** git stash pop  
*NOTE: Can use this on any branch but be sure you are in the branch you want*  
*NOTE: This deletes this particular stash \- to not delete stash use git stash apply*  
*NOTE: If there are conflicts they will have to be resolved just like in a merge*

**Retrieve a specific stashed uncommitted changes:** git stash pop \<stash@(num)\>  
*NOTE: Can use this on any branch but be sure you are in the branch you want*  
*NOTE: This deletes this particular stash \- to not delete stash use git stash apply*  
*NOTE: If there are conflicts they will have to be resolved just like in a merge*

**Clear a specific stashed uncommitted changes:** git stash drop \<stash@(num)\>

**Clear all stashed uncommitted changes:** git stash clear

### SET UP A REMOTE {#set-up-a-remote}

### 

**View remote gits on local machine:** git remote

**View remote gits on local machine with more info:** git remote \-v  
*NOTE: The fetch and pull are listed separate but are actually the same origin*

### **Add (push) a remote repository to local:** git remote add origin \<URL\> {#add-(push)-a-remote-repository-to-local:-git-remote-add-origin-<url>}

*NOTE: Origin is naming convention for a local branch that references the remote server branch and always tries to stay in sync with that remote branch and is created by git when push to remote. It is separate from main and will need to be merged with local main when changes are fetched from remote server.* 

**Delete a remote branch:** git remote rm origin

**Create/push a (to) remote branch:** git push \-u origin \<branchname\>  
*NOTE: The \-u tells it to track the branch*

**Clone (download) remote repo onto local machine:**  git clone \<repo url\>  
*NOTE: Original repo can be on the local filesystem or on a remote machine via HTTP or SSH.*

**Track remote branches:** git branch \-u \<upstream\>/branchname branchname

### 

### COLLABORATE WITH A REMOTE {#collaborate-with-a-remote}

### 

### 

**Push changes to a remote:**  git push (include origin main if not tracking)

**Fetch changes from a remote:**  git fetch   
*NOTE: Fetch often: first thing of day, before push, last thing of day*

**Merge in fetched changes:**  git merge origin/main  
*NOTE: Fetch then merge.*   
*NOTE: This is merging origin/main with main (both local)*  
*NOTE: git pull does the fetch and the merge in same command*

**Checkout remote branches:**  git branch \<branchname\> \<target\>

**Push to an updated remote branch:**   
*NOTE: If you try to do a push and git rejects it then you need to do a fetch merge then push*

**Delete a remote branches:**  git push origin :\<branch\> OR git push origin –delete \<branch\>  
*NOTE: First way is old school*  
*NOTE: The colon tells to delete…*  
*NOTE: Removes a branch from remote repository*  
*NOTE: Useful when a feature branch is completed and merged*

**Add collaborators:** do this in GitHub  

**Become a collabor:**  do this in GitHub (make a fork)

**Collaboration Workflow:**    
*NOTE:*

### A ROUTINE {#a-routine}

**Open Chrome from Terminal:** open \-a “Chrome”

**Navigate to GitHub and log in** 

**Click \+ in upper right to create a new repository**

**Give the repository the name:** GitHub\_Practice\_(date)

**Click Create Repository**

**Clone the repository to your local machine using SSH and copying the URL**

**Go back to Terminal** 

**Select the directory you wish to put the clone in**

**Clone the repo:** git clone **(**pasted URL)

**Display the directory:** ls

**Move to the repo:** cd (repo)

**Display the remote URL:** git remote \-v

**Create a new file in the repo:** touch hello\_world.txt

**Check status:** git status

**Add file to staging:** git add hello\_world.txt

**Check status:** git status

**Commit the file:** git commit \-m “Add hello\_world.txt”

**Check status:** git status

**Check log:** git log  
    
**Escape the git log:** q

**Navigate to the file in Finder**

**For more practice visit:** [https://www.theodinproject.com/lessons/foundations-git-basics](https://www.theodinproject.com/lessons/foundations-git-basics)

### 

# GIT ESSENTIAL TRAINING: THE BASICS {#git-essential-training:-the-basics}

1. **What is Git?**

**Version Control**

Different versions of files \- file naming

Track changes

History ie in PHotoshop

Contributed changes and rolling back ie Wikis

Undo

**History of git**

5 previous version control

**Source Code Control System SCCS \-** 

1972  
Closed source  
free with Unix  
Stored original version and sets of changes

**Revision Control System RCS \-** 

1982  
Open source  
Improvements in speed and usability  
Stored latest version and sets of changes

Problem with SCCS and RCS you could only work with one file

**Concurrent Versions System CVS**

1986 \- 1990: open source  
Multiple files, entire project  
Multi-user repositories  
The concurrent usage was very good improvement

**Apache Subversion SVN**

2000: open source  
Track text and images  
Track file changes collectively

**BitKeeper SCM** 

2000: closed source  
Proprietary  
Distributed version control  
Community version was free  
Used for source code fo the Linux kernel from 2002 to 2005  
Controversial to use proprietary SCM for an open source  
April 2005 Community version stopped being free

Robert Kennedy says also look at Perforce

**Git is Born**

April 2005  
Created by Linus Torvalds (he also created Linux)  
Replacement for BitKeeper to manage Linux kernel source code

Distributed version control  
Open source and free software  
Compatible with Linux mac and windows  
Faster than other SCMs by a large margin  
Better safeguards against data corruption

Explosion in popularity

**Distributed Version Control**

The systems in the past used Central Code Repository Model \- one central place used to store the master copy and people check out a copy but it is up to users to keep up to date with what is happening

Git uses Distributed Version Control

Different users maintain their own repositories   
No central repository  
Changes are stored as change sets or patches  
We track changes not versions  
Different from CVS and SVN  
Change sets can be exchanged between repositories  
Merge in change sets or apply pathes

No single master repository   
Many working copies  
Each with their own combination of change sets

Imagine changes to a document as sets A B C D E F 

Repo 1: A B C D E F

Repo 2: A B C D

Repo 3: A B C E 

Repo 4: A B E F

None is right or wrong they are just different

There is no master

But by convention we do designate a Master

But this is not innate to git

Because distributed there is no need to communicate with a central server  
Faster  
No network access required  
No single failure point  
Encourages participation and forking of projects  
Developers can work independently   
Submit change sets for inclusion or rejection

2. **Install Git**

**Install Git on Mac**

Mac comes with a pre installed version of Git

But we want to install our own version that we have control over

The two versions can coexist

Two ways to install

	Git installer \- [https://git-scm.com/download/mac](https://git-scm.com/download/mac)

Control click the package to bypass the apple security warning

	Homebrew \- brew install git

Check if you have git

Terminal: which git

Terminal:  git –version

**Basic Git configuration**

There are three places git stores configuration information

**System** \- apply to every user by default

	Location: /etc/gitconfig  
	Edit Command: git config –system

**User** \- apply only to a single user

	Location: \~/.gitconfig  
	Edit Command: git config –global

**Project** \- apply only to a single project

	Locaiton: my\_project/.git/config  
	Edit Command: git config

**Git auto-completion**

[https://github.com/git/git](https://github.com/git/git)

Contrib folder   
	Completion folder  
		Pick the file for your shell  
			Open it and follow the instructions

**Git help**

Terminal: git help

OR 

Terminal: man git-log

3. **Getting Started**

**Initialize a Repository**

1. Create a project directory (folder)  
2. Navigate to it in terminal   
3. Be sure you are inside the directory  
4. Terminal: git init 

The git repository is initialized and the directory will be appended with .git which is the files that don’t show up that involve it being a git repo. 

To see the .git directory use ls \-la

The invisible git directory is where git is going to do all it’s tracking

**Where Git files are stored**

The .git files in an initialized git repo (directory) can be seen by using the following

Terminal: ls \-la .git

These files are what git uses to do all it’s tracking

You won’t need to deal with any of those except maybe the config file

To look at the config file use the following Terminal: cat .git/config

You will see it contains project configuration settings

IF YOU REMOVE THE .GIT DIRECTORY YOU WILL LOSE THE TRACKING OF GIT

THE .GIT DIRECTORY IS THE TRACKING

**Your first commit**

Make Changes

Create and save a new file in the directory that is a git repo

Add the Changes

Go to the directory in terminal. Use pwd to print current working directory and cd to change directory. 

Terminal: git add . 

This is adding all changes in the current directory because the . means to do all to current directory. But we are not yet tracking the changes. 

Commit the Changes and include a message about it

Terminal: git commit \-m “my message”

**Write Commit Messages**

Describe what is in the changes. 

Best practices:

- Less than 50 characters  
- Optionally followed by a blank line and a more complete description  
- Keep each line less than 72 characters   
- Write commit messages in present tense, not past tense

  “Fixes a bug” better than “fixed a bug”


- Bullet points are usually asterisks or hyphens  
- Can add “tracking numbers”  ie from a support request  
- Can develop shorthand for your organization  
- Be clear and descriptive

  “Fixed Typo” too generic




**View the commit log**

Make sure you are inside your git project

Terminal: git log

The log displays. Each commit has: 

- a system generated unique ID   
- Author  
- Date  
- Message

The log is displayed most recent first. 

Terminal: git help log   
For further options of log

Terminal: git log \-n5  
Limits the amount of logs to display

Terminal: git log –since=2020-01-01  
Terminal: git log –until=2020-01-01  
Terminal: git log –auther=”Scott Feichter”

Terminal: git log –grep=”Init”   
Grep means globally search for regular expressions

git diff and git diff –color-words

4. **Git Concepts and Architecture** 

**The three trees**

Two Tree Architecture

Repository

Working Copy

- Checkout to the working Copy and Commit to the Repository

Git uses Three Tree Architecture

Repository

Staging Index

Working

- git add file.txt from Working to Staging Index   
- git commit file.txt from Staging Index to Repository

**Git Workflow**

Have to watch the video

The changes are tracked and given a unique ID

**Hash Values (SHA-1)**

Git generates a checksum for each change set

Checksum algorithms convert data into a simple number  
Same data always equals same checksum

Data integrity is fundamentally built in to Git

The label that git uses for each snapshot of changes is tied to what is in the changes

When you change the information the label or hash value changes

Git uses SHA-1 hash algorithm to create checksums

It is a 40-character hexadecimal string (0-9, a-f)

Example: 5c15e8bd540c113cd2d9eac6f64cacbc5ff6fe9c

It also uses the metadata in the commit message (SHA Value) and this links every new change with previous changes and links them together giving a nice chain of data integrity 

**Head Pointer**

Git maintains a reference variable called HEAD

It is called a pointer because it points to a specific commit in a repo

Pointer to tip of current branch in repository

Last state of repository, what was last check out

Points to parent of next commit where writing commits takes place

5. **Make Changes to Files**

**Add Files**

git status

git add .   
git add file.txt

git commit \-m “message”

git log

YOU MUST ADD A FILE TO TRACKING VIA GIT ADD OR ELSE NOTHING IS BEING TRACKED

**Edit Files**

THE FILE MUST BE SAVED FOR GIT TO DETECT CHANGES

git status

git add .   
git add file.txt

git commit \-m “message”

git log

**View Changes with Diff**

git diff 

This calls the diff program that will show us info about the changes in a file  
We can look at the changes and compare to the new 

Can jump to the changes

THE DIFF PROGRAM IS ACTUALLY A COMMON UNIX PROGRAM THAT WE CAN USE IN GIT \- IT SHOWS CHANGES TO A FILE IN COMMON FORMAT

Compares the files:

**\--- a/first file.txt**      
**\+++ b/first file.txt** 

file a is the file version in the repository  
file b is the file version in the working directory

\- is telling us that there are deletions  
\+ is telling us that there have been additions that DID happen in this file

It will only show the changes not the entire file

**View only staged changes**

git status

git add filename.txt

git diff

NOTE: git diff by default compares WORKING DIR to STAGED

git diff –staged (can also git diff –cached it is the same)

Now we will see the differences between REPO and STAGED (aka cached)

**Delete Files**

If you create a file in your directory that is a repo it is not yet tracked. Therefore if you delete it it is just gone. They were only in the working dir. 

git add . 

git commit –m “message”

2 Techniques to Delete File

1\.

Move the file to the trash (move it outside the project)

git status will tell us that the file is deleted from working dir

We need to tell git to add this change via git add then git commit

2\. 

We can tell git to remove the file

git rm filename.txt

This is a Unix remove command. The file is not in the project and it does not go to the trash. It is permanently removed, however it is still in the repo if we need to get it back. 

git status tells us that git rm has already moved it to staging 

Only thing left to do is git commit 

**Move and Rename Files**

2 Techniques to Rename File

1\.

Change filename in Finder

git status will tell us that the file is deleted from working dir and there is a new file \- it is as if there are two separate events

We need to tell git to add these changes via git add newfilename.txt then git rm originalfilename.txt

then git status will tell us the change made is renamed

then we must commit

2\. 

MOVING A FILE AND RENAMING A FILE ARE THE SAME THING

git mv oldfilename.txt newfilename.txt

git status shows that we renamed

then we must commit

2 Techniques to Move File

1\.

Change filePATH in Finder

git status will tell us that the file is deleted from working dir and there is a new file \- it is as if there are two separate events

We need to tell git to add these changes via git add 

then we must commit

2\. 

MOVING A FILE AND RENAMING A FILE ARE THE SAME THING

git mv filename.txt NEWFOLDER/filename.txt

git status shows that we MOVED

then we must commit

6. **USE GIT WITH A REAL PROJECT**

**Explore California website**

Download the sample files

**Initialize Git**

git init  
git add .  
git commit \-m “Initial Commit”

**View File Edits**

We made some edits in the Atom IDE

Viewed the changes with git diff and git diff –color-words  
We used f and b to navigate forward and back through the changes  
**\-S** to toggle between wrapping or trailing the lines

**Stage and Commit Shortcut**

Short to stage and commit changes

git commit \-a \-m “type a message”

  //this stages and commits all changes to tracked files (will not add new files for tracking)

**View a commit**

git show 9db334281c828c6d5e18ac72f54942f0237ce304

This will bring up a git diff for a previous commit

**Compare commits**

git diff a81daf7a39eab540a6673bb8f1ffa57682feab6c..d1a5fc3eccd9efad9603d3cff741ce63c604a014

Compares two different change sets

**Multiline commit messages**

git commit \-a 

When we do this with no \-m and message we are prompted to make the message in the Atom IDE \- here we can make multiline messages

**Make atomic commits**

* Small commits  
* Only affect a single aspect and related to one thing  
* Easier to understand, to work with, and to find bugs  
* Improves collaboration

**Challenge: Client edits**

Git 

**Solution: Client edits**

Git 

7. **UNDO CHANGES**

**Undo Working Directory Changes**

git knows what the changes are because it is tracking the changes

We can use git diff to see the changes

git status will tell us we can use git checkout  – to discard changes in working directory

git restore vs git checkout 

	This is not in the video but should be useful to know. Git restore seems to turn off any      autosave in an application you are working in and revert the changes to the previous. 

git checkout – filename.txt   

	This checks out the file as if we are checking out a book from the library

MY QUESTION \- CAN WE RE RESTORE THE CHANGES WE DECIDED WE DONT’ WANT AND DISCARDED BUT THEN DECIDED WE WANT THEM BACK? WHERE DOES THE NEW VERSION GO?

**Unstage Files**

Undoing staging actions means to unstage them

git reset HEAD filename.txt

	This unstages the file

**Amend commits**

git doesn’t want you to change previous commits because it would break the hash chain history

The exception is the most recent commit; the place where the HEAD is located

git commit –amend 

	This takes whatever is in staging and combines it with the previous commit and      generates a new Sha 

**Retrieve old versions**

git only allows amending the most recent commit

Edits which undo changes should be new commits

May be helpful to retrieve an old version of a file

git show ShaValue

git log

git checkout ShaValue – filename.txt

**Revert a commit**

git revert Sha

**Remove untracked files**

**By untracked files we mean  files in the working directory created but not yet in staging.** 

git clean 

	You will be asked for a flag

git clean \-i  
	i for interactive \- it walks you through the steps

git clean \-n  
	n this is like a dry run and shows what would happen

git clean \-f  
	f forces it to clean the files

8. **Ignore Files**

**Use .gitignore files**

Create a .gitignore  
List of rules to determine which files to ignore  
Changes made to ignored files will be ignored by git

To have a file ignored you can put the name of the file in .gitignore

Or you can do filename pattern matching (basic regular expressions)  
\*  
?  
\[aeiou\]   
\[0-9\] 

Or negative expressions  
\!

To ignore all files in a directory with a trailing slash   
	assets/videos/

Comments in the .gitignore file  
	\#This is a comment

Blank lines in gitignore file are skipped

**Ideas on what to ignore**

Compiled source code  
Packages and copmpressed files  
Logs and databases  
Operating system generated files  
User-uploaded assets (images, PDFs, videos)

There are templates for .gitignore pre configured files

**Globally ignore files**

Ignore files in all repositories \- need to set ignore file globally  
Settings are not tracked in repository but become user specific

git config –global core.excludesfile \~/.gitignore\_global

**Ignore tracked files**

Files that are already being tracked will not become ignored if they already exist and are tracked when the ignore file is created

To tell it to start ignoring a file that it has been tracking:  
	We could remove the file from the project  
	But we really want to just remove it from the staging index  
	  
This is becoming spaghetti in my brain

**Track empty directories**

Git ignores directories that do not have any files

Make a .gitkeep file in a directory to show git this is not empty  
Add and commit 

# GIT: BRANCHES, MERGES, AND REMOTES {#git:-branches,-merges,-and-remotes}

1. **Navigate the Commit Tree**

**Reference Commits**

Tree-sih \- 

A directory containing files and other directories (which Git calls “trees”) or any identifier which references a tree. 

A commit is considered tree-sih because it refers to a tree at the point when a commit has been applied. 

The following can be tree-ish:

* SHA-1 hash  
* HEAD pointer reference  
* Branch reference  
* Tag reference  
* Ancestry

SHA-1 hash \- the identifier for a commit

* Complete 40-character string  
* Minimum 4 characters  
* Unambiguours: 8-10 characters  
* Example: git show de14621f

HEAD Pointer \- reference to the tip of the current branch, usually the latest commit

* .git/HEAD has files that keeps track of HEAD  
* .git/refs/heads/master may be where the previous file points to  
* Eventually something shows git a SHA of the HEAD  
* Example: git show HEAD

**Ancestory**

Most commits will have parent commit, grandparent commit etc. and perhaps children commits..

To refer to the parent commit add a carrot symbol after the commit:

* de14621f ^  
* HEAD^  
* master^  
* Example: git show HEAD^

You can also use the tilde \~

* git show HEAD\~1

To refer to the grandparent commit add two carrot symbols after the commit

* de14621f ^^  
* HEAD^^  
* master^^  
* Example: git show HEAD^^

You can also use the tilde \~

* git show HEAD\~2

To refer to the great grandparent commit add three carrot symbols after the commit

* de14621f ^^^  
* HEAD^^^  
* master^^^  
* Example: git show HEAD^^^

You can also use the tilde \~

* git show HEAD\~3

ETC…

**Tree Listings**

A tree in git is just a directory

**To get help with this topic:** git help ls-tree

**List the contents of a tree object:** git ls-tree \<tree-ish\> 

Example: git ls-tree HEAD

The list displayed is the directory/file list at the time of the tree-ish commit

blob \- files (binary large object)  
tree \- directory

**Specify a path after the tree-ish:** git ls-tree HEAD \<path\>

**Use git help to understand ls-tree better:** git help ls-tree

ls-tree is a good way to examine a directory state at a particular time

**Filter the commit log**

git log will be one of the commands used most often 

We can filter this information for better viewability

**Examine git log and practice navigation:** git log   
f to go forward   
b to go backwar  
q to quite out of it

**Filter a git log of only 3 commits:** git log \-3

**Filter a git log by time:** git log 

\-–since=2019-01-01 (--after=2019-01-01 also works for this)

\-–until=2019-01-01 (--before=2019-01-01 also works for this)

These are by absolute date. Can use relative dates \- ie 2.weeks

**Filter a git log by author:** git log –author=”Scott”

**Filter a git log by string:** git log –grep=”Initial” 

**Filter a git log by range:** git log \<SHA\>..\<SHA\>

**Filter a git log by changes to a file or directory:** git log \<filename\> or \<directory\>

**Format the commit log**

**Look at the change set from one condition to another:** git log \-p

**Look at the statistics of the changes from one condition to another:** git log –stat

**Change the format of the info displayed in git log:** git log –format=

		oneline   
		short   
		medium (default)  
		full   
		fuller   
		email  
		raw

**Change the format of the info displayed in git log oneline have SHA:** git log –online

**Change the format of the info displayed in git log to a graph:** git log –graph

**Change the format in git log to a graph further still:** git log –graph –all –oneline –decorate

2. **Branching**

**Branching Overview**

Branches are cheap, easy to create, don’t take a lot of power or storage, and are easy to delete

Try new ideas

Isolate features or sections of work

Even if we create branches there will still be ONE WORKING DIRECTORY

Fast context switching

Git swaps out the files to match the branch to the current working directory

REMEMBER: HEAD pointer is showing us the last commit, or tip of the current branch

When we create a new branch HEAD is on the Master until we make a new commit in the new branch that the HEAD moves to tip of the new branch.

When we switch branches the HEAD switches branches also…or there is a HEAD in each branch at the tip

**Create Branches**

**Show a list of branches \- \* indicates currently checkout branch:** git branch

**Create a branch:** git branch \<branch\_name\>

**Look where the HEAD is pointing:** cat .git/HEAD

**Look in the directory that has the references:** ls \-la .git/refs/heads/

**Look in the content that has the references:** ls \-la .git/refs/heads/master

**Switch Branches**

Tree-sih \- 

**Create and Switch Branches**

Tree-sih \- 

**Switch Branches with Uncommited Changes**

Tree-sih \- 

**Compare Branches**

Tree-sih \- 

**Rename Branches**

Tree-sih \- 

**Delete Branches**

Tree-sih \- 

**Configure Command Prompt**

Tree-sih \- 

3. **Reset Branches**

**Reference Commits**

Tree-sih \- 

**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \- 

4. **Merge Branches**

   

**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \- 

5. **Stash Changes**

   

**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \- 

6. **Set Up a Remote**

   

**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \- 

7. **Collaborate with a Remote**

   

**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \-   
**Reference Commits**

Tree-sih \- 

# MISC GIT {#misc-git}

Git takes a snapshot of all files in a repo

Git branch is

If commits are snapshots, then branching is a way to take snapshots of different parallel universes. Then, when you want to combine all of them, you "merge" them back together into the main universe, the "master" branch.

Git wants to keep commits as lightweight as possible though, so it doesn't just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a "delta", from one version of the repository to the next.

Branches in Git are incredibly lightweight as well. They are simply pointers to a specific commit \-- nothing more. This is why many Git enthusiasts chant the mantra:

branch early, and branch often

Because there is no storage / memory overhead with making many branches, it's easier to logically divide up your work than have big beefy branches.

When we start mixing branches and commits, we will see how these two features combine. For now though, just remember that a branch essentially says "I want to include the work of this commit and all parent commits."

Fix conflicts  
Git merge –abort undo and revert  
When auto merging a conflict happened

Git init turns current directory into Git working directory (repo?) they are saying the repo is the hidden directory in there. Then they say a repository is a folder whose contents are tracked by Git. Local repo is on your computer. Remote is on a hosted site such as Github.

Git status  
Git add  
Git commit \-m  
Git status  
Git log

Git checkout \-b \<branchname\> creates new branch

Git checkout \<branchname\> checkouts branch

Git merge \<branchname\> (auto merge current branch and branch passed as argument0

Git rebase (another way to merge but makes things appear sequentially instead of coming from parallel)(in this situation the argument is the branch you want to go in to)

Git add \*.txt will track all files ending with .txt

Git add . (think bout th e. Here. it means directory. As in code . etc.) this is taking a snapshot basically. Then they are staged. 

### 

# [Cheatsheet](https://www.theodinproject.com/lessons/foundations-git-basics#cheatsheet) {#cheatsheet}

This is a reference list of the most commonly used Git commands. (You might consider bookmarking this handy page.) Try to familiarize yourself with the commands so that you can eventually remember them all:

* Commands related to a remote repository:  
  * git clone git@github.com:USER-NAME/REPOSITORY-NAME.git  
  * git push or git push origin main (Both accomplish the same goal in this context)  
* Commands related to the workflow:  
  * git add .  
  * git commit \-m "A message describing what you have done to make this snapshot different"  
* Commands related to checking status or log history  
  * git status  
  * git log  
* 

