<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tipos de modelos pedagógicos
    figure.mb-0
      img(src='@/assets/curso/temas/t4/img01.png', alt='') 
    .cajon.c03.p-4.mb-4
      p.mb-0 Los modelos pedagógicos pueden adoptar diferentes formas según la manera en que conciben la enseñanza, el aprendizaje, el papel del instructor-tutor y la participación del aprendiz. Estas diferencias se reflejan en la forma de organizar las actividades, seleccionar los medios, orientar el aprendizaje y valorar sus resultados.
    p.mb-0 Entre los modelos que permiten reconocer estas diferentes formas de organizar la práctica formativa se encuentran el tradicional, tecnológico, espontaneísta y alternativo. Su análisis a partir de las dimensiones planteadas anteriormente permite identificar sus principales características y comprender cómo cada uno orienta las decisiones que se toman en un ambiente de enseñanza y aprendizaje.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Modelo pedagógico tradicional
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El modelo pedagógico tradicional se caracteriza por una enseñanza centrada en la transmisión de conocimientos. En este enfoque, el instructor-tutor ocupa un papel principal en la organización y orientación del proceso formativo, mientras que el aprendiz recibe, estudia y reproduce los conocimientos abordados.
        br
        p.mb-0 Los contenidos ocupan un lugar central y suelen organizarse a partir de conocimientos establecidos de una disciplina. La enseñanza puede apoyarse en la explicación, la exposición, la lectura y la práctica de ejercicios, mientras que el aprendizaje se evidencia principalmente mediante la capacidad para recordar y reproducir la información trabajada.
    p.mb-4 En este modelo, la relación entre el instructor-tutor y el aprendiz tiende a ser más directiva. El instructor-tutor establece qué se aprende, cómo se desarrolla la actividad y qué conocimientos deben ser demostrados, mientras que el aprendiz sigue las orientaciones propuestas y participa en las actividades previstas.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Características del modelo pedagógico tradicional
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Aspecto
                th(data-aos="fade-down")(style= "width: 70%") Características
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Propósito
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Transmitir conocimientos y contenidos considerados fundamentales para la formación.
              tr
                td(data-aos="fade-down") Contenidos
                td(data-aos="fade-down") Conocimientos establecidos, principalmente de carácter conceptual y disciplinar.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Papel del instructor-tutor
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Dirige, explica, organiza y controla el desarrollo del proceso formativo.
              tr
                td(data-aos="fade-down") Papel del aprendiz
                td(data-aos="fade-down") Recibe, estudia, practica y reproduce los conocimientos adquiridos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estrategias y medios
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Exposición, explicación, lectura, demostración y ejercicios de práctica.
              tr
                td(data-aos="fade-down") Evaluación
                td(data-aos="fade-down") Se orienta principalmente a comprobar la adquisición y reproducción de los conocimientos.
    p.mb-0 El modelo tradicional puede resultar pertinente en situaciones en las que se requiere presentar, organizar o explicar información, especialmente cuando esta constituye una base necesaria para desarrollar aprendizajes posteriores. Sin embargo, cuando se utiliza como única forma de orientar la formación, puede limitar las oportunidades para que el aprendiz explore, tome decisiones, construya conocimiento y aplique lo aprendido en situaciones diversas.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Modelo pedagógico tecnológico
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img04.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3 El modelo pedagógico tecnológico surge como una evolución del modelo tradicional, al incorporar una mayor planificación del proceso formativo y una orientación hacia el cumplimiento de objetivos definidos y medibles. Aunque mantiene una participación importante del instructor-tutor en la organización de la enseñanza, incorpora actividades prácticas y procedimientos más estructurados.
        .row.align-items-center.mb-3
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t4/img03.svg', alt='')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") En este modelo, los contenidos corresponden a saberes disciplinares actualizados, preparados y organizados para alcanzar los objetivos establecidos. Además de los conocimientos conceptuales, se concede importancia al desarrollo de destrezas mediante actividades que combinan la exposición con la práctica.
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-0
          p.mb-0 El instructor-tutor orienta y dirige las actividades, mientras que el aprendiz desarrolla de manera sistemática las actividades programadas. La evaluación busca medir los aprendizajes alcanzados mediante procedimientos definidos, con énfasis en la comparación entre los resultados iniciales y finales.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Características del modelo pedagógico tecnológico
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Aspecto
                th(data-aos="fade-down")(style= "width: 70%") Características
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Propósito
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alcanzar una formación eficaz mediante objetivos previamente definidos.
              tr
                td(data-aos="fade-down") Contenidos
                td(data-aos="fade-down") Saberes disciplinares actualizados, con importancia de los conocimientos conceptuales y las destrezas.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Papel del instructor-tutor
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Planifica, explica, dirige y organiza las actividades de acuerdo con los objetivos establecidos.
              tr
                td(data-aos="fade-down") Papel del aprendiz
                td(data-aos="fade-down") Desarrolla de manera sistemática las actividades programadas y participa en prácticas orientadas.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estrategias y medios
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Exposición, demostración, prácticas guiadas, secuencias estructuradas y recursos didácticos.
              tr
                td(data-aos="fade-down") Evaluación
                td(data-aos="fade-down") Medición de los aprendizajes mediante procedimientos definidos, como pruebas iniciales y finales.
    p.mb-0 A diferencia del modelo tradicional, el modelo tecnológico incorpora una mayor planificación, estructuración y orientación hacia resultados definidos. Sin embargo, el proceso continúa estando principalmente organizado por el instructor-tutor, por lo que las ideas e intereses del aprendiz no ocupan todavía un lugar central.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Modelo pedagógico espontaneísta
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img05.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4 El modelo pedagógico espontaneísta desplaza el protagonismo hacia el aprendiz y concede especial importancia a sus intereses, a la actividad y al descubrimiento. En este enfoque, el aprendizaje parte de situaciones cercanas a la realidad del aprendiz y busca favorecer el desarrollo de destrezas y actitudes.
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-0
          p.mb-0 La enseñanza se desarrolla mediante actividades abiertas y flexibles que permiten al aprendiz explorar, descubrir y construir respuestas a partir de sus propias experiencias. El instructor-tutor asume un papel menos directivo y acompaña la dinámica del grupo, favoreciendo la participación y el desarrollo de las actividades.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Características del modelo pedagógico espontaneísta
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Aspecto
                th(data-aos="fade-down")(style= "width: 70%") Características
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Propósito
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Favorecer el aprendizaje a partir de la realidad inmediata del aprendiz.
              tr
                td(data-aos="fade-down") Contenidos
                td(data-aos="fade-down") Elementos presentes en la realidad cercana, con énfasis en destrezas y actitudes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Papel del instructor-tutor
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Acompaña y coordina la dinámica general, con una intervención menos directiva.
              tr
                td(data-aos="fade-down") Papel del aprendiz
                td(data-aos="fade-down") Participa activamente, explora y descubre a partir de sus experiencias e intereses.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estrategias y medios
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Actividades abiertas y flexibles, exploración, descubrimiento y trabajo grupal.
              tr
                td(data-aos="fade-down") Evaluación
                td(data-aos="fade-down") Se apoya principalmente en la observación de las destrezas y actitudes desarrolladas durante las actividades.
    p.mb-0 Este modelo representa un cambio frente a los modelos tradicional y tecnológico, al otorgar mayor protagonismo al aprendiz y a su actividad. Sin embargo, su énfasis en la espontaneidad también plantea el reto de mantener una orientación que permita articular las experiencias del aprendiz con los propósitos de formación.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Modelo pedagógico alternativo
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img06.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-3 El modelo pedagógico alternativo se centra en la construcción progresiva del conocimiento por parte del aprendiz. En este enfoque, el aprendizaje parte de problemas o situaciones que permiten relacionar diferentes fuentes de conocimiento y avanzar desde comprensiones iniciales hacia explicaciones más complejas.
        .row.align-items-center.mb-3
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t4/img07.svg', alt='')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") El aprendiz participa activamente en procesos de investigación, análisis y construcción de conocimiento, mientras que el instructor-tutor acompaña y orienta el proceso. Las ideas y los intereses del aprendiz adquieren relevancia, pues se consideran como punto de partida para favorecer la evolución de sus conocimientos.
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-0
          p.mb-0 Los contenidos integran diferentes referentes, entre ellos los conocimientos disciplinares, los saberes cotidianos y las problemáticas del contexto. La evaluación se desarrolla de manera sistemática durante el proceso y permite recoger evidencias sobre la evolución del aprendizaje y realizar ajustes cuando sea necesario.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Características del modelo pedagógico alternativo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Aspecto
                th(data-aos="fade-down")(style= "width: 70%") Características
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Propósito
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Favorecer el enriquecimiento progresivo del conocimiento y la comprensión de situaciones de manera cada vez más compleja.
              tr
                td(data-aos="fade-down") Contenidos
                td(data-aos="fade-down") Conocimiento integrado a partir de referentes disciplinares, cotidianos y problemáticas del contexto.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Papel del instructor-tutor
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Orienta, acompaña y favorece el desarrollo de procesos de investigación y construcción de conocimiento.
              tr
                td(data-aos="fade-down") Papel del aprendiz
                td(data-aos="fade-down") Participa activamente como constructor y reconstructor de su conocimiento.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estrategias y medios
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Investigación, trabajo en torno a problemas y actividades organizadas progresivamente.
              tr
                td(data-aos="fade-down") Evaluación
                td(data-aos="fade-down") Realiza seguimiento sistemático del proceso mediante diferentes instrumentos y evidencias.
    p.mb-0 En este modelo, la formación se organiza alrededor de la actividad del aprendiz, la investigación y la construcción progresiva del conocimiento. Esto permite establecer una relación más estrecha entre los aprendizajes, las ideas del aprendiz y las situaciones que se abordan durante el proceso formativo.
    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Coexistencia de modelos en la práctica real
    p En la práctica formativa, es poco frecuente encontrar un modelo pedagógico aplicado de manera completamente pura. Un mismo instructor-tutor puede incorporar elementos de diferentes modelos según el propósito de la actividad, las características del grupo, los contenidos y las necesidades del proceso de formación.
    p.mb-4 Por ejemplo, una experiencia formativa puede combinar diferentes formas de trabajo:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Explicación breve")
            .col-12.mb-4.mb-md-0
              p.mb-0 Para presentar un concepto o proporcionar información de base.
          .row(numero="2" titulo="Práctica guiada")
            .col-12.mb-4.mb-md-0
              p.mb-0 Para que el aprendiz aplique procedimientos con orientación del instructor-tutor.
          .row(numero="3" titulo="Trabajo colaborativo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Para analizar una situación y construir respuestas conjuntamente.
          .row(numero="4" titulo="Resolución de problemas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Para aplicar los conocimientos en una situación concreta y proponer soluciones.
      .col-lg-4.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img08.jpg', alt='')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c03.color-primario.p-4
          p.mb-0 Esta combinación no constituye necesariamente una dificultad. Lo importante es que responda a una decisión intencionada y coherente con los propósitos de formación. Los cuatro modelos no deben entenderse como categorías rígidas, sino como referentes que permiten reconocer diferentes características presentes en las prácticas formativas.
    p.mb-4 Por ello, la transformación de la práctica puede realizarse de manera progresiva. Algunos cambios pueden consistir en:
    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t4/img09.svg", alt="").img70
          p.text-center.mb-0 Incorporar preguntas abiertas que promuevan la participación.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t4/img10.svg", alt="").img70
          p.text-center.mb-0 Proponer actividades de trabajo colaborativo.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t4/img11.svg", alt="").img70
          p.text-center.mb-0 Plantear situaciones problema relacionadas con el contexto.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t4/img12.svg", alt="").img70
          p.text-center.mb-0 Sustituir algunas pruebas centradas únicamente en la reproducción de información por evidencias del proceso de aprendizaje.
    p.mb-4 La coexistencia de modelos permite comprender que una estrategia puede ser pertinente en una situación y no necesariamente en otra. Por esta razón, el instructor-tutor debe analizar las características de cada situación formativa y seleccionar los elementos que contribuyan al logro de los resultados de aprendizaje.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") Reflexión para el instructor-tutor
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c03.px-4.py-3.h-100.w-100.align-items-center
          h5.mb-4 Al revisar una sesión formativa reciente, se pueden identificar:
          .tarjeta.tarjeta--blanca.px-3.py-2.m-0
            ul.lista-ul--color.lista-ul
              li 
                i.fas.fa-comment-dots
                p.mb-0 ¿Qué características de los cuatro modelos están presentes?
              li 
                i.fas.fa-comment-dots
                p.mb-0 ¿Cuál tiene mayor presencia?
              li 
                i.fas.fa-comment-dots
                p.mb-0 ¿La combinación responde a una decisión consciente o a la costumbre?
              li 
                i.fas.fa-comment-dots
                p.mb-0 ¿Qué podría ajustarse para favorecer una participación más activa del aprendiz?
      .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img13.svg', alt='') 
    separador
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Modelos y estrategias pedagógicas centradas en el estudiante
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img15.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3 Centrar la formación en el estudiante implica reconocerlo como un participante activo del proceso de aprendizaje. Esto significa que no se limita a recibir información, sino que analiza, relaciona, aplica, construye y utiliza conocimientos para responder a diferentes situaciones.
        .row.align-items-center.mb-2
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t4/img14.svg', alt='')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") En este enfoque, el proceso formativo se organiza teniendo en cuenta las características, conocimientos previos, intereses y necesidades del estudiante. En el contexto del SENA, este papel corresponde al aprendiz, quien participa activamente en las experiencias propuestas y desarrolla progresivamente mayor autonomía frente a su aprendizaje.
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-0
          p.mb-0 El cambio también implica una transformación en el papel del instructor-tutor. Su función no se limita a transmitir información, sino que comprende la planeación de experiencias de aprendizaje, la orientación de actividades, el acompañamiento y la retroalimentación.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") Algunas características de una formación centrada en el estudiante son:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img16.svg' alt='AvatarTop')
          h4.text-center Participación activa
          p.text-center El estudiante interviene en las actividades y toma decisiones relacionadas con su aprendizaje.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img17.svg' alt='AvatarTop')
          h4.text-center Relación con los conocimientos previos
          p.text-center Los nuevos aprendizajes se vinculan con experiencias y conocimientos que ya posee.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img18.svg' alt='AvatarTop')
          h4.text-center Aplicación en situaciones concretas
          p.text-center Los conocimientos se utilizan para analizar situaciones, resolver problemas o desarrollar productos.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img19.svg' alt='AvatarTop')
          h4.text-center Autonomía
          p.text-center El estudiante asume progresivamente responsabilidad sobre su proceso de aprendizaje.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img20.svg' alt='AvatarTop')
          h4.text-center Interacción
          p.text-center Se promueve el intercambio de ideas y la construcción conjunta mediante actividades individuales y colaborativas.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img21.svg' alt='AvatarTop')
          h4.text-center Retroalimentación
          p.text-center La valoración del aprendizaje proporciona información para reconocer avances y aspectos por fortalecer.
    p.mb-4 Para favorecer estas características, pueden utilizarse diferentes estrategias pedagógicas, entre ellas:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Estrategias pedagógicas centradas en el estudiante
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Estrategia
                th(data-aos="fade-down")(style= "width: 70%") Aplicación en la formación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estudio de caso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Analizar una situación concreta y plantear alternativas de solución.
              tr
                td(data-aos="fade-down") Aprendizaje basado en problemas
                td(data-aos="fade-down") Resolver un problema como punto de partida para buscar y aplicar conocimientos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aprendizaje basado en proyectos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Desarrollar un producto o solución a partir de una situación o necesidad.
              tr
                td(data-aos="fade-down") Aprendizaje colaborativo
                td(data-aos="fade-down") Construir conocimientos mediante la interacción y el trabajo conjunto.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Investigación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Indagar, consultar fuentes, analizar información y construir respuestas frente a una pregunta o situación.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img22.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Estas estrategias no deben seleccionarse únicamente porque promuevan la participación. Su pertinencia depende de los resultados de aprendizaje, las características de los estudiantes, el tipo de contenido, los recursos disponibles y las condiciones del proceso formativo.
    p.mb-0 De esta manera, centrar la formación en el estudiante no significa eliminar la orientación del instructor-tutor, sino reorganizar su papel y las experiencias de aprendizaje para que el estudiante tenga una participación activa y pueda aplicar lo aprendido en diferentes situaciones.
    separador
    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.7 Un mismo objetivo, cuatro formas de enseñar
    p Un mismo propósito de formación puede desarrollarse de maneras diferentes según el modelo pedagógico que oriente la práctica. La diferencia no está necesariamente en el qué se aprende, sino en la manera de organizar la enseñanza, la participación del aprendiz, las actividades y la evaluación.
    p.mb-4 Para reconocer estas diferencias, se plantea una situación común: aprender a elaborar una propuesta de solución frente a una necesidad del contexto productivo.
    .desktop
      .row.mb-4
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c03(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img23.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Tradicional
                p.mb-0 El instructor-tutor explica los conceptos y procedimientos necesarios para elaborar una propuesta. El aprendiz estudia la información, sigue las orientaciones y presenta un ejercicio para demostrar lo aprendido.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img24.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Tecnológico
                p.mb-0 El instructor-tutor establece objetivos y una secuencia de actividades. El aprendiz desarrolla ejercicios y prácticas guiadas que le permiten avanzar progresivamente hasta elaborar la propuesta.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img25.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Espontaneísta
                p.mb-0 El aprendiz parte de una situación cercana a su realidad, explora diferentes alternativas y desarrolla la propuesta a partir de sus intereses y experiencias. El instructor-tutor acompaña el proceso y orienta las actividades.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img26.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Alternativo
                p.mb-0 El instructor-tutor plantea una problemática del contexto. El aprendiz formula preguntas, consulta diferentes fuentes, contrasta información, construye alternativas y desarrolla progresivamente una propuesta de solución. La evaluación recoge evidencias del proceso.
    .movil.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img27.png', alt='')
            h4 Tradicional
            p.mb-0 El instructor-tutor explica los conceptos y procedimientos necesarios para elaborar una propuesta. El aprendiz estudia la información, sigue las orientaciones y presenta un ejercicio para demostrar lo aprendido.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img28.png', alt='')
            h4 Tecnológico
            p.mb-0 El instructor-tutor establece objetivos y una secuencia de actividades. El aprendiz desarrolla ejercicios y prácticas guiadas que le permiten avanzar progresivamente hasta elaborar la propuesta.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img29.png', alt='')
            h4 Espontaneísta
            p.mb-0 El aprendiz parte de una situación cercana a su realidad, explora diferentes alternativas y desarrolla la propuesta a partir de sus intereses y experiencias. El instructor-tutor acompaña el proceso y orienta las actividades.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img30.png', alt='')
            h4 Alternativo
            p.mb-0 El instructor-tutor plantea una problemática del contexto. El aprendiz formula preguntas, consulta diferentes fuentes, contrasta información, construye alternativas y desarrolla progresivamente una propuesta de solución. La evaluación recoge evidencias del proceso.
    p.mb-4 Aunque el objetivo de aprendizaje es el mismo, cada modelo modifica la experiencia formativa:
    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center Tradicional
          p.text-center.mb-0 Predomina la transmisión de conocimientos.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-acento-contenido.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center Tecnológico
          p.text-center.mb-0 Se priorizan la planificación, la secuencia y el logro de objetivos definidos.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-secundario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center Espontaneísta
          p.text-center.mb-0 Adquieren relevancia la experiencia, los intereses y la exploración del aprendiz.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.c01.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 4
          h4.text-center Alternativo
          p.text-center.mb-0 Se integran la investigación, la resolución de problemas y la construcción progresiva del conocimiento.
    p.mb-4 Este ejercicio permite reconocer que un mismo resultado puede alcanzarse mediante diferentes formas de organizar la formación. La elección de un modelo influye en el papel del instructor-tutor, la participación del aprendiz, las estrategias utilizadas y la manera de valorar el aprendizaje.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img31.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-2
          h5.mb-0(data-aos="fade-down") Para pensar la práctica
          p.mb-0 ¿Qué cambiaría en una actividad que desarrolla habitualmente el instructor-tutor si se modificara la forma de abordar el mismo objetivo?
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
