<template>
  <div class="container">
  <div class="home">
    <div class="row">
      <div class="col-12">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <h2 class="header">PUN4TRESS: PROJECT</h2>
      </div>
    </div>
    <div class="row press-start">
      <div class="col-12">
        <img src="../assets/press_start.png">
      </div>
    </div>
    <div class="row link">
      <div class="col-12">
        <router-link to="/happyness18you">
          <img class="happyness" src="../assets/happiness.png">
        </router-link>
      </div>
      <div class="col-12">
        <router-link to="/justpun">
          <img class="justpun" src="../assets/justpun.png">
        </router-link>
      </div>
    </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
};
</script>


<style>
.home{
  padding-top: 50px;
  background-image: url('../assets/home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.header{
  color: green;
  min-height: 76px;
}
.press-start{
  padding-top: 33vh;
}
.press-start img{
  width: 275px;
}
.link{
  padding-top: 30px;
}
.link img.justpun{
  padding-top: 40px;
  width: 150px;
  cursor: pointer;
}
.link img.happyness{
  width: 275px;
  cursor: pointer;
}
</style>
