<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Estrategias metodológicas asociadas a cada modelo
    figure.mb-0
      img(src='@/assets/curso/temas/t5/img01.jpg', alt='') 
    .cajon.c03.p-4.mb-4
      p.mb-0 Los modelos pedagógicos se concretan en las decisiones que se toman para orientar las experiencias de enseñanza y aprendizaje. Entre estas decisiones se encuentra la selección de las estrategias metodológicas, entendidas como formas de organizar y desarrollar las actividades para favorecer el logro de los resultados de aprendizaje.
    p La estrategia seleccionada debe guardar relación con el propósito de la formación, las características de los aprendices y las condiciones en las que se desarrolla el proceso. Por esta razón, una misma estrategia puede adquirir diferentes características según el modelo pedagógico que oriente su aplicación.
    p.mb-4 Para facilitar su comprensión, las estrategias se organizan en dos grupos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img02.svg', alt='')(style="width: 85%")
            h4.text-center Modelos tradicional y tecnológico
            p.mb-4.text-center(data-aos="fade-down") Presentan mayor orientación del instructor-tutor y una organización estructurada de las actividades.
          .col-xl.col-lg-6.tarjeta.tarjeta.c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img03.svg', alt='')(style="width: 85%")
            h4.text-center Modelos espontaneísta y alternativo
            p.mb-0.text-center(data-aos="fade-down") Otorgan mayor participación al aprendiz y favorecen actividades de exploración, investigación, resolución de problemas y construcción de conocimiento.
    p.mb-0 La relación entre modelo pedagógico y estrategia metodológica no debe entenderse como una correspondencia rígida. La selección depende de las características de cada situación formativa y de aquello que se espera que el aprendiz logre. Por ello, el instructor-tutor puede combinar diferentes estrategias siempre que exista coherencia entre el propósito de aprendizaje, las actividades propuestas y la forma de valorar los resultados.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Estrategias del modelo tradicional y tecnológico
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img04.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los modelos pedagógicos tradicional y tecnológico se caracterizan por una mayor orientación del instructor-tutor en la organización del proceso formativo. Por esta razón, las estrategias metodológicas asociadas con estos modelos suelen presentar una estructura definida, en la que se establecen previamente los contenidos, las actividades y las formas de valorar los aprendizajes.
        br
        br
        p.mb-0 Aunque ambos modelos comparten algunas características, existen diferencias en la manera de desarrollar las actividades. El modelo tradicional se apoya principalmente en la transmisión organizada de conocimientos, mientras que el modelo tecnológico incorpora una mayor planificación, secuenciación de las actividades y orientación hacia objetivos definidos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") En el modelo tradicional pueden utilizarse estrategias como:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img05.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img06.svg", alt="").img100.m-auto
                  h4.text-center Exposición o clase magistral
                  p.text-center Permite presentar y organizar información sobre un tema.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img07.svg", alt="").img100.m-auto
                  h4.text-center Lectura de textos
                  p.text-center Facilita el acercamiento a contenidos previamente estructurados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img08.svg", alt="").img100.m-auto
                  h4.text-center Ejercicios de repaso
                  p.text-center Permiten reforzar conceptos o procedimientos trabajados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img09.svg", alt="").img100.m-auto
                  h4.text-center Dictado o toma de apuntes
                  p.text-center Favorece el registro de información presentada por el instructor-tutor.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img10.svg", alt="").img100.m-auto
                  h4.text-center Pruebas o exámenes
                  p.text-center Permiten comprobar la adquisición de determinados conocimientos.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0 En el modelo tecnológico, las estrategias incorporan una mayor estructuración de las actividades y pueden combinar la explicación con la práctica. Entre ellas se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Exposición con práctica guiada")
            .col-12.mb-4.mb-md-0
              p.mb-0 Presenta información y orienta al aprendiz en su aplicación.
          .row(numero="2" titulo="Demostración")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite presentar un procedimiento antes de que el aprendiz lo ejecute.
          .row(numero="3" titulo="Descubrimiento dirigido")
            .col-12.mb-4.mb-md-0
              p.mb-0 Propone una secuencia de actividades para que el aprendiz alcance determinados aprendizajes con orientación.
          .row(numero="4" titulo="Ejercicios de aplicación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permiten utilizar los conocimientos adquiridos en situaciones previamente estructuradas.
          .row(numero="5" titulo="Simulaciones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Posibilitan practicar determinados procedimientos o situaciones bajo condiciones controladas.
      .col-lg-4.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img11.jpg', alt='')
    p.mb-4 Las estrategias anteriores presentan algunas de las formas de trabajo más características de los modelos tradicional y tecnológico. Su aplicación puede variar de acuerdo con el propósito de la actividad, las características de los aprendices y los resultados de aprendizaje esperados.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Estrategias metodológicas de los modelos tradicional y tecnológico
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Modelo
                th(data-aos="fade-down")(style= "width: 40%") Estrategias
                th(data-aos="fade-down")(style= "width: 40%") Propósito principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tradicional
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Exposición, lectura de textos, ejercicios de repaso, dictado y pruebas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Presentar, reforzar y comprobar la adquisición de conocimientos.
              tr
                td(data-aos="fade-down") Tecnológico
                td(data-aos="fade-down") Exposición con práctica guiada, demostraciones, descubrimiento dirigido, ejercicios de aplicación y simulaciones.
                td(data-aos="fade-down") Organizar el aprendizaje mediante actividades secuenciadas y orientadas al logro de objetivos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img12.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Los recursos utilizados también pueden variar según la estrategia. En el modelo tradicional predominan recursos como el libro de texto, el tablero y los apuntes, mientras que el modelo tecnológico puede incorporar presentaciones, guías estructuradas, videos didácticos y <em>software</em> educativo.
    p.mb-4 Es importante precisar que estas estrategias no deben considerarse inadecuadas por pertenecer a modelos con mayor orientación del instructor-tutor. Una exposición puede ser útil para introducir un tema, presentar información organizada o aclarar un concepto complejo. De igual manera, una práctica guiada puede ser pertinente cuando se requiere que el aprendiz desarrolle un procedimiento siguiendo una secuencia determinada.
    .row.justify-content-center.mb-0
      .col-12
        .cajon.cajon.c03.color-primario.p-4
          p.mb-0 Por ello, la pertinencia de una estrategia no depende únicamente del modelo pedagógico al que se asocia, sino de la intención con la que se utiliza y de su relación con el resultado de aprendizaje. Una misma estrategia puede combinarse con otras para generar experiencias formativas más completas.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Estrategias del modelo espontaneísta y alternativo
    p.mb-4 Los modelos espontaneísta y alternativo otorgan mayor protagonismo al aprendiz y conciben el aprendizaje como un proceso en el que la actividad, la exploración y la construcción del conocimiento tienen un papel relevante. Sin embargo, presentan diferencias en la manera de organizar estas experiencias. Mientras el modelo espontaneísta se orienta hacia el descubrimiento a partir de la realidad y los intereses del aprendiz, el modelo alternativo incorpora una investigación más estructurada y una progresión intencionada del conocimiento.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") En el modelo <b>espontaneísta</b> pueden utilizarse estrategias como:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img13.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img14.svg", alt="").img100.m-auto
                  h4.text-center Salidas de campo
                  p.text-center Permiten explorar directamente situaciones o espacios relacionados con el aprendizaje.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img15.svg", alt="").img100.m-auto
                  h4.text-center Observación libre
                  p.text-center Favorece la exploración de situaciones, objetos o fenómenos a partir de la iniciativa del aprendiz.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img16.svg", alt="").img100.m-auto
                  h4.text-center Debates
                  p.text-center Propician el intercambio de ideas y la expresión de diferentes puntos de vista.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img17.svg", alt="").img100.m-auto
                  h4.text-center Dramatizaciones
                  p.text-center Permiten representar situaciones y explorar diferentes formas de abordarlas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img18.svg", alt="").img100.m-auto
                  h4.text-center Juegos didácticos
                  p.text-center Incorporan dinámicas de juego para favorecer la participación y el aprendizaje.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img19.svg", alt="").img100.m-auto
                  h4.text-center Talleres creativos
                  p.text-center Promueven la exploración y la producción a partir de las experiencias e intereses de los aprendices.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img20.svg", alt="").img100.m-auto
                  h4.text-center Proyectos cortos
                  p.text-center Permiten desarrollar actividades orientadas a un propósito concreto, a partir de situaciones cercanas al contexto.
    p Estas estrategias favorecen la participación y permiten partir de los intereses y experiencias de los aprendices. Sin embargo, cuando las actividades carecen de una orientación suficiente, pueden presentarse aprendizajes poco articulados o superficiales. Por esta razón, el modelo alternativo incorpora una organización más intencionada del proceso.
    p.mb-4 En el modelo alternativo, las estrategias se relacionan con la investigación, el análisis de problemas y la construcción progresiva del conocimiento. Entre las más representativas se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img21.svg' alt='AvatarTop')
          h4.text-center Aprendizaje basado en problemas (ABP)
          p.text-center Parte de una situación problemática que requiere analizar información, formular posibles explicaciones y construir alternativas de solución.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img22.svg' alt='AvatarTop')
          h4.text-center Aprendizaje basado en proyectos
          p.text-center Organiza el proceso alrededor de un proyecto cuyo producto final integra los aprendizajes desarrollados.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img23.svg' alt='AvatarTop')
          h4.text-center Estudio de caso
          p.text-center Plantea una situación real o simulada que requiere análisis, toma de decisiones y argumentación.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img24.svg' alt='AvatarTop')
          h4.text-center Aprendizaje colaborativo y cooperativo
          p.text-center Organiza el trabajo conjunto para favorecer la construcción de aprendizajes y la responsabilidad individual y grupal.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img25.svg' alt='AvatarTop')
          h4.text-center Portafolio de evidencias
          p.text-center Permite recopilar y organizar productos desarrollados durante el proceso para realizar seguimiento a la evolución del aprendizaje.
    p.mb-4 En conjunto, estas estrategias reflejan diferentes formas de promover la participación activa del aprendiz y de favorecer la construcción del conocimiento. La siguiente tabla permite sintetizar las estrategias más representativas de los modelos espontaneísta y alternativo y reconocer la orientación que caracteriza a cada uno.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Estrategias metodológicas de los modelos espontaneísta y alternativo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Modelo
                th(data-aos="fade-down")(style= "width: 40%") Estrategias
                th(data-aos="fade-down")(style= "width: 40%") Orientación principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Espontaneísta
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Salidas de campo, observación libre, debates, dramatizaciones, juegos didácticos, talleres creativos y proyectos cortos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Exploración, descubrimiento y participación a partir de la realidad y los intereses del aprendiz.
              tr
                td(data-aos="fade-down") Alternativo
                td(data-aos="fade-down") ABP, aprendizaje basado en proyectos, estudio de caso, aprendizaje colaborativo y cooperativo, portafolio de evidencias.
                td(data-aos="fade-down") Investigación, análisis de problemas, construcción progresiva del conocimiento y seguimiento del proceso.
    p.mb-0 Las estrategias presentadas permiten reconocer diferencias importantes entre ambos modelos, pero no deben entenderse como recursos exclusivos de uno u otro. Su selección debe considerar el resultado de aprendizaje, las características de los aprendices, el tiempo disponible, los recursos y las condiciones del proceso formativo.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Criterios para seleccionar la estrategia metodológica
    p La selección de una estrategia metodológica requiere considerar las características de la situación formativa y no depender únicamente de la preferencia del instructor-tutor o de la estrategia asociada a un determinado modelo pedagógico. Una misma estrategia puede resultar pertinente en diferentes contextos, siempre que responda a lo que se espera lograr y a las condiciones en las que se desarrolla el proceso de formación.
    p.mb-4 Para tomar esta decisión de manera fundamentada, pueden considerarse los siguientes criterios:
    .row.justify-content-center.aling-items-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="Resultado de aprendizaje")
            .col-12.mb-0.mb-md-0
              p Permite determinar qué competencia se busca desarrollar y qué tipo de desempeño debe evidenciar el aprendiz. Por ejemplo, cuando se requiere analizar una situación y tomar decisiones, puede resultar pertinente el estudio de caso; cuando se busca desarrollar un producto que integre diferentes aprendizajes, puede considerarse el aprendizaje basado en proyectos.
          .row(titulo="Perfil del grupo")
            .col-12.mb-0.mb-md-0
              p Comprende aspectos como el nivel de autonomía, los conocimientos previos y la disposición para el trabajo colaborativo. Estos elementos permiten valorar qué tan estructurada debe ser la estrategia y qué nivel de participación puede asumir el aprendiz.
          .row(titulo="Tiempo y recursos disponibles")
            .col-12.mb-0.mb-md-0
              p Es necesario considerar el tiempo destinado a la actividad y los recursos físicos o tecnológicos disponibles. Algunas estrategias requieren un desarrollo prolongado o herramientas específicas, mientras que otras pueden implementarse en periodos más cortos.
          .row(titulo="Coherencia institucional")
            .col-12.mb-0.mb-md-0
              p La estrategia seleccionada debe guardar relación con el modelo pedagógico y con los lineamientos establecidos en el plan de formación. De esta manera, las actividades propuestas mantienen correspondencia con las orientaciones institucionales.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img26.png', alt='')
    p Estos criterios no deben analizarse de manera aislada. La elección de una estrategia metodológica surge de considerar conjuntamente el resultado de aprendizaje, las características de los aprendices, las condiciones disponibles y los referentes institucionales.
    p.mb-4 La relación entre estos criterios se resume en la siguiente tabla:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Criterios para la selección de estrategias metodológicas
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Criterio
                th(data-aos="fade-down")(style= "width: 70%") Pregunta orientadora
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Resultado de aprendizaje
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Qué competencia se busca desarrollar y qué desempeño debe evidenciar el aprendiz?
              tr
                td(data-aos="fade-down") Perfil del grupo
                td(data-aos="fade-down") ¿Qué nivel de autonomía, conocimientos previos y disposición para el trabajo colaborativo tienen los aprendices?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo y recursos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿De cuánto tiempo se dispone y con qué recursos físicos o tecnológicos se cuenta?
              tr
                td(data-aos="fade-down") Coherencia institucional
                td(data-aos="fade-down") ¿La estrategia guarda relación con el modelo pedagógico y los lineamientos del plan de formación?
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Clasificación de las estrategias
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img27.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-4
          p.mb-0 Las estrategias metodológicas pueden clasificarse según la intención con la que se utilizan y el papel que cumplen dentro del proceso formativo. Desde esta perspectiva, se reconocen tres grupos: estrategias de enseñanza, estrategias de aprendizaje y estrategias de evaluación.
        .row.align-items-center.mb-0
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t5/img28.svg', alt='')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") Esta clasificación permite diferenciar las acciones que desarrolla el instructor-tutor de aquellas que realiza el aprendiz y de los procedimientos utilizados para recoger evidencias y ofrecer retroalimentación. Aunque cumplen funciones diferentes, los tres tipos se relacionan y contribuyen al desarrollo articulado del proceso formativo.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Estrategias de enseñanza
    p.mb-4 Son las acciones y procedimientos que planifica y desarrolla el instructor-tutor para presentar información, organizar el ambiente de aprendizaje y facilitar la comprensión de los contenidos. Entre ellas se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Exposición estructurada")
            .col-12.mb-4.mb-md-0
              p.mb-0 Presenta información organizada sobre un tema.
          .row(numero="2" titulo="Preguntas guía")
            .col-12.mb-4.mb-md-0
              p.mb-0 Orientan la reflexión y permiten dirigir la atención hacia aspectos relevantes.
          .row(numero="3" titulo="Organizadores previos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Proporcionan referentes que facilitan la relación entre los conocimientos previos y los nuevos aprendizajes.
          .row(numero="4" titulo="Demostraciones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Presentan la manera de realizar un procedimiento o desarrollar una actividad.
          .row(numero="5" titulo="Analogías")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permiten relacionar un concepto o situación con otro elemento conocido para facilitar su comprensión.
      .col-lg-4.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img29.jpg', alt='')
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Estrategias de aprendizaje
    p.mb-4 Son las acciones que realiza el aprendiz para procesar, apropiar y transferir el conocimiento. Favorecen una participación activa y permiten utilizar diferentes procedimientos para comprender y aplicar lo aprendido. Algunas de estas estrategias son:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img22.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center Subrayado
              p.mb-0.text-center Permite identificar y destacar información relevante.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img23.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center Resumen
              p.mb-0.text-center Facilita la organización y síntesis de las ideas principales.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img24.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center Mapas conceptuales
              p.mb-0.text-center Permiten representar relaciones entre conceptos.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img25.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center Elaboración de ejemplos
              p.mb-0.text-center Favorece la comprensión mediante la aplicación de los conceptos a situaciones concretas.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img26.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center Búsqueda y contraste de fuentes
              p.mb-0.text-center Permite consultar diferentes fuentes y comparar la información obtenida.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img27.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center Trabajo colaborativo
              p.mb-0.text-center Favorece la construcción conjunta de aprendizajes mediante la interacción con otros aprendices.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Estrategias de evaluación
    p.mb-4 Son los procedimientos e instrumentos que permiten recoger evidencias del aprendizaje y ofrecer retroalimentación sobre los avances y aspectos por fortalecer. Pueden utilizarse en diferentes momentos del proceso formativo, de acuerdo con la finalidad de la valoración. Entre ellas se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img30.svg' alt='AvatarTop')
          h4.text-center Evaluación diagnóstica
          p.text-center Permite reconocer los conocimientos y condiciones iniciales antes de desarrollar un proceso de aprendizaje.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img31.svg' alt='AvatarTop')
          h4.text-center Evaluación formativa
          p.text-center Acompaña el proceso y proporciona información para identificar avances y realizar ajustes.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img32.svg' alt='AvatarTop')
          h4.text-center Evaluación sumativa
          p.text-center Permite valorar los resultados alcanzados al finalizar un proceso o etapa.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img33.svg' alt='AvatarTop')
          h4.text-center Rúbricas
          p.text-center Establecen criterios y niveles de desempeño para valorar una evidencia.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img34.svg' alt='AvatarTop')
          h4.text-center Listas de chequeo
          p.text-center Permiten verificar el cumplimiento de criterios o aspectos definidos.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img35.svg' alt='AvatarTop')
          h4.text-center Portafolio de evidencias
          p.text-center Recopila productos desarrollados durante el proceso y permite realizar seguimiento a la evolución del aprendizaje.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img36.svg' alt='AvatarTop')
          h4.text-center Autoevaluación y coevaluación
          p.text-center Promueven la participación del aprendiz en la valoración de su propio desempeño y del trabajo de sus pares.
    p.mb-4 Las tres categorías se encuentran relacionadas. Una estrategia de enseñanza puede generar las condiciones para que el aprendiz ponga en práctica determinadas estrategias de aprendizaje, mientras que las estrategias de evaluación permiten recoger información sobre los resultados y ofrecer retroalimentación. Por ello, la coherencia entre estos tres tipos de estrategias contribuye a articular lo que se orienta, lo que hace el aprendiz y lo que se valora durante el proceso formativo.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Clasificación de las estrategias metodológicas
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de estrategia
                th(data-aos="fade-down")(style= "width: 40%") Quién la ejecuta y para qué
                th(data-aos="fade-down")(style= "width: 40%") Ejemplos
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") De enseñanza
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Las ejecuta el instructor-tutor para presentar información, organizar el ambiente y facilitar la comprensión.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Exposición estructurada, preguntas guía, organizadores previos, demostraciones y analogías.
              tr
                td(data-aos="fade-down") De aprendizaje
                td(data-aos="fade-down") Las desarrolla el aprendiz para procesar, apropiar y transferir el conocimiento.
                td(data-aos="fade-down") Resúmenes, mapas conceptuales, elaboración de ejemplos, búsqueda y contraste de fuentes y trabajo colaborativo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") De evaluación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permiten recoger evidencias del aprendizaje y ofrecer retroalimentación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rúbricas, listas de chequeo, portafolios, autoevaluación y coevaluación.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 El material educativo
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img37.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c01.color-secundario.p-4.mb-3
          p.mb-0 El material educativo es un recurso físico o digital que el instructor-tutor selecciona, adapta o elabora para apoyar el proceso de enseñanza y aprendizaje. Su función no se limita a complementar una actividad, sino que permite organizar la información, facilitar la comprensión, promover la actividad del aprendiz y apoyar el desarrollo de los resultados de aprendizaje.
        p.mb-0(data-aos="fade-down") El material educativo adquiere sentido cuando se relaciona con una estrategia metodológica y con un propósito formativo determinado. Por esta razón, la selección de un recurso no debe depender únicamente de su disponibilidad o de sus características tecnológicas, sino de la manera en que puede contribuir al aprendizaje.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img38.svg', alt='')(style="width: 90%")
            h4.text-center Impresos o escritos
            p.mb-4(data-aos="fade-down") Incluyen guías, cartillas, manuales y libros de texto. En ambientes mediados por TIC también pueden presentarse mediante documentos digitales.
          .col-xl.col-lg-6.tarjeta.tarjeta.c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img39.svg', alt='')(style="width: 90%")
            h4.text-center Audiovisuales
            p.mb-4(data-aos="fade-down") Comprenden videos didácticos, animaciones, pódcast y presentaciones narradas.
          .col-xl.col-lg-6.tarjeta.tarjeta.c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img40.svg', alt='')(style="width: 90%")
            h4.text-center Digitales e interactivos
            p.mb-4(data-aos="fade-down") Incluyen objetos virtuales de aprendizaje, simuladores, plataformas en línea, foros, <em>wikis</em> y cuestionarios.
          .col-xl.col-lg-6.tarjeta.tarjeta.c06.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img41.svg', alt='')(style="width: 90%")
            h4.text-center Concretos o manipulables
            p.mb-4(data-aos="fade-down") Corresponden a equipos, herramientas, maquetas y muestras relacionadas con situaciones del contexto productivo.
    p.mb-4 En los procesos de formación mediados por tecnologías de la información y la comunicación, los materiales digitales e interactivos adquieren especial relevancia. Sin embargo, esto no significa que los demás tipos pierdan utilidad. La elección depende de las características de la actividad, los resultados de aprendizaje, los aprendices y las condiciones del proceso formativo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") El material educativo puede cumplir diferentes funciones dentro de una experiencia de aprendizaje:
    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center Motivar e involucrar
          p.text-center.mb-0 Favorece el interés y la participación del aprendiz.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-acento-contenido.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center Presentar y organizar información
          p.text-center.mb-0 Facilita el acceso a contenidos y conceptos.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-secundario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center Facilitar la práctica y la transferencia
          p.text-center.mb-0 Permite aplicar conocimientos en diferentes situaciones.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.c01.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 4
          h4.text-center Apoyar la evaluación
          p.text-center.mb-0 Contribuye a generar o recopilar evidencias del aprendizaje.
    p.mb-4 Para seleccionar o elaborar un material educativo es necesario considerar su pertinencia frente al resultado de aprendizaje, su coherencia con la estrategia metodológica y el modelo pedagógico, las características de los aprendices y la modalidad de formación. También es importante atender aspectos relacionados con la accesibilidad y la calidad técnica del recurso.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img42.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") En este sentido, un mismo contenido puede apoyarse en diferentes materiales. Lo importante es que el recurso seleccionado esté al servicio del aprendizaje y responda a una intención formativa concreta, en lugar de convertirse en un fin en sí mismo.
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
