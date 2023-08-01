---
# Don't forget to select the correct layout for the language
layout: post/post-es
title: "Cómo instalar Metasploitable en Mac con Parallels Desktop"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2023-08-01 00:20:00 -0600
dateUpdated: 
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: blog technology
# Always include the language of the post as THE FIRST category listed
categories: es technology
---

Si estás leyendo este artículo, probablemente ya sabes qué es una máquina virtual, qué es Metasploitable y otra terminología de software complicada; sin embargo, para que estemos en la misma página, definiré algunos conceptos importantes:
<br><br>

* Máquina virtual: Un sistema informático creado con software en una computadora física para emular la funcionalidad de otra computadora física independiente.[^1]
* Parallels Desktop: Un programa informático que te permite ejecutar máquinas virtuales en tu computadora. (Disponible para Mac y ChromeOS)
* Metasploitable: Una máquina virtual de Linux creada con el propósito de hackearla.
<br><br>

<h3> Sigue esta guía para instalar Metasploitable Linux en Mac con Parallels Desktop: </h3>
<br>

1. [Descarga][metasploitable-download] Metasploitable, tu Mac descomprimirá automáticamente el archivo y encontrarás esta carpeta en tu carpeta de Descargas: <br><br>

     ![Carpeta de Metasploitable](/assets/img/technology/metasploitable-guide/metasploitable-folder.png){:style="display:block; margin-left:auto; margin-right:auto; width:20%; height :20%; border-radius:15px"}<br>

     Verás estos archivos cuando abras la carpeta: <br><br>

     ![Carpeta Metasploitble, interior](/assets/img/technology/metasploitable-guide/metasploitable-folder-inside.png){:style="display:block; margin-left:auto; margin-right:auto; width:55%; height:35%; border-radius:15px"}<br>

2. Parallels tiene [esta guía][guía-parallels] sobre cómo convertir máquinas virtuales de terceros a Parallels, puedes probar y usarla, aunque en mi experiencia, probablemente no lo servirá, mostrará un mensaje sobre no ser capaz de detectar el sistema operativo e intentar hacer la conversión con la utilidad prl_convert. ¿Qué es la utilidad prl_convert? Lo averiguaremos en un momento. <br><br>

3. Abre la Terminal, si nunca la has usado, se ve así: <br>

     ![Icono de terminal](/assets/img/technology/terminal-guide/terminal.icon.png){:style="display:block; margin-left:auto; margin-right:auto; width:20%; height:20%; border-radius:15px"}

4. Escribe y ejecuta el siguiente comando: ``$ prl_convert ~/ruta/a/vmx --allow-no-os``, donde reemplazas ``~/ruta/a/vmx`` con tu ruta al archivo .vmx dentro de la carpeta Metasploitable, en mi caso sucede esto: <br><br>

     ![ejecutar comando](/assets/img/technology/metasploitable-guide/prl_convert-command-run.png){:style="display:block; margin-left:auto; margin-right:auto; width:75%; height:65%; border-radius:15px"} <br>

5. ¡Y tu Metasploitable VM está lista para ser utilizada!

<br><br>

<h3> Notas al pie: </h3>
[^1]: Según el Oxford Dictionary of English


[metasploitable-download]: https://information.rapid7.com/download-metasploitable-2017.html?LS=1631875&CS=web
[guía-parallels]: https://kb.parallels.com/en/124491
