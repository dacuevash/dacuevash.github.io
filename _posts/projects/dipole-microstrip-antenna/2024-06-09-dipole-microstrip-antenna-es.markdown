---
# Don't forget to select the correct layout for the language
layout: post/post-es
title: "Antena dipolo de microcinta para TV digital"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2024-06-11 00:30:00 -0600
dateUpdated: 
# Always use the "projects" tag for the portfolio
tags: projects antenna
# All posts  must include the "en", "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: es 
---

Este proyecto se realizó como parte de la primera competencia de Antennathlon organizada por el Departamento de Telecomunicaciones de la División de Ingeniería Eléctrica de la Facultad de Ingeniería de la UNAM. Fecha del evento: 24 de mayo de 2024.

<br>

El proyecto se basa en el trabajo de un equipo perteneciente a la Universidad Nacional de Taiwán, en su artículo ["A small microstrip antenna for the digital television system by Bent Topology"][original-paper]. Todo el crédito por la idea es para ellos.

<br>

## Objetivos
<br>

* Simular y construir una antena dipolo de microcinta de acuerdo con las especificaciones dadas por el documento original. 
* Comparar los resultados obtenidos con los originales y analizarlos. 
* Probar la antena construida y comprobar que funciona para recibir señales de televisión digital.

<br>

## Introducción
<br>

Las antenas, en principio, son transductores de energía que nos permiten transmitir y recibir energía en forma de ondas electromagnéticas. Algunas de las características más importantes de las antenas, o al menos las más importantes para entender este proyecto, son:

<br>

* **Impedancia:** En cierto modo, es más o menos lo mismo que la resistencia eléctrica común, la impedancia se refiere a la oposición experimentada por cualquier onda eléctrica mientras viaja por un medio. 
* **Onda estacionaria:** Cuando una onda EM cruza a través de un medio nuevo y diferente, se produce un fenómeno de reflexión, donde una onda reflejada, que lleva parte de la energía de la onda original, viaja de vuelta por donde vino, aquí la onda estacionaria resulta de la suma de la onda incidente original y la reflejada. 
* **Coeficiente de reflexión:** Se refiere a la energía transportada por la onda reflejada, el valor ideal para este coeficiente es inferior a 14 decibelios, y a veces está representado por el símbolo $$ S_{11} $$. La razón principal por la que aparece un alto coeficiente de reflexión se debe a un desajuste de impedancia entre la línea de transmisión y la propia antena, ambos componentes deben tener una impedancia similar para que la onda viaje sin reflejar la energía. 
* **VSWR:** "Voltage Standing Wave Ratio" o en español: "Relación de onda estacionaria según el voltaje" es la relación entre las amplitudes máximas y mínimas de la onda estacionaria, y es una forma rápida de ver si la impedancia de la línea de transmisión coincide con la de la antena, cuanto más cerca de "1" esté el VSWR, mejor emparejados están.

<br>

Para este proyecto, el VSWR es el principal indicador de qué tan bien optimizada está la antena, donde el objetivo es tener un valor de VSWR por debajo de 2.

<br>

En este proyecto, la idea principal era construir una antena de microcinta donde ambos lados del PCB actúan como "polos", convirtiéndola así en un dipolo, para reducir el tamaño de la PCB necesaria, los polos se doblarían. La antena se simuló y construyó de acuerdo con las siguientes especificaciones obtenidas del documento original:

<br>

![antenna-parameters](/assets/img/projects/microstrip-dipole-antenna/antenna-parameters.png){:style="display:block; margin-left:auto; margin-right:auto; width:60%; height:60%; border-radius:15px"} <br><br>

## Simulación

<br>

El software utilizado para la simulación por computadora fue CST Studio Suite de Dassault Systèmes. 

<br>

**Consideraciones importantes:** 

