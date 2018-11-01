<template>
  <div class="radar">
      <div class="count">
        <p :key="key" v-for="(message, key) in messages"><b>{{key}}</b> <br> {{message}}</p>
      </div>
      <div>
          <div class="custom">
          <input class="input-box" v-model="message">
          </div>
          <img @click="sendMessage" class="radar-image" src="../assets/images/Click1.svg" width="100">
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
          this.database.ref('messages/' + this.user.displayName ).set(this.message);
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
    .count{
        position: relative;
        text-align: center;
        
    }
    .count-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .radar-image{
        padding-top: 15px;
    }
    .input-box{
          background-image:url('../assets/images/space.png');
            /* background-repeat:no-repeat;
            padding-left:20px; */
    }

    div.custom {
        background:url('../assets/images/space.svg') no-repeat center center;
        padding:8px 5px 4px 5px;
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    div.custom input {
        background-color: #fff;
        border:none;
        font-size: 30px;
        background: none;
    }
    div.custom input:hover {
        border:none;
    }
    div.custom input:focus {
        border:none;
    }

</style>
