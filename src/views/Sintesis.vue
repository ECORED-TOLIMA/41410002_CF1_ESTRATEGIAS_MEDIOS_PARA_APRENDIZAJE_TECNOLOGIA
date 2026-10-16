<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente aborda las tendencias actuales de la educación superior en Colombia y sus implicaciones para la formación técnica y tecnológica, considerando la globalización, el mejoramiento de la calidad y el emprendimiento. Asimismo, desarrolla las principales transformaciones pedagógicas relacionadas con el conocimiento estratégico, las pedagogías activas, el aprendizaje centrado en el aprendiz, el descubrimiento y la evaluación por competencias. A partir de estos referentes, presenta el concepto, función y características de los modelos pedagógicos, así como los modelos tradicional, tecnológico, espontaneísta y alternativo, sus posibilidades de coexistencia y las estrategias centradas en el estudiante. Finalmente, aborda las estrategias metodológicas asociadas a los diferentes modelos, los criterios para su selección, su clasificación y el concepto, clasificación y uso del material educativo.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presentan cinco ejes del componente formativo: tendencias educativas, transformaciones pedagógicas, modelos pedagógicos, tipos de modelos y estrategias metodológicas asociadas, junto con sus principales características.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
