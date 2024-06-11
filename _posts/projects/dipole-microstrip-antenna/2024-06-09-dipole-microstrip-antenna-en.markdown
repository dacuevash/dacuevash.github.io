---
# Don't forget to select the correct layout for the language
layout: post/post-en
title: "A Microstrip Dipole Antenna for Digital TV"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2024-06-11 00:30:00 -0600
dateUpdated: 
# Always use the "projects" tag for the portfolio
tags: projects antenna
# All posts  must include the "en", "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: en 
---

This project was made as part of the first Antennathlon competition organized by the Department of Telecommunications of the Electrical Engineering Division at UNAM's School of Engineering. Event date: May 24th, 2024.

<br>

The project is based on the work of a team belonging to the Taiwan National University, in their paper ["A small microstrip antenna for the digital television system by Bent Topology"][original-paper]. All credit on the idea goes to them.

<br>

## Objectives
<br>

* Simulate and build a microstrip dipole antenna according to the specifications given by the original paper.
* Compare my results with the originals and analyze them.
* Test the antenna I built and ascertain it works to receive Digital TV signals.

<br>

## Introduction
<br>

Antennas, in principle, are energy transducers that allow us to transmit and receive energy in the form of electromagnetic waves. Some of the most important characteristics of antennas, or at least the ones most important to understand this project, are: 

<br>

* **Impedance:** In a way, it's almost the same as the more widely known electrical resistance, impedance refers to the opposition any given electrical wave encounters while traveling through any medium. 
* **Standing Wave:** When an EM wave crosses through a new, different medium, a reflection phenomenon occurs, where a reflected wave, carrying some of the energy of the original wave, travels back to where it came from, here the standing wave results from the sum of the original incident wave and the reflected wave.
* **Reflection Coefficient:** It refers to the energy carried by the reflected wave, the ideal value for this coefficient is below 14 decibels, and is sometimes represented by the symbol $$ S_{11} $$. The main reason why a high reflection coefficient appears, is due to an impedance mismatch between the transmission line and the antenna itself, both components must have similar impedance for the wave to travel through without reflecting energy. 
* **VSWR:** The Voltage Standing Wave Ratio is the ratio between the max and minimum amplitudes of the standing wave, and it's a quick way to see if the transmission line's impedance matches the antenna's, the closer to "1" the VSWR is, the better matched they are.

<br>

For this project, the VSWR is be the main indicator of how well optimized the antenna is, where the target is to have a VSWR value below 2.

<br>

In this project, the main idea was to build a microstrip antenna where both sides of the PCB act as "poles", thus making it a dipole, to reduce the size of the PCB required, the poles would be bent. The antenna was simulated and built according to the following specifications obtained from the original paper: 

<br>

![antenna-parameters](/assets/img/projects/microstrip-dipole-antenna/antenna-parameters.png){:style="display:block; margin-left:auto; margin-right:auto; width:60%; height:60%; border-radius:15px"} <br><br>

## Simulation

<br>

The software used to simulate this project was CST Studio Suite by Dassault Systèmes. 

<br>

**Important considerations:** 

* The original specifications required a PCB with a thickness of 0.8 mm, since it was pretty much impossible for me to find one like that, I used a 1.5 mm thick PCB, this might be important later on. 
* I ran two simulations, considering two different waveguide port positions since the original paper doesn't explicitly say where the coaxial cable is connected. <br><br>

