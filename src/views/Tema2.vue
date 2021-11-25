<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro2

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Prototipado de empaques

    figure.mb-4
      img(src='@/assets/curso/tema2-banner.png', alt='Prototipado de empaques')
    
    p.mb-4(data-aos="fade") Se puede definir como 
      span.etiqueta la presentación comercial de un producto,
      |  es un sistema de protección, hecho con materiales acordes a las necesidades requeridas por el mismo. Protege, conserva y exhibe el producto para una mejor presentación. 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .row.cajon.color-acento-botones.p-4
          .col-md-5.mb-4.mb-md-0
            img.px-md-4(src='@/assets/curso/tema2-img.svg', alt='Imagen decorativa')
          .col-md-7
            p A continuación, se exponen algunas funciones del empaque:
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-chevron-right
                | Contiene el producto.
              li.mb-0
                i.fas.fa-chevron-right
                | Conserva y protege las cualidades y características del producto.
              li.mb-0
                i.fas.fa-chevron-right
                | Resguarda el producto de factores externos que puedan dañar o alterar sus cualidades.
              li.mb-0
                i.fas.fa-chevron-right
                | Su diseño, impacto visual y características promueven la rotación y venta de los productos.
              li.mb-0
                i.fas.fa-chevron-right
                | Facilita su transporte, embalaje y almacenamiento.        

    p.mb-4(data-aos="fade") En la siguiente figura se presentan las funciones comerciales del empaque y las funciones de un excelente empaque.

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 1.</b> Funciones comerciales del empaque
        figure
          img(src='@/assets/curso/tema2-fig1.svg', alt='Funciones comerciales del empaque')  

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 2.</b> Un excelente empaque cumple las siguientes funciones
        figure
          img(src='@/assets/curso/tema2-fig2.svg', alt='Un excelente empaque cumple las siguientes funciones')  

    p.mb-4(data-aos="fade") Para desarrollar el prototipo de empaques es necesario tener en cuenta:

    .row.justify-content-center.tarjetas-flip1.mb-5(data-aos="fade-down")
      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-flip1.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4
              h4 Contenido
              p.mb-0 Determinar cuál será el contenido que va a llevar el empaque, sólido, líquido, fluido, pulverizado, esto ayuda a concebir la idea creativa, elegir insumos, sustratos, colores, forma, tamaño, peso. Por ejemplo, la gelatina viene en una caja de cartoncillo que a su vez está empacada en una bolsa por sus características físicas. 
      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-flip2.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4
              h4 Materiales a utilizar
              p.mb-0 El empaque protege el producto, al escoger los materiales a utilizar se deben tener en cuenta las propiedades del mismo, especialmente los empaques de alimentos y bebidas que deben cumplir con requerimientos específicos por sus características de durabilidad, el crecimiento de bacterias, patógenos, duración de sabor y color. Es fundamental escoger los materiales correctos, ya que no es lo mismo un empaque para leche, que uno para atún.
      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-flip3.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4
              h4 Tamaño y capacidad del mismo
              p.mb-0 Calcular el tamaño de un empaque suele ser uno de los problemas más comunes en su diseño. Por lo general se realizan cambios en el prototipo por la dificultad de calcular el volumen de los productos, por ejemplo, se realiza una caja para zapatos; sin embargo, se debe tener en cuenta que las tallas para adulto van del número 34 hasta el 44, aproximadamente. 

      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-flip4.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4
              h4 Temperatura dentro del empaque
              p.mb-0 Tener presente la temperatura a la cual debe estar un producto dentro de su empaque es importante, ya que puede limitar el diseño y los materiales a utilizar. La temperatura en el interior puede generar. por ejemplo, gases que dañan el producto como tal, incluso al empaque en algunas ocasiones. 
      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-flip5.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4
              h4 Complementos del diseño
              p.mb-0 Antes de tener en cuenta un prototipo final es importante saber que complementos van a acompañar al mismo, por ejemplo, el uso de etiquetas o pestañas, esto puede cambiar el diseño por completo.
      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-flip6.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4
              h4 Ensamble
              p.mb-0 Algunos empaques tienen ensambles en su construcción, estos procesos pueden requerir técnicas adicionales en la impresión o materiales a utilizar. 

      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-flip7.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4
              h4 Recursos, métodos de producción y tecnologías
              p.mb-0 El proceso de producción puede requerir de diversos métodos y medios tecnológicos, que deben de estar presente en la concepción misma del proyecto.       


    p.mb-4(data-aos="fade") Tenga en cuenta que es importante lograr acoplar las siguientes variables, que se encuentran en la figura 3,  para finalizar con un excelente producto: 

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 3.</b> Buen producto
        figure
          img(src='@/assets/curso/tema2-fig3.svg', alt='Buen producto') 

    p.mb-4(data-aos="fade") Los prototipos se pueden clasificar en:

    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2-img2.png', alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        TabsC.color-acento-botones
          .tarjeta.bg-color-primario2.p-4(titulo="Modelos funcionales")
            h4 Modelos funcionales
            p Se enfocan en las características funcionales del producto, independientemente de cómo luzca desde el punto de vista estético.
          .tarjeta.bg-color-primario2.p-4(titulo="Modelos formales ")
            h4 Modelos formales 
            p A través de ellos se puede conocer la forma en que reacciona un cliente ante el producto.
          .tarjeta.bg-color-primario2.p-4(titulo="Baja fidelidad")
            h4 Baja fidelidad
            p Materializan la idea en papel o cartón.
          .tarjeta.bg-color-primario2.p-4(titulo="Impresión 3D")
            h4 Impresión 3D
            p Este prototipo crea modelos en corto tiempo y se utiliza la tecnología actual, permitiendo que se acerque a la realidad del producto final.
          .tarjeta.bg-color-primario2.p-4(titulo="Prototipo exploratorio")
            h4 Prototipo exploratorio
            p Consiste en probar algunas características del producto, como su funcionalidad y atractivo a los clientes, siendo esa comprobación informal; sin embargo, cuando se hacen los ajustes y correcciones propuestas sobre el prototipo este prototipo exploratorio se desecha. Se utiliza para dar claridad a las metas del proyecto, determinar los requerimientos y revisar alternativas o modificaciones.
          .tarjeta.bg-color-primario2.p-4(titulo="Prototipo estructural")
            h4 Prototipo estructural 
            p Se encarga de aproximarse mucho más al producto final, escogiendo los materiales, el tipo de impresión o troquelado, creando el empaque que satisfaga las necesidades del cliente y por supuesto, teniendo en cuenta el producto que va a contener, así como las características de la materia prima en que se elaborará, tipo de cierre, estilo de caja, acabados y el uso final del mismo. Es un prototipo más elaborado y cercano al producto final.
          .tarjeta.bg-color-primario2.p-4(titulo="Prototipo operacional")
            h4 Prototipo operacional
            p Por medio del cual se va perfeccionando el prototipo hasta que se convierte en el producto final.
          

    .titulo-tercero.titulo-tercero__3.mb-5(data-aos="fade-right")
      h3.mb-0 Funcionalidad y usos de los prototipos
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Como el proceso de prototipado puede resultar muy costoso debido a las herramientas utilizadas y a la elaboración de muchas pruebas, se recomienda evaluar la necesidad del prototipo y qué tan importante es que se previsualice con el máximo realismo el producto terminado. 
        h5 Los prototipos se utilizan para reducir el margen de riesgo, la incertidumbre del cliente respecto al producto terminado y su viabilidad, el aspecto y la percepción del producto a través de su vista previa.
        p Asimismo, el prototipo permite seleccionar la propuesta de diseño a través de 3D, donde se pueden verificar las aristas, superficies, estabilidad, empaque, las zonas de etiquetado, los colores, los dobleces, los códigos de barra, la revisión de los acabados, el análisis de las dimensiones, el ensamble y la capacidad interna del producto y la usabilidad, entre otros aspectos, etc. 
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 Teniendo un prototipo se puede realizar la presentación al cliente para conocer su satisfacción, así como estudios con los consumidores. El análisis de estos aspectos permitirá ajustar el prototipo, lo que conduce a tener un producto final de excelente calidad y así reducir el margen de error y ahorrar en costos, pues se tomarán buenas decisiones desde la etapa de creación hasta la producción final.
            br
            | Hoy se habla de los dummies que son prototipos a escala natural de un producto, conservando todas las características visuales, de diseño, color, textura, dimensiones y son un medio muy importante para comunicar una marca o un producto. También se habla con frecuencia de los renders, que son prototipos que consisten en una visualización digital en 3D de un producto.
      .col-md-5.mb-4(data-aos="fade-left")  
        img(src='@/assets/curso/tema2-img3.png', alt='Imagen decorativa')


    .titulo-tercero.titulo-tercero__5.mb-5(data-aos="fade-right")
      h3.mb-0 Materiales
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Los prototipos pueden elaborarse en los siguientes materiales:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10.py-5.bg-suave
        SlyderF(columnas="col-lg-4")
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-1.svg' alt='Papel')
            h3.text-center Papel
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-2.svg' alt='Cartón')
            h3.text-center Cartón
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-3.svg' alt='Plástico metalizado')
            h3.text-center Plástico metalizado     
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-4.svg' alt='Celofán')
            h3.text-center Celofán
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-5.svg' alt='Polipropileno')
            h3.text-center Polipropileno  
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-6.svg' alt='Vidrio')
            h3.text-center Vidrio
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-7.svg' alt='Metal')
            h3.text-center Metal
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-8.svg' alt='Madera')
            h3.text-center Madera
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-9.svg' alt='Tela')
            h3.text-center Tela
          .tarjeta.bg-color-primario2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2-slydef-10.svg' alt='Impresión 3D')
            h3.text-center Impresión 3D


    .titulo-tercero.titulo-tercero__5.mb-5(data-aos="fade-right")
      h3.mb-0 Estructuras
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p El prototipo de empaque puede ser elaborado en cualquier material y es utilizado para envolver un producto, aunque muchas veces no tenga contacto directo con el mismo y se convierta en una segunda capa que lo envuelve. Generalmente protegen al envase, y a veces tienen una estructura flexible de celofán, papel o tela, por ejemplo, como en el caso de las bolsas, cajas o costales, que pueden contener impresos gráficos, resultando muchas veces muy atractivos para los clientes y normalmente se le considera un empaque secundario; sin embargo, el empaque puede tener estructura rígida si es de polietileno, PVC o metalizado, o una estructura semirrígida, por ejemplo, si es de aluminio. 
      .col-md-5.mb-4(data-aos="fade-left")  
        img(src='@/assets/curso/tema2-img4.png', alt='Imagen decorativa')


    .titulo-tercero.titulo-tercero__2.mb-5(data-aos="fade-right")
      h3.mb-0 Conceptos de diseño
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2-img5.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")  
        p El elemento más importante de contacto con el consumidor es el empaque, pues constituye un motivo para la venta del producto, al atraer la atención y la curiosidad del comprador. El diseño del empaque da un valor agregado al producto, ya que es vital que lo identifique y sea armonioso con el contenido. Es trascendental que se adecúe a las necesidades del cliente por su practicidad, ergonomía, seguridad e higiene, pues genera emociones que llevan al posicionamiento de una marca y se convierte en un componente del producto, y coadyuva en la exhibición y competitividad en los estantes. El diseño del empaque varía desde un envoltorio en plástico o papel, hasta una caja o tambor de madera o acero. El diseño determina si el empaque es primario, el cual contiene al producto, secundario si contiene uno o más paquetes primarios o terciario, si contiene uno o más paquetes secundarios.
        
    p.mb-4(data-aos="fade") El empaque debe ser atractivo para el comprador, por lo que al diseñar es decisivo tener en cuenta lo que se presenta a continuación:

    TabsD.color-acento-botones(data-aos="fade-down")
      .row.justify-content-center.py-4.py-md-5(titulo="Forma" :icono="require('@/assets/curso/tema2-ico1-a.svg')" :icono2="require('@/assets/curso/tema2-ico1-b.svg')")
        .col-md-5
          h4 Forma 
          p Está directamente relacionada con el diseño estructural y funcional del empaque, pues debe cumplir con los requerimientos técnicos de acuerdo con cada producto.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema2-tab-1.png', alt='Forma')
      .row.justify-content-center.py-4.py-md-5(titulo="Imágenes" :icono="require('@/assets/curso/tema2-ico2-a.svg')" :icono2="require('@/assets/curso/tema2-ico2-b.svg')")
        .col-md-5
          h4 Imágenes 
          p Las imágenes, ilustraciones y símbolos ayudan a reforzar el contenido y comunican un mensaje por asociación respecto al producto, generando recordación en el consumidor.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema2-tab-2.png', alt='Imágenes')
      .row.justify-content-center.py-4.py-md-5(titulo="Colores" :icono="require('@/assets/curso/tema2-ico3-a.svg')" :icono2="require('@/assets/curso/tema2-ico3-b.svg')")
        .col-md-5
          h4 Colores 
          p Visualmente el empaque debe atraer al consumidor o generarle curiosidad, es el contacto emotivo y psicológico con el producto. El color permite transmitir un mensaje o emoción concreta. 
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema2-tab-1.png', alt='Colores')
      .row.justify-content-center.py-4.py-md-5(titulo="Tipografía" :icono="require('@/assets/curso/tema2-ico4-a.svg')" :icono2="require('@/assets/curso/tema2-ico4-b.svg')")
        .col-md-5
          h4 Tipografía 
          p Debe ser de fácil lectura, y se adjuntará la información relacionada con el tipo de contenido, la composición del producto, forma de utilización, registro de marca y normas legales.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema2-tab-4.png', alt='Tipografía')                  

    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1  Tipos y clasificación

    p.mb-4(data-aos="fade") Los tipos de empaques suelen diferenciarse a partir del producto o elemento que contienen o envasan, en relación con sus características y cantidad. Los tipos de envases son: 

    .row(data-aos="fade-down")
      .col-md-4.mb-4.tarjeta-display
        img(src='@/assets/curso/tema2-1-tarjh1.jpg', alt='Primarios')  
        .bg-secundario.contenido.text-center.py-3.px-4
          h4.mb-0 Primarios
          p.mb-0.mt-2 El empaque tiene contacto directo con el producto. En su etiqueta tiene información relevante como su fecha de vencimiento, ingredientes, cantidad, etc.
      .col-md-4.mb-4.tarjeta-display
        img(src='@/assets/curso/tema2-1-tarjh2.jpg', alt='Secundarios')  
        .bg-secundario.contenido.text-center.py-3.px-4(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          h4.mb-0 Secundarios
          p.mb-0.mt-2 Contiene varias unidades del empaque primario.
      .col-md-4.mb-4.tarjeta-display
        img(src='@/assets/curso/tema2-1-tarjh3.jpg', alt='Terciarios')      
        .bg-secundario.contenido.text-center.py-3.px-4
          h4.mb-0 Terciarios
          p.mb-0.mt-2 Puede contener y agrupar varios empaques primarios o secundarios.

    p.mb-4(data-aos="fade") Ahora, se estudiará la diferencia entre:

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10.mb-4
        .row.justify-content-center.tarjeta.bg-acento-botones.p-4
          .col-md-2.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema2-1-ico1.svg', alt='Imagen decorativa')
          .col-md-9
            h4 Envase
            p.mb-0 Recipiente que tiene contacto directo con el producto específico, con la función de envasarlo y protegerlo. 
      .col-md-10.mb-4
        .row.justify-content-center.tarjeta.bg-acento-botones.p-4
          .col-md-2.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema2-1-ico2.svg', alt='Imagen decorativa')
          .col-md-9
            h4 Empaque
            p.mb-0 Recipiente o envoltura que contiene un producto de manera temporal. 
      .col-md-10
        .row.justify-content-center.tarjeta.bg-acento-botones.p-4
          .col-md-2.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema2-1-ico3.svg', alt='Imagen decorativa')
          .col-md-9
            h4 Embalaje
            p Contiene varias unidades de un producto y prepara la carga de la forma más adecuada para el modo de transporte elegido para su despacho. El embalaje ofrece algunas ventajas como: 
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-chevron-right
                | Facilitar el traslado de la carga y permitir su transporte en las mejores condiciones, según el modo que se utilice.
              li.mb-0
                i.fas.fa-chevron-right
                | Manipular de manera adecuada los productos. 
              li.mb-0
                i.fas.fa-chevron-right
                | Facilitar el almacenamiento.
              li.mb-0
                i.fas.fa-chevron-right
                | Facilitar las condiciones idóneas para su distribución.   

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2  Funcionalidad y usos

    p.mb-4(data-aos="fade") Los empaques pueden ser de dos tipos: 

    .row.tarjeta--container.mb-4
      .col-md.tarjeta.color-secundario.text-center.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema2-2-tarj1.png', alt='Texto que describa la imagen')  
        h1 Empaque natural
        p Está compuesto principalmente por materiales o medios amigables con el medio ambiente. Un ejemplo claro de este tipo de empaques se encentra en la misma naturaleza, como la envoltura natural de la mazorca de maíz. 
      .col-md.tarjeta.color-primario.text-center.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema2-2-tarj2.png', alt='Texto que describa la imagen')  
        h1 Empaque artificial
        p Es todo aquel que se obtiene a partir de un proceso generado por la transformación del hombre y cuya materia prima es tomada de la naturaleza. Ejemplo de este tipo de recursos son los cartones, el papel o los polímeros. 

    p.mb-4(data-aos="fade") A continuación, conozca algunas funcionalidades y usos de acuerdo con el tipo de empaque utilizado (Madererianasa, 2020): 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10.tarjeta.bg-suave
        SlyderE.py-4(indicadores="derecha")
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4 Empaque de papel
              p Se utiliza como un envoltorio que se encuentra dentro o fuera de otros empaques como bolsas, botes y cajas plegables de cartoncillo.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide1.png', alt='Empaque de papel')
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4 Empaque de cartón corrugado
              p Este tipo de empaque se usa para calzado, frutas y hortalizas, artesanías, decoración, maquinaria industrial, electrodomésticos, mercancías a semigranel, entre otros.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide2.png', alt='Empaque de cartón corrugado')
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4 Empaque metálico
              p Los materiales que se utilizan son el acero y el aluminio, funcionan para alimentos enlatados o bebidas con gas. Estos empaques son resistentes, protegen los productos.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide3.png', alt='Empaque metálico')
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4 Empaque de plástico
              p Se utilizan en alimentos, cosméticos, productos de aseo, aceites, entre otros, los materiales que se usan son PET, PEAD, PP, PVC, entre otros. Los más comunes son bolsas, frascos, tubos, cajas, botes, bandejas.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide4.png', alt='Empaque de plástico')  
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4 Empaque de vidrio
              p Los más comunes son las botellas y frascos que son de un cuerpo transparente, sólido y frágil. Permiten la visibilidad del contenido, como bebidas, salsas, productos cosméticos o farmacéuticos y son reutilizables. 
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide5.png', alt='Empaque de vidrio')     
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4 Empaque de madera
              p De todos los tipos de empaque que más se utilizan el de madera suele ser el más solicitado cuando se trata de exportar productos pesados. También funciona cuando se requieren empaques hechos a la medida, debido a que brinda una mejor protección durante la transportación. Utilizar la madera ofrece otros beneficios como tener mayor resistencia, ser reutilizable y tener un control sanitario adecuado. 
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide6.png', alt='Empaque de madera')                                 


    p.mb-4(data-aos="fade") El empaque es importante porque protege al producto de los siguientes riesgos:

    .row.justify-content-center
      .col-md-8 
        .row
          .col-md-6.col-lg-6.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema2-2-ico1.svg' alt='Mecánicos')
              .tarjeta.bg-acento-botones
                .text-center.p-4
                  h5 Mecánicos
                  p Protegen en el momento de la carga y embalaje al producto, de sobrecargas, golpes y maltrato generado en el almacenamiento y distribución, deterioro en el set de exhibición. 
          .col-md-6.col-lg-6.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema2-2-ico2.svg' alt='Químicos')
              .tarjeta.bg-color-primario2
                .text-center.p-4
                  h5 Químicos
                  p Protegen de contaminación aerobia o anaerobia de microbios, virus y demás patógenos que puedan estar en el ambiente, y de la reacción de los componentes de un empaque con otro, por exposición con diferentes materiales.
          .col-md-6.col-lg-6.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema2-2-ico3.svg' alt='Térmicos')
              .tarjeta.bg-acento-contenido2
                .text-center.p-4
                  h5 Térmicos
                  p Protegen de los cambios abruptos de temperatura durante el transporte o exhibición, y a la exposición de frío o calor excesivo, a veces por mal funcionamiento de los aparatos electrónicos. 
          .col-md-6.col-lg-6.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema2-2-ico4.svg' alt='Comerciales')
              .tarjeta.bg-suave
                .text-center.p-4
                  h5 Comerciales
                  p Protege durante la exhibición y promoción del producto en el área de venta, por maltrato del empaque pueden ser sustraídos, destapados, probados, alterados y manipulados.  

    p.mb-4(data-aos="fade") Y cumple la función de protección al:

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2-2-img.png', alt='Imagen decorativa')
      .col-md-8(data-aos="fade-left")
        TabsC.color-acento-botones
          .tarjeta.bg-color-primario2.p-4(titulo="Producto")
            h4 Producto
            p El empaque protege principalmente las características esenciales del producto como lo pueden ser el color, olor, textura, calidad, peso y sus cualidades organolépticas. 
          .tarjeta.bg-color-primario2.p-4(titulo="Consumidor")
            h4 Consumidor
            p Permite que el consumidor encuentre un producto con características físicas y microbiológicas de buena calidad, en el caso de los alimentos, con el peso y precio justo.
          .tarjeta.bg-color-primario2.p-4(titulo="Humano")
            h4 Humano
            p El empaque debe contar con medidas estándar de calificación que permitan garantizar la estabilidad organoléptica del producto, sea un alimento o un producto médico. 
          .tarjeta.bg-color-primario2.p-4(titulo="Productor")
            h4 Productor
            p Beneficia el trabajo e inversión que realiza el productor, para hacer que sus productos lleguen al mercado, sean apetecidos, valorados y vendidos. 
          .tarjeta.bg-color-primario2.p-4(titulo="Comercializador")
            h4 Comercializador
            p Por el cuidado que provee la mercancía puede obtener un mejor margen de ganancia dentro de la cadena de venta, al tener productos de buena calidad en un excelente empaque. 
          .tarjeta.bg-color-primario2.p-4(titulo="Distribuidor - transportador")
            h4 Distribuidor - transportador
            p Podrán realizar el trabajo de una manera más rápida, ágil y segura, debido a que un empaque adecuado puede ahorrar tiempos de movilización y mano de obra. 
          .tarjeta.bg-color-primario2.p-4(titulo="Medio ambiente")
            h4 Medio ambiente
            p Se debe propender por garantizar que el empaque cause el menor impacto ambiental, tratando de que sus materiales sean biodegradables o reciclables.
          .tarjeta.bg-color-primario2.p-4(titulo="Asegurador")
            h4 Asegurador
            p Es posible que los empaques con un diseño pensado en las necesidades de bodegaje, transporte y distribución generen menos riesgos y accidentes dentro de los espacios de trabajo.
          .tarjeta.bg-color-primario2.p-4(titulo="Vendedor")
            h4 Vendedor
            p En el área de estanterías de ventas un empaque con un diseño funcional y realizado con los materiales correctos permitirá el ahorro de espacio, ser llamativo dentro de las demás marcas y así generar mejores ganancias al dueño.          

    .titulo-tercero.titulo-tercero__4.mb-5(data-aos="fade-right")
      h3.mb-0 Estado
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Se beneficia de todas las transacciones mercantiles y de venta que realicen los particulares, ya que por estas cobra impuestos e IVA, entre otros.

    .row.bg-elemento.justify-content-center.py-3.align-items-end(data-aos="fade-down") 
      .col-md-2.col-5.mb-4.mb-md-0
        img.px-md-3(src='@/assets/curso/team2-2-img2.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-10.mb-3.mb-md-0
            h4.mb-md-1 Principales materiales para envases, empaques y embalajes
            p Para conocer más sobre los principales materiales para envases, empaques y embalajes revise muy atentamente el siguiente documento: 
          .col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Materiales.docx')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    Separador


    // 2.3
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3  Materiales

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 En la industria se utilizan gran diversidad de materiales, especialmente derivados de fibras de celulosa procedentes de la pulpa de la madera.
        p La impresión flexo gráfica es el método que utiliza una plancha en relieve flexible que permite imprimir sobre diferentes tipos de sustrato; la industria del empaque ha tenido un gran desarrollo, lo que ha hecho que sus costos se reduzcan. En diseño, la selección apropiada del sustrato (papel, tela, material de reciclaje, plástico o metal) es muy importante. Se debe tener en cuenta al momento de elegir el sustrato, la terminación o textura de la superficie, color, gramaje y características de la impresión. Igualmente, las planchas flexibles fácilmente se adaptan a superficies ligeramente desiguales por lo que se puede imprimir en sustratos como el cartón, sin ejercer mucha presión. Uno de los sustratos que se encuentran en el mercado es el cartón recubierto, que es la materia prima esencial para producir empaques plegables. 
      .col-md-5.mb-4(data-aos="fade-left")  
        img(src='@/assets/curso/tema2-3-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") El cartón es un sustrato formado por la transposición de papeles, como en capas, lo que le otorga mayor resistencia y dureza; existen básicamente cuatro variedades de cartón recubierto: reciclado recubierto, cartón sólido blanqueado, kraft no blanqueado recubierto y plegadizo para cajas, como se muestra a continuación:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10.tarjeta.bg-suave2.py-5
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img.px-md-5(src='@/assets/curso/team2-3-infog.svg', alt='Texto que describa la imagen')

          .row(x="40%" y="39.8%" tooltip="Cartón Reciclado Recubierto" numero="")
            .col-md-3
              img.px-md-4(src='@/assets/curso/tema2-3-modal1.svg', alt='Cartón Reciclado Recubierto')
            .col-md-9
              h4 Cartón Reciclado Recubierto (CRR) o cartón dúplex y de respaldo gris. En inglés se conoce como CCN y WLC
              p Esta referencia es la predominante en la industria, es importante destacar que cuando se está imprimiendo es menos flexible que otras variedades.
              p Es el cartón más económico que se usa en empaques que no requieran una excelente impresión, resistencia o limpieza, pues se elabora con una mezcla de fibras que han sido recicladas, del papel periódico impreso, cajas o contenedores corrugados, que tienen un recubrimiento multicapa. 
          .row(x="60%" y="39.8%" tooltip="Cartón sólido blanqueado o CSB" numero="")
            .col-md-3
              img.px-md-5(src='@/assets/curso/tema2-3-modal2.svg', alt='Cartón sólido blanqueado o CSB')
            .col-md-9
              h4 Cartón sólido blanqueado o CSB
              p Tradicionalmente esta es la referencia más costosa, este tipo de cartón puede tener un pigmento blanco con una capa de estuco que puede ser doble o triple en la parte superior, y una o dos en el reverso. El CSB, en la prensa, ofrece excelente impresión, buenas propiedades de formado y procesado y, como su estructura es homogénea es ideal para la elaboración de empaques premium, tiene gran consistencia y no tiene polvo de papel que le genere imperfecciones, por eso se usa en empaques de lujo. Asimismo, las fibras delgadas y cortas de esta madera hacen que se obtenga una superficie muy lisa, lo que ayuda a alcanzar empaques lujosos de alta calidad de impresión, se usa en productos cosméticos, farmacéuticos, publicidad y artes gráficas, instrumentos médicos y cigarrillos, entre otros.
              p También puede combinarse con otros materiales y utilizarse en la elaboración de empaques para líquidos. Se utiliza especialmente para productos que requieran olor y gusto neutro. 
          .row(x="60%" y="59.8%" tooltip="Cartón recubierto no blanqueado (CRNB)" numero="")
            .col-md-3
              img.px-md-5(src='@/assets/curso/tema2-3-modal3.svg', alt='Cartón recubierto no blanqueado')
            .col-md-9
              h4 Cartón recubierto no blanqueado (CRNB) o <em>Kraft</em>, o CNK o SUS en inglés
              p Este cartón es más económico que el CSB. Normalmente se fabrica exclusivamente con pasta química no blanqueada, de dos o tres capas de estuco en la cara superior, a veces se coloca una capa de estuco en el reverso. Los espesores de este cartón varían entre 14 y 30 puntos, por lo que son utilizados en empaques de alimentos congelados. 
          .row(x="40%" y="59.8%" tooltip="Cartón <em>folding</em>" numero="")
            .col-md-3
              img.px-md-4(src='@/assets/curso/tema2-3-modal4.svg', alt='Cartón folding o para cajas plegables o FBB/GC/UC')
            .col-md-9
              h4 Cartón folding o para cajas plegables o FBB/GC/UC
              p También se conoce como cartón cromo estucado, se fabrica a base de varias capas de fibras vírgenes cortas, gruesas y rígidas. Tiene máximo tres capas de estucado en el anverso y en algunos casos también está estucado en el reverso. Se utiliza en empaques en los que la rigidez en el empaque o envase son muy importantes. Sus aplicaciones gráficas pueden ser postales y tarjetas o sobres para diferentes ocasiones, así como en empaques de productos de belleza, productos farmacéuticos, cigarrillos, alimentos y envases sofisticados para dulces, confites y bebidas.       

    p.mb-4(data-aos="fade") Ahora, se estudiará otros materiales diferentes al papel:

    .row.justify-content-center
      .col-md-9 
        .row.justify-content-center.tarjetas-flip2(data-aos="fade-down")
          .col-sm-6.col-xl-6.mb-4
            .tarjeta.tarjeta-flip.color-primario
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-3-flip1.svg')})`}")
                .tarjeta-flip__contenido.text-center.p-4
                  h4 Metal
                  p.mb-0 Se emplea como material rígido, especialmente para contener tanto elementos sólidos como líquidos, ya que permiten un sellamiento total. Estos envases por lo general están hechos en aluminio y hojalata; por sus características físicas, este tipo de empaques ofrecen una mayor durabilidad y capacidad de conservación, entre los productos que se pueden encontrar con este tipo de empaques están las gaseosas, aceites, pinturas, dulces, entre muchos otros. 
          .col-sm-6.col-xl-6.mb-4
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-3-flip2.svg')})`}")
                .tarjeta-flip__contenido.text-center.p-4
                  h4 Vidrio
                  p.mb-0 Es utilizado por sus características específicas, ya que es una opción reutilizable y muy higiénica, la cual permite conservar las características organolépticas de vinos, medicamentos, entre otros. 
          .col-sm-6.col-xl-6.mb-4
            .tarjeta.tarjeta-flip.color-primario
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-3-flip4.svg')})`}")
                .tarjeta-flip__contenido.text-center.p-4
                  h4 Textil
                  p.mb-0 Este tipo de materia prima es utilizada principalmente en bolsas promocionales y de almacenes de cadena. 
          .col-sm-6.col-xl-6.mb-4
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2-3-flip3.svg')})`}")
                .tarjeta-flip__contenido.text-center.p-4
                  h4 Madera
                  p.mb-0 Utilizado principalmente en embalaje de productos, por su gran durabilidad, resistencia y protección.

    Separador


    // 2.4
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.4  Estructuras y diseño

    .row.justify-content-center
      .col-md-10
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 Muchos productos por su naturaleza y características físicas necesitan dónde reposar. Un buen empaque determina en gran medida el éxito o fracaso de un producto, más allá de las cualidades y características del producto mismo, el primer contacto del cliente es de carácter visual, algo que es aprovechado por el diseño y el marketing en general. 

    p(data-aos="fade") Al crear el prototipo de cualquier empaque se deben identificar diversos factores concernientes al diseño y a su funcionalidad; aunque el empaque es lo primero que observa el consumidor, detrás de su desarrollo hay un sinfín de variables y problemáticas por resolver. Más allá del diseño, la imagen o la forma, el diseño de empaques requiere incorporar en tiempos modernos una experiencia sensorial.

    p.mb-4(data-aos="fade") Antes de diseñar el empaque se debe tener en cuenta:

    .row  
      .col-md-4.mb-4.d-flex
        .tarjeta-numerada.tarjeta2-4.color-acento-contenido.px-4.py-3
          .tarjeta-numerada__numero.text-white
            .h3 1
          .row.justify-content-center.align-items-center
            .col-md-5 
              img.px-md-2(src='@/assets/curso/tema2-4-ico1.svg', alt='Icono decorativo')
            .col-md-6  
              h4.mb-0 Características del producto
      .col-md-4.mb-4.d-flex
        .tarjeta-numerada.tarjeta2-4.color-acento-contenido.px-4.py-3
          .tarjeta-numerada__numero.text-white
            .h3 2
          .row.justify-content-center.align-items-center
            .col-md-5 
              img.px-md-2(src='@/assets/curso/tema2-4-ico2.svg', alt='Icono decorativo')
            .col-md-6  
              h4.mb-0 Finalidad del producto
      .col-md-4.mb-4.d-flex
        .tarjeta-numerada.tarjeta2-4.color-acento-contenido.px-4.py-3
          .tarjeta-numerada__numero.text-white
            .h3 3
          .row.justify-content-center.align-items-center
            .col-md-5 
              img.px-md-2(src='@/assets/curso/tema2-4-ico3.svg', alt='Icono decorativo')
            .col-md-6  
              h4.mb-0 Medios de transporte y condiciones del mismo

    p.mb-4(data-aos="fade") La ingeniería de empaques busca proteger de manera segura los productos, para ser embalados y transportados, estudiando su desarrollo, fallas estructurales y funcionales. Elementos como el uso, la competencia, las estrategias de mercado y los materiales que están en auge se tienen en cuenta en la elaboración del empaque, a partir de estos parámetros básicos se empiezan a realizar bocetos y prototipos, los cuales pueden ir cambiando de aspecto durante este proceso. 

    .row.bg-elemento.justify-content-center.py-3.align-items-end.mb-4(data-aos="fade-down") 
      .col-md-3.col-5.mb-4.mb-md-0
        img.px-md-3(src='@/assets/curso/tema2-4-img.svg', alt='Icono decorativo')
      .col-md-7
        h4 Diversas preguntas nacen al inicio de este proceso, algunas de ellas:
        ul.lista-ul--color.mb-0
          li.mb-1
            i.fas.fa-chevron-right
            | ¿Cuál va a ser su uso?
          li.mb-1
            i.fas.fa-chevron-right
            | ¿Cuál material se va a utilizar?
          li.mb-1
            i.fas.fa-chevron-right
            | ¿Cuáles son los procesos que se van a requerir?
          li.mb-1
            i.fas.fa-chevron-right
            | ¿Cuál es el presupuesto y el costo de elaboración?
          li.mb-1
            i.fas.fa-chevron-right
            | ¿Cuenta con algún tipo de barrera o protección especial?   
          

    p(data-aos="fade") Aunque estas sean algunas consideraciones de tipo técnico, se deben tener en cuenta desde el primer momento en el que se diseña, con el fin de evitar demoras y sobrecostos en la operación.

    Separador


    // 2.5
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.5  Fases de producción

    p.mb-4(data-aos="fade") El proceso de producción gráfica consta de muchas variables que hacen parte de la estrategia de producción, entre estas se tienen: 

    TabsA.color-acento-botones.mb-4
      .row.tarjeta.bg-color-primario2.py-5.px-3(titulo="Planificación estratégica")
        .col-md-6.mb-4
          h4 Planificación estratégica
          p El primer paso para el desarrollo de cualquier proyecto en producción gráfica es el encuentro entre el diseñador y el cliente, donde se realiza el <em>brief</em>, documento guía que describe el producto o servicio y su comercialización. En esta fase es relevante establecer el presupuesto, los costos, sustratos, sistemas de impresión y tiempos establecidos de entrega y desarrollo de las piezas a trabajar. 
        .col-md-6
          img(src='@/assets/curso/tema2-5-slide1.png', alt='Planificación estratégica')
      .row.tarjeta.bg-color-primario2.py-5.px-3(titulo="Propuesta creativa")
        .col-md-6.mb-4
          h4 Propuesta creativa
          p Es la propuesta que presenta el diseñador como solución al problema requerido por el cliente, a través  de bocetos que se ajusten a los parámetros y estándares establecidos, y al presupuesto estipulado en la primera fase de producción; en algunos casos primero se diseña la pieza gráfica para poder tener una idea más cercana del presupuesto requerido. Asimismo, los acabados inciden en el precio, no es lo mismo una pieza que requiere un plastificado que un barnizado.
        .col-md-6
          img(src='@/assets/curso/tema2-5-slide2.png', alt='Propuesta creativa')
      .row.tarjeta.bg-color-primario2.py-5.px-3(titulo="Artes finales")
        .col-md-6.mb-4
          h4 Artes finales
          p Una vez establecidos todos los estándares del proyecto y aprobados los bocetos, el diseñador se dispone a realizar las artes finales con la ayuda de programas de diseño. Es aquí donde aparece el proceso de preimpresión o preprensa, donde se revisa, ajusta y prepara el documento, normalmente en formato PDF para su reproducción física, utilizando un sistema de impresión digital, <em>offset</em> o serigrafía. El arte final asegura que el proyecto sea exitoso o no. 
        .col-md-6
          img(src='@/assets/curso/tema2-5-slide3.png', alt='Artes finales')     
      .row.tarjeta.bg-color-primario2.py-5.px-3(titulo="Pruebas de color")
        .col-md-6.mb-4
          h4 Pruebas de color
          p Una prueba de color es una simulación de los colores que pueden ser obtenidos por un sistema de impresión, para poder previsualizar el resultado final que se obtendrá. Una correcta simulación del resultado esperado en la impresión permitirá realizar cambios de diseño o de color en un archivo antes de proceder a la impresión final (Martínez, s.f.).  
        .col-md-6
          img(src='@/assets/curso/tema2-5-slide4.png', alt='Pruebas de color')
      .row.tarjeta.bg-color-primario2.py-5.px-3(titulo="Impresión")
        .col-md-6.mb-4
          h4 Impresión
          p En este paso se realiza la reproducción del documento original sobre papel; sin embargo, existen variedad de materiales sobre los cuales imprimir, siendo necesario emplear diferentes procesos de impresión.
          .row.mb-0
            .col-md-6.py-2.bg-suave
              p Sistemas convencionales de impresión: 
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.fas.fa-chevron-right
                  italic Offset.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Flexografía.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Tampografía.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Serigrafía.
            .col-md-5.mx-3.py-2.bg-suave
              p Sistemas digitales de impresión:
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.fas.fa-chevron-right
                  | Inyección de tinta.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Láser.
        .col-md-6
          img(src='@/assets/curso/tema2-5-slide5.png', alt='Impresión')
      .row.tarjeta.bg-color-primario2.p-4(titulo="Acabados")
        .col-md-6.mb-4
          h4 Acabados
          p Se refiere a los procesos posteriores a la impresión, para dar diferentes tipos de terminados al producto dentro de los que se destacan:
          ul.lista-ul--color.mb-0
            li.mb-0
              i.fas.fa-chevron-right
              | Barniz UV, parcial o total, generalmente utilizado en tarjetas, carpetas, revistas, entre otros. 
            li.mb-0
              i.fas.fa-chevron-right
              | Tintas especiales, para destacar o dar algún tipo de efecto especial.
            li.mb-0
              i.fas.fa-chevron-right
              | Uso de plastificados, para proteger y dar durabilidad a los elementos, como cuadernos, cartillas, etc.
            li.mb-0
              i.fas.fa-chevron-right
              | Uso de barnice litográfico parcial o total. 
            li.mb-0
              i.fas.fa-chevron-right
              | Troquelados, repujados, efectos con estampados al calor, entre otros.        
        .col-md-6
          img(src='@/assets/curso/tema2-5-slide6.png', alt='Acabados')


    p(data-aos="fade") Como ya se ha mencionado, el empaque constituye una herramienta de mercadeo, distribución y venta de un producto, porque coadyuva en fortalecer la imagen corporativa, posicionar la marca, influir en la decisión de compra por el consumidor; igualmente, el empaque sirve para proteger el producto, facilitando la manipulación y la conservación de este, preservando su calidad, además que debe ser funcional, innovador y amigable con el medio ambiente. En general, el empaque está orientado hacia el marketing y deben cumplir con varios requisitos. 

    p.mb-4(data-aos="fade") Al tener en cuenta todos estos aspectos, dependiendo del tipo de producto para el que se diseñe el empaque, es necesario consultar las diferentes normas, que el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC) ha establecido para cada tipo de producto, en lo relacionado con el diseño del empaque, de conformidad con las Normas Técnicas Colombianas (NTC). 

    .row 
      .col-md-5.mb-4(data-aos="fade-right")
        p Asimismo, se deben tener en cuenta las normas expedidas por el Organismo Internacional de Estandarización (ISO), igualmente, de la Superintendencia de Industria y Comercio (SIC), así como algunos ministerios que profieren normas relacionadas con el diseño técnico de los empaques, que es necesario tener en cuenta antes de realizar el diseño respectivo. Todas estas normas deben aplicarse al diseño del empaque, especialmente si se trata de productos a exportar, debido a los altos estándares exigidos por numerosos países.
      .col-md-7.mb-4(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 Por ejemplo, el Ministerio de Agricultura y Desarrollo Rural y el Ministerio de Comercio, Industria y Turismo por medio de la Resolución 0224 de 2007 expidieron el Reglamento Técnico No. RTC-002 MADR, por medio del cual regularon los requisitos mínimos que deben cumplir los empaques de los productos agrícolas para consumo humano que se importen, se produzcan y se comercialicen en el territorio colombiano. 

    p.mb-4(data-aos="fade") Igualmente, algunos ejemplos relacionados con las normas establecidas por el ICONTEC en relación con el tema son:

    .row.mb-4
      .col-md-4.col-xl.mb-4.d-flex
        .tarjeta.bg-suave.p-4
          h4.text-center NTC 1257:
          .tarjeta__contenido
            p.text-center Establece los requisitos que deben cumplir las películas de polietileno de baja densidad para el empaque de alimentos, debe estar libre de burbujas, de contaminantes, de materias tóxicas, que no tengan color y establece su ancho máximo.
      .col-md-4.col-xl.mb-4.d-flex
        .tarjeta.bg-color-primario2.p-4
          h4.text-center NTC 1468:  
          .tarjeta__contenido
            p.text-center Estableció los requisitos que deben tener los ensayos a los cuales se deben someter los envases de papel o cartón que se usan para envasar la leche, lácteos y jugos. La norma habla del material en que se deben diseñar los empaques, las tintas a usar para su impresión, espesor y en general el cuidado con la salud de las personas.
      .col-md-4.col-xl.mb-4.d-flex
        .tarjeta.bg-acento-botones.p-4
          h4.text-center NTC 512-1 y NTC 512-2:  
          .tarjeta__contenido
            p.text-center Establecen cómo deben ser rotulados o etiquetados en cuanto a sus elementos mínimos, que deben aparecer en los empaques de productos alimenticios.        

    p.mb-4(data-aos="fade") El no cumplimiento de estas normas implica la aplicación de sanciones y multas y la inconformidad de los clientes, aunada a posibles pérdidas económicas.  

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-5-img.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por otra parte, el diseño del empaque debe tener en cuenta la etiqueta, cuya función es que el consumidor pueda identificar fácilmente el producto, allí aparecen además datos como la fecha de caducidad, información o tabla nutricional, instrucción sobre condiciones de uso, almacenamiento, nombre y dirección del fabricante, identificación del lote, etc. El empaque puede contener el país de origen, peso del producto, puerto de salida o de entrada, igualmente, contendrá el código de barras, que es un elemento indispensable, pues permite mantener el inventario actualizado y además contiene información acerca de las características del producto.

    .titulo-tercero.titulo-tercero__5.mb-5(data-aos="fade-right")
      h3.mb-0 Preprensa
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Son todos los pasos anteriores a la impresión, en los cuales se realizan las correcciones y cambios concernientes a un archivo original, para su correcta impresión. A continuación, podrá conocer más acerca de este importante proceso. 

    .row.bg-elemento.justify-content-center.py-3.align-items-end.mb-5(data-aos="fade-down") 
      .col-md-2.col-5.mb-4.mb-md-0
        img.px-md-3(src='@/assets/curso/tema2-5-ico1.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-10.mb-3.mb-md-0
            h4.mb-md-1 Proceso de preprensa y sus características específicas
            p Observe el video sobre el proceso de preprensa y sus características específicas, para una mejor contextualización de este importante tema.
          .col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download


    .titulo-tercero.titulo-tercero__6.mb-5(data-aos="fade-right")
      h3.mb-0 Montaje y armado
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p(data-aos="fade") En este punto es importante tener presente cuáles serán los medios de reproducción que se van a utilizar en el proceso de impresión, el presupuesto formulado, la cantidad de ejemplares y acabados o terminados que dichas piezas van a requerir. 
    
    p.mb-4(data-aos="fade") Antes de pasar al procedimiento es importante revisar algunas definiciones básicas referentes al proceso:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-8 
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Tintas
              p.mb-0 Cantidad de colores en que se separa el archivo en planchas.
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Vínculo
              p.mb-0 Imagen enlazada o incrustada en un programa de ilustración. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Lineatura
              p.mb-0 Puntos por pulgada que generan tramas en una separación de color digital.
          .row.justify-content-center
            .col-md-11
              h5.mb-0 RIP
              p.mb-0 Sistema que interpreta archivos digitales para ser convertidos en tramas a ciertas lineaturas. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Prueba digital
              p.mb-0 Impresión perfilada en papel fotográfico, que simula una impresión en prensa. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 <em>Traping</em>
              p.mb-0 Capacidad de una tinta de mezclarse sobre otra, o manipulación para eliminar espacios en blanco entre colores (por dilatación de papel o registro).  
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Sobreimpresión
              p.mb-0 Superposición de un color sobre otro (ayuda a evitar el desregistro). contaminándose entre sí. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Montaje
              p.mb-0 Distribución de una hoja o pieza de diseño en un área para fines de optimización de papel plegado. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Pantone
              p.mb-0 Colores de simulación de estándares de tintas, preparadas por fabricantes determinados. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 CTP (<em>Computer to plate</em> - del computador a la plancha)
              p.mb-0 Sistema de impresión de separaciones digitales en plancha. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Formato de plancha
              p.mb-0 Tamaño en mm, de las planchas referenciadas por el fabricante de la impresora litográfica. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Guías de corte
              p.mb-0 Líneas delimitantes de ancho y largo de un diseño impreso. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Guías de registro
              p.mb-0 Elementos que ayudan al correcto ajuste entre colores de una misma separación.  
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Sangrado
              p.mb-0 Extensión del archivo final en tamaño fuera de las guías de corte, que busca disminuir los riesgos de corte o finalización de un trabajo. 
          .row.justify-content-center
            .col-md-11
              h5.mb-0 Pinza
              p.mb-0 Espacio de reserva entre el borde de la plancha y el inicio de la superficie impresora, esta pinza permite enganchar la plancha. 

    p.mb-4(data-aos="fade") Para el montaje se debe tener en cuenta:

    .row.cajon.color-secundario.p-4.mb-5
      .col-md-6
        ul.lista-ul--color.mb-0
          li.mb-0
            i.fas.fa-chevron-right
            | Abrir el archivo en el programa, versión y plataforma indicada por el creador del diseño.
          li.mb-0
            i.fas.fa-chevron-right
            | Guardar el archivo original y trabajar sobre una copia.  
          li.mb-0
            i.fas.fa-chevron-right
            | Confirmar las medidas del archivo.
          li.mb-0
            i.fas.fa-chevron-right
            | Dejar sangrado en el documento.
          li.mb-0
            i.fas.fa-chevron-right
            | Generar el sangrado requerido según tamaño de papel a imprimir. 
          li.mb-0
            i.fas.fa-chevron-right
            | Perfiles y modos de color.
          li.mb-0
            i.fas.fa-chevron-right
            | Verificar que las guías de corte estén en los colores en los cuales está compuesto el archivo. 
          li.mb-0
            i.fas.fa-chevron-right
            | Colocar las guías de registro fuera de la zona de corte.         
          li
            i.fas.fa-chevron-right
            | Verificar vínculos: modelo de color (CMYK):
        ul.lista-ul--color.color-acento-botones.mb-0.mx-md-4
          li.mb-0
            i.fas.fa-circle
            | Resolución 
          li.mb-0
            i.fas.fa-circle
            | Extensión        
          li.mb-0
            i.fas.fa-circle
            | Tamaño  
          li.mb-0
            i.fas.fa-circle
            | Peso     
      .col-md-6
        ul.lista-ul--color.mb-0
          li
            i.fas.fa-chevron-right
            | Manejo y uso de tinta negra y las tintas especiales. Tener en cuenta las tintas especiales como Pantones, ya que el sistema tradicional solo está concebido para tintas en CMYK verificando el código que lo caracteriza, por ejemplo, el negro que se utiliza en impresión realmente no es profundo y denso, por esta razón hay que utilizar la mezcla en CMYK, para potencializarlo y que se vea realmente negro, para esto realice una combinación de porcentajes así: C 75 %, M 55 %, Y 40%, K 100%.
          li
            i.fas.fa-chevron-right
            | Tamaño y resolución de las imágenes. Tener en cuenta el tamaño y resolución de las imágenes, esto con el fin de preservar la calidad, hay que recordar que una buena resolución para impresión es de 300 ppp (píxeles por pulgada).
          li
            i.fas.fa-chevron-right
            | Revisar vínculos a tipografías, imágenes y gráficos.  





    .titulo-tercero.titulo-tercero__4.mb-4(data-aos="fade-right")
      h3.mb-0 Síntesis
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    figure.mb-4
      img(src='@/assets/curso/tema-sintesis.svg', alt='Síntesis')



</template>

<script>
import TabsC from '../components/TabsC.vue'
import TabsD from '../components/TabsD.vue'
export default {
  name: 'Tema2',
  components: {
    TabsC,
    TabsD,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    indicadorTarjetaFlip: true,
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
