<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tendencias actuales en la educación superior en Colombia
    p.mb-4 Antes de examinar cada tendencia en particular, conviene situar el conjunto en su contexto. La educación superior no es un sistema aislado: responde a dinámicas económicas, sociales, culturales y tecnológicas que trascienden las fronteras de cualquier país. Las decisiones que toma un instructor-tutor en su ambiente formativo, como qué enseñar, cómo hacerlo y con qué medios, están influidas, de manera directa o indirecta, por fuerzas que operan a escala global. Reconocer esas fuerzas ayuda a comprender por qué la formación cambia y hacia dónde lo hace.
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En la actualidad, las tendencias e indicadores que marcan el rumbo de la educación superior en Colombia son los mismos que orientan los caminos de América Latina, Asia, África, Europa, Australia y Norteamérica. Restrepo (2006) identifica cuatro grandes situaciones que afectan la educación mundial y colombiana: la globalización, el mejoramiento de la calidad, las transformaciones pedagógicas y el emprendimiento. Estas tendencias constituyen el marco general dentro del cual se inscribe cualquier proceso formativo y, por tanto, su conocimiento resulta indispensable para todo instructor-tutor que aspire a orientar procesos coherentes con las dinámicas contemporáneas.
    p.mb-0 Las cuatro tendencias actúan de manera articulada: la globalización promueve la circulación internacional del conocimiento y del talento; el mejoramiento de la calidad exige procesos sistemáticos de acreditación, evaluación e investigación; las transformaciones pedagógicas redefinen las prácticas de aula y los métodos de evaluación; y el emprendimiento orienta la formación hacia el desarrollo de actitudes y competencias empresariales.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Globalización
    p.mb-4 La globalización constituye una de las fuerzas estructurales que más profundamente está reconfigurando la educación superior en todas las regiones del mundo. Lejos de ser un fenómeno exclusivamente económico, ha permeado las dimensiones culturales, sociales y educativas de las sociedades contemporáneas, modificando la manera en la que circulan el conocimiento, los modelos formativos y los talentos. Comprender el alcance de esta tendencia resulta indispensable para situar la práctica formativa cotidiana en un horizonte más amplio y para tomar decisiones pedagógicas pertinentes con las dinámicas internacionales que afectan a la formación técnica y tecnológica.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.c02.px-4.py-3.h-100.w-100
          .col-lg-2.d-none.d-lg-block.mb-4
            figure
              img(src='@/assets/curso/temas/t1/img02.svg', alt='')
          p.mb-0(data-aos="fade-down") La globalización se define como un fenómeno de internacionalización general, con énfasis en la economía y la información. Promueve el libre acceso de todas las empresas a todos los mercados en igualdad de condiciones, y uno de sus grandes motores es la virtualidad, tanto en la información como en la economía y en la educación, soportada en las tecnologías de la información y la comunicación. En el ámbito formativo, la globalización se traduce en la circulación de modelos pedagógicos, recursos digitales abiertos, ambientes virtuales de aprendizaje y certificaciones reconocidas internacionalmente, lo que obliga a las instituciones a alinearse con estándares globales sin perder la pertinencia local.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img03.jpg', alt='') 
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") En el ámbito de la formación, la globalización se relaciona con:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t1/img04.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img05.svg", alt="").img100.m-auto
                  p.text-center La incorporación de ambientes virtuales de aprendizaje.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img06.svg", alt="").img100.m-auto
                  p.text-center La circulación de modelos pedagógicos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img07.svg", alt="").img100.m-auto
                  p.text-center El acceso a recursos digitales abiertos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img08.svg", alt="").img100.m-auto
                  p.text-center La posibilidad de acceder a certificaciones reconocidas internacionalmente.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img09.svg", alt="").img100.m-auto
                  p.text-center La necesidad de articular los estándares globales con la pertinencia local.
    p.mb-0 Para la formación técnica y tecnológica, la globalización representa tanto una oportunidad como un desafío. La oportunidad radica en el acceso a una enorme cantidad de recursos formativos de calidad, antes inaccesibles, y en la posibilidad de que los egresados compitan en mercados laborales más amplios. El desafío consiste en mantener la pertinencia frente a las necesidades del contexto local y productivo nacional, evitando adoptar de forma acrítica modelos diseñados para otras realidades. El instructor-tutor cumple un papel decisivo en esta mediación: selecciona, adapta y contextualiza los recursos globales para que respondan a las condiciones específicas de sus aprendices.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Mejoramiento de la calidad
    p Estrechamente vinculado a la globalización, el mejoramiento de la calidad se ha convertido en una exigencia transversal para todas las instituciones educativas que buscan posicionarse en un escenario competitivo. Esta tendencia se concreta en sistemas formales de evaluación, acreditación y aseguramiento, así como en la consolidación de comunidades académicas que respalden la oferta formativa mediante investigación, innovación y producción intelectual. El instructor-tutor necesita comprender estos mecanismos porque inciden directamente en los lineamientos institucionales que orientan su práctica diaria.
    p.mb-4 El mejoramiento de la calidad está dirigido a la probabilidad de enfrentar con éxito la competitividad general y educativa. Comprende:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t1/img10.svg", alt="alt").img80.m-auto
          h4.text-center Procesos de acreditación
          p.text-center Entendidos como el reconocimiento a la calidad de la educación que una institución brinda, basado en el aseguramiento de estándares básicos y de estándares de excelencia.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t1/img11.svg", alt="alt").img80.m-auto
          h4.text-center Aplicación de pruebas estandarizadas a los egresados
          p.text-center Como mecanismo de verificación de competencias.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t1/img12.svg", alt="alt").img80.m-auto
          h4.text-center Fortalecimiento de la investigación, la innovación y la producción intelectual
          p.text-center Como soportes del proceso formativo y evidencias de la calidad institucional.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.c03.color-primario.p-4
          p.mb-0 La cultura de la calidad ha modificado de forma profunda la manera de concebir la docencia. Ya no basta con dictar bien una clase: se espera que el instructor documente su práctica, recoja evidencias del aprendizaje, participe en procesos de autoevaluación y contribuya a la mejora continua de su programa. Esta exigencia, lejos de ser una carga burocrática, puede convertirse en una valiosa oportunidad de reflexión profesional, pues obliga a hacer explícitos los criterios de calidad y a revisar periódicamente si la práctica formativa está logrando efectivamente los resultados de aprendizaje propuestos.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Emprendimiento
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img13.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-2(data-aos="fade-down") El emprendimiento constituye una de las tendencias que ha adquirido mayor relevancia en la educación superior, debido a la necesidad de fortalecer la capacidad de las personas para identificar oportunidades, generar soluciones y responder de manera creativa a las necesidades del entorno. En el contexto de la formación técnica y tecnológica, esta perspectiva permite establecer una relación más estrecha entre los procesos formativos y las dinámicas del sector productivo.
        .cajon.cajon.c01.color-secundario.p-4.mb-0
          p.mb-0 Más allá de la creación de empresas, el emprendimiento comprende el desarrollo de actitudes y competencias que favorecen la iniciativa, la identificación de oportunidades, la innovación y la capacidad de convertir las ideas en acciones. Estas capacidades pueden ser útiles tanto para quienes proyectan desarrollar una iniciativa productiva como para quienes se desempeñan dentro de una organización y participan en la generación de nuevos productos, servicios o procesos.
    p.mb-4 En este sentido, los procesos formativos pueden incorporar situaciones y proyectos relacionados con problemáticas reales del entorno, de manera que el aprendiz tenga la oportunidad de analizar necesidades, plantear alternativas y proponer soluciones. Así, el emprendimiento se relaciona con una formación orientada al desarrollo de competencias que trascienden la adquisición de conocimientos técnicos y favorecen la generación de valor en diferentes contextos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img14.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Para la formación técnica y tecnológica, esta tendencia representa una oportunidad para fortalecer la pertinencia de los programas, al vincular los aprendizajes con las necesidades del contexto productivo y social. Por ello, el instructor-tutor puede promover experiencias formativas que estimulen la iniciativa, la creatividad, la resolución de problemas y la búsqueda de alternativas frente a situaciones concretas.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Las cuatro tendencias actuales de la educación superior en Colombia
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img15.svg', alt='En la figura 1 se presentan cuatro tendencias actuales de la educación superior en Colombia: globalización, mejoramiento de la calidad, transformaciones pedagógicas y emprendimiento, relacionadas con una formación técnica y tecnológica pertinente.')
            figcaption Nota. Adaptada de Restrepo (2006).
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img16.svg', alt='En la figura 1 se presentan cuatro tendencias actuales de la educación superior en Colombia: globalización, mejoramiento de la calidad, transformaciones pedagógicas y emprendimiento, relacionadas con una formación técnica y tecnológica pertinente.')
          figcaption Nota. Adaptada de Restrepo (2006).
    p.mb-4 Las tendencias descritas se encuentran relacionadas y permiten comprender algunos de los cambios que inciden en la educación superior. La Figura 1 presenta de manera integrada la globalización, el mejoramiento de la calidad, las transformaciones pedagógicas y el emprendimiento, mientras que la Tabla 1 sintetiza sus principales características y facilita su comparación.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Tendencias actuales de la educación superior en Colombia
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tendencia
                th(data-aos="fade-down")(style= "width: 70%") Características principales
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Globalización
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Internacionalización del conocimiento y la información, circulación de modelos formativos y acceso a recursos y mercados en contextos globales.
              tr
                td(data-aos="fade-down") Mejoramiento de la calidad
                td(data-aos="fade-down") Evaluación, acreditación, aseguramiento de estándares, investigación, innovación y producción intelectual.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Transformaciones pedagógicas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cambios en las formas de enseñar, aprender y evaluar, con mayor énfasis en el aprendizaje, las pedagogías activas y el desarrollo de competencias.
              tr
                td(data-aos="fade-down") Emprendimiento
                td(data-aos="fade-down") Desarrollo de iniciativa, identificación de oportunidades, innovación y generación de soluciones y valor en diferentes contextos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.c03.color-primario.p-4
          p.mb-0 Las cuatro tendencias se encuentran relacionadas y generan implicaciones para la formación. La globalización amplía los escenarios de circulación del conocimiento y plantea nuevos desafíos para la formación; el mejoramiento de la calidad demanda procesos formativos pertinentes y verificables; las transformaciones pedagógicas orientan las prácticas hacia formas de aprendizaje más activas y centradas en el aprendiz; y el emprendimiento fortalece la capacidad para responder creativamente a las necesidades del entorno y generar valor.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Implicaciones de las tendencias para la formación técnica y tecnológica
    p Las cuatro tendencias descritas no se limitan a las políticas o a las orientaciones generales de la educación superior. También tienen implicaciones concretas en los procesos de formación y en las decisiones que toma el instructor-tutor al planear, orientar y evaluar las experiencias de aprendizaje.
    p.mb-4 En la formación técnica y tecnológica, estas implicaciones pueden reconocerse de la siguiente manera:
    .cajon.cajon.c05.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-4 En conjunto, estas tendencias convergen en una formación más pertinente, conectada con el mundo real y orientada al desarrollo de competencias, en la que el aprendizaje trasciende la simple acumulación de información. Para el instructor-tutor, comprender estas dinámicas permite reconocer oportunidades para enriquecer su práctica y tomar decisiones pedagógicas coherentes con las necesidades del contexto formativo.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img21.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Se invita al instructor-tutor a identificar cuáles de estas tendencias se reflejan con mayor claridad en su ambiente de formación y a reconocer qué decisiones concretas puede tomar para que su práctica responda a las exigencias de la globalización, la calidad, las transformaciones pedagógicas y el emprendimiento, sin perder de vista la pertinencia local del programa.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 El contexto de la formación para el trabajo
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img13.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La formación para el trabajo se desarrolla en estrecha relación con las necesidades sociales, económicas y productivas del entorno. Por esta razón, los procesos formativos no pueden limitarse a la transmisión de conocimientos técnicos, sino que requieren generar oportunidades para que los aprendices desarrollen capacidades que puedan aplicar en situaciones propias de su contexto laboral y social.
        .cajon.cajon.c03.color-primario.p-4.mb-0
          p.mb-0 En este escenario, la formación técnica y tecnológica adquiere especial relevancia por su vínculo con el sector productivo y con el desarrollo de competencias para el desempeño en diferentes ocupaciones. La pertinencia de los procesos formativos depende, en buena medida, de la capacidad para relacionar los conocimientos, las habilidades y las actitudes desarrolladas durante la formación con situaciones y problemas que pueden presentarse en el mundo del trabajo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0.text-bold(data-aos="fade-down") Por ello, los procesos de formación requieren favorecer:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img22.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center La participación activa del aprendiz en su proceso de aprendizaje.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img23.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center La resolución de problemas relacionados con situaciones del contexto.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img24.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center La aplicación de conocimientos en escenarios cercanos al mundo laboral.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img25.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center El trabajo colaborativo para abordar situaciones y construir soluciones.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img26.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center La generación de soluciones frente a necesidades del entorno.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img27.svg' alt='')
          .tarjeta.c02
            .p-4
              p.mb-0.text-center El desarrollo progresivo de la autonomía para afrontar situaciones propias del desempeño laboral.
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c02.px-4.py-3.h-100.w-100
          .row.align-items-center.mb-4
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img29.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Estas condiciones también plantean nuevos desafíos para quienes orientan la formación. El instructor-tutor debe tomar decisiones sobre las estrategias, los medios y las formas de enseñanza que resulten pertinentes para las características de los aprendices, los propósitos de formación y las necesidades del entorno.
          p En este sentido, la selección de un modelo pedagógico y de unas estrategias metodológicas no constituye una decisión aislada, sino que debe guardar coherencia con el contexto en el que se desarrolla el proceso formativo. Comprender esta relación permite reconocer que las formas de enseñar, aprender y evaluar deben responder tanto a los propósitos de formación como a las características de los aprendices y a las necesidades del entorno.
          p.mb-0 De esta manera, el contexto de la formación para el trabajo constituye un punto de partida para comprender las transformaciones pedagógicas que han modificado las formas de enseñar, aprender y evaluar.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img28.jpg', alt='') 
