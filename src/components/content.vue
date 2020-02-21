<template>
  <div class="sys-container">
        <aside class="white">
            <h2>System</h2>
            <ul>
                <li><img src="../assets/user.png" alt="users">Users</li>
            </ul>
        </aside>
        <div class="container-rigth">
            <section class="white dash">
                <nav>
                    <div>
                        Dashboard   
                    </div>
                    <div class="flex"><img src="../assets/user.png" alt="user">Julián Calvachi</div>
                </nav>
            </section>
            <!-- <section class="button-content"><button class="button"> + Add new user</button></section> -->
            <section class="white table">
                <h3>Users</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Adress</th>
                      <th>Company</th>
                      <th>To-dos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in drawTable" :key="item.id">
                      <td><b>{{item.id}}</b></td>
                      <td>{{item.name}}</td>
                      <td>{{item.email}}</td>
                      <td>
                        <b>Street:</b> {{item.address.street}}<br>
                        <b>Suite:</b> {{item.address.suite}}<br>
                        <b>City:</b> {{item.address.city}}<br>
                        <b>Zipcode:</b> {{item.address.zipcode}}<br>
                      </td>
                      <td>
                        <b>Name:</b> {{item.company.name}}<br>
                        <b>Catchphrase:</b> {{item.company.catchPhrase}}<br>
                        <b>bs:</b> {{item.company.bs}}<br>
                      </td>
                      <td><a class="button" :href="'/info/'+item.id">View</a></td>
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
    }
  },
  methods: {
    getDataRest: function () {
      var that=this;
      fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          that.drawTable=JSON.parse(JSON.stringify(resp));
      })
    }, 
  },
  mounted() {
    this.getDataRest();
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Roboto', sans-serif;
  color: #74798c;
  margin: 0;
}

.sys-container {
  width: 1148px;
  background: #f5f6fa;
  margin: 0 auto;
  display: flex;
  h3 {
    padding-top: 32px;
    margin: 0;
  }
  img {
    width: 22px;
  }
  ul {
    padding: 14px;
    li {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }
  }
  aside {
    width: 245px;
    padding: 30px;
    h2 {
      margin-top: 0;
    }
  }
  .white {
    background-color: white;
  }
  .button {
      height: 48px;
      width: 195px;
      border: none;
      color: white;
      background-color: #0054fe;
      border-radius: 5px;
      cursor: pointer;
      padding: 14px;
  }
  .container-rigth {
    width: 100%;
    margin: 0 35px;
    .dash {
      margin-bottom: 25px;
    }
    .table {
      padding: 0 31px;
    }
    .table table {
      text-align: left;
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
    .table table tr {
      height: 74px;
    }
    nav {
      display: flex;
      justify-content: space-between;
      padding: 31px;
    }
    .flex {
      display: flex;
    }
    section.button-content {
      margin: 25px 0px;
    }
  }
}
</style>

