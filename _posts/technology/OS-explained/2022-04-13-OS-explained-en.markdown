---
# Don't forget to select the correct layout for the language
layout: post/post-en
title: "Computer Operating Systems Explained"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT (24 hrs format)
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2022-04-13 00:57:00 -0500
dateUpdated:
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: recent technology
# Posts written in Spanish or Japanese must include the "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: technology
---

![Computer OSs](/assets/img/technology/os-explained/os-image.jpeg){:style="display:block; margin-left:auto; margin-right:auto; width:50%; height:50%; border-radius:15px"} <br>

An Operating System is the underlining software that allows a computer to be actually useful for humans. Without it, all the different physical components of the computer like the CPU, GPU, RAM and storage unit would have no idea what to do and the computer would be essentially useless, even if you paid over $2000 USD for it. In this article I'll talk a little about them so that you know what's going on the next time you see a PCtard and an Apple fanboy fighting over which one is better.
<br><br>

Today, we can divide operating systems according to the device they're built for, desktop or mobile. The main desktop OSs are Microsoft Windows, Apple's macOS and the many Linux flavors made by the open source community. Let's start with Linux, since it's the most interesting one of them all.
<br><br>

### The wonders of Linux
<br>

Linux is a relatively unknown OS among normal people who are not really interested in technology, it's an open source operating system, this means that ANYONE can download, use, modify and distribute its source code for commercial and non-commercial purposes under the terms of its license. Normal users like you and me can contribute to its source code without having to worry about violating the user's agreement of a tech company. The Linux kernel was originally developed as an almost identical open source free copy of AT&T's UNIX operating system, which is why it's often called a UNIX-like operating system.
<br><br>

Because of the open source approach, several flavors often called "distributions" or "distros" exist using the Linux kernel, these distributions are independent and can be wildly different from each other. Some of the most popular desktop distros are [Debian][debian-website], [Ubuntu][ubuntu-website], [Fedora][fedora-website], [Mint][mint-website], [Kali][kali-website], [Arch][arch-website], and most recently [Chrome OS][chromeOs-website] has been gaining ground on educational environments. Android, the operating system behind almost all non-Apple smartphones in the world also uses the Linux kernel, so in the mobile world you could say Linux absolutely rules the market. Also, there are currently some attempts at bringing other Linux-based OSs to the smartphone world such as [Ubuntu Touch][ubuntuTouch-website], in case you don't want to be at the mercy of either Apple or Google.
<br><br>

Since Linux is an operating system "Made by the people, for the people", it hides absolutely nothing, you can change anything you want about it, however this isn't necessarily easy to do, Linux has a reputation of being confusing to users who come from using other mainstream operating systems and while a tech savy users would probably have no problem getting used to it, most people would probably feel intimidated by it. Which is why it's easier to just stay with the OS their computers comes with, for example, the next OS we'll discuss in this article.
<br><br>

### The simplicity of macOS
<br>

Something pretty cool that few people know is that macOS and Linux are distant cousins in the UNIX-like family tree. At the core of macOS there is an open source operating system called [Darwin][darwin-repository], which just like Linux was developed as a UNIX-like operating system without any direct link to UNIX. Because of this macOS and Linux are actually surprisingly similar at their core, to see this all you have to do is fire up the Terminal and see how both can do essentially the same.
<br><br>

Ok but then what makes macOS different? Pretty much everything else. Apple is a consumer electronics company, and a pretty good one, wether you like or hate Apple you can't deny Apple products are very popular, there's a reason for that: simplicity. Apple products are made so that anyone can use their products regardless of their experience with computers and the Mac is no exception, every component of the software that adds a unique functionality to macOS is built to make the user's experience easier and more comfortable, these components are not part of Darwin and as such are not open source, so only Apple can create and modify them, with the occasional user's feedback.
<br><br>

Darwin is also the OS at the core of all other Apple operating systems: iOS, iPadOS, watchOS and tvOS. Apple tries to keep all of their OSs consistent with each other, so macOS users can do pretty cool things like use their iPad as a second screen to their Mac, or share their keyboard and mouse between macOS and iPadOS at the same time, answer a phone call from a Mac and other cool utilities that you can only get from the Apple ecosystem.
<br><br>

However we all know Apple products tend to be expensive, so many users prefer to buy other computers at a lower cost, these computers aimed at the general public usually come with the world's most popular and widely used operating system, and that is:
<br><br>

### Windows' throne
<br>

Microsoft Windows is sort of like the weird one of the bunch. It doesn't share any kind of development history with either Linux or macOS (except that it was inspired by macOS' great grandaddy "System 1"). Windows was first released by Microsoft back in 1985 to be the default graphical operating system used by all non-Apple computers; since those computers were cheaper Windows ended up being more widely used, a trend that continues to this day.
<br><br>

Windows isn't built on top of a UNIX-like kernel like Linux or macOS, it was built on top of MS-DOS (Microsoft Disk Operating System), this means that throughout all its history Windows has been entirely developed by Microsoft with little regard to open source software up until recently. Despite all of this Windows is incredibly useful, there are few things Windows can't do; because of its wide market share most software developers think about supporting Windows first since that's where all the users are at, so you'll commonly find many things at which Windows is better at than their counterparts, not really because Windows is the best of them all, but because developers spend a good chunk of their time making sure their software runs good on Windows.
<br><br>

Windows has never been about special functionalities no other OS has, no need to attract users to Windows since chances are that regardless of the manufacturing company they prefer, the computer will still use Windows. Microsoft Windows is all about getting the job done, and in all fairness, it's pretty good at it.
<br><br>

### Conclusion
<br>

This conclusion is based on the already established information and my own opinions and experiences using Linux, macOS and Windows.
<br><br>

After all I've said you might be wondering: Which operating system is better? Well, Linux and macOS are specially good with programmers developing open source software or mobile apps. In case you didn't know, the internet runs on Linux! So having a UNIX-like operating system can come in handy, it's not like Windows can't do all of these things, as previously stated Windows can do pretty much anything, but it's certainly not a very intuitive or pleasing experience, at least in my experience. Microsoft even recently released something called "Windows Subsystem for Linux", which basically emulates the Linux kernel inside of Windows to make Windows programmer's lives easier, but it's still not the same experience as straight up using Linux or Darwin. The recently released Windows Terminal is pretty good though.
<br><br>

Windows also has its strong points, for example, no one can deny Windows is the best operating system for gamers. Most AAA games only run on Windows and with the support of of NVIDIA's and AMD's GPUs, Windows has the absolute power when it comes to high intensity gaming.
<br><br>

As I said in the intro of the article, it's common to see PCtards (PC fanboys) and Apple fanboys fighting over which OS (and by extension which computer company) is better. My recommendation to you, dear reader, is to not be like those guys. Windows, Linux and macOS all have very good and bad points to them, in the end we live in a free world where you should be able to choose the OS that best suits your needs or personality and not feel ashamed for your choice, so take it easy and don't be like those guys.
<br><br>

Now you know what kind of operating systems are out there, their differences, and back-stories. Go and spread the knowledge!
<br><br>

[debian-website]: https://www.debian.org
[ubuntu-website]: https://ubuntu.com
[fedora-website]: https://getfedora.org
[mint-website]: https://linuxmint.com
[kali-website]: https://www.kali.org
[arch-website]: https://archlinux.org
[chromeOs-website]: https://www.google.com/chromebook/chrome-os/
[ubuntuTouch-website]: https://ubuntu-touch.io
[darwin-repository]: https://github.com/apple/darwin-xnu
