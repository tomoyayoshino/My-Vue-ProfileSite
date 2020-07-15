<template>
  <div class="skills">
    <div class="container mt-5 px-5">
      <h1>Skills</h1>
      <div class="row mt-1">
        <!-- HTML/CSS -->
        <!-- スペース -->
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <!-- HTML -->
        <div class="card col-lg-5 float-left p-0 my-3">
          <div style="height:48px; background-color:#e44b23;"></div>
          <div class="card-body" style="background-color: #fafafa;">
            <h4>HTML</h4>
            <p>	Framework/Library: Haml</p>
            <p class="card-text text-left">
              個人アプリ制作、チーム開発等でコーディングを行いました。Railsでの開発ではHamlを用いて記述を致しました。
            </p>
          </div>
        </div>
        <!-- CSS -->
        <div class="card col-lg-5 float-left p-0 my-3">
          <div style="height:48px; background-color:#563d7c;"></div>
          <div class="card-body" style="background-color: #fafafa;">
            <h4>CSS</h4>
            <p>Framework/Library: SCSS,Bootstrap</p>
            <p class="card-text text-left">
              個人アプリ制作、チーム開発等でコーディングを行いました。Railsでの開発ではScssを用いて記述を致しました。このサイトではBootstrapを導入しております。
            </p>
          </div>
        </div>
        <!-- スペース -->
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <!-- ここまでで1列 -->
        <!-- Ruby/JavaScript -->
        <!-- スペース -->
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <!-- Ruby -->
        <div class="card col-lg-5 float-left p-0 my-3">
          <div style="height:48px; background-color:#701516;"></div>
          <div class="card-body" style="background-color: #fafafa;">
            <h4>Ruby</h4>
            <p>Framework/Library: Ruby on Rails</p>
            <p class="card-text text-left">
              Ruby on Railsを用いてwebアプリケーションの開発を行っております。基本的な項目は理解しております。制作物はPortfolioのタブよりご確認いただけます。
            </p>
          </div>
        </div>
        <!-- JavaScript -->
        <div class="card col-lg-5 float-left p-0 my-3">
          <div style="height:48px; background-color:#f1e05a;"></div>
          <div class="card-body" style="background-color: #fafafa;">
            <h4>JavaScript</h4>
            <p>Framework/Library: jQuery,Vue.js</p>
            <p class="card-text text-left">
              Railsでの開発ではjQueryを用いてajax通信による投稿と検索機能を実装いたしました。<br>
              モダンなJavaScriptにも触れてみたいと考え、こちらのサイトはVue.jsを使用しております。
            </p>
          </div>
        </div>
        <!-- スペース -->
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <!-- ここまでで1列 -->
      </div>
    </div>
  </div>
</template>

<style lang="css">
  .skills{
    height: calc(100vh - 56px);
    overflow: scroll;
  }
</style>
