---
# Don't forget to select the correct layout for the language
layout: post/post-en
title: "How to Install Metasploitable on Mac with Parallels Desktop"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2023-08-01 00:20:00 -0600
dateUpdated: 
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: blog technology
# Posts written in Spanish or Japanese must include the "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: en technology
---

If you are reading this article, you are probably well aware what a Virtual Machine is, what Metasploitable is, and other complicated software terminology, however for the sake of completeness, I'll define some important concepts:
<br><br>

* Virtual Machine: A computer system created using software on one physical computer in order to emulate the functionality of another separate physical computer.[^1]
* Parallels Desktop: A computer program that lets you run virtual machines on your computer. (Available for Mac and ChromeOS)
* Metasploitable: A Linux virtual machine purposefully build to hack it.
<br><br>

<h3> Follow this guide to install Metasploitable Linux on Mac with Parallels Desktop: </h3>
<br>

1. [Download][metasploitable-download] Metasploitable, your Mac will automatically unzip the file and you'll find this folder on your Downloads folder:

    ![Metasploitable folder](/assets/img/technology/metasploitable-guide/metasploitable-folder.png){:style="display:block; margin-left:auto; margin-right:auto; width:20%; height:20%; border-radius:15px"}<br>

    You'll see these files when you open the folder: <br><br>

    ![Metasploitble folder, inside](/assets/img/technology/metasploitable-guide/metasploitable-folder-inside.png){:style="display:block; margin-left:auto; margin-right:auto; width:55%; height:35%; border-radius:15px"}<br>

2. Parallels has [this guide][parallels-guide] about converting third-party VMs to Parallels, you are free to try and use it, although in my experience, it probably won't, it will display a message about not being able to detect the OS and to try converting the VM with the prl_convert utility. What's the prl_convert utility? We'll find out in a moment. <br><br>

3. Open up the Terminal, if you've never used it, it looks like this: <br>

    ![Terminal Icon](/assets/img/technology/terminal-guide/terminal.icon.png){:style="display:block; margin-left:auto; margin-right:auto; width:20%; height:20%; border-radius:15px"}

4. Write and run the following command: ``$ prl_convert ~/path/to/vmx --allow-no-os``, where you replace ``~/path/to/vmx`` with your path to the .vmx file inside the Metasploitable folder, in my case this happens: <br><br>

    ![command-run](/assets/img/technology/metasploitable-guide/prl_convert-command-run.png){:style="display:block; margin-left:auto; margin-right:auto; width:75%; height:65%; border-radius:15px"} <br>

5. And your Metasploitable VM is ready to be used!

<br><br>

<h3> Footnotes: </h3>
[^1]: According to the Oxford Dictionary of English


[metasploitable-download]: https://information.rapid7.com/download-metasploitable-2017.html?LS=1631875&CS=web
[parallels-guide]: https://kb.parallels.com/en/124491
