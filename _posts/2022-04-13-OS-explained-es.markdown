---
# Don't forget to select the correct layout for the language
layout: post-es
title: "Sistemas Operativos de Computadora Explicados"
author: "Diego Cuevas"
# Date format: YYYY-MM-DD HH:MM:SS +/-TTTT (24 hrs format)
# Writing the time and UTC offset is kinda necessary to properly arrange the posts in their respective indexes
date: 2022-04-13 00:57:00 -0500
dateUpdated:
# Recently created posts most have the "recent" tag followed by their category in the "tags" variable. Remove "recent" after a while
tags: recent technology
# Posts written in Spanish or Japanese must include the "es" or "jp" category respectively AS THE FIRST one listed. Then write its normal category
categories: es technology
---

![Computer OSs](/assets/img/os-image.jpeg){:style="display:block; margin-left:auto; margin-right:auto; width:50%; height:50%; border-radius:15px"} <br>

Un sistema operativo es el software subyacente que permite que una computadora sea realmente útil para los humanos. Sin éste, todos los diferentes componentes físicos de la computadora, como el CPU, GPU, RAM y la unidad de almacenamiento no tendrían ni idea de qué hacer y la computadora sería prácticamente inútil, aún si pagaste más de $2000 USD por ella. En este artículo voy a hablar un poco sobre ellos para que sepas lo que está pasando la próxima vez que veas a un PCtard y un Apple fanboy peleando por cuál es mejor.
<br><br>

Hoy en día, podemos dividir los sistemas operativos según el dispositivo para el que están diseñados, escritorio o móvil. Los principales sistemas operativos de escritorio son Microsoft Windows, macOS de Apple y las muchas variantes de Linux creadas por la comunidad open source. Comencemos con Linux, ya que es el más interesante de todos.
<br><br>

### Las maravillas de Linux
<br>

Linux es un sistema operativo relativamente desconocido entre la gente normal que no está realmente interesada en la tecnología, es un sistema operativo de código abierto, esto significa que CUALQUIER PERSONA puede descargar, usar, modificar y distribuir su código fuente con fines comerciales y no comerciales bajo los términos de su licencia. Los usuarios normales como tú y yo podemos contribuir a su código fuente sin tener que preocuparnos por violar el acuerdo de usuario de una empresa. El kernel de Linux se desarrolló originalmente como una copia gratuita de código abierto casi idéntica al sistema operativo UNIX de AT&T, razón por la cual a menudo se le llama sistema operativo UNIX-like.
<br><br>

Debido al enfoque de código abierto, existen varios sabores a menudo llamados "distribuciones" o "distros" que utilizan el kernel de Linux, estas distribuciones son independientes la una de la otra y pueden ser muy diferentes entre sí. Algunas de las distribuciones de escritorio más populares son [Debian][debian-website], [Ubuntu][ubuntu-website], [Fedora][fedora-website], [Mint][mint-website], [Kali][kali- website], [Arch][arch-website] y, más recientemente, [Chrome OS][chromeOs-website] han ido ganando terreno en los entornos educativos. Android, el sistema operativo detrás de casi todos los teléfonos inteligentes que no son de Apple en el mundo también usan el kernel de Linux, por lo que en el mundo móvil, Linux domina el mercado. Además, actualmente hay algunos intentos de llevar otros sistemas operativos basados ​​en Linux al mundo de los teléfonos inteligentes, como [Ubuntu Touch][ubuntuTouch-website], en caso de que no quieras estar a merced de Apple o Google.
<br><br>

Debido a que Linux es un sistema operativo "Hecho por la gente, para la gente", no oculta absolutamente nada, puedes cambiar lo que quieras de éste, sin embargo, esto no es necesariamente fácil de hacer, Linux tiene la reputación de ser confuso para los usuarios que vienen de usar otros sistemas operativos más mainstream y, aunque un usuario experto en tecnología probablemente no tendría problemas para acostumbrarse, la mayoría de las personas probablemente se sentirían intimidadas por éste. Es por eso que es más fácil quedarse con el que viene con su computadora, por ejemplo, el próximo sistema operativo que discutiremos en este artículo.
<br><br>

### La simplicidad de macOS
<br>

Algo muy interesante que pocas personas saben es que macOS y Linux son primos lejanos en el árbol genealógico UNIX-like. En el núcleo de macOS hay un sistema operativo de código abierto llamado [Darwin][darwin-repository], que al igual que Linux, se desarrolló como un sistema operativo UNIX-like sin ningún vínculo directo con UNIX. Debido a esto, macOS y Linux son sorprendentemente similares en su interior, para darse cuenta de esto, todo lo que hay que hacer es abrir la Terminal y ver cómo ambos pueden hacer esencialmente lo mismo.
<br><br>

