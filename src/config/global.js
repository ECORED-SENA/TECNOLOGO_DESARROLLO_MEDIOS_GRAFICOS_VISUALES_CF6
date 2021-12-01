export default {
  global: {
    componenteFormativo: 'Prototipado',
    descripcionCurso:
      'El desarrollo del ejercicio del diseño es una constante manifestación creativa entre una problemática y su solución visual, partiendo de la observación e investigación, para así pasar a la realización de bocetos y propuestas gráficas, que terminan impresas de manera masiva y forman parte del proceso de las artes gráficas. Este componente formativo profundiza en el diseño y producción de empaques.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Prototipado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Del boceto al prototipo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Propuesta de diseño',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ajustes y correcciones tempranas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Orden de producción',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prototipado de empaques',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos y clasificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Funcionalidad y usos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Materiales',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estructuras y diseño',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Fases de producción',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        numero: '',
        titulo: 'Síntesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Acoplásticos. (2021). Empaques y envases. Normas Nacionales. ',
      link: 'https://www.acoplasticos.org/index.php/mnu-noti/258',
    },
    {
      referencia:
        'Angarita, P. (s.f). Sistemas de impresión costos y presupuestos CUN sede Santa Marta. CUN. ',
      link: 'https://sistemascostosypresupuestoscun.wordpress.com/',
    },
    {
      referencia:
        'Color en el medio. (s.f). Pre-prensa digital. Color en el medio [Blog]. ',
      link: 'https://colorenelmedio.wordpress.com/pre-prensa-digital/',
    },
    {
      referencia:
        'Ferrada, A. (2018). Manual de instrucciones para preprensa. Universidad del Desarrollo. Facultad de Diseño. ',
      link: 'https://repositorio.udd.cl/handle/11447/2333',
    },
    {
      referencia:
        'Godínez, J. (2020). Preprensa digital (introducción) [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=NH7RS9YXBNw',
    },
    {
      referencia:
        'Izquierdo, T. (2020). Diccionario de diseño gráfico: +100 palabras de diseño explicadas para no diseñadores [Blog]. ',
      link: 'https://taniaizquierdo.com/diccionario-diseno-grafico/',
    },
    {
      referencia:
        'Madererianasa. (2020). Principales tipos de empaque de uso industrial. Madererianasa [Blog]. ',
      link: 'https://www.madererianasa.com.mx/tipos-de-empaque/',
    },
    {
      referencia:
        'Saraclip. (2017). Arquitectura de la información. Saraclip. ',
      link: 'https://www.saraclip.com/tag/glossary/',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura de la información',
      significado:
        'Es la disciplina encargada del estudio, análisis, organización, disposición y estructuración de la información en espacios de contenidos y, de la selección y presentación de los datos en los sistemas de información interactivos y no interactivos (Saraclip, 2017). ',
    },
    {
      termino: 'Arte final',
      significado:
        'Como su nombre lo indica es el documento final listo para imprimir. <br>Para preparar las partes finales de un documento, además de asegurarse de que el contenido no tiene errores, se debe dejar todo listo para que la imprenta que lo reciba pueda imprimirlo sin ningún inconveniente (Izquierdo, 2020).',
    },
    {
      termino: 'Bidimensional',
      significado: 'Que tiene dos dimensiones.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'Es el concepto para referirse a la identidad de marca: el proceso de diseño y las aplicaciones de la misma (Izquierdo, 2020).',
    },
    {
      termino: 'Cartografía',
      significado: 'Trazo de mapas geográficos.',
    },

    {
      termino: '<em>Community manager</em>',
      significado:
        'Gestor de comunidades en Internet para promocionar y posicionar una marca o empresa.',
    },
    {
      termino: 'Folio',
      significado: 'Hoja de un libro o de un cuaderno.',
    },
    {
      termino: 'Hipervínculo',
      significado: 'Enlace o vínculo empleado en la Web. ',
    },
    {
      termino: '<em>Packaging</em>',
      significado: 'Hace referencia al embalaje. ',
    },
    {
      termino: '<em>Planning</em>',
      significado: 'Relativo a planificación.',
    },
  ],
  complementario: [
    {
      texto:
        'Godínez, J. (2020). Preprensa digital (introducción) [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NH7RS9YXBNw',
    },
    {
      texto: 'Acoplásticos. (2021). Empaques y envases. Normas Nacionales.',
      tipo: 'Página web',
      link: 'https://www.acoplasticos.org/index.php/mnu-noti/258',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González Tarazona',
        cargo: 'Instructor ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora y evaluadora instruccional  ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
