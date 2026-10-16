<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Transformaciones pedagógicas
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las transformaciones pedagógicas hacen referencia a los cambios que afectan la pedagogía como disciplina y como práctica educativa. De acuerdo con la revisión presentada por Restrepo (2006), estas transformaciones se concretan en cinco grandes tránsitos que han incidido en las formas de enseñar, aprender y evaluar. Estos cambios no implican necesariamente el abandono de los enfoques anteriores, sino la incorporación de nuevos elementos que permiten enriquecer las prácticas formativas y responder a las necesidades de los aprendices.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c03.color-primario.p-4
          p.mb-0 Comprender estos tránsitos permite al instructor-tutor reconocer las características de su práctica y reflexionar sobre las posibilidades de fortalecerla de acuerdo con las exigencias de la formación contemporánea. En este contexto, la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO) ha promovido la innovación educativa y el desarrollo de métodos que favorecen capacidades como el pensamiento crítico y la creatividad.
    p.mb-4 Los cinco tránsitos se relacionan con cambios en la manera de comprender los contenidos, la enseñanza, el aprendizaje y la evaluación, y permiten reconocer una evolución progresiva de las prácticas formativas.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Los cinco tránsitos de las transformaciones pedagógicas
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Enfoque previo
                th(data-aos="fade-down")(style= "width: 60%") Enfoque actual
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Contenidos y conocimientos declarativos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Procesos y conocimiento estratégico (aprender a aprender)
              tr
                td(data-aos="fade-down") Método expositivo o magistral
                td(data-aos="fade-down") Pedagogías activas: estudio de caso, ABP y aprendizaje colaborativo
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Enseñanza centrada en el profesor
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aprendizaje centrado en el estudiante
              tr
                td(data-aos="fade-down") Aprendizaje exclusivamente por recepción
                td(data-aos="fade-down") Recepción significativa, descubrimiento y construcción
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluación basada en pruebas objetivas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluación por competencias: portafolio y evidencias
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") Los cinco tránsitos reflejan un desplazamiento progresivo del centro del proceso formativo, desde la enseñanza y los contenidos hacia el aprendizaje y el desarrollo de competencias.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Del énfasis en contenidos al conocimiento estratégico
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img03.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-4
          p.mb-0 El primer tránsito plantea un cambio en la manera de comprender el propósito de la enseñanza. En lugar de concentrar los esfuerzos principalmente en la transmisión de contenidos, el proceso formativo se orienta hacia el desarrollo de capacidades que permitan al aprendiz aprender de manera autónoma y estratégica. Este cambio adquiere especial relevancia en un contexto en el que el conocimiento se renueva constantemente y las personas necesitan desarrollar herramientas para continuar aprendiendo a lo largo de su vida.
        p.mb-0(data-aos="fade-down") Tradicionalmente, la formación ha otorgado gran importancia a la adquisición de contenidos y conocimientos declarativos relacionados con las diferentes disciplinas y profesiones. Sin embargo, este enfoque ha dado paso a una mayor valoración de los procesos que permiten al aprendiz buscar, organizar, analizar y utilizar el conocimiento. De esta manera, el aprendizaje estratégico no se limita a saber determinados contenidos, sino que implica desarrollar capacidades para gestionar el propio aprendizaje y utilizar el conocimiento en diferentes situaciones.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") El aprendizaje estratégico comprende habilidades relacionadas con:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img04.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img05.svg", alt="").img100.m-auto
                  p.text-center Observación, para obtener y reconocer información relevante.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img06.svg", alt="").img100.m-auto
                  p.text-center Análisis, para examinar información y establecer relaciones entre sus elementos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img07.svg", alt="").img100.m-auto
                  p.text-center Síntesis creadora, para integrar información y generar nuevas comprensiones.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img08.svg", alt="").img100.m-auto
                  p.text-center Metacognición, para reflexionar sobre los propios procesos de pensamiento y aprendizaje.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img09.svg", alt="").img100.m-auto
                  p.text-center Metainformación, relacionada con el conocimiento sobre la información y las formas de acceder, valorar y utilizarla.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img10.svg", alt="").img100.m-auto
                  p.text-center Transferencia de aprendizajes, para aplicar conocimientos y habilidades en diferentes situaciones.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img11.svg", alt="").img100.m-auto
                  p.text-center Apropiación social del conocimiento, para utilizar y compartir el conocimiento en contextos sociales y profesionales.
    p.mb-0 Este tránsito cobra especial importancia ante la rapidez con la que se transforma la información técnica. Mientras un dato o un procedimiento específico puede perder vigencia con el tiempo, la capacidad para buscar, evaluar, organizar y aplicar información nueva puede mantenerse como una herramienta útil durante la vida profesional. En este sentido, el conocimiento estratégico favorece que el aprendiz asuma progresivamente un papel activo en la construcción y gestión de su propio aprendizaje.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Del método expositivo a las pedagogías activas
    p El segundo tránsito plantea un cambio en la manera de desarrollar el proceso de enseñanza y aprendizaje. El protagonismo deja de concentrarse principalmente en la exposición del profesor y se orienta hacia la actividad y participación del aprendiz. Desde esta perspectiva, las pedagogías activas favorecen el aprendizaje mediante la exploración, la investigación, la resolución de situaciones y la participación en experiencias formativas.
    p.mb-4 Las pedagogías activas pueden incorporar diferentes estrategias y formas de trabajo, entre las que se encuentran:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img12.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center Estudio de caso, a partir del análisis de situaciones concretas.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img13.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center Solución de problemas, orientada a la búsqueda de alternativas frente a situaciones planteadas.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img14.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center Aprendizaje basado en problemas (ABP), que utiliza problemas como punto de partida para promover la construcción de conocimientos.
    .row.mb-4.justify-content-center
      .col-md-6.col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img15.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center Aprendizaje colaborativo y cooperativo, que favorece la participación conjunta de los aprendices en el desarrollo de actividades.
      .col-md-6.col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img16.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center Docencia investigativa, relacionada con procesos de indagación y construcción de conocimiento.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img18.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3 Estas formas de trabajo favorecen una participación más activa del aprendiz y pueden contribuir al desarrollo de capacidades para investigar, analizar situaciones y transferir lo aprendido a nuevos contextos. En este sentido, las pedagogías activas adquieren especial relevancia en procesos de formación mediados por tecnologías de la información y la comunicación.
        p.mb-3 Sin embargo, el tránsito hacia las pedagogías activas no implica eliminar el método expositivo. Una exposición breve y bien estructurada puede resultar pertinente para presentar información general o aclarar determinados conceptos. La diferencia radica en que la exposición deja de ocupar el centro permanente del proceso y se integra como una estrategia que puede complementar las actividades desarrolladas por el aprendiz.
        .row.justify-content-center.align-items-center.mb-0
          .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t2/img17.svg', alt='')
          .col.col-lg-10.col-12.order-lg-2.order-2
            .cajon.cajon.c04.px-4.py-2
              p.mb-0(data-aos="fade-down") <b>Idea clave</b>: las pedagogías activas no sustituyen necesariamente la exposición, sino que amplían las posibilidades metodológicas al incorporar experiencias en las que el aprendiz participa, indaga, analiza y construye conocimientos.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Del énfasis en la enseñanza al énfasis en el aprendizaje
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img19.svg', alt='')
      .col.col-lg-10.col-12.order-lg-2.order-2
        p.mb-4 El tercer tránsito implica un cambio de eje en el proceso formativo: la atención deja de centrarse principalmente en la actuación del profesor y se orienta hacia el trabajo y los logros del aprendiz. Este cambio tiene implicaciones en la manera de planear, desarrollar y evaluar la formación, así como en los roles que asumen quienes participan en ella.
        p.mb-0 En el enfoque centrado en la enseñanza, gran parte del proceso educativo gira alrededor de la planeación, la actuación y la evaluación del profesor. En contraste, cuando el énfasis se sitúa en el aprendizaje, el aprendiz adquiere un papel más activo en la construcción de sus conocimientos. En este escenario:
    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t2/img20.svg", alt="").img70
          p.text-center.mb-0 El instructor-tutor diseña y organiza ambientes que favorecen el aprendizaje.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t2/img21.svg", alt="").img70
          p.text-center.mb-0 El aprendiz busca, analiza y organiza información para construir conocimientos.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t2/img22.svg", alt="").img70
          p.text-center.mb-0 Las actividades formativas plantean problemas o situaciones que requieren participación y búsqueda de soluciones.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomHexagon.mb-4
            img(src="@/assets/curso/temas/t2/img23.svg", alt="").img70
          p.text-center.mb-0 La evaluación y la retroalimentación acompañan el proceso para favorecer el logro de los aprendizajes.
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c02.px-4.py-3.h-100.w-100
          p Este cambio no significa que el instructor-tutor pierda importancia. Por el contrario, su función se amplía, pues debe diseñar ambientes de aprendizaje, formular situaciones que promuevan la participación, acompañar diferentes procesos y ofrecer retroalimentación oportuna. El aprendiz, por su parte, asume progresivamente mayor responsabilidad sobre su propio aprendizaje y desarrolla capacidades relacionadas con la autonomía, la autorregulación y la autogestión.
          .row.align-items-center.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img25.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") De esta manera, el énfasis en el aprendizaje implica pasar de una formación centrada principalmente en lo que hace el instructor-tutor a una formación que presta especial atención a lo que hace el aprendiz, cómo aprende y qué logra durante el proceso formativo.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img24.jpg', alt='') 
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Del aprendizaje por recepción al aprendizaje por descubrimiento
    p.mb-4 El cuarto tránsito plantea una transformación en la manera de comprender cómo se construye el aprendizaje. No se trata de eliminar la recepción de información organizada, sino de complementarla con experiencias de exploración, indagación y construcción de conocimiento. De esta manera, el proceso formativo puede aprovechar las posibilidades de ambas formas de aprendizaje.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") La combinación entre recepción y descubrimiento permite que el aprendiz:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img26.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img27.svg", alt="").img100.m-auto
                  p.text-center Reciba información organizada que le proporcione bases conceptuales para abordar un tema.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img28.svg", alt="").img100.m-auto
                  p.text-center Explore e indague a partir de preguntas, situaciones o problemas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img29.svg", alt="").img100.m-auto
                  p.text-center Relacione la información recibida con sus conocimientos y experiencias.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img30.svg", alt="").img100.m-auto
                  p.text-center Construya respuestas y explicaciones a partir de la búsqueda y el análisis de información.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img31.svg", alt="").img100.m-auto
                  p.text-center Produzca nuevos conocimientos mediante procesos de exploración y aplicación.
    p.mb-4 Desde esta perspectiva, el método expositivo tampoco desaparece. La recepción significativa puede facilitar el abordaje de cuerpos amplios de conocimiento, mientras que las experiencias de descubrimiento permiten desarrollar capacidades para formular preguntas, investigar, experimentar y construir respuestas propias.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img32.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Por ello, un diseño formativo equilibrado puede combinar momentos en los que se proporciona información organizada con actividades que permitan al aprendiz explorar, experimentar y producir conocimiento. El propósito es aprovechar las fortalezas de ambas formas de aprendizaje, de acuerdo con las características de la situación formativa.
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 De la evaluación tradicional a la evaluación por competencias
    p El quinto y último tránsito transforma la manera de comprender la evaluación dentro del proceso formativo. Mientras la evaluación tradicional se ha orientado principalmente a verificar la adquisición y memorización de contenidos, la evaluación por competencias busca valorar de manera integral el desarrollo de capacidades y su aplicación en diferentes situaciones. De acuerdo con Restrepo (2006), la complejidad del desarrollo de las competencias dificulta su valoración mediante pruebas objetivas o instrumentos centrados únicamente en la comprobación de conocimientos.
    p.mb-4 En este tránsito, la evaluación adquiere características que permiten realizar un seguimiento más amplio del proceso de aprendizaje:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img33.svg' alt='AvatarTop')
          p.text-center Valora el desarrollo de competencias y no únicamente la memorización de contenidos.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img34.svg' alt='AvatarTop')
          p.text-center Recoge evidencias durante el proceso formativo, lo que permite hacer seguimiento al desarrollo de habilidades.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img35.svg' alt='AvatarTop')
          p.text-center Integra diferentes formas de valoración, de acuerdo con las características de las competencias que se busca desarrollar.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img36.svg' alt='AvatarTop')
          p.text-center Favorece la retroalimentación continua, para que el aprendiz y el instructor-tutor puedan reconocer avances y aspectos por fortalecer.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img37.svg' alt='AvatarTop')
          p.text-center Utiliza recursos como el portafolio, que permite recopilar evidencias y realizar seguimiento al desarrollo de habilidades y al logro de competencias.
    p.mb-4 La evaluación por competencias también modifica el momento y la función de la valoración. En lugar de concentrarse únicamente al final de un periodo y cumplir una función principalmente certificadora, se desarrolla a lo largo del proceso formativo y adquiere una función formativa. La información obtenida permite realizar ajustes, orientar el aprendizaje y ofrecer retroalimentación oportuna.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img38.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") De esta manera, evaluar deja de entenderse únicamente como un acto puntual de medición y se convierte en un proceso de acompañamiento y mejora, en coherencia con los demás tránsitos planteados.
    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Aplicación de los tránsitos pedagógicos
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img39.jpg', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-4
          p.mb-0 Los cinco tránsitos estudiados permiten reconocer que las transformaciones pedagógicas no implican necesariamente modificar los contenidos de la formación. El cambio se relaciona, principalmente, con la manera de organizar las experiencias de aprendizaje, orientar la participación del aprendiz y valorar los conocimientos y desempeños alcanzados.
        p.mb-0(data-aos="fade-down") Para comprender esta transformación, se puede comparar la manera de abordar un mismo contenido desde un enfoque centrado en la transmisión y desde un enfoque orientado hacia el aprendizaje. Supóngase que el contenido corresponde al manejo de una herramienta de <em>software</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Aplicación de los tránsitos pedagógicos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Aspecto
                th(data-aos="fade-down")(style= "width: 40%") Enfoque centrado en la transmisión
                th(data-aos="fade-down")(style= "width: 40%") Enfoque orientado hacia el aprendizaje
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Abordaje del contenido
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El instructor-tutor explica las funciones principales de la herramienta durante la sesión.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El instructor-tutor plantea una situación o reto que requiere utilizar la herramienta para resolver un problema.
              tr
                td(data-aos="fade-down") Papel del aprendiz
                td(data-aos="fade-down") Recibe la información proporcionada y toma apuntes sobre las funciones explicadas.
                td(data-aos="fade-down") Explora las funciones de la herramienta, consulta información y prueba diferentes alternativas para resolver la situación.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Forma de aprender
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Predomina la recepción organizada de información.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se combinan la recepción de información con la exploración, la indagación y la construcción de soluciones.
              tr
                td(data-aos="fade-down") Actividad formativa
                td(data-aos="fade-down") Se concentra principalmente en la explicación de los contenidos y en la reproducción de la información.
                td(data-aos="fade-down") Promueve la participación activa, el análisis de la situación y la aplicación de los conocimientos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Puede centrarse en comprobar si el aprendiz recuerda nombres de menús, funciones o características de la herramienta.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se orienta hacia la valoración de un producto o evidencia que permita reconocer la aplicación de los conocimientos.
              tr
                td(data-aos="fade-down") Resultado esperado
                td(data-aos="fade-down") Predomina la adquisición y reproducción de información sobre la herramienta.
                td(data-aos="fade-down") Se favorece la autonomía, la comprensión y la transferencia de lo aprendido a una situación concreta.
    p.mb-4 La comparación permite reconocer que un mismo contenido puede abordarse mediante diferentes enfoques pedagógicos. La diferencia no se encuentra únicamente en aquello que se enseña, sino en la forma como se organiza la experiencia formativa, el papel que asume el aprendiz y la manera en que se valora su aprendizaje.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c03.color-primario.p-4
          p.mb-0 En el primer enfoque, la actividad se organiza principalmente alrededor de la explicación del instructor-tutor y de la recepción de información por parte del aprendiz. En el segundo, el contenido se convierte en un recurso para abordar una situación que requiere explorar, analizar y aplicar conocimientos. De esta manera, los tránsitos estudiados se relacionan con una formación que busca superar la simple acumulación de información y favorecer el desarrollo de capacidades que puedan utilizarse en diferentes situaciones.
    p.mb-4 La aplicación de estos tránsitos no significa que todas las prácticas anteriores deban eliminarse. Una explicación del instructor-tutor, por ejemplo, puede continuar siendo pertinente cuando se requiere presentar información, aclarar un concepto o proporcionar bases para desarrollar una actividad. Lo relevante es que estas estrategias se integren de manera coherente con las actividades que debe desarrollar el aprendiz y con los resultados de aprendizaje previstos. Esta consideración también es consistente con lo planteado anteriormente sobre las pedagogías activas y la combinación entre recepción y descubrimiento. 
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c02.px-4.py-3.h-100.w-100
          .row.align-items-end.mb-4
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img41.svg', alt='')
            .col-lg-10.col-12
              h5.mb-0(data-aos="fade-down") Aplicación práctica
          p Para trasladar estos elementos a la práctica formativa, el instructor-tutor puede seleccionar un contenido que desarrolle habitualmente y plantear dos formas de abordarlo:
          .tarjeta.tarjeta--blanca.p-3.mb-3
            p <b>Primera versión</b>: describir cómo se desarrollaría una actividad centrada principalmente en la transmisión de información.
          .tarjeta.tarjeta--blanca.p-3.mb-3
            p <b>Segunda versión</b>: plantear cómo se desarrollaría la misma actividad incorporando una participación más activa del aprendiz, la aplicación de conocimientos y la generación de evidencias de aprendizaje.
          p.mb-0 Posteriormente, se pueden comparar ambas versiones para identificar qué tránsitos pedagógicos están presentes, qué papel asume el aprendiz y cómo cambia la forma de valorar el aprendizaje. Este ejercicio favorece una mirada reflexiva sobre la práctica formativa y permite reconocer posibilidades de incorporar estrategias más coherentes con los propósitos de aprendizaje.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img40.jpg', alt='') 
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
