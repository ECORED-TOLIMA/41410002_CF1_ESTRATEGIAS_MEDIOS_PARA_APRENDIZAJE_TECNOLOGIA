export default {
  global: {
    Name: 'Modelos pedagógicos y estrategias metodológicas para la formación',
    Description:
      'El componente aborda los conceptos, características y tipos de modelos pedagógicos, así como los modelos y estrategias pedagógicas centradas en el estudiante. Asimismo, desarrolla las estrategias metodológicas, su aplicación y clasificación en estrategias de enseñanza, aprendizaje y evaluación, considerando las necesidades del plan de formación.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tendencias actuales en la educación superior en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Globalización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Mejoramiento de la calidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Emprendimiento',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Implicaciones de las tendencias para la formación técnica y tecnológica',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'El contexto de la formación para el trabajo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transformaciones pedagógicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Del énfasis en contenidos al conocimiento estratégico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Del método expositivo a las pedagogías activas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Del énfasis en la enseñanza al énfasis en el aprendizaje',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Del aprendizaje por recepción al aprendizaje por descubrimiento',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'De la evaluación tradicional a la evaluación por competencias',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Aplicación de los tránsitos pedagógicos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelos pedagógicos en la educación superior',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de modelo pedagógico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Función y características generales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de modelos pedagógicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Modelo pedagógico tradicional',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Modelo pedagógico tecnológico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modelo pedagógico espontaneísta',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Modelo pedagógico alternativo',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Coexistencia de modelos en la práctica real',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Modelos y estrategias pedagógicas centradas en el estudiante',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Un mismo objetivo, cuatro formas de enseñar',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategias metodológicas asociadas a cada modelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estrategias del modelo tradicional y tecnológico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estrategias del modelo espontaneísta y alternativo',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Criterios para seleccionar la estrategia metodológica',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Clasificación de las estrategias',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'El material educativo',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/41410002_CF01_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aprendizaje basado en problemas (ABP)',
      significado:
        'Estrategia metodológica que parte de una situación problemática para promover la investigación, el análisis y la construcción de conocimientos orientados a su solución.',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Estrategia en la que los aprendices trabajan conjuntamente para alcanzar objetivos de aprendizaje, compartir conocimientos y construir soluciones.',
    },
    {
      termino: 'Aprendizaje por descubrimiento',
      significado:
        'Forma de aprendizaje en la que el aprendiz explora, analiza y establece relaciones para construir conocimientos a partir de situaciones o experiencias.',
    },
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso mediante el cual los nuevos conocimientos se relacionan con los saberes y experiencias previas del aprendiz.',
    },
    {
      termino: 'Conocimiento estratégico',
      significado:
        'Capacidad para utilizar los conocimientos de manera consciente y pertinente, seleccionando procedimientos y recursos según las características de una situación.',
    },
    {
      termino: 'Estrategia metodológica',
      significado:
        'Forma de organizar y desarrollar actividades de enseñanza y aprendizaje para favorecer el logro de los resultados de aprendizaje.',
    },
    {
      termino: 'Evaluación por competencias',
      significado:
        'Proceso de valoración que permite recoger evidencias sobre los conocimientos, habilidades y capacidades que desarrolla el aprendiz y su aplicación en diferentes situaciones.',
    },
    {
      termino: 'Formación para el trabajo',
      significado:
        'Proceso educativo orientado al desarrollo de capacidades que pueden aplicarse en contextos laborales y productivos.',
    },
    {
      termino: 'Globalización',
      significado:
        'Proceso que favorece la interacción y circulación de conocimientos, recursos, modelos y prácticas entre diferentes contextos y sociedades.',
    },
    {
      termino: 'Material educativo',
      significado:
        'Recurso físico o digital que apoya los procesos de enseñanza y aprendizaje, facilita la comprensión y contribuye al desarrollo de los resultados de aprendizaje.',
    },
    {
      termino: 'Modelo pedagógico',
      significado:
        'Forma de representar y organizar las ideas que orientan la enseñanza, el aprendizaje, la participación de los actores y la valoración de los aprendizajes.',
    },
    {
      termino: 'Pedagogías activas',
      significado:
        'Enfoques que promueven la participación del aprendiz mediante actividades de exploración, análisis, resolución de problemas, colaboración y construcción de conocimientos.',
    },
    {
      termino: 'Resultado de aprendizaje',
      significado:
        'Enunciado que expresa aquello que se espera que el aprendiz logre como resultado de un proceso formativo.',
    },
    {
      termino: 'Transición pedagógica',
      significado:
        'Cambio de una forma de concebir y organizar la enseñanza y el aprendizaje hacia otra que responde a nuevas necesidades y perspectivas educativas.',
    },
    {
      termino: 'Transferencia del aprendizaje',
      significado:
        'Aplicación de los conocimientos, habilidades y capacidades desarrollados durante la formación en nuevas situaciones o contextos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Díaz, J. (2012). Modelos pedagógicos en educación a distancia. Revista Electrónica de Humanidades, Educación y Comunicación Social, 12, 86-113.',
      link: '',
    },
    {
      referencia:
        'Feo, R. (2010). Orientaciones básicas para el diseño de estrategias didácticas. Tendencias Pedagógicas.',
      link: '',
    },
    {
      referencia:
        'Martínez, P., & Echeverría, B. (2009). Formación basada en competencias. Revista de Investigación Educativa.',
      link: '',
    },
    {
      referencia:
        'Mayorga, M., & Madrid, D. (2010). Modelos didácticos y estrategias de enseñanza en el Espacio Europeo de Educación Superior. Tendencias Pedagógicas.',
      link: '',
    },
    {
      referencia:
        'Reyes, C., & Moreno, R. (2007). Enseñanza centrada en el estudiante. Revista de Ciencias Médicas.',
      link: '',
    },
    {
      referencia:
        'Restrepo, B. (2006). Tendencias actuales en la educación superior: Rumbos del mundo y rumbos del país. Revista Educación y Pedagogía.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. (2011). Estrategias metodológicas en educación superior a distancia. Calidad en la Educación Superior.',
      link: '',
    },
    {
      referencia:
        'Sanz, T. (2004). Modelos curriculares. Revista Pedagogía Universitaria.',
      link: '',
    },
    {
      referencia:
        'Villalobos, E. (2010). Perspectiva didáctica para la formación basada en competencias. Teoría y Praxis Investigativa.',
      link: '',
    },
    {
      referencia:
        'Vivas, N. (2010). Estrategias de aprendizaje. Góndola, Enseñanza y Aprendizaje de las Ciencias.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
