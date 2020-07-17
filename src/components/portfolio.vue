<template>
  <div class="portfolio">
    <div class="container mt-5 px-5">
      <h1 class="mb-3">My Portfolio</h1>
      <div class="mb-5">
        <a href="#motivate-yourself" class="btn btn-outline-dark mx-1">MotivateYourself</a>
        <a href="#portfolio-site" class="btn btn-outline-dark mx-1">ProfileSite</a>
        <a href="#secretary-bot" class="btn btn-outline-dark mx-1">SecretaryBot</a>
      </div>
      <!-- ここから1ブロック -->
      <div class="mt-3 mx-5 Box">
        <h2 class="py-1 portfolio__name"><a id="motivate-yourself">Motivate Yourself</a></h2>
        <div class="py-3 px-5 border-black">
          <h3>主な使用技術</h3>
          <h4>Ruby on Rails,JavaScript,AWS,MySQL</h4>
          <h3 class="pt-3">概要</h3>
          <h5 class="portfolio__content pb-3">
            Ruby on Railsを用いて作成した、初めての個人制作アプリです。<br>
            SNS、チャット、タスクを組み合わせたプログラミング学習者向けの交流サイトです。
          </h5>
          <a href="https://github.com/tomoyayoshino/motivateyourself" class="btn px-5 ml-4" style="background: #24292e; color: white; font-weight: bold;">GitHub</a>
          <a href="http://18.181.137.18/" class="btn btn-info ml-3" style="color: white; font-weight: bold;">アクセスはこちらから</a>
          <h3 class="pt-4">デモムービー</h3>
          <iframe width="448" height="252" src="https://www.youtube.com/embed/jNQXAC9IVRw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <!-- ここまで1ブロック -->
      <!-- ここから1ブロック -->
      <div class="mt-3 mx-5 Box">
        <h2 class="py-1 portfolio__name"><a id="portfolio-site">My Profile Site</a></h2>
        <div class="py-3  px-5 border-black">
          <h3>主な使用技術</h3>
          <h4>Vue.js,Bootstrap,FireBase</h4>
          <h3 class="pt-3">概要</h3>
          <h5 class="portfolio__content pb-3">
            現在ご覧いただいているサイトです。SPAを作りたいと考えて手始めとして実装いたしました。
            </h5>
          <a href="https://github.com/tomoyayoshino/My-Vue-ProfileSite" class="btn px-5 ml-4" style="background: #24292e; color: white; font-weight: bold;">GitHub</a>
          <a href="https://www.google.com/?hl=ja" class="btn btn-info ml-3" style="color: white; font-weight: bold;">アクセスはこちらから</a>
          <h3 class="pt-4">デモムービー</h3>
        </div>
      </div>
      <!-- ここまで1ブロック -->
      <!-- ここから1ブロック -->
      <div class="mt-3 mx-5 Box" id="secretary-bot">
        <h2 class="py-1 portfolio__name">Secretary Bot</h2>
        <div class="py-3  px-5 border-black">
          <h3>主な使用技術</h3>
          <h4>LINE Messaging API,Google Apps Script</h4>
          <h3 class="pt-3">概要</h3>
          <h5 class="portfolio__content pb-3">
            Googleカレンダーへの予定の追加・参照と、決まった時間に今日・明日の予定を通知するbotです。簡単な挨拶への返答機能もあります。
            </h5>
          <h3 class="pt-4">デモムービー</h3>
        </div>
      </div>
      <!-- ここまで1ブロック -->
      <!-- ここから1ブロック -->
      <div class="mt-3 mx-5 Box">
        <h2 class="py-1 portfolio__name">My Profile Site</h2>
        <div class="py-3  px-5 border-black">
          <h3>主な使用技術</h3>
          <h4>Vue.js,Bootstrap,FireBase</h4>
          <h3 class="pt-3">概要</h3>
          <h5 class="portfolio__conten pb-3">このサイトです</h5>
          <a href="https://github.com/tomoyayoshino/My-Vue-ProfileSite" class="btn px-5 ml-4" style="background: #24292e; color: white; font-weight: bold;">GitHub</a>
          <a href="https://www.google.com/?hl=ja" class="btn btn-info ml-3" style="color: white; font-weight: bold;">アクセスはこちらから</a>
          <h3 class="pt-4">デモムービー</h3>
        </div>
      </div>
      <!-- ここまで1ブロック -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .portfolio{
    height: calc(100vh - 56px);
    overflow: scroll;
    &__name{
      background: darkgray;
      color: white;
      text-shadow: 0 0 6px rgba(0,0,0,0.8);
    }
    &__content{
      text-align-last: start;
    }
  }
  .Box {
    border-bottom: 1px solid gray;
  }
</style>

<script>
export default {
  name: 'app',
  methods: {
  }
}
</script>
