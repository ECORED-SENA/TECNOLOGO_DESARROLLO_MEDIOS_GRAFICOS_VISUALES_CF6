<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-4
      img(src='@/assets/curso/intro-banner.png', alt='Introducción')

    p.mb-4(data-aos="fade") Apreciado aprendiz bienvenido a este momento de aprendizaje, orientado a la producción gráfica y las diversas herramientas que se utilizan para alcanzar el proyecto gráfico deseado. Antes de empezar se sugiere revisar el siguiente video, con el fin de identificar el contexto de aprendizaje.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ePkj_4wNsMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
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
