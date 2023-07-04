---
# Don't forget to select the correct layout for the language
layout: post/post-es
title: "Guía de Comandos para la Terminal de Mac & Linux"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2022-03-11 10:42:20 -0600
dateUpdated:
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: blog technology
# Posts written in Spanish or Japanese must include the "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: es technology
---
![Terminal Icon](/assets/img/technology/terminal-guide/terminal.icon.png){:style="display:block; margin-left:auto; margin-right:auto; width:50%; height:50%; border-radius:15px"}
La Terminal! Aquella app mítica que tal vez te encuentres explorando las apps que hay en tu Mac o PC con Linux. Para la mayoría de las personas este
es un programa que probablemente nunca usarán, pero para un programador ese es el lugar donde vivirán por el resto de sus días. Aquí hay una lista
de comandos y shortcuts útiles para usar mientras se trabaja en la Terminal:
<br/><br/>

### Shortcuts:
* Tab -> Auto-completar nombres de archivos y directorios
* Ctrl + A -> Ir al inicio de la línea
* Ctrl + E -> Ir al final de la línea
* Ctrl + L -> Limpiar pantalla
* Ctrl + C -> Detener procesos en ejecución
<br/><br/>

### Básico:
* ``sudo`` -> Ejecutar con privilegios de seguridad de administrador/super-user
* ``man [cmd]`` -> Mostrar página del manual del comando especificado
* ``pwd`` -> Mostrar camino actual
* ``date`` -> Mostrar fecha actual
* ``cal`` -> Mostrar calendario del mes actual
<br/><br/>

### Manejo de directorios:
* ``cd [dir]`` -> Entrar a directorio, usa apóstrofes para nombres con espacios
* ``cd ..`` -> Retroceder de directorio
* ``cd ../..`` -> Retroceder dos directorios
* ``ls`` -> Mostrar lista de subdirectorios y archivos: `` -a`` -> También mostrar items ocultos,  `` -l`` -> Listado largo,  `` -h`` -> Mostrar tamaños de archivos,  `` -t`` -> Listar según modificados recientemente,  `` -s`` -> Acomodar por tamaños.
* ``mkdir [dir]`` -> Crear directorio
* ``rmdir [dir]`` -> Eliminar directorio, sólo funciona con directorios vacíos
* ``rm -r [dir]`` -> Eliminar directorios y sus contenidos
* ``mv [dir] [otherDir]`` -> Mover directorio a otro directorio o subdirectorio
* ``mv [dir] [newDirName]`` -> Renombrar directorio
<br/><br/>

### Manejo de archivos:
* ``./[exec]`` -> Correr archivo ejecutable
* ``open [file]`` -> Abrir archivo: `` -a`` -> Especificar app (Mac)
* ``cp [file] [dir]`` -> Copiar archivo a directorio
* ``rm [file]`` -> Eliminar archivo: `` -i`` -> Pedir confirmación, `` -f`` -> Forzar eliminación
* ``mv [file] [newfile]`` -> Renombrar archivo
* ``mv [file] [dir]`` -> Mover archivo a otro directorio o subdirectorio
* ``cat > [file]`` -> Crear archivo de texto e insertar texto, es recomendable especificar la extensión del archivo
* ``cat [file]`` -> Mostrar archivo de texto
* ``head [file]`` -> Mostrar las primeras 10 líneas de un archivo de texto: `` -n`` -> Mostrar primeras "n" líneas de un archivo de texto
* ``tail [file]`` -> Mostrar las últimas 10 líneas de un archivo de texto: `` -n`` -> Mostrar últimas "n" líneas de un archivo de texto
* ``wc [file]`` -> Contador de palabras, muestra el número de líneas, palabras y caracteres en ese orden: `` -l`` -> Muestra sólo el número de líneas, `` -w`` -> Muestra sólo el número de palabras, ``-c`` -> Muestra sólo el número de caracteres.
<br/><br/>

### Permisos:
* ``chmod`` ->  Cambia los permisos de un archivo, directorio, link o ejecutable. Usa códigos para activar diferentes configuraciones de permisos: r = 4, w = 2, x = 1, la suma va a generar el código para los permisos de cada uno de los tres grupos de permisos: usuarios, grupos y otros.
<br/><br/>

### Manejo de discos:
* ``diskutil`` -> Utilidad de Discos (Mac)
* ``cd /volumes/[drive]`` -> Accesar memorias USB, tarjetas SD o discos duros (Mac)
<br/><br/>

### Manejo de paquetes:
* ``port`` -> Administrador de paquetes MacPorts: ``install [package]`` -> Instalar paquete, ``uninstall [package]`` -> Desinstalar paquete (Mac)*
* ``brew`` -> Administrador de paquetes Homebrew : ``install [package]`` -> Instalar paquete, ``uninstall [package]`` -> Desinstalar paquete (Mac)*
* ``apt`` -> Administrador de paquetes Apt: ``install [package]`` -> Instalar paquete, ``remove [package]`` -> Desinstalar paquete (Linux: Ubuntu, Mint, Kali)
* ``apk`` -> Administrador de paquetes Apk: ``add [package]`` -> Instalar paquete, ``del [package]`` -> Desinstalar paquete (Linux: Alpine)
<br/><br/>

### Extra:
* ``shutdown`` -> Apagar la computadora, ``-h [hh:mm]`` -> Apagar la computadoraa una hora específica
* ``say [word(s)]`` -> Utilidad Text-to-speech (Mac)
* ``espeak [word(s)]`` -> Utilidad Text-to-speech (Linux)*
<br/><br/>

### Git:
* ``git init`` -> Inicializar repositorio.
* ``git add .`` -> Agregar todos los archivos que aún no están siendo monitoreados al repositorio
* ``git status`` -> Checar el estatus del repositorio
* ``git commit -m "[message]"`` -> Hacer una contribución al repositorio y agregar un mensaje
* ``git log`` -> Mostrar la bitácora de contribuciones
* ``git checkout .`` -> Revertir al estado de la última contribución
* ``git merge [branch]`` -> Combinar la rama actual con otra [branch]
<br/><br/>

*Usualmente no vienen pre-instalados con el sistema
