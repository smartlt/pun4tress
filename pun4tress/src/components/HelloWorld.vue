<template>
  <div class="hello backgroundImage">
    <nav class="fixedbar">
      <a href="https://www.facebook.com/pun4tress"><img src="../assets/images/Facebook.svg" width="60"></a>
      <a href="https://twitter.com/PUN4TRESS"><img src="../assets/images/twitter.svg" width="60"></a>
    </nav>
    <div class="content">
      <div style="padding: 50px 20px;">
        <img src="../assets/images/web.png" class="title-image">
        <!-- <h1>{{ title }}</h1>
        <h2>{{ description }}</h2> -->
        <FacebookLogin />
        <radarClick v-if="user" />
        <message :user="user" />
      </div>
    </div>
  </div>
</template>

<script>

import FacebookLogin from './FacebookLogin'
import radarClick from './radarClick'
import Message from './Message'

export default {
  name: 'HelloWorld',
  components: {
    FacebookLogin,
    radarClick,
    Message
  },
  data () {
    return {
      title: 'Pun4Tress',
      description: '18 BIRTHDAY PROJECT',
      user: null
    }
  },
  mounted(){
    
  },
  methods:{
    updateUser(user){
      this.user = user;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1{
  font-family: 'Caveat', cursive;
  color: #009966;
}
h2 {
  font-family: 'Caveat', cursive;
  color: #009966;
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
    background-image: url("../assets/images/bg.svg");
      /* Full height */
    min-height: 100vh; 
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
.title-image{
  width: 70%;
}
</style>
