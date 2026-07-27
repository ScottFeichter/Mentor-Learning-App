**MAC OS TERMINAL PRACTICE ROUTINE**

*NOTE: you may be able to press fn \+ up or fn \+ down to navigate this doc without a mouse*

[SHELL SCRIPTING	2](#shell-scripting)

[KERNEL, SHELLS, GUI AND CLI	3](#kernel,-shells,-gui-and-cli)

[TERMINALS, CONSOLES, AND TTY	3](#terminals,-consoles,-and-tty)

[WHY USE CLI	3](#why-use-cli)

[ANATOMY OF UNIX COMMANDS	3](#anatomy-of-unix-commands)

[WTF IS $THIS	4](#wtf-is-$this)

[DIRECTORY AND FILE PATHS	4](#directory-and-file-paths)

[WORKING DIRECTORY	4](#working-directory)

[REDIRECTING A COMMAND	5](#redirecting-a-command)

[COMMAND ALIASES	5](#command-aliases)

[BUILT IN DIRECTORY ALIASES	5](#built-in-directory-aliases)

[CREATING CUSTOM COMMAND ALIASES	5](#creating-custom-command-aliases)

[SU, SUDO, AND ELEVATED PERMISSIONS	5](#su,-sudo,-and-elevated-permissions)

[ROOT PRIVILEGES, ROOT USER aka SUPER USER	5](#root-privileges,-root-user-aka-super-user)

[SU vs SUDO	6](#su-vs-sudo)

[SU AND SUDO SYNTAX	6](#su-and-sudo-syntax)

[USING SU AND SUDO	6](#using-su-and-sudo)

[DIFFERENT SHELLS	7](#different-shells)

[CHANGING SHELLS	7](#changing-shells)

[SHELL INTERACTING VS SHELL SCRIPTING	7](#shell-interacting-vs-shell-scripting)

[STREAM FILES	7](#stream-files)

[TXT vs RTF vs DOC vs PDF	7](#txt-vs-rtf-vs-doc-vs-pdf)

[JPG vs GIF vs SVG vs PNG vs TIF	8](#jpg-vs-gif-vs-svg-vs-png-vs-tif)

[HTML, XML, XHTML, SGML, MARKDOWN	8](#html,-xml,-xhtml,-sgml,-markdown)

[.htm	8](#.htm)

[COMMON FILE TYPES AND FORMATS	8](#common-file-types-and-formats)

[USR vs USER	8](#usr-vs-user)

[BIN, USR/BIN, and USR/LOCAL/BIN	8](#bin,-usr/bin,-and-usr/local/bin)

[CLI TEXT AND FILE EDITORS	9](#cli-text-and-file-editors)

[ZSH EFFICIENCY SHORTCUTS	9](#zsh-efficiency-shortcuts)

[COMMON COMMANDS	9](#common-commands)

[TASK: PRACTICE TERMINAL	12](#task:-practice-terminal)

[GENERAL INFO/ DEFINITIONS	24](#general-info/-definitions)

# 

# 

# SHELL SCRIPTING {#shell-scripting}

TYPES OF SHELLS

There are two fundamentally different sets of shell script syntax: the Bourne shell syntax and the C shell syntax. 

The C shell syntax is more comfortable to many C programmers because the syntax is somewhat similar. 

However, the Bourne shell syntax is significantly more flexible and thus more widely used. 

For this reason, this document only covers the Bourne shell syntax.

**Bourne-compatible shells**

* sh  
* bash  
* zsh  
* ksh

**C-shell-compatible shells**

* csh  
* tcsh  
* bcsh (C shell to Bourne shell translator/emulator)

Each dialect of Bourne shell syntax differs slightly.

Many of these shells also have variations denoted by a prefix ie pdksh. 

INTERPRETER LINE

The script starts with ‘\#\!’. These symbols together are called shebang. 

This is known as an interpreter line of the script. 

If you don’t specify an interpreter line, the default is usually the Bourne shell (/bin/sh). 

However, it is best to specify this line anyway for consistency.

# 

# KERNEL, SHELLS, GUI AND CLI  {#kernel,-shells,-gui-and-cli}

**Kernel** \- OS component that provides the core set of OS functions. 

**Shell** \- A computer program that exposes OS services (kernel) to users or other programs. 

**GUI** \- Graphical User Interface \- the “point and click” way to use a shell.

**CLI** \- Command Line Interface \- the “type a command” way to use a shell.

# 

# TERMINALS, CONSOLES, AND TTY {#terminals,-consoles,-and-tty}

**Terminal** \-

**Console** \-

**TTY \-**

# WHY USE CLI {#why-use-cli}

* The real seat of power for a computer is the CLI.   
* Offers more tasks.  
* More specificity for tasks.   
* Tasks can be automated.   
* Work with data more efficiently.

# ANATOMY OF UNIX COMMANDS  {#anatomy-of-unix-commands}

**Utility** \- “ls” is a utility. Often you can run a utility all by itself without flags or arguments. 

**Flag** \- “-l” is a flag. Flags alter how the utility operates. aka Option or Switch. 

**Argument** \- “\~/Desktop” is an argument. What the utility is acting upon. 

**Command** \- “ls \-l \~/Desktop” is a command with a utility, flag, and an argument. 

# 

# 

# 

# WTF IS $THIS  {#wtf-is-$this}

**$THIS** \- Replace $THIS with the actual argument you want to give the computer.  

Anything in capital letters that starts with $ represents a non-specific argument to the utility. 

**For example** if you google how to list the contents of a directory using commands on a Mac…

 …you may get an answer that says use the command: “ls $DIR”

It means that the utility is “ls”. 

$DIR is the argument to the utility. 

In this example the argument is a path to a directory. 

“ls $DIR” can be “ls \~/Desktop” to list the contents of the directory “Desktop”. 

# DIRECTORY AND FILE PATHS {#directory-and-file-paths}

*NOTE: the words “directory” and “folder” mean the same thing in this routine*  
*NOTE: a computer uses the term directory and most humans use the term folder*

**Relative Path** \-

**Absolute Path** \-

# WORKING DIRECTORY {#working-directory}

# REDIRECTING A COMMAND {#redirecting-a-command}

Often referred to as piping, since the | symbol is the command for redirect.  

# COMMAND ALIASES {#command-aliases}

**Aliases** \- shortcuts or abbreviations you create and use in place of longer CLI commands.

**Example:**  command cd /directory/path can be abbreviated with the command docs

# BUILT IN DIRECTORY ALIASES {#built-in-directory-aliases}

**\~** use the tilde symbol to refer to your home directory: cd \~ will take you back there.

# CREATING CUSTOM COMMAND ALIASES {#creating-custom-command-aliases}

Adding aliases requires an update to the \~/.bash\_profile or \~/.zshrc file (profile files). 

Bash must be done manually whereas plugins can be used for zsh. 

open  \~/.bash\_profile  \- this opens the default text editor to edit the profile file

source  \~/.bash\_profile   \- this will apply the changes we saved to the profile file

# SU, SUDO, AND ELEVATED PERMISSIONS {#su,-sudo,-and-elevated-permissions}

For safety, some tasks on a computer require elevated permissions to complete. 

The following utilities are used to elevate permissions for a command:

**su** \- super user

**sudo** \- super user do

# ROOT PRIVILEGES, ROOT USER aka SUPER USER {#root-privileges,-root-user-aka-super-user}

In the linux world the elevated permissions are referred to as root privileges.

The root user (aka super user) is equivalent to the admin user on Windows.

Different linux distros have slight variations on how su and sudo are configured. 

# SU vs SUDO {#su-vs-sudo}

In general, Su switches to the root user account and requires the root password. 

Sudo runs a single command with root privileges. 

There are more nuances to this, depending on what one is trying to achieve. 

# SU AND SUDO SYNTAX {#su-and-sudo-syntax}

When you use su and sudo utilities, you use an entire *command as a single argument.* 

For example:  sudo ls \-l \~/Desktop 

In this example sudo is the utility and ls \-l \~/Desktop is considered an argument. 

This is a bit pedantic though since ls \-l \~/Desktop can be a command on its own. 

# USING SU AND SUDO  {#using-su-and-sudo}

When a sudo command runs it prompts for the admin password. 

As a security measure, the screen does not display anything as you type, not even asterisks. 

If the password is typed in correctly, sudo executes the $CMD with elevated permissions. 

Be careful when using this command\!

The computer has a few built-in safety restraints to prevent normal users from doing bad things, like deleting critical files. The super user has no such restraints. 

Note that the super user is not necessarily bad: you must use sudo to install programs and do anything else that affects how your computer runs.

# DIFFERENT SHELLS {#different-shells}

Similar to how a user may customize the look, feel, and availability of components of their GUI.

Different shells support different features, for example tab autocompletion.

For more info see the [General Info](#bookmark=id.7zvgcq21vxqa) at end of document.  

# CHANGING SHELLS {#changing-shells}

**/bin/bash** \- Changes current Terminal to bash shell but does not change the default

# SHELL INTERACTING VS SHELL SCRIPTING {#shell-interacting-vs-shell-scripting}

# STREAM FILES {#stream-files}

With the exception of the original "library" file system, most of the file systems in the IFS store their objects in the "loosely-defined" file structure that's common in Windows and UNIX environments. 

This type of object is known as a "stream file" because the data in it is thought of as "one continuous stream of bytes." In other words, there's a start of the file, and an end to the file, but nothing else is defined. A program can use this big, long string of bytes for any purpose that it likes.

# TXT vs RTF vs DOC vs PDF {#txt-vs-rtf-vs-doc-vs-pdf}

TXT \- plain text, no formatting (except line breaks and spaces), text only

RTF \- rich text, some formatting, text only

DOC \- aka DOCX, lots of formatting, text and images

PDF \- portable document, complicated documents, hard to edit

# JPG vs GIF vs SVG vs PNG vs TIF {#jpg-vs-gif-vs-svg-vs-png-vs-tif}

# HTML, XML, XHTML, SGML, MARKDOWN {#html,-xml,-xhtml,-sgml,-markdown}

# .htm {#.htm}

# COMMON FILE TYPES AND FORMATS {#common-file-types-and-formats}

Document Files  
Spreadsheet Files  
Presentation Files  
Image Files  
Movie Files  
Audio Files  
Email Files  
Web Files (markup languages)  
Compression Files  
Programming Files (source code)  
Executable Files  
Database Files

# USR vs USER {#usr-vs-user}

usr is NOT the same as user

usr \- user usable programs and data

The Mac usr folder contains a variety of read-only files that apps require to function properly

# BIN, USR/BIN, and USR/LOCAL/BIN {#bin,-usr/bin,-and-usr/local/bin}

**Bin:** This directory contains executable programs which are needed in Single User Mode to bring the system up or repair it. It is an executable program that all users can access and execute. Including super users and general users.

**Usr/bin:** The main location for executable programs is this directory, which is the executable program pre-installed in the system. It will change with the system upgrade. It contains data of most apps used by regular users that aren't installed locally and aren't required for the system to boot or be repaired.

**Usr/local/bin:** This is the default installation location when a user builds and installs an executable application independently, and a system update won't overwrite the file with the same name.

# CLI TEXT AND FILE EDITORS {#cli-text-and-file-editors}

Just as one may use microsoft word to edit a .doc file, there are programs that open in CLI to edit .txt files. 

**Text and File Editing with the CLI \-** 

	**Default external text editor:** open file.txt

	**Nano:** nano file.txt  
	**Vim/Vi:** vi file.txt  
	**Emacs:** emacs file.txt

# ZSH EFFICIENCY SHORTCUTS {#zsh-efficiency-shortcuts}

ZSH has a few shortcuts built in. 

**Up Arrow** \- to see your previously typed command 

You can do this to submit the same command multiple times, or to edit a command that you didn't type in quite right. 

**Tab for auto completion**

Whenever you need to type out a location in an argument (for example, in the cd command),  
you don't have to type out the whole thing: the first few letters will do. 

Once you've typed three or four letters, press the tab key, and the command line will fill in the rest for you\! 

For example, if you are in your home directory, and you type cd Desk and then press the tab key, the command line will automatically complete the command to read cd Desktop\!  
   
You can also use this if you find yourself mistyping folder names: tab auto completion will always fill it in correctly.

# COMMON COMMANDS {#common-commands}

*—----------------------------------------------------------------------------------------------------------------------------*

*NOTE: press Return after each Terminal command to execute*

*/ (root)*  
*\~ (home)* 

*Users*

*cd Desktop (relative path)*  
*cd /Users/scottfeichter/Desktop (absolute path)*

*mkdir*  
*touch*

*$USER*  
*echo $USER*  
*whoami* 

*cd*   
*pwd*   
*ls* 

*cat*   
*less*

*echo*   
*\> (redirect)*

*mv*  
*cp*  
*cp \-r*

*man*  
*help*

*rm*  
*rmdir*  
*rm \-rf*

*ls*   
*ls \-l*  
*ls \-a*  
*ls \-la*

*curl*

*d*  
*b*  
*u*  
*Opt \+ left*  
*Opt \+ right*  
*Ctrl \+ e*  
*Ctrl \+ a*  
*Opt \+ del*

*less \-p*

**WARNING\! DANGER\!**

Remember, when you use the command line, the computer will cheerfully do anything it can for you. If you ask it to do something bad, it will try to do so. 

Some people take advantage of this fact by telling novice command line users to run commands that do nasty things to your computer. 

**NEVER USE THESE COMMANDS**

Here are a few to watch out for. Never run any of these commands\! They can and will destroy your computer\!

**sudo rm \-rf /**

The command to remove a file is rm . You can also use rm to remove multiple files at a time. 

This command tells the computer to start at the top of the file structure, and delete every single file on the computer without stopping. 

After this command has run, your computer will be empty. If you turn it off, it will not be able to turn back on until you reinstall an operating system on it.

**:(){ :|:& };:**

This interesting-looking piece of code is called a fork bomb. 

Like a virus, it will continually multiply and subdivide itself, asking for more and more resources from the computer, until the entire computer is trying to process this code. 

As a result, the computer has no resources left for any other programs or processes, and will freeze or crash. Fortunately, rebooting your computer should cure it.

#  TASK: PRACTICE TERMINAL {#task:-practice-terminal}

*NOTE: when you see username enter whatever your username is, not “username”*

**Enter Finder App:** Cmd \+ tab and arrow to Finder

**Open a Finder Window:** Cmd \+ N

**Navigate to the Top Level Computer folder:** Cmd \+ Shift \+ C  
   
**Navigate to the Documents folder:** Cmd \+ Shift \+ O  
*NOTE: the path is Macintosh HD/Users/username/Documents*

**Open a second Finder Window:** Cmd \+ N  
*NOTE: click File then New Finder Window or just press Cmd \+ N*

**In the second Finder Window navigate to the Utilities folder:** Cmd \+ Shift \+ U  
*NOTE: the path is Macintosh HD/Applications/Utilities*  
*NOTE: can also do Cmd \+ Shift \+ G to search for Utilities or search for specific App*

**Toggle Finder Windows:** Cmd \+ \~  
*NOTE: the path is Macintosh HD/Applications/Utilities*

**Hide or show the path bar in Finder windows:** Opt \+ Cmd \+ P

**Show the Get Info window for a selected file:** Cmd \+ I

**Open the Terminal app**  
*NOTE: double click Terminal.app*

**Close the second Finder Window**   
*NOTE: click the red circle in the top left corner*

**Click on the Terminal and notice the header and prompt**

Last login: Fri Jun 25 10:37:06 on ttys000  
romansempire@Mac-Pro-8 \~ %

*NOTE: Here’s what you’re seeing:*

- *First line shows the last time you logged into your Mac via the command line; that’s the current time, when you’re using Terminal.*  
    
- *Second line is the prompt, and while it can change from system to system depending on configuration, by default it contains several bits of information:*  
    
  - *In the prompt example above romansempire is the **username**.*  
  - *Mac-Pro-8 is the name of the Mac (same as the Computer Name in the Sharing pane of System Preferences).*  
  - *The \~ shows where you are in the file system of the Mac. \~ is a shorthand that means the current user’s Home folder. (In the Finder, that’s the folder with your username and the house icon.)*  
  - *The % is a character that Terminal uses to indicate that it’s ready to accept a command.*

**to get username or computer name:** whoami

**when done you can end the terminal session with:** exit

**Complete list of commands:** https://ss64.com/

**Print Working Directory:** pwd  
*NOTE: this displays the current working directory (where you currently are)*

**Change Directory to the Documents folder:** cd /Users/username/Documents  
*NOTE: be sure there is a space after cd*  
*NOTE:  this is telling the cd command the exact full path where to change to*

**Print Working Directory:** pwd

**Make Directory to create a new folder:** mkdir 1st Folder  
*NOTE: we tried to name the new folder 1st Folder*

**Look in the Finder in the Documents folder and notice 2 new folders**  
*NOTE: since space between 1st and Folder it created TWO folders: 1st & folder*

**In Terminal verify the current working directory:** pwd  
*Note: should still be in Macintosh HD/Users/username/Documents*

**If current directory is not /Users/username/Documents:** cd /Users/username/Documents

**List the contents of the current directory:** ls  
*NOTE: notice the list matches with the contents in Finder* 

**Remove Directory to delete the folder named 1st:** rmdir 1st  
*NOTE: rmdir will only work to delete empty folders*

**Remove Directory to delete the folder named Folder:** rmdir folder  
*NOTE: rmdir will only work to delete empty folders*

**List the contents of the current directory:** ls  
*NOTE: notice the list matches with the contents in Finder*   
*NOTE: the two folders 1st and folder should no longer appear in Finder and Terminal ls* 

**For better viewing, clear the terminal:** clear

**Make a new folder (aka directory):** mkdir 1st\_Folder     
*NOTE: we named the new folder 1st\_Folder*

**Print working directory:** pwd  
*NOTE: just a good habit to often check the directory we are in*

**Before pressing return on the next command practice cursor navigation:**  
cmd \+ \<- or \-\>  
opt \+ \<- or \-\>  
cmd \+ p

cmd \+ d  
cmd \+ b  
shift \+ up

**Rename 1st\_Folder to First\_Folder:** mv /full-path/old-folder-name /full-path/new-folder-name   
*NOTE: rename it “First\_Folder”*   
*NOTE: you can drag a file from Finder to Terminal to get the full path*

**Open Current Directory in an app:** open . \-a (appName)

**Change Directory to the home directory:** cd \~  
*NOTE: home directory is the folder titled with your username* 

**Print Working Directory:** pwd

**List the contents of the working (aka current) directory:** ls

**For better viewing, clear the terminal:** clear

**Output the list of files in one entry per line format:** ls \-1

**For better viewing, clear the terminal:** clear

**Change Directory to Documents folder:** cd Documents  
*NOTE: no need to specify the full path because Documents is a folder in the working directory*

**Make Directory to create a new folder:** *mkdir “1st Folder”*  
*NOTE: since we used quotes “” we can have a space in the name*

**List the contents of the working (aka current) directory:** ls  
*NOTE: we have two folders created: 1st Folder and First\_Folder*

**Output the list of files in one entry per line format:** ls \-1

**For better viewing, clear the terminal:** clear

**Make Directory to create a new folder:** *mkdir First\_Folder*  
*NOTE: Terminal tells us this folder exists and does not create an additional folder*

**Remove Directory to delete the folder named 1st Folder:** rmdir “1st Folder”  
*NOTE: we must use quotes “” since there is a space in the folder name*

**List the contents of the working directory:** ls  
*NOTE: 1st Folder is gone*

**Navigate to First\_Folder:** cd First\_Folder

**Create a new file:** touch 1st\_File.txt  
*NOTE: we just created a plain text file named 1st\_File.txt*

**Rename file 1st\_File.txt to First\_File.txt:** mv /Users/username/Documents/First\_Folder/1st\_File.txt /Users/username/Documents/First\_Folder/First\_File.txt   
*NOTE: there is only one space between the old and new path*  
*NOTE: remember you can drag the file from Finder to Terminal to get the full path*

**Navigate to up one level to Documents folder:** cd ..  
*NOTE: we can change directory up one level with the shorthand ..*

**Create a new folder:** mkdir Second\_Folder

**Move First\_Folder to be inside Second\_Folder:** mv /Users/username/Documents/First\_Folder   
/Users/username/Documents/Second\_Folder  
*NOTE: there is only one space between the paths*  
*NOTE: remember you can drag the file from Finder to Terminal to get the full path*  
*NOTE: notice that we are using the same command mv that we used to rename*

**Navigate one level down to Second\_Folder directory:** cd Second\_Folder

**List the contents of the working directory:** ls

**Navigate one level down to First\_Folder directory:** cd First\_Folder

**List the contents of the working directory:** ls

**Create another new file:** touch Second\_File.txt

**List the contents of the working directory:** ls

**Move Second\_File.txt from First\_Folder into Second\_Folder:** mv /Users/username/Documents/Second\_Folder/First\_Folder/Second\_File.txt /Users/username/Documents/Second\_Folder  
*NOTE: Be careful because if not done correctly you will change the file name*  
*NOTE: Easier way: mv Second\_File.txt ..*

**List the contents of the working directory:** ls

**Print Working Directory:** pwd

**If current directory is not Users/username/Documents/Second\_Folder:** cd /Users/username/Documents/Second\_Folder

**Print Working Directory:** pwd

**List the contents of the working directory:** ls

**Delete First\_Folder AND ITS CONTENTS:** rm \-R First\_Folder  
*NOTE: First\_Folder and its contents (First\_File.txt) are now deleted*   
*NOTE: using rm \-R permanently deletes items, it does NOT send them to trash*

**List the contents of the working directory:** ls

**Print Working Directory:** pwd

**Open Second\_File.txt:** open Second\_File.txt  
*NOTE: This opened the file in the default application*

**Type a message in Second\_File.txt in the default program:** This is my first message, written in the default program\!  
*NOTE:* 

**Save the message in Second\_File.txt in the default program**  
*NOTE: File \- Save or Cmd \+ S*

**Close Second\_File.txt in the default program**  
*NOTE: File \- Close or Cmd \+ W*

**Quite the default program**  
*NOTE: Text Edit \- Quite Text Edit or Cmd \+ Q*

**In Terminal verify the current working directory:** pwd  
*NOTE: should still be in Macintosh HD/Users/username/Documents/Second\_Folder*  
*NOTE: it may just display /Users/username/Documents/Second\_Folder*

**Use nano to open Second\_File.txt in nano editor:** nano Second\_File.txt  
*NOTE: This opened the file in the nano*  
*NOTE: Nano is a simple command-line editor*

**On a new line type a message in Second\_File.txt in the default program:** This is my second  message, written in the nano command-line editor\!\!  
*NOTE: notice the command shortcuts at the bottom*

**Save the new message in Second\_File.txt in the nano editor:** Ctl \+ O  
*NOTE: Press enter at the prompt*

**Quit nano editor program:** Ctl \+ X  
*NOTE: You will be back to the Terminal prompt screen*

**Open Second\_File.txt:** open Second\_File.txt  
*NOTE: This opened the file in the default application*  
*NOTE: Notice there are now two lines of text*

**On a new line type a message in Second\_File.txt in the default program:** This is my THIRD message, written in the default program \- today’s date is \<date\>  
*NOTE:* 

**Save the message in Second\_File.txt in the default program**  
*NOTE: File \- Save or Cmd \+ S*

**Close Second\_File.txt in the default program**  
*NOTE: File \- Close or Cmd \+ W*

**Quite the default program**  
*NOTE: Text Edit \- Quite Text Edit or Cmd \+ Q*

**NEED TO UNDERSTAND OPEN \-A AND PKILL AND ITS FLAGS BETTER**

**Open Second\_File.txt using Safari from Terminal:** open \-a “Safari” Second\_File.txt  
Why is this opening 2 tabs in Safari and in TextEdit?  
Why can I do Atom Second\_File.txt but not Safari Second\_File.txt?  
*NOTE: This opened the file in the default application*  
*NOTE: Notice there are now two lines of text*

**Quite the Safari program from Terminal:** pkill \-x Safari  
*NOTE: You can quite any program from Terminal*

**Open the TextEdit.app from Terminal:** open /System/Applications/TextEdit.app  
How to not have the app open the iCloud Finder splash screen   
*NOTE: you can open any app from Terminal*  
*NOTE: There are several Applications folders on Mac OS:*

	*Macintosh HD/Applications*  
	*Macintosh HD/System/Applications*  
	*Macintosh HD/Users/username/Applications*

*NOTE: Some apps in Macintosh HD/System/Applicaitons appear in Finder in as shortcuts in Macintosh HD/Applications. When using Terminal this can be confusing because the shortcut might not show up in ls command.*  

**Use the Mac OS short cut Cmd \+ tab to toggle open apps:** Cmd \+ tab  
*NOTE: Keep holding Cmd and press tab to scroll through the open apps list*  
*NOTE: This way we don’t have to move our hands off the keyboard*

**Select TextEdit app:** Cmd \+ tab   
*NOTE: Keep holding Cmd and press tab to scroll through the open apps list*

**Minimize TextEdit app using Mac OS shortcut:** Cmd+ M   
*NOTE: Keep holding Cmd and press tab to scroll through the open apps list*

**Use the Mac OS short cut Cmd \+ tab to toggle back to Terminal:** Cmd \+ tab

**Print Working Directory:** pwd

**Navigate to up one level to Documents folder:** cd ..  
*NOTE: we can change directory up one level with the shorthand ..*

**Create multiple folders in the current folder:** mkdir Third\_Folder Fourth\_Folder Fifth\_Folder  
*NOTE: be sure there is a space between each new folder*

**Delete multiple folders in the current folder:** rmdir Third\_Folder Fourth\_Folder Fifth\_Folder  
*NOTE: be sure there is a space between each new folder*

**Create nested folders in the current folder:** mkdir \-p Nested\_L1/Nested\_L2/Nested\_L3  
*NOTE: be sure there is a / between each new folder*

THIS IS NOT OPENING TO THE FOLDER ONLY TO HOME  
**Open the Nested\_L2 folder from Terminal in Finder:** open /Documents/Nested\_L1/Nested\_L2  
*NOTE: you can open any folder from Terminal if you know the file path*

**Open the Current Directory from Terminal in Finder:** open .  
*NOTE: you can open any folder from Terminal*  
*NOTE: some directories have special symbols to use so you don’t have to type the path*

**Open the Parent Directory from Terminal in Finder:** open ..  
*NOTE: you can open any folder from Terminal*  
*NOTE: some directories have special symbols to use so you don’t have to type the path*

**Open the Home Directory from Terminal in Finder:** open \~  
*NOTE: you can open any folder from Terminal*  
*NOTE: some directories have special symbols to use so you don’t have to type the path*

**Open the Root Directory from Terminal in Finder:** open /  
*NOTE: you can open any folder from Terminal*  
*NOTE: some directories have special symbols to use so you don’t have to type the path*

**Enter Finder App:** Cmd \+ tab and arrow to Finder

**Open new Finder window in Finder:** Cmd \+ N

**Open new Finder tab in current Finder window:** Cmd  \+ T

**Cycle forward Finder tabs in Finder:** control \+ Tab  
*NOTE: not working*

**Cycle backward Finder tabs in Finder:** control \+ Shift \+ Tab

**Cycle Finder windows in Finder:** Cmd  \+ \~

**Minimize current Finder window in Finder:** Cmd \+ M

**Minimize all current Finder windows in Finder:** Cmd \+ Opt \+ M

**Close current Finder window in Finder:** Cmd \+ W

**Close all Finder window in Finder:** Cmd \+ Opt \+ W

**Change to the Parent Directory in Terminal:** cd ..  
*NOTE: you move to any folder(directory) in Terminal*  
*NOTE: some directories have special symbols to use so you don’t have to type the path*

**Change to the Home Directory in Terminal:** cd \~  
*NOTE: you move to any folder(directory) in Terminal*  
*NOTE: some directories have special symbols to use so you don’t have to type the path*

**Change to the Root Directory in Terminal:** cd /  
*NOTE: you move to any folder(directory) in Terminal*  
*NOTE: some directories have special symbols to use so you don’t have to type the path*

**Change Directory to Documents folder:** cd /Users/username/Documents  
*NOTE: we must specify the full path because Documents is not a folder in the working directory*

**Print Working Directory:** pwd

**List the contents of the working directory:** ls

**Delete Nested\_L1 folder in the current folder:** rm \-r Nested\_L1  
*NOTE: this deletes Nested\_L1 and all its contents*  
*NOTE: no need to specify the full path because Nested\_L1 is a folder in the working directory*

**List the contents of the working directory:** ls

**Rename folder:** mv Second\_Folder  \_Terminal\_Git\_Practice   
*NOTE: no need to specify full path because Second\_Folder is a folder in the working directory*

**List the contents of the working directory:** ls

**Navigate to \_Terminal\_Git\_Practice:** cd \_\<press tab to autocomplete the folder name\>  
*NOTE: pressing tab autocompletes file or folder name if you provide first few characters*

**List the contents of the working directory:** ls

**Navigate to home:** cd \~  
*NOTE: In the case of returning to home you actually can just type cd but using \~ is good too*

**Navigate to \_Terminal\_Git\_Practice:** cd Documents/\_\<press tab to autocomplete the folder name\>

**Print Working Directory:** pwd

**List the contents of the working directory:** ls

**Navigate to home:** cd \~  
*NOTE: In the case of returning to home you actually can just type cd but using \~ is good too*

**Navigate to \_Terminal\_Git\_Practice using tab only:** cd   
\<press tab to display the items in working directory,   
then press tab to toggle through to Documents and press Enter  
press tab again to display items in the child directory we just chose  
then press tab to toggle through to \_Terminal\_Git\_Practice and press Enter  
press enter to execute the cd command that now has the file path listed\>  
*NOTE: hold shift and press tab to cycle backwards*

**Move up two levels:** cd ../..  
*NOTE: be sure there is a space after cd*

**Print Working Directory:** pwd

**Move to previous directory you just browsed:** cd \-  
*NOTE: be sure there is a space after cd*

**Print Working Directory:** pwd

**Move to root directory:** cd /  
*NOTE: be sure there is a space after cd*

**Print Working Directory:** pwd

**Move to previous directory you just browsed:** cd \-  
*NOTE: be sure there is a space after cd*

**Print Working Directory:** pwd

**Move to parent directory:** cd ..  
*NOTE: be sure there is a space after cd*

**Print Working Directory:** pwd  
*NOTE: you should be in Documents folder*

**Make a new folder (aka directory):** mkdir Third\_Folder     
*NOTE: we named the new folder Third\_Folder*

**Move to Third\_Folder directory:** cd Third\_Folder  
*NOTE: be sure there is a space after cd*

**Make new files:** touch Third\_File.txt Fourth\_File.txt Fifth\_File.txt

**List the contents of the working directory:** ls

**Output the list of files in one entry per line format:** ls \-1

**List in a long format:** ls \-l  
*NOTE: Includes file mode, owner and group name, date and time file was modified, pathname, and more*

**List the file names with size, owner, and flags:** ls \-lo

**Change to the Parent Directory in Terminal:** cd ..  
*NOTE: You should now be in Documents*

**Print Working Directory:** pwd

**Move Third\_Folder to \_Terminal\_Git\_Practice:** mv Third\_Folder \_Terminal\_Git\_Practice

**Move Second\_File.txt to the Trash:** mv /Users/scottfeichter/Documents/Second\_Folder/Second\_File.txt 

**Navigate to home:** cd \~

**For better viewing, clear the terminal:** clear

**Get help about the any command:** \<command\> \-h

**Get help about the open command:** open \-h

**Open Second\_File.txt in new Finder window in Finder:** open \-R Second\_File.txt

**Open a fresh Safari:** open –F /Applications/Safari.app

**Show the help manual of the command:** man \<command\>

**Quit help manual:** q

**Show the help manual of the command:** man open

**Quit help manual:** q

**Open a new instance of Safari:** open –n /Applications/ Safari.app

**Open new Safari window in Safari:** Cmd \+ N

**Open new Safari tab in current Safari window:** Cmd \+ T

**Open Inspect Elements in Safari tab in current Safari window:** Cmd+Opt+I 

**Close Inspect Elements in Safari tab in current Safari window:** Cmd+Opt+I 

**Cycle forward Safari tabs in Safari:** control \+ Tab

**Cycle backward Safari tabs in Safari:** control \+ Shift \+ Tab

**Cycle Safari windows in Safari:** Cmd \+ \`

**Minimize current Safari window in Safari:** Cmd \+ M

**Minimize all current Safari windows in Safari:** Opt \+ Cmd \+ M

**Close current Safari window in Safari:** Cmd \+ W

**Close all Safari windows in Safari:** Opt \+ Cmd \+ W

**Close Safari in Terminal:** pkill Safari 

**Navigate to \_Terminal\_Git\_Practice:** cd /Users/username/Documents/\_Terminal\_Git\_Practice 

**Copy the Second\_File.txt to Third\_Folder:** cp Second\_File.txt Third\_Folder 

**Remove Second\_File.txt from \_Terminal\_Git\_Practice:** rm Second\_File.txt

**For better viewing, clear the terminal:** clear

# GENERAL INFO/ DEFINITIONS {#general-info/-definitions}

**Operating System** \- An operating system or OS is software installed on a computer's hard drive that enables the computer hardware to communicate and operate with the computer software. 

Without a computer operating system, a computer and software programs would be useless. 

With earlier computers, the user interacted with them using a command line interface, which required memorization of commands. 

Today, almost every computer uses a GUI (Graphical User Interface) operating system that's easy to use and operate.

[https://www.computerhope.com/jargon/o/os.htm](https://www.computerhope.com/jargon/o/os.htm)

For detailed information on the history of operating systems visit:

[https://www.javatpoint.com/os-tutorial](https://www.javatpoint.com/os-tutorial)

**Kernel** \- When referring to an operating system, the kernel is the first section of the operating system to load into memory. 

As the center of the operating system, the kernel needs to be small, efficient, and loaded into a protected area in memory, to prevent overwriting. 

It can be responsible for such things as disk drive management, interrupt handler, file management, memory management, process management, etc.

[https://www.computerhope.com/jargon/k/kernel.htm](https://www.computerhope.com/jargon/k/kernel.htm)

**Monolithic Kernel** a large program that performs most of the OS functions. 

**Micro Kernel** performs only a small subset of the operating system functions, but we can extend it with additional modules known as drivers.

**Graphical User Interface (GUI)**

**Command Line Interface (CLI)**

programs executable by the command-line interface can be written in a command language. They are called shell scripts on UNIX and UNIX-like systems such as GNU/Linux and macOS, and batch files on Windows.

All operating systems have command-line interfaces. Applications may have it as well. Also, modern programming languages provide an interactive command-line mode, in which you execute code line by line.

**Commands, parameters, options**

To sum up: what are essentially options and parameters? Both of them are just two particular types of arguments. While an option changes the behavior of a command, a parameter is used to assign information to either a command or one of its options. One of the key differences between them is that the number of possible values in options is limited and locked in the code, while with parameters users have more freedom as they don't have such limitations.

**Shell** \- A shell is a software interface that's often a command line interface that enables the user to interact with the computer. 

Some examples of shells are MS-DOS Shell (command.com), csh, ksh, PowerShell, sh, and tcsh.

[https://www.computerhope.com/jargon/s/shell.htm](https://www.computerhope.com/jargon/s/shell.htm)

**MS DOS** \- Short for Microsoft Disk Operating System, MS-DOS is a non-graphical command line operating system created for IBM compatible computers.

MS-DOS was first introduced by Microsoft in August 1981 and was last updated in 1994 with MS-DOS 6.22. Although the MS-DOS operating system is rarely used today, the command shell commonly known as the Windows command line is still widely used.

[https://www.computerhope.com/msdos.htm](https://www.computerhope.com/msdos.htm)

**MS Dosshell** \- Dosshell is an application that allows a user to utilize a partial GUI (graphical user interface), so new DOS users have an easier and more efficient time finding their way around.

[https://www.computerhope.com/dosshell.htm](https://www.computerhope.com/dosshell.htm)

**Command Line** \- The command line, also called the Windows command line, command screen, or text interface, is a user interface that's navigated by typing commands at prompts, instead of using a mouse.

[https://www.computerhope.com/jargon/c/commandi.htm](https://www.computerhope.com/jargon/c/commandi.htm)

**Command.com** \- The command.com (CMD in later versions of Windows) is the command interpreter for MS-DOS and is required for Microsoft operating systems to function. Without command.com, a computer running a Microsoft operating system would be unable to boot.

When running Windows NT, 2000, XP, Vista, 7, 8, and 10 there are two versions of the command interpreter, command.com, and cmd.exe. 

Cmd offers additional environment variables than command.com; however, we recommend if you're attempting to run an MS-DOS utility that you utilize the command.com. To use command.com, click Start, Run, and type command.

[https://www.computerhope.com/cmd.htm](https://www.computerhope.com/cmd.htm)

**Windows Terminal** \- Windows Terminal is an update to the command line in Windows 10 that is available for free in the Microsoft Store beginning in mid-2019. It can be used instead of the traditional Command Prompt, PowerShell, and WSL command line interfaces.

Windows Terminal is the first major upgrade to the Windows command-line subsystem in over 30 years. The new Windows Terminal is 100% backward compatible with previous systems, so all batch scripts and console applications for older versions of Windows are guaranteed to function the same.

[https://www.computerhope.com/jargon/w/windows-terminal.htm](https://www.computerhope.com/jargon/w/windows-terminal.htm)

**PowerShell** \- Windows PowerShell is a command-line shell for Microsoft Windows that is used for system administration. It uses cmdlets (commandlets) that are .NET classes to perform administrative tasks, and can access COM and WMI for local and remote administration. 

PowerShell can also be embedded within applications to make use of its abilities. PowerShell originated in 2006 when Monad (Microsoft Shell) was renamed to Windows PowerShell.

[https://www.computerhope.com/jargon/p/powershell.htm](https://www.computerhope.com/jargon/p/powershell.htm)

**csh** \- On Unix-like operating systems, the csh command launches the C shell, and is a command interpreter with a syntax inspired by the C programming language.

[https://www.computerhope.com/unix/ucsh.htm](https://www.computerhope.com/unix/ucsh.htm)

**ksh** \- On Unix-like operating systems, ksh is the executable of the Korn shell, a command shell and programming language.

[https://www.computerhope.com/unix/uksh.htm](https://www.computerhope.com/unix/uksh.htm)

**Korn shell** \- When referring to Unix, Linux, or a variant, Korn shell refers to a shell used to navigate through the command line. If available, the user can execute the Korn shell by typing ksh (k for korn and sh for shell).

[https://www.computerhope.com/jargon/k/korn.htm](https://www.computerhope.com/jargon/k/korn.htm)

**sh** \- On Unix-like operating systems, sh is the command name of the Bourne shell, the standard command language interpreter of Unix and many Unix-like operating systems, including Linux.

[https://www.computerhope.com/unix/ush.htm](https://www.computerhope.com/unix/ush.htm)

**Bourne shell** \- The Bourne shell was first developed by Steven Bourne at AT\&T and often used for scripting. The Bourne shell is executed at the Linux or Unix prompt by running the bsh or sh command.

[https://www.computerhope.com/jargon/b/bourne.htm](https://www.computerhope.com/jargon/b/bourne.htm)

**Tcsh** \- Tcsh (pronounced "tee-see-shell" or "tee-see-ess-aysh") is a command-line shell similar to the C shell (csh). 

It was developed by Ken Greer in the late 1970s with the purpose of adding command completion to the user experience of a command shell. 

It was first released to the public in 1983\. Tcsh is completely compatible with csh, and adds many useful features.

[https://www.computerhope.com/jargon/t/tcsh.htm](https://www.computerhope.com/jargon/t/tcsh.htm)

**bash** \- Short for "Bourne-Again Shell," bash is a Unix shell. Originally released in 1989 as a free replacement for the Bourne Shell, bash is part of the GNU project.

Bash is (was) the default shell in macOS, Windows Subsystem for Linux, and the majority of Linux operating systems.

[https://www.computerhope.com/unix/ubash.htm](https://www.computerhope.com/unix/ubash.htm)

**zsh** \- 

POSIX

**Terminal** \- The terminal is an interface that allows you to access the command line. To open the terminal on an Apple computer, click the terminal icon (shown to the right) on your Dock.

[https://www.computerhope.com/jargon/t/terminal.htm](https://www.computerhope.com/jargon/t/terminal.htm)

**Script** \- A script or scripting language is a computer language with a series of commands within a file capable of being executed without being compiled. Good examples of server-side scripting languages include Perl, PHP, and Python. 

The best example of a client side scripting language is JavaScript. A full list of scripting languages and other programming languages are found in our programming language definition.

Script files are not attached to the DB for example. You can have a script in a text file and run it in any DB so to speak. The text file may be saved a .sql file for example but it is really just a text file. 

[https://www.computerhope.com/jargon/s/script.htm](https://www.computerhope.com/jargon/s/script.htm)

**Batch** \- A batch file or batch job is a collection, or list, of commands that are processed in sequence often without requiring user input or intervention. 

With a computer running a Microsoft operating system such as Windows, a batch file is stored as a file with a .bat file extension. 

Other operating systems may define a batch job in a shell script, containing a list of commands to be executed one after the other.

[https://www.computerhope.com/jargon/b/batchfil.htm](https://www.computerhope.com/jargon/b/batchfil.htm)

**Mach kernel** \- The Mach kernel is an operating system kernel research project that was started at the Carnegie-Mellon University in 1985 and ended in October 1994\. While there is still some work being done at CMU, most development and support on the Mach kernel is done elsewhere.

[https://www.computerhope.com/jargon/m/machkern.htm](https://www.computerhope.com/jargon/m/machkern.htm)

**git** \- Git is a distributed revision control system designed and implemented by Linus Torvalds for use in the development of the Linux kernel. 

First released in 2005, Git is now the most widely-used version control system in the world. The software is free, open source, and released under the GPL.

[https://www.computerhope.com/jargon/g/git.htm](https://www.computerhope.com/jargon/g/git.htm)

**Revision Control** \- In the software development process, revision control, also known as version control or source control, is the management of changes made over time. 

These changes can be to source code, project assets, or any other information that goes into the finished product. It permits many people to work on the same parts of a project without worrying that their changes will overwrite the work of anyone else. 

The collection of revisions and their metadata is called a repository or repo. The repository represents a step-by-step chronological record of every change made to help project managers revert all or part of the project to a previous state if necessary.

[https://www.computerhope.com/jargon/r/revision-control.htm](https://www.computerhope.com/jargon/r/revision-control.htm)

**git bash** \- 

