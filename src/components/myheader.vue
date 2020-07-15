<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
              <router-link class="text-white px-5 py-3 h1" to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="text-white px-5 py-3" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
              <router-link class="text-white px-5 py-3" to="/skill">Skills</router-link>
          </li>
          <li class="nav-item">
              <router-link class="text-white px-5 py-3" to="/portfolio">MyPortfolio</router-link>
          </li>
          <li class="nav-item">
              <router-link class="text-white px-5 py-3" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
  .navbar-expand-lg{
    padding: 0 8px;
  }
  .nav-item{
    padding: 16px 0;
  }
  a:hover{
    text-decoration: none;
  }
  .ul{
    display: flex;
  }
</style>