</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Globalización',
        texto:
          'Favorece el acceso a recursos, herramientas y referentes producidos en diferentes contextos. Por ello, el instructor-tutor puede incorporar recursos pertinentes y orientar al aprendiz hacia conocimientos, herramientas y estándares que tengan reconocimiento en el ámbito laboral.',
        imagen: '@/assets/curso/temas/t1/img17.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Mejoramiento de la calidad',
        texto:
          'Requiere documentar el proceso formativo, recoger evidencias del aprendizaje y participar en procesos de mejora continua. En este sentido, las actividades deben permitir obtener evidencias verificables y guardar coherencia con los criterios institucionales de calidad.',
        imagen: '@/assets/curso/temas/t1/img18.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Transformaciones pedagógicas',
        texto:
          'Orientan hacia prácticas formativas que favorecen la participación activa del aprendiz, la construcción del conocimiento y el desarrollo de competencias. Esto implica revisar las formas de enseñar, aprender y evaluar para responder a las características y necesidades de los aprendices.',
        imagen: '@/assets/curso/temas/t1/img19.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Emprendimiento',
        texto:
          'Promueve el planteamiento de retos formativos relacionados con problemáticas reales, de manera que el aprendiz pueda desarrollar iniciativa y proponer soluciones que generen valor.',
        imagen: '@/assets/curso/temas/t1/img20.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass"></style>
