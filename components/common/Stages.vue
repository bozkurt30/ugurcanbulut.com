<template>
  <section id="section-4">
    <div id="asamalar" class="container-2">
      <h1 class="main-title">
        Aşamalar
      </h1>
      <div class="container-2-content">
        <div class="stages">
          <h1 class="title">
            <a href="#fikir"> Fikir <span>|</span></a>
          </h1>
          <h1 class="title">
            <a href="#proje"> Projelendirme </a>
          </h1>
          <h1 class="title">
            <a href="#proje"> Geliştirme </a>
          </h1>
          <h1 class="title">
            <a href="#proje"> Test </a>
          </h1>
          <h1 class="title">
            <a href="#proje"> Yayın </a>
          </h1>
        </div>
        <div class="paragraph">
          <p>
            Proje ihtiyaçlarınıza yönelik üretildiğinden sorunlarınızı birlikte ele alır ve en uygun çözümü
            bulmak için beyin fırtınasıyla çalışmaya başlarız. İhtiyacınızın önceliklerini etaplara bölere
            sizlere yardımcı olur ve ihtiyacınız
            olan çözümü en kısa sürede edinmeniz için çalışırız. Fikir etabı, sizin sorununuz ve projenizin
            kapsamını belirlemekte belirlenir.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
div.container-1 section.section-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div.container-1 section.section-4 h1 {
    font-size: 62px;
    font-weight: 400;
}

div.container-1 section.section-4 div.project-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1616px;
}

div.container-1 section.section-4 div.project-items div.project-item {
    width: 320px;
    padding: 0 42px;
    padding-top: 35px;
}

div.container-1 section.section-4 div.project-items div.project-item div.project-item-text {
    padding-top: 32px;
    font-size: 25px;
    display: flex;
    justify-content: center;
}

div.container-1 section.section-4 div.project-items div.project-item:hover div.project-item-text {
    font-size: 35px;
    line-height: 40px;
    text-shadow: 0 0 2px rgba(0,0,0,0.57);
    padding-top: 20px;
    cursor: pointer;
}

div.container-1 section.section-4 div.project-items div.project-item:hover img {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.0), 0 0 20px 0 rgba(0, 0, 0, 0.62);
}
</style>
