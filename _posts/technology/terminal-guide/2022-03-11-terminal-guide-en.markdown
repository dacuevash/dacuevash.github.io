---
# Don't forget to select the correct layout for the language
layout: post/post-en
title: "Command Guide for Mac & Linux Terminal"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2022-03-11 10:42:20 -0600
dateUpdated: 2022-03-25
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: blog technology
# Posts written in Spanish or Japanese must include the "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: en technology
---
![Terminal Icon](/assets/img/technology/terminal-guide/terminal.icon.png){:style="display:block; margin-left:auto; margin-right:auto; width:50%; height:50%; border-radius:15px"}
The Terminal! That mythical app you may come across while exploring your Mac's or Linux PC's apps. For most people it's a utility program which
they'll probably never use, but for a programmer it's where they'll live the rest of their lives. Here's a comprehensive list of useful
commands and shortcuts to use while in the Terminal:
<br/><br/>

### Shortcuts:
* Tab -> Auto-complete file and folder names
* Ctrl + A -> Go to the beginning of the line
* Ctrl + E -> Go to the end of the line
* Ctrl + L -> Clear screen
* Ctrl + C -> Kill/stop ongoing processes
<br/><br/>

### Basic:
* ``sudo`` -> Run with administrator/super-user security privileges
* ``man [cmd]`` -> Display manual page of specified command
* ``pwd`` -> Display current path
* ``date`` -> Display current date
* ``cal`` -> Display calendar of current month
<br/><br/>

### Directory management:
* ``cd [dir]`` -> Enter directory, use apostrophes for names with spaces
* ``cd ..`` -> Move up to the parent directory
* ``cd ../..`` -> Move up two directories
* ``ls`` -> Display list of subdirectories and files:  `` -a`` -> Also display hidden items,  `` -l`` -> Long listing,  `` -h`` -> Display file sizes,  `` -t`` -> List by time modified (most recent first),  `` -s`` -> Sort by size.
* ``mkdir [dir]`` -> Create directory
* ``rmdir [dir]`` -> Delete directory, it only works on empty directories
* ``rm -r [dir]`` -> Delete a directory and its contents
* ``mv [dir] [otherDir]`` -> Move directory to a different directory or subdirectory
* ``mv [dir] [newDirName]`` -> Rename directory
<br/><br/>

### File management:
* ``./[exec]`` -> Run executable file
* ``open [file]`` -> Open file: `` -a`` -> Specify app (Mac)
* ``cp [file] [dir]`` -> Copy file to directory
* ``rm [file]`` -> Delete a file: `` -i`` -> Prompt confirmation, `` -f`` -> Force removal
* ``mv [file] [newfile]`` -> Rename a file
* ``mv [file] [dir]`` -> Move file to a different directory or subdirectory
* ``cat > [file]`` -> Create text file and insert text, specify file extension
* ``cat [file]`` -> Display text file
* ``head [file]`` -> Display the first 10 lines of a text file: `` -n`` -> Show first “n” lines of a text file
* ``tail [file]`` -> Display the last 10 lines of a text file: `` -n`` -> Show last “n” lines of a text file
* ``wc [file]`` -> Word counter, displays number of lines, words and characters in that order: `` -l`` -> Display number of lines only, `` -w`` -> Display number of words only, ``-c`` -> Display number of characters only.
<br/><br/>

### Permissions:
* ``chmod`` -> Change the permissions of a file, directory, link or executable. It uses codes to activate different permission settings: r = 4, w = 2 and x = 1, the sum will generate the permission codes for each of the three groups of permission settings: users, groups and others
<br/><br/>

### Disk management:
* ``diskutil`` -> Disk Utility (Mac)
* ``cd /volumes/[drive]`` -> Access Flash Drive, SD Card or Hard Drive (Mac)
<br/><br/>

### Package management:
* ``port`` -> MacPorts package manager: ``install [package]`` -> Install package, ``uninstall [package]`` -> Uninstall package (Mac)*
* ``brew`` -> Homebrew package manager: ``install [package]`` -> Install package, ``uninstall [package]`` -> Uninstall package (Mac)*
* ``apt`` -> Apt package manager: ``install [package]`` -> Install package, ``remove [package]`` -> Uninstall package (Linux: Ubuntu, Mint, Kali)
* ``apk`` -> Apk package manager: ``add [package]`` -> Install package, ``del [package]`` -> Uninstall package (Linux: Alpine)
<br/><br/>

### Extra:
* ``shutdown`` -> Shut down the computer, ``-h [hh:mm]`` -> Shut down the computer at a specific time
* ``say [word(s)]`` -> Text-to-speech utility (Mac)
* ``espeak [word(s)]`` -> Text-to-speech utility (Linux)
<br/><br/>

### Git:
* ``git init`` -> Initialize repository.
* ``git add .`` -> Adds files that aren’t already being tracked to the repository
* ``git status`` -> Check the status of the repository
* ``git commit -m "[message]"`` -> Make a commit and add a message
* ``git log`` -> Show the log of commits
* ``git checkout .`` -> Revert back to the last commit
* ``git merge [branch]`` -> Merge current branch with other [branch]
<br/><br/>

*Usually not pre-installed in the system
