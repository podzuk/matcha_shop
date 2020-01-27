Vue.component("main_menu", {
  template: `<div class="header__menu">
    <div class="header__right"><img class="header__logo"  src="images/Matcha.png" alt=""></div>
    <div class="header__center align-items-center justify-content-center">
          <a href="index.html" class="header__menu_items"><div>Головна</div></a>
          <a href="delivery.html" class="header__menu_items"><div>Про матча</div></a>
          <a href="info.html" class="header__menu_items"><div>Доставка і оплата</div></a>
    </div>
  <div class="header__left">
      <div class="header__button align-items-center justify-content-center"><button class="header__my_button">Телефонуйте нам</button></div>
      <div class="header__phone align-items-center justify-content-center">097 123 45 56</div>
  </div>
</div>`
});

Vue.component("mobi_menu", {
    template: `<div class="header__menu_mobi">
    <a href="index.html" class="header__menu_items"><div>Головна</div></a>
    <a href="delivery.html" class="header__menu_items"><div>Про матча</div></a>
    <a href="info.html" class="header__menu_items"><div>Доставка і оплата</div></a>
  </div>`
  });

Vue.component("footer_main",{
    template: `<div class="footer__content row">
    <div class="footer__left col">
        <img class="footer__logo" src="images/Matcha1.png" alt="">
        <div class="footer__images"></div>
    </div>
    <div class="footer__right col">
        <div class="footer__top align-items-center justify-content-center">
            Телефонуйте</br>097 123 45 56
            </div>
        <div class="footer__center align-items-center justify-content-center">
            Пишіть нам</br>email@gmail.com
            </div>
        <div class="footer__bottom align-items-center justify-content-center">
            Ми в соціальних мережах</br>
            <div class="footer__networks">
                <a href="https://www.facebook.com" target="new"><img class="footer__networks_items footer__networks_items--facebook" src="images/fac.png" alt=""></a>
                <a href="https://www.twitter.com" target="new"><img class="footer__networks_items" src="images/twiter.png" alt=""></a>
                <a href="https://www.instagram.com" target="new"><img class="footer__networks_items" src="images/instag.png" alt=""></a>
            </div>
            </div>
    </div>
</div>`
});
joke: {
    avatar: 'block2.jpg'
}

Vue.component("main_block",{
    props: ['src', 'name'],
    template: `<div class="block2 conteiner">
    <div class="block2__content row">
    <img class="col-xl-6 col-md-12" src="images/block2.jpg" alt="">
        <div class="block2__title col-xl-6 col-md-12 align-items-center justify-content-center">
        {{ name}}
        </div>
    </div>
    </div>`
});


var app = new Vue({
  el: "#app",
  data: {

  }
});
