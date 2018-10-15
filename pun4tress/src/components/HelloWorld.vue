<template>
  <div class="hello backgroundImage">
    <nav class="fixedbar">
      <a href="https://www.facebook.com/pun4tress"><img src="../assets/button/FB.jpg" width="40"></a>
      <a href="https://twitter.com/PUN4TRESS"><img src="../assets/button/twitter.jpg" width="40"></a>
    </nav>
    <div class="content">
      <div style="padding: 50px 20px;">
        <h1>{{ title }}</h1>
        <h2>{{ description }}</h2>
        <FacebookLogin />
        <img src="../assets/images/radar.jpg" width="200">
      </div>
    </div>
  </div>
</template>

<script>

import FacebookLogin from './FacebookLogin'
export default {
  name: 'HelloWorld',
  components: {
    FacebookLogin
  },
  data () {
    return {
      title: 'Pun4Tress',
      description: '18 BIRTHDAY PROJECT',
      currentUser: null
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-family: 'Playfair Display', serif;
  color: wheat;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.backgroundImage{
  background-image: url("../assets/images/background.jpg");
      /* Full height */
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.fixedbar{
    text-align: right;
    padding: 20px;
    position: fixed;
    right: 0;
}

.content{
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
