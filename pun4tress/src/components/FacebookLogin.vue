<template>
  <div class="login">
    <h1 v-if="!user">Facebook Login</h1>
    <h1 v-if="user">Welcome  {{user.displayName}}</h1>
    <button v-if="!user" class="btn btn-facebook" @click="loginFacebook">Facebook</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      title: 'Pun4Tress',
      description: '18 BIRTHDAY PROJECT',
      provider: new firebase.auth.FacebookAuthProvider(),
      user: firebase.auth().currentUser
    }
  },
  mounted(){

  },
  methods: {
    loginFacebook(){
      var app = this;
      firebase.auth().signInWithPopup(this.provider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        this.user = user;
        // ...
      }).catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Style all font awesome icons */
.btn-facebook {
	  background: #3B5998;
	  border-radius: 0;
	  color: #fff;
	  border-width: 1px;
	  border-style: solid;
	  border-color: #263961; 
	}
	.btn-facebook:link, .btn-facebook:visited {
	  color: #fff;
	}
	.btn-facebook:active, .btn-facebook:hover {
	  background: #263961;
	  color: #fff;
	}


</style>
