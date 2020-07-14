<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><span :class = {colorChange:isActive1} @mouseover="isActive1=!isActive1" @mouseout="isActive1=!isActive1">Home</span></router-link>
      <router-link to="/profile"><span :class = {colorChange:isActive2} @mouseover="isActive2=!isActive2" @mouseout="isActive2=!isActive2">Profile</span></router-link>
      <router-link to="/Skill"><span :class = {colorChange:isActive3} @mouseover="isActive3=!isActive3" @mouseout="isActive3=!isActive3">Skill</span></router-link>
      <router-link to="/portfolio"><span :class = {colorChange:isActive4} @mouseover="isActive4=!isActive4" @mouseout="isActive4=!isActive4">MyPortfolio</span></router-link>
      <router-link to="/contact"><span :class = {colorChange:isActive5} @mouseover="isActive5=!isActive5" @mouseout="isActive5=!isActive5">Contact</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: lightgray;
  display: flex;
  justify-content: space-around;
  .colorChange{
    color: #17a2b8;
    transition: 0.5s ease;
  }
  span {
    width: 100%;
    height: 56px;
    line-height: 56px;
    display: block;
  }
  a {
    width: 100%;
    font-weight: bold;
    color: #2c3e50;
    &:hover{
      text-decoration: none;
    }
    &.router-link-exact-active {
      background-color: rgba(66,185,131,0.7);
      transition: 0.8s ease;
    }
  }
}
</style>

<script>

export default {
  name: 'App',
  data: function(){
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false
    }
  },
  components: {
  }
}
</script>
