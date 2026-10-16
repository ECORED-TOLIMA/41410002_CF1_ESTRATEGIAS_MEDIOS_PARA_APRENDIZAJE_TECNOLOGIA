<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelos pedagógicos en la educación superior
    p.mb-4 A lo largo de la historia, las formas de enseñar y aprender han cambiado de acuerdo con las ideas sobre el conocimiento, el papel del docente y las necesidades de cada sociedad. De modelos centrados principalmente en la transmisión de conocimientos se ha avanzado hacia propuestas que otorgan mayor participación al estudiante y reconocen diferentes formas de aprender.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-6.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img01.jpg', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Estos cambios han dado lugar a distintas maneras de organizar los procesos formativos, conocidas como modelos pedagógicos. Cada modelo refleja una determinada concepción sobre la enseñanza y el aprendizaje y se expresa en las decisiones que se toman en la práctica educativa.
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-3
          p.mb-0 Comprender un modelo pedagógico permite reconocer qué hay detrás de una forma de enseñar, cómo se concibe el aprendizaje y qué papel asumen el instructor-tutor y el aprendiz. En la práctica, estas concepciones se reflejan en la manera de organizar el ambiente formativo, plantear las actividades, orientar la participación y valorar los aprendizajes.
        p.mb-0(data-aos="fade-down") Reconocer estas concepciones permite comprender por qué una misma situación formativa puede desarrollarse de diferentes maneras y cómo las decisiones del instructor-tutor reflejan una determinada manera de entender la enseñanza y el aprendizaje.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto de modelo pedagógico
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un modelo pedagógico es una forma de representar y organizar las ideas que orientan los procesos de enseñanza y aprendizaje. Permite comprender cómo se concibe la educación, qué papel cumplen quienes participan en ella y cómo se toman decisiones relacionadas con la formación. Flórez (2005) plantea que los modelos pedagógicos representan las relaciones que predominan en una teoría pedagógica y pueden coexistir con otros modelos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") En la práctica, un modelo pedagógico se refleja en las decisiones que se toman durante el proceso formativo:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t3/img03.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Qué se enseña
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t3/img04.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Cómo se enseña
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t3/img05.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Cómo participa el aprendiz
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t3/img06.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Qué función cumple el instructor-tutor
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t3/img07.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Cómo se valoran los aprendizajes
    p.mb-4 Por esta razón, no se limita a una formulación teórica, sino que se manifiesta en las actividades, las formas de interacción y las estrategias que se utilizan en un ambiente de enseñanza y aprendizaje.
    .row.justify-content-center.align-items-center.mb-4
      .cajon.cajon.c01.color-secundario.p-4
        p.mb-0 Es posible que diferentes instructores-tutores, aun trabajando en una misma institución y con un mismo plan de formación, desarrollen sus procesos de manera diferente. Esto ocurre porque las concepciones que tienen sobre la enseñanza y el aprendizaje influyen en la forma como organizan sus ambientes y orientan las experiencias formativas.
    p.mb-0 Por ello, reconocer qué es un modelo pedagógico permite comprender las decisiones que sustentan una práctica formativa y establecer relaciones entre las concepciones sobre la enseñanza y el aprendizaje y las acciones que se desarrollan en el ambiente de formación.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Función y características generales
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img08.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Los modelos pedagógicos cumplen una función orientadora dentro de los procesos de enseñanza y aprendizaje. Permiten establecer una relación entre las concepciones sobre la educación y las decisiones que se toman en la práctica formativa, por lo que sirven como referente para planear, desarrollar y evaluar los procesos de formación.
    p.mb-4 Además de orientar la práctica, los modelos pedagógicos permiten analizar y comparar diferentes maneras de organizar la formación. Aunque cada modelo presenta características particulares, todos responden a determinadas concepciones sobre el aprendizaje y sobre el papel que desempeñan el instructor-tutor y el aprendiz.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") Entre sus características generales se encuentran:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-9.col-12.order-lg-2.order-2
        .cajon.c03.px-4.py-3.h-100.w-100.d-flex.align-items-center
          .tarjeta.tarjeta--blanca.px-3.py-2.m-0
            ul.lista-ul--color.lista-ul
              li 
                i.fas.fa-comment-dots
                p.mb-0 Definen una concepción sobre el aprendizaje y sobre la manera en que este se desarrolla.
              li 
                i.fas.fa-comment-dots
                p.mb-0 Determinan el propósito de la formación, es decir, para qué se enseña.
              li 
                i.fas.fa-comment-dots
                p.mb-0 Orientan los contenidos, al establecer qué conocimientos o aprendizajes se consideran relevantes.
              li 
                i.fas.fa-comment-dots
                p.mb-0 Plantean una determinada forma de enseñar, incluyendo las estrategias, actividades y medios que pueden utilizarse.
              li 
                i.fas.fa-comment-dots
                p.mb-0 Reconocen un papel particular para el aprendiz, teniendo en cuenta sus ideas, conocimientos e intereses.
              li 
                i.fas.fa-comment-dots
                p.mb-0 Proponen una manera de evaluar, de acuerdo con la concepción de aprendizaje que sustenta el modelo.
      .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img09.svg', alt='') 
    p.mb-4 Estas características pueden organizarse en cinco dimensiones de análisis que permiten observar un modelo pedagógico de manera sistemática:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Dimensiones de análisis de un modelo pedagógico
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Dimensión
                th(data-aos="fade-down")(style= "width: 80%") Pregunta orientadora
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Para qué
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Cuál es el propósito de la formación?
              tr
                td(data-aos="fade-down") Qué
                td(data-aos="fade-down") ¿Qué se enseña y qué aprendizajes se consideran relevantes?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ideas del aprendiz
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Cómo se reconocen sus conocimientos, ideas e intereses?
              tr
                td(data-aos="fade-down") Cómo enseñar
                td(data-aos="fade-down") ¿Cómo se organiza la enseñanza y qué estrategias y medios se utilizan?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cómo evaluar
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Cómo se valoran los aprendizajes alcanzados?
    p.mb-0 Estas cinco dimensiones permiten establecer una relación entre las concepciones que sustentan un modelo y las decisiones que se manifiestan en la práctica formativa. Al analizar una situación concreta a partir de estas preguntas, es posible identificar características del modelo pedagógico que orienta dicha práctica.
</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
