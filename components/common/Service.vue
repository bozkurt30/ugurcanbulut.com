<template>
  <div>
    <section id="hizmetlerimiz" class="section-3">
      <h1>Hizmetlerimiz</h1>
      <div class="badges">
        <div v-for="(item,i) in services" :key="i" class="badge">
          <div class="badge-text">
            {{ item.title }}
          </div>
          <img :src="item.imgUrl" class="badge-image">
          <img :src="item.imgUrlHover" class="badge-image2">
        </div>
        <!-- <div class="badge">
          <div class="badge-text">
            Mobil Uygulama
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div>
        <div class="badge">
          <div class="badge-text">
            Windows Uygulama
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div>
        <div class="badge">
          <div class="badge-text">
            Seo - Aso
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div>
        <div class="badge">
          <div class="badge-text">
            Sosyal Medya Yönetimi
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div> -->
        <!-- <div class="badge">
          <div class="badge-text">
            Kampanya Yönetimi
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div>
        <div class="badge">
          <div class="badge-text">
            Reklam Filmi
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div>
        <div class="badge">
          <div class="badge-text">
            Animasyon
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div>
        <div class="badge">
          <div class="badge-text">
            Ürün Çekimleri
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div>
        <div class="badge">
          <div class="badge-text">
            UI / UX
          </div>
          <img src="~/assets/images/badge-background.svg" class="badge-image">
          <img src="~/assets/images/badge-background-on-hover.svg" class="badge-image2">
        </div> -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    services: {
      require: true,
      type: Array
    }
  }
}
</script>
<style scoped>

div.container-2 {
    /* background-image: url("../images/container-2-background.svg"); */
    padding-bottom: 300px;
}

div.container-2 h1.main-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 62px;
    font-weight: 400;
    margin-top: 0;
    padding-top: 74px;
    padding-bottom: 100px;
}

div.container-2 div.container-2-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

div.container-2 div.container-2-content div.stages {
    width: 170px;
    height: 480px;
}

div.container-2 div.container-2-content div.stages h1.title {
    font-size: 50px;
    font-weight: 400;
    opacity: 50%;
    cursor: pointer;
}

div.container-2 div.container-2-content div.stages h1.title:hover, div.container-2 div.container-2-content div.stages h1.title span {
    opacity: unset;
    font-size: 70px;
    transition: font-size 0.7s;
}

div.container-2 div.container-2-content div.paragraph p {
    font-size: 23px;
    width: 823px;
    height: 266px;
}

div.container-3 {
    /* background-image: url("../images/footer-background.svg"); */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 170px;
    padding-top: 30px;
    margin-top: -121px;
    margin-right: 0px;
    margin-left: -144px;
}

div.container-3 div.contact-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div.container-3 div.contact-area h1 {
    font-size: 62px;
    font-weight: 400;
    width: 625px;
    height: 69px;
}

div.container-3 div.contact-area div.contact-area-bottom p {
    width: 524px;
    height: 80px;
    font-size: 30px;
    font-weight: 400;
}

div.container-3 div.contact-area div.contact-area-bottom div.number {
    display: flex;
    flex-direction: row;
    align-items: center;
}

div.container-3 div.contact-area div.contact-area-bottom div.number span {
    font-size: 30px;
    font-weight: 400;
    cursor: pointer;
}

div.container-3 div.contact-area div.contact-area-bottom div.mail {
    border: 3px solid #000000;
    cursor: pointer;
    width: 389px;
    height: 87px;
    font-size: 30px;
    border-radius: 23px;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

div.container-3 div.form-area {
    /* background-image: url("../images/form-area-background.svg"); */
    width: 480px;
    height: 572px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 120px;
    margin-left: -250px;
}

div.container-3 div.form-area h3 {
    font-size: 22px;
    font-weight: 400;
    width: 406px;
    margin-bottom: 9px;
    margin-top: 25px;
    margin-left: 25px;
}

div.container-3 div.form-area h3.form-area-top-title {
    font-size: 22px;
    font-weight: 400;
    width: 406px;
    margin-bottom: 9px;
    margin-top: 63px;
    margin-left: 25px;
}

div.container-3 div.form-area div.form-area-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

div.container-3 div.form-area div.form-area-top div.username {
    background-color: white;
    border: 1px solid #707070;
    border-radius: 15px;
    display: flex;
    align-items: center;
    width: 406px;
    height: 63px;
}

div.container-3 div.form-area div.form-area-top div.username img {
    padding-left: 10px;
}

div.container-3 div.form-area div.form-area-top div.username input.name {
    border: none;
    font-size: 22px;
    height: 30px;
    width: 400px;
    outline: none;
}

div.container-3 div.form-area div.form-area-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

div.container-3 div.form-area div.form-area-center div.user-mail {
    background-color: white;
    border: 1px solid #707070;
    border-radius: 15px;
    display: flex;
    align-items: center;
    width: 406px;
    height: 63px;
}

div.container-3 div.form-area div.form-area-center div.user-mail img {
    padding-left: 10px;
}

div.container-3 div.form-area div.form-area-center div.user-mail input.mail {
    border: none;
    height: 30px;
    font-size: 22px;
    width: 400px;
    outline: none;
}

div.container-3 div.form-area div.form-area-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    outline: none;
}

div.container-3 div.form-area div.form-area-bottom textarea.message {
    width: 380px;
    height: 120px;
    border-radius: 21px;
    border: none;
    font-size: 18px;
    text-align: start;
    padding-left: 30px;
    padding-top: 20px;
    outline: none;
}

div.container-3 div.form-area div.send-message-button {
    width: 100%;
    margin-top: 18px;
    margin-right: 52px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
}

div.container-3 div.form-area div.send-message-button button {
    border: none;
    border-radius: 10px;
    background-color: #FCC32B;
    cursor: pointer;
    width: 187px;
    height: 41px;
    margin-right: 52px;
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

div.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

div.buttons img.wp-icon {
    position: fixed;
    bottom: 0px;
    right: 0;
    cursor: pointer;
}

div.buttons img.go-top-icon {
    position: fixed;
    bottom: -150px;
    right: 20px;
    cursor: pointer;
}

div.buttons.active img.wp-icon {
    right: 80px;
    transition: 1s;
}

div.buttons.active img.go-top-icon {
    bottom: 20px;
    transition: 1s;
}

</style>
