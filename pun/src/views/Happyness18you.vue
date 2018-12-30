<template>
  <div class="backgroundImage container">
    <div class="content">
        <div style="padding: 50px 20px;">
            <img src="../assets/images/web.png" class="title-image" />
        </div>
        <nav class="fixedbar">
            <a href="https://www.facebook.com/pun4tress"><img src="../assets/images/Facebook.svg" class="sns-icon"></a>
            <a href="https://twitter.com/PUN4TRESS"><img src="../assets/images/twitter.svg" class="sns-icon"></a>
        </nav>
    </div>
    <div class="radar container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <div class="message-board">
                    <div class="content">
                        <p :key="key" v-for="(message, key) in messages">
                            <span class="message-name">{{key}}</span> <br>
                            <span>{{message}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import messageJson from '../assets/message.json';

export default {
  name: 'message',
  data() {
    return {
      messages: messageJson,
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Style all font awesome icons */
.backgroundImage{
    background-image: url("../assets/images/bg.svg");
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.radar{
    padding: 30px 0
}
.message-board{
    background-color: #009966;
    color: white;
    padding: 20px;
    border-radius: 50px;
    border: 5px solid black;
    box-shadow:
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white;
    background:  #009966;
    background-size:50px auto;
    word-break: break-word;
}
.content{
    max-height: 350px;
    overflow: auto;
}

.content::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    border-radius: 10px;
    background-color: #009966;
    opacity: 30%;
}

.content::-webkit-scrollbar
{
    height: 2px;
    width: 6px;
    background-color: #009966;
    opacity: 30%;
}

.content::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #009966;
    opacity: 30%;
}
.count-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.input-box{
    background-color: #009966;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    height: 6rem;
    border: 5px solid black;
    box-shadow:
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white,
        inset 0 0 0 5px white;
    padding: 30px;
    width: 100%;
    color: white;
}

div.custom {
    padding:8px 5px 4px 5px;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: left;

}
div.custom input {
    font-size: 24px;

}
.message-name{
    text-decoration: underline;
}
.fixedbar{
    text-align: right;
    padding: 20px;
    position: fixed;
}

.content{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.title-image{
  width: 60%;
}
.sns-icon{
  width: 6vh;
}

</style>
