<template>
  <div class="sys-container">
        <aside class="white">
            <h2>User {{id}}</h2>
            <ul>
                <li>
                  <section class="button-content">
                    <router-link class="button" to="/contenido" tag="button">Volver</router-link> 
                  </section>
                </li>
            </ul>
        </aside>
        <div class="container-rigth">
            <section class="white table">
                <h3>Users</h3>
                <table class="table" >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Complete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in drawTable" :key="item.id">
                      <td>{{item.id}}</td>
                      <td>{{item.title}}</td>
                      <td>
                        <img v-if="item.completed" src="../assets/true.png" alt="user">
                        <img v-else src="../assets/false.png" alt="user">
                      </td>
                    </tr>
                  </tbody>
                </table>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'content',
  data: function () {
    return {
      drawTable:[],
      id: this.$route.params.id
    }
  },
  methods: {
    getDataRest: function () {
      var that=this;
      var id=this.$route.params.id;
      fetch("https://jsonplaceholder.typicode.com/todos?userId="+id).then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          that.dataRest=resp;
          that.drawTable=JSON.parse(JSON.stringify(resp));
      })
    }, 
  },
  mounted() {
    this.getDataRest();
  }
}
</script>



