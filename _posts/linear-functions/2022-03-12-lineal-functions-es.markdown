---
# Don't forget to select the correct layout for the language
layout: post-es
title: "Todo lo que Necesitas Saber Sobre las Funciones Lineales"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2022-03-12 10:43:37 -0600
dateUpdated:
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: recent math
# Posts written in Spanish or Japanese must include the "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: es math
---

![Linear Function](/assets/img/linear-func.png){:style="display:block; margin-left:auto; margin-right:auto; width:50%; height:50%; border-radius:15px"}
<br>
Una función lineal representa una línea cuando es graficada en un plano bi-dimensional. Hay tres maneras principales de representar la
ecuación:
<br/><br/>

### Forma general: $$ Ax + By + C = 0 $$
<br>
Esta forma puede ser identificada fácilmente ya que siempre estará igualada a cero in en el caso de una función lineal, ninguna de sus
variables está elevada a alguna potencia. $$A$$, $$B$$ y $$C$$ funcionan como constantes, $$A$$ y $$B$$ pueden ser cero pero no al mismo
tiempo. Esta forma realmente no nos dice mucho acerca de la gráfica aparte de que es una línea, por lo que es recomendado convertirla a la
forma slope-intercept (intercepción de pendiente), despejando $$y$$, para conseguir más información útil de la función.
<br/><br/>

### Forma slope-intercept: $$y = mx + b$$
<br>
En esta forma $$m$$ representa la pendiente de la línea y $$b$$ el punto de intercepción con el eje "y". La pendiente se puede definir como
el cambio en el eje "y" entre el cambio en el eje "x". Una manera sencilla de reconocer la pendiente es ver la gráfica y contar cuánto ascendió(+) o descendió(-) la línea entre cuánto avanzó. Si ya conoces dos puntos por los cuales pasa la línea puedes encontrar la pendiente
con la siguiente formula:

<div style="text-align: center">
  $$P_1(x,y), P_2(x,y) $$
  $$ m = {y_2 - y_1 \over x_2 - x_1} \rightarrow m = {\Delta y \over \Delta x}$$
</div>

![Linear Slope-intercept Function](/assets/img/linear-slope-func.png){:style="display:block; margin-left:auto; margin-right:auto; width:45%; height:45%; border-radius:15px"}
<br>

Una pendiente positiva hará que la línea ascienda mientras avanza y una negativa hará que descienda.
<br/><br/>

### Forma paramétrica: $$ f(x) : {\begin{align} x = x_V \times t + x_P \\ y = y_V \times t + y_P \end{align}} $$
<br>

La funciones paramétricas de hecho depende de una tercera variable $$t$$, las explicaré con mayor detalle en otro artículo. Por
ahora todo lo que tienes que saber es que la expresión de arriba es el patrón estándar que sigue la forma paramétrica de una función
lineal. $$x_P$$ y $$y_P$$ son las coordenadas de un punto por el que pasa la línea, mientras que $$x_V$$ y $$y_V$$ son las coordenadas
de un punto en una línea diferente que corre en paralelo a la original. Se puede encontrar haciendo $$A - B$$, siendo $$A$$ y $$B$$ dos
puntos por los que pasa la línea original.

<div style="text-align: center">
  $$A - B $$
  $$ (x_A, y_A) - (x_B, y_B) = V(x_V, y_V)$$
</div>

A veces es complicado captar cómo luce la función si esta escrita de forma paramétrica, así que es recomendado convertirla a la forma
slope-intercept; podemos hacer esto despejando la variable $$t$$ en la ecuación "x", y luego substituyendo $$t$$ en la ecuación "y" con
la ecuación que obtuvimos de despejar $$t$$ en "x".
<br>

Veamos el siguiente ejemplo:

<div style="text-align: center">
  $$ f(x) : {\begin{align} x = {1 \over 2} \times t - 1 \\ y = {1 \over 2} \times t + 2 \end{align}} $$
  $$ x = {1 \over 2} \times t - 1 \rightarrow t = 2x + 2 $$
  $$ y = {1 \over 2} \times (2x+2) + 2 \rightarrow y = x+3 $$
</div>

Como puedes ver, si usamos un programa para graficar la función paramétrica, es la misma que en nuestros ejemplos anteriores: $$ y = x + 3 $$.
<br><br>

![Linear Parametric Function](/assets/img/linear-param-func.png){:style="display:block; margin-left:auto; margin-right:auto; width:45%; height:45%; border-radius:15px"}
<br>

### Otras cosas de las funciones lineales que conviene saber:
<br>

Digamos que tenemos una constante $$C$$, si hacemos $$f(x) = C$$, la línea será horizontal y sólo pasará a través del valor $$C$$ en el eje
"y", su pendiente será igual a cero. Por el otro lado, si hacemos $$ x = C$$, esto resultará en una línea vertical que sólo pasa a través
del valor $$C$$ en el eje "x" con una pendiente inexistente; esto sucede debido a que $$\Delta x$$ sería cero, y dividir entre cero nos
lleva a una indeterminación.
<br><br>

Dos líneas paralelas tendrían la misma endiente, dos líneas perpendiculares tendrían pendientes invertidas; para encontrar la pendiente de
una línea $$CD$$ perpendicular de $$AB$$, usa la siguiente expresión: $$m_{AB} \times m_{CD} = -1 $$ y despeja a $$m_{CD}$$.
<br><br>

Para encontrar la distancia entre dos puntos $$A$$ y $$B$$, usa la siguiente formula:

<div style="text-align: center">
  $$d = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$
</div>
