<template>
  <section>
    <div id="iletisim" class="container-3">
      <div class="contact-area">
        <h1>Sizlere Dönüş Yapalım</h1>
        <div class="contact-area-bottom">
          <p>
            Formu doldurduktan sonra ekibimiz
            24 saat içinde sizlere dönüş yapacaktır.
          </p>
          <div class="number">
            <img src="~/assets/images/call-image.svg">
            <span>+0123 456 789</span>
          </div>
          <div class="mail">
            <img src="~/assets/images/email-image.svg">hello@example.com
          </div>
        </div>
      </div>
      <div class="form-area">
        <div class="form-area-top">
          <h3 class="form-area-top-title">
            İsminiz
          </h3>
          <div class="username">
            <img src="~/assets/images/username-image.svg">
            <input class="name">
          </div>
        </div>
        <div class="form-area-center">
          <h3>Mail</h3>
          <div class="user-mail">
            <img src="~/assets/images/user-mail-image.svg">
            <input class="mail">
          </div>
        </div>
        <div class="form-area-bottom">
          <h3>Mesaj</h3>
          <textarea class="message" placeholder="Mesajınız:" />
        </div>
        <div class="send-message-button">
          <button>Mesajı Gönder</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>

div.container-2 {
    /* background-image: url('../../assets/images/footer-background.svg'); */
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

</style>
