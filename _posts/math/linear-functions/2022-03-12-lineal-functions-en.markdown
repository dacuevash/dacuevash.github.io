---
# Don't forget to select the correct layout for the language
layout: post/post-en
title: "All You Need to Know About Linear Functions"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2022-03-12 10:43:37 -0600
dateUpdated:
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: recent math
# Posts written in Spanish or Japanese must include the "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: math
---

![Linear Function](/assets/img/linear-func.png){:style="display:block; margin-left:auto; margin-right:auto; width:50%; height:50%; border-radius:15px"}
<br>
A linear function represents a line when graphed onto a two-dimensional plane. There are three main forms to represent the equation:
<br/><br/>

### General form: $$ Ax + By + C = 0 $$
<br>

This form can be easily identified since it always equals to zero and in the case of a linear function, none of its
variables are squared. $$A$$, $$B$$ and $$C$$ act as constants, $$A$$ and $$B$$ can be zero but not at the same time.
This form doesn't really tell you much about the graph other than it's a line so it's highly recommended to try to
convert it to the slope-intercept form by clearing $$y$$ to get more information about it.
<br/><br/>

### Slope-intercept form: $$y = mx + b$$
<br>

In this form $$m$$ represents the slope of the line and $$b$$ the y-axis interception point. A slope is better defined as the change
in the y-axis per change in the x-axis. A simple visual way to quickly recognize the slope is by looking at the graph and counting how much the line rose(+) or fell(-) against how how much it moved forward. If you already know about two points by which the line passes
you can find the slope with the following formula:

<div style="text-align: center">
  $$P_1(x,y), P_2(x,y)$$
  $$ m = {y_2 - y_1 \over x_2 - x_1} \rightarrow m = {\Delta y \over \Delta x} $$
</div>

![Linear Slope-intercept Function](/assets/img/linear-slope-func.png){:style="display:block; margin-left:auto; margin-right:auto; width:45%; height:45%; border-radius:15px"}
<br>

A positive slope value will result in the line rising while moving forward, a negative slope will make it descend.
<br/><br/>

### Parametric form: $$ f(x) : {\begin{align} x = x_V \times t + x_P \\ y = y_V \times t + y_P \end{align}} $$
<br>

Parametric functions actually depend on a third variable, usually denoted with the letter $$t$$, I'll explain them in more detail in another article. For now all you have to know is that the expression above is the standard pattern the parametric form of a linear function follows.
$$x_P$$ and $$y_P$$ are the coordinates of a point by which the line passes, meanwhile $$x_V$$ and $$y_V$$ are the coordinates of a point on a different line running on parallel to the original line. It can be found by doing $$A - B$$, being $$A$$ and $$B$$ two points on the original line.

<div style="text-align: center">
  $$A - B$$
  $$(x_A, y_A) - (x_B, y_B) = V(x_V, y_V)$$
</div>

It is sometimes hard to get a good idea of how the function looks like if it's written in parametric form, so it's recommended that you
convert it to the slope-intercept form; you can do that by solving for the variable $$t$$ in the "x" equation, and then substituting
the $$t$$ variable in the "y" equation with the equation you got from solving for $$t$$.<br>

Take for example the following parametric function:

<div style="text-align: center">
  $$ f(x) : {\begin{align} x = {1 \over 2} \times t - 1 \\ y = {1 \over 2} \times t + 2 \end{align}} $$
  $$ x = {1 \over 2} \times t - 1 \rightarrow t = 2x + 2 $$
  $$ y = {1 \over 2} \times (2x+2) + 2 \rightarrow y = x+3 $$
</div>

As you can see, if we use a program to graph the parametric function, it's the same as our previous example function: $$ y = x + 3 $$.
<br><br>

![Linear Parametric Function](/assets/img/linear-param-func.png){:style="display:block; margin-left:auto; margin-right:auto; width:45%; height:45%; border-radius:15px"}
<br>

### Other things to keep in mind about linear functions:
<br>

Let's say we have a constant $$C$$, if we do $$f(x) = C$$, the line will be horizontal and only pass through the $$C$$ value in the y-axis,
also, its slope will be equal to zero. Conversely, if we do $$ x = C$$, this will result in a vertical line only passing through the $$C$$ value in the x-axis with a non-existent slope; this happens because $$\Delta x$$ would be zero, and dividing by zero gives us an indetermination.
<br><br>

Two parallel line would have the same slope, two perpendicular lines would have inverted slopes; to find the slope of a line $$CD$$
perpendicular to $$AB$$, use the following expression: $$m_{AB} \times m_{CD} = -1 $$, and solve for $$m_{CD}$$.
<br><br>

To find the distance between two points $$A$$ and $$B$$, use the following formula:

<div style="text-align: center">
  $$d = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$
</div>
