<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> reconocer las tendencias actuales de la educación superior, las transformaciones pedagógicas, los conceptos y características de los modelos pedagógicos, así como las estrategias metodológicas y los materiales educativos asociados a los diferentes enfoques de formación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes tendencias se relaciona con la circulación de conocimientos, modelos pedagógicos y recursos educativos entre diferentes contextos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emprendimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Globalización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluación por competencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formación para el trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una implicación del mejoramiento de la calidad en los procesos de formación técnica y tecnológica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la evaluación durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Centrar la formación únicamente en contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documentar el proceso y recoger evidencias del aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la participación del aprendiz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En el contexto de la formación para el trabajo, ¿qué característica favorece la pertinencia del proceso formativo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Relacionar los aprendizajes con situaciones del mundo laboral.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Limitar las actividades a la memorización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar situaciones relacionadas con el entorno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Separar la formación de las necesidades productivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué plantea el tránsito del énfasis en contenidos al conocimiento estratégico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el aprendizaje a la memorización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los conocimientos disciplinares.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el aprendizaje por actividades recreativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Desarrollar capacidades para gestionar y aplicar el conocimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una pedagogía activa?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dictado permanente de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aprendizaje basado en problemas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Memorización de definiciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Examen centrado exclusivamente en recordar conceptos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué cambio caracteriza el tránsito del énfasis en la enseñanza al énfasis en el aprendizaje?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El instructor-tutor concentra todas las decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El aprendiz asume un papel más activo en su aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La evaluación se limita al final del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los contenidos dejan de ser relevantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cómo se relacionan el aprendizaje por recepción y el aprendizaje por descubrimiento?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El aprendizaje por recepción debe eliminarse completamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo el descubrimiento permite construir conocimientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Pueden combinarse según las características de la situación formativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Son estrategias exclusivamente relacionadas con la evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza principalmente la evaluación por competencias?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valorar únicamente la memorización de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Concentrar toda la valoración en una prueba final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la retroalimentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recoger evidencias del desarrollo de capacidades y su aplicación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué es un modelo pedagógico?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una herramienta tecnológica para desarrollar clases.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una forma de representar y organizar ideas sobre la enseñanza y el aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un instrumento exclusivo para calificar aprendices.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una lista de contenidos de un programa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes preguntas corresponde a la dimensión “Cómo evaluar” de un modelo pedagógico?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿Cuál es el propósito de la formación?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '¿Qué conocimientos se consideran relevantes?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '¿Cómo se valoran los aprendizajes alcanzados?',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '¿Cómo se organiza la enseñanza?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es una característica central del modelo pedagógico tradicional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La transmisión organizada de conocimientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La investigación autónoma como eje permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La exploración libre a partir de los intereses del aprendiz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aprendizaje mediante proyectos complejos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué diferencia principalmente al modelo tecnológico del modelo tradicional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elimina completamente la orientación del instructor-tutor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se basa exclusivamente en los intereses espontáneos del aprendiz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incorpora mayor planificación, secuenciación y objetivos definidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rechaza las actividades prácticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica identifica al modelo pedagógico espontaneísta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La organización rígida de todos los contenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La exploración a partir de experiencias e intereses del aprendiz.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La evaluación exclusivamente mediante pruebas objetivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La secuenciación estricta de procedimientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza al modelo pedagógico alternativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La repetición de contenidos previamente establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La construcción progresiva del conocimiento mediante investigación y análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La exposición permanente del instructor-tutor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La exploración sin orientación de los propósitos formativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Por qué pueden coexistir diferentes modelos pedagógicos en una misma práctica formativa?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque todos los modelos deben aplicarse simultáneamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque los modelos son categorías que no tienen relación con la práctica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque las estrategias pueden seleccionarse según el propósito y las condiciones de cada situación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque el modelo pedagógico no influye en las actividades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'En una formación centrada en el estudiante, ¿qué papel asume principalmente el instructor-tutor?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar experiencias, orientar actividades y ofrecer retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Transmitir información sin acompañar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dejar que el aprendiz avance sin orientación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitarse a aplicar evaluaciones finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál criterio debe considerarse al seleccionar una estrategia metodológica?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la preferencia personal del instructor-tutor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la disponibilidad de herramientas tecnológicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El resultado de aprendizaje, el perfil del grupo, el tiempo, los recursos y la coherencia institucional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente el modelo pedagógico utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Cuál opción corresponde a una estrategia de enseñanza?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mapa conceptual elaborado por el aprendiz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exposición estructurada del instructor-tutor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Autoevaluación del aprendiz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Portafolio de evidencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una estrategia de evaluación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Búsqueda y contraste de fuentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaboración de ejemplos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Preguntas guía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lista de chequeo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la función principal del material educativo dentro del proceso formativo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Apoyar la presentación, comprensión, práctica y evaluación del aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Utilizar tecnología aunque no exista un propósito formativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar la estrategia metodológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Servir únicamente como elemento decorativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los principales conceptos relacionados con las tendencias educativas, las transformaciones pedagógicas, los modelos pedagógicos y las estrategias metodológicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
