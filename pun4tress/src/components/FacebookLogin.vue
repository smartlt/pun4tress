<template>
  <div class="login">
    <h1 v-if="!user">Facebook Login</h1>
    <h2 v-if="user">Welcome</h2>  
     <h1> {{user.displayName}}</h1>
    <button v-if="!user" class="btn btn-facebook" @click="loginFacebook">Facebook</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  props: ['value'],
  data () {
    return {
      title: 'Pun4Tress',
      description: '18 BIRTHDAY PROJECT',
      provider: new firebase.auth.FacebookAuthProvider(),
      user: null
    }
  },
  computed:{
    interface: {
      get(){
        return this.value;
      },
      set(val){
        this.$emit('value', this.user);
      }
    }
  },
  mounted(){
    let app = this;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('login', user);
          // User is signed in.
          app.user = user;
          app.$emit('updateuser', user);
          app.updateUser();
        } else {
          // No user is signed in.

        }
    });
  },
  methods: {
    loginFacebook(){
      var app = this;
      firebase.auth().signInWithPopup(app.provider).then((result) => {
        // app gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        app.user = user;
        app.$emit('updateuser', user);

        if(result.additionalUserInfo.isNewUser){
          console.log('new');
          app.createUser();
        }else{
          console.log('update');
          app.updateUser();
        }

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
    },
    updateUser(){
      // Write the new post's data simultaneously in the posts list and the user's post list.
      let updates = {};
      let uid = this.user.uid;
      updates['/users/' + uid] = this.user;
      return firebase.database().ref().update(updates);
    },
    createUser(){
      // Write the new post's data simultaneously in the posts list and the user's post list.
      let uid = this.user.uid;
      return firebase.database().ref('users/' + uid).set(this.user);

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