Ok, pero entonces, ¿qué hace que macOS sea diferente? Prácticamente todo lo demás. Apple es una empresa de electrónicos para uso personal, y es bastante buena, así odies o ames a Apple, no puedes negar que los productos de Apple son muy populares, hay una razón para ello: su simplicidad. Los productos de Apple están hechos para que cualquier persona pueda usar sus productos independientemente de su experiencia con las computadoras y la Mac no es la excepción, cada componente del software que agrega una funcionalidad única a macOS está diseñado para hacer que la experiencia del usuario sea más fácil y cómoda, estos componentes no forman parte de Darwin y, como tales, no son de código abierto, por lo que solo Apple puede crearlos y modificarlos, con feedback ocasional de parte de los usuarios.
<br><br>

Darwin también es el núcleo de todos los demás sistemas operativos de Apple: iOS, iPadOS, watchOS y tvOS. Apple intenta que todos sus sistemas operativos sean coherentes entre sí, por lo que los usuarios de macOS pueden hacer cosas geniales, como usar su iPad como una segunda pantalla para su Mac, o compartir su teclado y mouse entre macOS y iPadOS al mismo tiempo, responder una llamada telefónica desde una Mac y otras utilidades interesantes que solo se pueden hacer dentro del ecosistema de Apple.
<br><br>

Sin embargo todos sabemos que los productos de Apple tienden a ser costosos, por lo que muchos usuarios prefieren comprar otras computadoras a un costo menor, estas computadoras dirigidas al público en general suelen venir con el sistema operativo más popular y usado del mundo, y ese es:
<br><br>

### El trono de Windows
<br>

Microsoft Windows es algo así como el rarito del grupo. No comparte ningún tipo de historia de desarrollo con Linux o macOS (excepto que se inspiró en el tatarabuelo de macOS, "System 1"). Windows fue lanzado por primera vez por Microsoft en 1985 para ser el sistema operativo gráfico predeterminado utilizado por todas las computadoras que no eran de Apple; dado que esas computadoras eran más baratas, Windows terminó siendo más utilizado, una tendencia que continúa hasta el día de hoy.
<br><br>

Windows no está construido sobre un núcleo UNIX-like como Linux o macOS, sino sobre MS-DOS (Microsoft Disk Operating System), lo que significa que a lo largo de toda su historia, Windows ha sido desarrollado completamente por Microsoft con poco respeto hacia el software de código abierto hasta hace poco tiempo. A pesar de esto, Windows es increíblemente útil, hay pocas cosas que Windows no puede hacer; debido a su amplia participación en el mercado, la mayoría de los desarrolladores de software piensan primero en que sus programas corran en Windows, ya que ahí es donde se encuentran todos los usuarios, por lo que comúnmente encontrarás muchas cosas en las que Windows es mejor que sus contrapartes, no porque realmente Windows sea el mejor de todos, sino porque los desarrolladores pasan una buena parte de su tiempo asegurándose de que su software funcione bien en Windows.
<br><br>

Windows nunca se ha tratado de funcionalidades especiales que ningún otro sistema operativo tiene, no es necesario atraer a los usuarios a Windows, es probable que independientemente de la empresa de fabricación que prefieran, la computadora seguirá usando Windows. Microsoft Windows se trata simplemente de completar el trabajo y, para ser justos, es bastante bueno en eso.
<br><br>

### Conclusión
<br>

Esta conclusión se basa en la información ya establecida y en mis propias opiniones y experiencias usando Linux, macOS y Windows.
<br><br>

Después de todo lo que he dicho quizás te estés preguntando: ¿Qué sistema operativo es mejor? Bueno, Linux y macOS son especialmente buenos para los programadores que desarrollan software de código abierto o aplicaciones móviles. En caso de que no lo supieras, ¡El internet corre en Linux!, por lo tanto tener un sistema operativo similar a UNIX puede ser útil, no es que Windows no pueda hacer todas estas cosas, como dije anteriormente, Windows puede hacer casi cualquier cosa, pero ciertamente no es una experiencia muy intuitiva o agradable, al menos en mi experiencia. Microsoft incluso lanzó recientemente algo llamado "Windows Subsystem for Linux", que básicamente emula el kernel de Linux en Windows para facilitar la vida de los programadores de Windows, pero aún así no es la misma experiencia que usar Linux o Darwin directamente.  Aunque la nueva Windows Terminal que salío recientemnte es bastante cool.
<br><br>

Windows también tiene sus puntos fuertes, por ejemplo, nadie puede negar que Windows es el mejor sistema operativo para los gamers. La mayoría de los juegos AAA sólo corren en Windows y con el soporte de los GPU de NVIDIA y AMD, Windows tiene el poder absoluto cuando se trata de juegos de alta intensidad.
<br><br>

Como dije en la introducción del artículo, es común ver PCtards (fanboys de PC) y fanboys de Apple peleando por cuál sistema operativo (y, por extensión, qué compañía de computadoras) es mejor. Mi recomendación para ti, querido lector, es que no seas como esos tipos. Windows, Linux y macOS tienen puntos muy buenos y malos, al final vivimos en un mundo libre donde deberías poder elegir el sistema operativo que mejor se adapte a tus necesidades o personalidad y no sentirte avergonzado por tu elección, así que tómalo con calma y no seas como esos tipos.
<br><br>

Ahora sabes qué tipo de sistemas operativos existen, sus diferencias e historias de fondo. ¡Ve y comparte el conocimiento!
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