The 3D model made in CST Studio: <br><br>
![antenna-3D-model](/assets/img/projects/microstrip-dipole-antenna/antenna_CAD.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>


### First simulation

<br>

For the first simulation, I placed the waveguide port directly at the edge of the PCB, close to the upper pole so that the physical connection with the coaxial cable could be done easily using a 50Ω SMA connector.<br><br> 

These were the results:<br><br>
![vswr-alt](/assets/img/projects/microstrip-dipole-antenna/vswr-alt.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>
![s11-alt](/assets/img/projects/microstrip-dipole-antenna/s11-alt.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

According to the simulation, the antenna was optimized for two main frequencies, 665 and 875 MHz, where the VSWR was below 2 and the $$ S_{11} $$ value was -8 and -15 dB respectively. <br><br>

### Second simulation

<br>

For the second simulation, I placed the waveguide port pretty much at the center of the PCB. where the main pole's strip begins, as the original paper seems to indicate implicitly:<br><br>

![antenna-port](/assets/img/projects/microstrip-dipole-antenna/antenna-cad-port.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

These were the results:<br><br>
![vswr-alt](/assets/img/projects/microstrip-dipole-antenna/vswr.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>
![s11-alt](/assets/img/projects/microstrip-dipole-antenna/s11.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

According to the simulation, the antenna was optimized for one main frequency at 921.4 MHz, where the VSWR was 1.5 and the $$ S_{11} $$ value was -14 dB. <br><br>

The simulation also revealed the antenna had a 75Ω characteristic impedance, this will be important for the construction process: <br><br>

![impedance](/assets/img/projects/microstrip-dipole-antenna/impedance.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>


## Physical antenna

<br>

Due to cosmetic reasons, I decided the best way to go about building the antenna was by following the second simulation's concept and connect the coaxial cable in the middle of the PCB, by drilling a hole and connecting the cable to the poles' feeding strips. Another important reason to go with this design was that the characteristic impedance of the antenna was 75Ω according to the simulation, so using an SMA connector would be less than ideal.<br><br>

![physical-antenna](/assets/img/projects/microstrip-dipole-antenna/Antena_real_2.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

**Construction steps:**
1. Use sandpaper to eliminate imperfections on both sides of the PCB.
2. Cut PCB into a 20x2 cm piece.
3. Draw the antenna pattern over the copper with a marker, such method was used because at the time of making this project, I did not know how to design and print PCB patterns via software, thus absolute precision was not possible.
4. Submerge the piece into ferric chloride (taking proper precautions) for around 20 minutes or until all the copper has completely disappeared.
5. Wash off the marker's ink.
6. Drill a hole through the piece right in the middle, big enough for a coaxial cable's core to pass through.
7. Solder the coaxial cable's core and shield to each poles' feeding strip.

<br>

## Real-world Tests

<br>

Once the physical antenna was built, it was time to test it out. First, the $$ S_{11} $$, VSWR values were tested out using a _Rhode & Schwarz Spectrum Analyzer FSH4_: <br><br>

![s11-real](/assets/img/projects/microstrip-dipole-antenna/S11_real.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>
![vswr-real](/assets/img/projects/microstrip-dipole-antenna/VSWR_real.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

The actual built antenna was specially optimized for a frequency of 830 MHz, where $$ S_{11} $$ = -23.44 dB and it had a whopping 1.02 of VSWR. <br><br>

As for the question of whether or not it _actually_ worked for receiving TV signals, the answer is YES. Below is a video of the antenna in action: <br><br>

<iframe width="540" height="315" src="https://www.youtube.com/embed/VgIXxfgHTn8"> </iframe>{:style="display:block; margin-left:auto; margin-right:auto"}

<br>

## Result Analysis

<br>

The obtained results were quite different to the originals. <br><br>

<div style="overflow-x:auto;">
    <md-block>
        | Parameters                     | Original      | Simulation | IRL tests |
        |:------------------------------:|:-------------:|:----------:|:---------:|
        | Main op. frequency [MHz]       | 750           | 921.4      | 830       | 
        | S11 [dB]                       | -9            | -14        | -23.4     |
        | VSWR                           | Not mentioned | 1.5        | 1.02      |
    </md-block>
</div>

<br>

Both the simulation and IRL tests yielded very different results, the original operating frequency of 750 MHz was completely displaced and even the computer simulation was off by around 100 MHz. <br><br>

So what happened? Well, as stated from the beginning, a special consideration had to be done regarding the thickness of the PCB used, this small change is the main suspect of what went wrong. Other than that, despite my best efforts to draw the pattern as accurately as possible, that just wasn't possible. It's also worth noting that the simulation had a small detail, where it wasn't quite possible to simulate the antenna as it was built, since the specific tool that would've allowed me to insert a cavity into the PCB to simulate a coaxial cable passing through was blocked due to the license type, so nothing could be done about that. Also the original paper states the simulations were done using Ansys' HFFS software, so more differences. <br><br>

## Conclusions

<br>

This is the first hands-on project I've done that truly felt like real engineering. I learned a lot about how antennas work, how to use computer software to simulate their behavior and most importantly how to build one (the whole manual construction project was really cool), however, due to the fact this whole project was more about coping someone else's process, I'm still left with the doubt of how the original team determined what measurements they used for the pattern and how could I try to make my own designs. <br><br>

In the end, the most important thing is that the antenna works! But how can it visualize channels whose frequencies are so far from ~830 MHz, and with VSWR values above 50? Truth is modern TVs are built so they will be able to visualize a channel even if its frequency has a VSWR above 2, or 50 for that matter, so the antenna still works pretty good for practical purposes, even if the frequency for which it is optimized isn't actually used by any channel in the Mexico City area.<br><br>

As it can be seen in the IRL test YouTube Video, this antenna is now permanently connected to my bedroom's TV for my personal use.

<style>
    table {
        border-collapse: collapse;
        border-spacing: 5px;
        border:2px solid #FFFFFF;
    }

    th {
        border:2px solid #FFFFFF;
        padding-left: 30px;
        padding-right: 30px;
    }

    td {
        border:1px solid #FFFFFF;
        padding-left: 30px;
        padding-right: 30px;
    }

</style>


[original-paper]: https://ieeexplore.ieee.org/abstract/document/7305396

