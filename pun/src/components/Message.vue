<template>
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
        <div v-if="user" class="row">
            <div class="col-1"></div> 
            <div class="col-10">
                <div class="custom">
                    <input @keyup.enter="sendMessage" class="input-box" v-model="message">
                    <img @click="sendMessage" class="radar-image" src="../assets/images/button_send.svg" width="100">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'message',
  data () {
    return {
        total: 0,
        database: firebase.database(),
        count: 0,
        message: "",
        messages: [],
        user: null
    }
  },
  mounted(){
    let app = this;
    let messages = this.database.ref('messages/')
    messages.on('value', function (snapshot) {
        app.messages = snapshot.val();
     })

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('login', user);
          // User is signed in.
          app.user = user;
          // app.updateUser();
        } else {
          // No user is signed in.

        }
    });
  },
  methods: {
      sendMessage(message){
          if(this.user){
              this.database.ref('messages/' + this.user.displayName ).set(this.message);
          }
      }
  },
  watch:{
      user(val){
          console.log(val);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Style all font awesome icons */
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

</style>
