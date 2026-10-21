<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 La transformación de los procesos formativos plantea nuevos retos para quienes orientan el aprendizaje, especialmente ante los cambios en las dinámicas educativas, las necesidades de los aprendices y la incorporación de diferentes medios y recursos para apoyar la formación. En este contexto, comprender los fundamentos que orientan las prácticas pedagógicas permite tomar decisiones más coherentes con los propósitos de aprendizaje y las características del ambiente formativo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.px-4.py-2.mb-4
          p.mb-0 Los modelos pedagógicos constituyen un referente para comprender las concepciones sobre la enseñanza, el aprendizaje, el papel del instructor y del aprendiz, así como las formas de organizar y evaluar los procesos formativos. Su reconocimiento permite identificar características de diferentes enfoques y comprender la manera en que estos se concretan en la práctica educativa. En este componente se abordan los modelos: tradicional, tecnológico, espontaneísta y alternativo, además de los modelos y estrategias pedagógicas centradas en el aprendiz o en el estudiante.
        p.mb-0(data-aos="fade-down") A partir de esta comprensión, las estrategias metodológicas permiten orientar las acciones que se desarrollan durante el proceso formativo. Por ello, el componente aborda su concepto, aplicación y clasificación en estrategias de enseñanza, aprendizaje y evaluación, considerando su relación con las necesidades del plan de formación.
    p De esta manera, el recorrido propuesto parte de las transformaciones pedagógicas, avanza hacia la comprensión de los modelos pedagógicos y sus características, y culmina con el reconocimiento de estrategias metodológicas aplicables a diferentes situaciones formativas. Así, se proporcionan elementos conceptuales para identificar el modelo pedagógico presente en un ambiente de enseñanza y aprendizaje y reconocer las estrategias metodológicas, los medios y las formas que se aplican de acuerdo con las necesidades del plan de formación. 
    p.mb-4 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VLcXfpfAJws?si=NIPfyMWTUTEqEsFq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