* Las especificaciones originales requerían de un PCB con un grosor de 0.8 mm, ya que era prácticamente imposible para mí encontrar una como esa, usé un PCB de 1.5 mm de espesor, esto puede que sea importante más adelante. 
* Ejecuté dos simulaciones, considerando dos posiciones diferentes del puerto de la guía de onda, ya que el documento original no dice explícitamente dónde está conectado el cable coaxial. <br><br>

El modelo 3D hecho en CST Studio: <br><br>
![antenna-3D-model](/assets/img/projects/microstrip-dipole-antenna/antenna_CAD.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>


### Primera simulación

<br>

Para la primera simulación, coloqué el puerto de guía de onda directamente en el borde de la PCB, cerca del polo superior, de modo que la conexión física con el cable coaxial se pudiera hacer fácilmente utilizando un conector SMA de 50Ω.<br><br> 

Estos fueron los resultados de la simulación:<br><br>
![vswr-alt](/assets/img/projects/microstrip-dipole-antenna/vswr-alt.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>
![s11-alt](/assets/img/projects/microstrip-dipole-antenna/s11-alt.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

Según la simulación, la antena estaba optimizada para dos frecuencias principales, 655 y 875 MHz, donde el VSWR era inferior a 2 y el valor de $$ S_{11} $$ era de -8 y -15 dB respectivamente. <br><br>

### Segunda simulación

<br>

Para la segunda simulación, coloqué el puerto de la guía de ondas más o menos en el centro del PCB, donde comienza la tira del polo principal, como el artículo original parece indicar implícitamente: <br><br>

![antenna-port](/assets/img/projects/microstrip-dipole-antenna/antenna-cad-port.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

Estos fueron los resultados:<br><br>
![vswr-alt](/assets/img/projects/microstrip-dipole-antenna/vswr.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>
![s11-alt](/assets/img/projects/microstrip-dipole-antenna/s11.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

De acuerdo con la simulación, la antena estaba optimizada para una frecuencia principal de 921.4 MHz, donde el VSWR era de 1.5 y el valor de $$ S_{11} $$ era de -14 dB. <br><br> 

La simulación también reveló que la antena tenía una impedancia característica de 75Ω, esto será importante para el proceso de construcción: <br><br>

![impedance](/assets/img/projects/microstrip-dipole-antenna/impedance.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>


## Antena física

<br>

Debido a razones cosméticas, decidí que la mejor manera de construir la antena era seguir el concepto de la segunda simulación y conectar el cable coaxial en el medio del PCB, perforando un agujero y conectando el cable a las tiras de alimentación de los polos. Otra razón importante para proceder con este diseño fue que la impedancia característica de la antena era de 75Ω según la simulación, por lo que el uso de un conector SMA sería poco ideal. <br><br>

![physical-antenna](/assets/img/projects/microstrip-dipole-antenna/Antena_real_2.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

**Proceso de construcción:**
1. Utilizar papel de lija para eliminar las imperfecciones en ambos lados de la PCB. 
2. Cortar el PCB en una pieza de 20x2 cm. 
3. Dibujar el patrón de la antena sobre el cobre con un marcador, se utilizó este método porque en el momento de hacer este proyecto, no sabía cómo diseñar e imprimir patrones de PCB a través de software, por lo que fue posible tener precisión absoluta. 
4. Sumergir la pieza en cloruro férrico (tomando las precauciones adecuadas) durante unos 20 minutos o hasta que todo el cobre haya desaparecido por completo. 
5. Lavar la tinta del marcador. 
6. Taladrar un agujero a través de la pieza justo en el medio, lo suficientemente grande como para que pase el núcleo de un cable coaxial. 
7. Soldar el núcleo y el escudo del cable coaxial a la tira de alimentación de cada polo.

<br>

## Pruebas en el mundo real

<br>

Una vez que la antena fue construida, llegó el momento de ponerla a prueba. Primero, el $$ S_{11} $$ y el VSWR fueron probados utilizando un _Rhode & Schwarz Spectrum Analyzer FSH4_: <br><br>

![s11-real](/assets/img/projects/microstrip-dipole-antenna/S11_real.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>
![vswr-real](/assets/img/projects/microstrip-dipole-antenna/VSWR_real.png){:style="display:block; margin-left:auto; margin-right:auto; width:70%; height:70%; border-radius:15px"} <br><br>

La antena construida estaba especialmente optimizada para una frecuencia de 830 MHz, donde $$ S_{11} $$ = -23.44 dB y tenía un sorprendente 1.02 de VSWR. <br><br>

En cuanto a la pregunta de si la antena _de verdad_ funciona para recibir señales de televisión, la respuesta es SÍ. A continuación se muestra un vídeo de la antena en acción: <br><br>

<!-- Remember to change this! -->
<iframe width="540" height="315" src="https://www.youtube.com/embed/VgIXxfgHTn8"> </iframe>{:style="display:block; margin-left:auto; margin-right:auto"}

<br>

## Análisis de Resultados

<br>

Los resultados obtenidos fueron bastante diferentes a los originales. <br><br>

<div style="overflow-x:auto;">
    <md-block>
        | Parámetros                     | Original      | Simulación | Pruebas reales |
        |:------------------------------:|:-------------:|:----------:|:--------------:|
        | Frecuencia operativa [MHz]     | 750           | 921.4      | 830            | 
        | S11[dB]                        | -9            | -14        | -23.4          |
        | VSWR                           | No mencionado | 1.5        | 1.02           |
    </md-block>
</div>

<br>

Tanto la simulación como las pruebas reales dieron resultados muy diferentes, la frecuencia  original de 750 MHz se desplazó por completo e incluso la simulación por computadora difirió por alrededor de 100 MHz. <br><br> 

Entonces, ¿qué pasó? Bueno, como se indicó desde el principio, se tuvo que hacer una consideración especial con respecto al grosor del PCB utilizado, este pequeño cambio es el principal sospechoso de qué salió mal. Aparte de eso, a pesar de mis mejores esfuerzos para dibujar el patrón con la mayor precisión posible, eso simplemente no fue posible. También vale la pena señalar que la simulación tenía un pequeño detalle, donde no era del todo posible simular la antena tal como se construyó, ya que la herramienta específica que me habría permitido insertar una cavidad en el PCB para simular un cable coaxial cruzando por éste estaba bloqueada debido al tipo de licencia, por lo que no se pudo hacer nada al respecto. Además, el documento original afirma que las simulaciones se hicieron utilizando el software HFFS de Ansys, por lo que hay más diferencias. <br><br>

## Conclusiones

<br>

Este es el primer proyecto práctico que he hecho que realmente se sintió como ingeniería de verdad. Aprendí mucho sobre cómo funcionan las antenas, cómo usar software de computadora para simular su comportamiento y, lo que es más importante, cómo construir una (todo el proyecto de construcción manual fue realmente genial), sin embargo, debido al hecho de que todo este proyecto se trataba más de copiar proceso de otras personas, me quedo con la duda de cómo el equipo original determinó qué medidas usaron para el patrón y cómo podría tratar de hacer mis propios diseños. <br><br> 

Al final, ¡lo más importante es que la antena funcionó! Pero, ¿cómo puede visualizar canales cuyas frecuencias están tan lejos de ~830 MHz, y con valores VSWR superiores a 50? La verdad es que las televisiones modernas están construidas para que puedan visualizar un canal incluso si su frecuencia tiene un VSWR por encima de 2, o 50 en este caso, por lo que la antena todavía funciona bastante bien para fines prácticos, incluso si la frecuencia para la que está optimizada no es realmente utilizada por ningún canal en el área de la Ciudad de México. <br><br>

Como se puede apreciar en el vídeo de YouTube, esta antena ahora se encuentra permanentemente conectada a la televisión de mi recámara para usos personales.

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

