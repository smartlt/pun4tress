<template>
  <div class="radar">
      <h2>Count: {{count}}</h2>
    <img src="../assets/images/click.svg" @click="radarClick" width="200">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'login',
  data () {
    return {
        total: 0,
        database: firebase.database(),
        count: 0
    }
  },
  mounted(){
    let app = this;
    let count = this.database.ref('count/')
    count.on('value', function (snapshot) {
         console.log(snapshot.val())
         app.count = snapshot.val();
     })
  },
  methods: {
      radarClick(){
          axios.get('https://us-central1-pun4tress-a0d62.cloudfunctions.net/count').then(function(res){
              console.log(res);
          })
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

</style>
