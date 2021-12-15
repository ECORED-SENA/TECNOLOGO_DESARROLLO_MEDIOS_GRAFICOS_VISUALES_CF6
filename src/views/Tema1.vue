<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Prototipado

    figure.mb-4
      img(src='@/assets/curso/tema1-banner.png', alt='Brief')

    p.mb-4(data-aos="fade") Es definido como 
      span.etiqueta la representación de una idea de producto o servicio,
      |  modelo de prueba para estudiar su viabilidad e implementación. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/9xmGqg6EyIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Del boceto al prototipo

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Para obtener información sobre cómo realizar un proyecto gráfico se debe iniciar llevando a cabo una lluvia de ideas, la cual se puede reforzar a través de la consulta bibliográfica, revisión de información en la Web, observación del tipo de piezas gráficas que se manejan en algunos sitios y lugares en la calle o a través del intercambio de ideas con el equipo de trabajo. El boceto es considerado como un modelo de representación o el primer dibujo del prototipo, en donde se proyectan diferentes ideas con un mismo fin. A continuación, más información:
        .row.bg-elemento.justify-content-center.py-3.align-items-end(data-aos="fade-down") 
          .col-lg-3.col-md-4.col-4.mb-4.mb-md-0
            img.px-lg-3.px-md-1.px-4(src='@/assets/curso/tema1-1-ico.svg', alt='Icono decorativo')
          .col-md-8
            .row.align-items-center
              .col-lg-8.mb-lg-0.mb-md-2.mb-3
                h4.mb-md-1 Boceto
                p.text-small.mb-0 Observe el video <b>Boceto y prototipo</b> para contar con una mejor contextualización sobre este tema importante.
              .col-md-4
                a.boton.color-acento-botones.me-3(href="https://youtu.be/KIO100jtL0U" target="_blank" type="application/pdf")
                  span Ver más
                  i.fas.fa-link
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/tema1-1-img.png', alt='Imagen decorativa')

    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2  Propuesta de diseño

    p(data-aos="fade") Es un documento que utilizan los diseñadores independientes (<em>freelance</em>), agencias de diseño y publicidad, entre otros, mediante el cual acuerdan con sus clientes los detalles sobre proyectos de diseño y publicidad.
 
    p(data-aos="fade") Una propuesta de diseño tiene que ser clara, profesional e iniciar con un concepto y un sentido creativo, ya que 
      strong identificará al negocio que así lo demanda. 
      | Por otro lado, debe trabajar de la mano con el concepto de marca, filosofía, objetivo y sentido de pertenencia, aspectos relacionados con la identidad de la organización y que deben estar plasmados en el <em>brief</em>.
 
    p.mb-4(data-aos="fade") A continuación, se indican los pasos a tener en cuenta al generar una propuesta exitosa: 

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10  
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-lg-2.col-md-3.col-4.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema1-2-paso1.svg', alt='Definir alcance del proyecto')
            .col-md-9
              h4 Definir alcance del proyecto
              p Determinar los objetivos del proyecto, siendo claros y delimitados, con el fin de llegar a acuerdos con el cliente en cuanto a diseño, tiempo y costos. 
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h4 <em>Brief</em>
              p Desarrollar el <em>brief</em> posibilita un mejor entendimiento entre las partes y la concepción de la idea a plasmar; contiene información necesaria para  iniciar a planificar o ejecutar el proyecto.
            .col-lg-2.col-md-3.col-4
              img.px-md-2(src='@/assets/curso/tema1-2-paso2.svg', alt='Brief')
          .row.justify-content-center
            .col-lg-2.col-md-3.col-3.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema1-2-paso3.svg', alt='Lluvia de ideas')
            .col-md-9
              h4 Lluvia de ideas
              p Junto con el equipo de trabajo se debe generar una lluvia de ideas, que permita identificar varias alternativas que apunten a solucionar la problemática.
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h4 Estrategia
              p En este punto se desarrollan las estrategias (acciones) que se llevarán a cabo para la consecución del proyecto. La estrategia es el plan para lograr los objetivos. 
            .col-lg-2.col-md-3.col-4
              img.px-md-2(src='@/assets/curso/tema1-2-paso4.svg', alt='Estrategia')
          .row.justify-content-center
            .col-lg-2.col-md-3.col-4.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema1-2-paso5.svg', alt='Bocetación')
            .col-md-9
              h4 Bocetación
              p Es el primer paso de todo diseño, en el cual se desarrollan diversas propuestas previas al prototipo final. Generalmente es una ilustración que carece de definición y detalles. 
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h4 Artes finales
              p Esta etapa materializa la realización del producto final, con todos los requerimientos, materiales y cambios finales, para garantizar que el contenido no tiene errores y está listo para la impresión.
            .col-lg-2.col-md-3.col-3
              img.px-md-3(src='@/assets/curso/tema1-2-paso6.svg', alt='Artes finales')
          .row.justify-content-center
            .col-lg-2.col-md-3.col-4.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema1-2-paso7.svg', alt='Retroalimentación final')
            .col-md-9
              h4 Retroalimentación final
              p Es importante realizar la retroalimentación con los clientes y el equipo de trabajo, para mejorar procesos a futuro y destacar los aciertos en la planificación y ejecución del proyecto. 

    Separador


    // 1.3
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3  Ajustes y correcciones tempranas

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p La optimización de los tiempos de ejecución del proyecto gráfico, el cumplimiento de las tareas y el reporte de avances deben ser la prioridad de todo diseñador. Los ajustes y correcciones tempranas son de suma importancia en el mundo del diseño y las artes gráficas, ya que una vez aprobada una propuesta y llevada al campo de acción no se puede arreglar, por ejemplo, en la impresión es muy difícil realizar correcciones tardías, lo cual implica una pérdida de tiempo, dinero, material y credibilidad por parte del cliente. 
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 Se debe determinar con precisión todas las aristas y fases del proyecto, como los costos, tiempos de entrega, materiales, diseño, modos de impresión, partes finales, etc., una vez se compromete el diseñador o la empresa, los gastos extras incurridos por errores que no se anticiparon pueden llegar a ser asumidos por el diseñador encargado. 
        p Es importante elaborar un cronograma para cumplir con el desarrollo y entregas de las actividades propuestas y tener el tiempo justo en caso de requerir realizar ajustes o correcciones solicitadas por el diseñador o cliente.  
      .col-md-5.mb-4(data-aos="fade-left")  
        img(src='@/assets/curso/tema1-3-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Estas son algunas recomendaciones importantes a tener en cuenta:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-suave" data-aos="fade-down")
      .row.justify-content-center(titulo="Planificación del cronograma de entregas")
        .col-md-6.mb-4.mb-md-0
          p Cuando está aprobado el presupuesto se puede elaborar detenidamente un cronograma de entrega de diseños, propuestas, aplicaciones de <em>branding</em>, diseño de <em>packaging</em>, etc. Programar los diferentes departamentos o entes que participan (responsables en la empresa de la revisión del proyecto, diseñadores, redactores de estilo, encargados de la fotografía y video, etc.), y a las áreas que se encargarán de la publicación de los diseños como imprentas, proveedores, etc.
          p Se puede concluir que el trabajo en equipo y el cumplimiento del cronograma es de vital importancia. Es claro que también se incluirá en el <em>planning</em>, las posibles revisiones de diseño y modificaciones previas a las entregas.
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-3-acord1.png', alt='Planificación del cronograma de entregas')
      .row.justify-content-center(titulo="Propuestas de diseño")
        .col-md-6.mb-4.mb-md-0
          p En las fechas previamente agendadas y acordadas, debe hacerse la respectiva entrega de las propuestas, en esta fase de creación, el <em>briefing</em> ayudará a orientar el diseño hacia sus objetivos comunicativos. El éxito también depende de preguntar y aclarar con el cliente las dudas que surjan durante la conversación, así se evitarán errores y el diseño estará mejor enfocado, lo que conlleva a la satisfacción del cliente.
          p Se recomienda igualmente, la realización de un <em>check list</em>, para que el cliente firme su aprobación, se registre la fecha y la entrega de las partes finales aprobadas e impresas. Este es un soporte válido en caso de posibles reclamos.
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-3-acord2.png', alt='Propuestas de diseño')   
      .row.justify-content-center(titulo="Entrega de archivos finales")
        .col-md-6.mb-4.mb-md-0
          p Por lo general, a los impresores se les hace entrega de los archivos en formato PDF, y son preparados con marcas de corte y sangrado, mientras que para pantalla son habituales los formatos: JPG, PNG y GIF.
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-3-acord3.png', alt='Entrega de archivos finales') 
      .row.justify-content-center(titulo="Pruebas de impresión y publicación")
        .col-md-6.mb-4.mb-md-0
          p Primero se realiza una prueba de impresión previa, con el fin de revisar colores, calidad de imágenes y parámetros técnicos.
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-3-acord4.png', alt='Pruebas de impresión y publicación') 
      .row.justify-content-center(titulo="Comprobación y valoración de eficacia")
        .col-md-6.mb-4.mb-md-0
          p Es recomendable revisar las piezas y productos gráficos, si funcionan correctamente y qué aspectos se pueden mejorar. Una planeación minuciosa aunada a la ejecución y cumplimiento del cronograma de trabajo y entregas, así como la conformación de un equipo de trabajo comprometido y creativo, serán la base sólida del crecimiento profesional y corporativo.
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-3-acord5.png', alt='Comprobación y valoración de eficacia')                       

    Separador


    // 1.4
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4  Orden de producción

    p.mb-4(data-aos="fade") Es un formato o soporte que se realiza a partir de la organización y requerimientos del producto que se va a imprimir, algo similar a un <em>check list</em> técnico previo a la impresión, en el que se revisan elementos como: 

    .row.tarjetas1-4__hover.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-4-tarj1.svg', alt='Clase de producto')
          h4.text-center Clase de producto
          .tarjeta__contenido
            p.mb-0 Cuál es el producto que se va a desarrollar, sus características en cuanto a sustratos, formatos y usos. Algunos de estos productos pueden ser: periódico, libro, revista, folleto, etiquetas, sobre, libretas, complejos, bolsas, formularios. 
      
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-color-primario2.p-4(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img.mb-4(src='@/assets/curso/tema1-4-tarj2.svg', alt='Originales y posibles datos aportados por el cliente')
          h4.text-center Originales y posibles datos aportados por el cliente
          .tarjeta__contenido
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-chevron-right
                | Soportes de impresión.
              li.mb-0
                i.fas.fa-chevron-right
                | Cantidad de tintas, duotono, tritono, cuatricromía.
              li.mb-0
                i.fas.fa-chevron-right
                | Cantidad de ejemplares que se van a imprimir.
              li.mb-0
                i.fas.fa-chevron-right
                | Tiempos, plazos y costos estimados.
              li.mb-0
                i.fas.fa-chevron-right
                | Características básicas en cuanto a todas las variables de diseño.       

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-suave.p-4
          img.mb-3(src='@/assets/curso/tema1-4-tarj3.svg', alt='Observación del producto gráfico a partir de las siguientes variables')
          h4.text-center Observación del producto gráfico a partir de las siguientes variables
          .tarjeta__contenido
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-chevron-right
                | Tamaño y formato del documento, número de páginas, columnas, paginación, cabeceras.
              li.mb-0
                i.fas.fa-chevron-right
                | Tipografías, familias, interlineados, sangrías, textos.
              li.mb-0
                i.fas.fa-chevron-right
                | Tipo y cantidad de tintas.
              li.mb-0
                i.fas.fa-chevron-right
                | Tipo de papel, sustrato y materiales.


    .row.bg-elemento.justify-content-center.py-3.align-items-end.mb-5(data-aos="fade-down") 
      .col-lg-3.col-md-3.col-5.mb-4.mb-md-0
        img.px-lg-5.px-md-1(src='@/assets/curso/tema1-4-ico.svg', alt='Icono decorativo')
      .col-lg-8.col-md-9
        .row.align-items-center
          .col-lg-10.col-md-8.mb-3.mb-md-0
            h4.mb-md-1 Orden de producción
            p.text-small.mb-2 A manera de ejemplo se presenta el siguiente orden de producción, se recomienda la descarga, revisión e identificación de todos los aspectos que son requeridos antes de la impresión. 
            p.text-small.mb-0 Nota. Se tomó con base en Hanato (s.f).
          .col-lg-1.col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Orden_de_produccion.jpg')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
