<template>
  <div class="login">
    <!-- The surrounding HTML is left untouched by FirebaseUI.
     Your app may use that space for branding, controls and other customizations.-->
    <h1 v-if="!user">Facebook Login</h1>
    <h1 v-if="user">Welcome  {{user.displayName}}</h1>
    <button v-if="!user" class="button blue" @click="loginFacebook">Facebook</button>
    <!-- <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div> -->
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
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // var uiConfig = {
    //   callbacks: {
    //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //       // User successfully signed in.
    //       // Return type determines whether we continue the redirect automatically
    //       // or whether we leave that to developer to handle.
    //       console.log(authResult);
    //       return true;
    //     },
    //     uiShown: function() {
    //       // The widget is rendered.
    //       // Hide the loader.
    //       console.log('shown');
    //       document.getElementById('loader').style.display = 'none';
    //     }
    //   },
    //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    //   signInFlow: 'popup',
    //   signInOptions: [
    //     // Leave the lines as is for the providers you want to offer your users.
    //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   ],
    // };
    // // The start method will wait until the DOM is loaded.
    // ui.start('#firebaseui-auth-container', uiConfig);

    

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
  .button{
    background-color: blue;
  }

</style>
