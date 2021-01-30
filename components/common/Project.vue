<template>
  <section id="projeler" class="">
    <h1 class="my-4 text-center text-lg-left">
      Projelerimiz
    </h1>
    <div class="container row gallery">
      <div v-for="(item,i) in projects" :key="i" class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="https://picsum.photos/940/650?random=1">
          <figure><img class="img-fluid img-thumbnail" :src="item.imgUrl" alt="Random Image"></figure>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    projects: {
      require: true,
      type: Array
    }
  }
}
</script>
<style scoped>
/* Start Gallery CSS */
.thumb {
margin-bottom: 15px;
}
.thumb:last-child {
margin-bottom: 0;
}
/* CSS Image Hover Effects: https://www.nxworld.net/tips/css-image-hover-effects.html */
.thumb
figure img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
}
.thumb
figure:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
</style>
