<template>
  <div class="radar">
      <div class="count">
        <img src="../assets/images/space.png" @click="radarClick" width="200">
        <h2 class="count-text">{{count}}</h2>
      </div>
    <img class="radar-image" src="../assets/images/new.png" @click="radarClick" width="200">
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

</style>
