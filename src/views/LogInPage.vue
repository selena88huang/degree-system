<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>輸入您的學籍成績系統的分數，告訴您還缺多少學分畢業</p>
    <div class="container d-flex justify-content-center">
      <!-- version 3 -->
      <b-card border-variant="secondary">
        <b-row>
          <b-col md="6">
            <b-card-img src="https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1662286848503.jpg"></b-card-img>
          </b-col>
          <b-col md="6">
            <br>
            <b-card-body title="畢業生登入">

              <br><br>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="input">學號:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input id="input" size="lg" placeholder="輸入學號"></b-form-input>
                </b-col>
              </b-row>

              <br><br>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="input">密碼:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input id="input" size="lg" placeholder="輸入密碼"></b-form-input>
                </b-col>
              </b-row>

              <br><br>
              <b-button @click="navigateToGrade">登入</b-button>

            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <!-- version 2 -->
      <!-- <b-card border-variant="secondary" title="畢業生登入" class="card-img"
        img-src="http://localhost:8080/img/grad.50d8c60a.png" img-left>
        <br><br>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input">學號:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input" size="lg" placeholder="輸入學號"></b-form-input>
          </b-col>
        </b-row>

        <br><br>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input">學號:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input" size="lg" placeholder="輸入學號"></b-form-input>
          </b-col>
        </b-row>

        <br><br>
        <b-button>登入</b-button>
      </b-card> -->


      <!-- version 1 -->
      <!-- <b-card style="max-width: 80rem;" title="畢業生登入">
        <img alt="Vue logo" src="../assets/grad.png" height="350">
        <div class="row justify-content-center">
          <div class="col col-sm-1">學號:</div>
          <div class="col col-sm-4"><input type="text" name="class"><br><br></div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-sm-1">密碼:</div>
          <div class="col col-sm-4"><input type="text" name="class"><br><br></div>
        </div>
      </b-card> -->

    </div>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router'
export default {
  name: 'LogInPage',
  props: {
    msg: String
  },
  // 嘗試router
  // setup () {
  //   const router = useRouter()
  //   const toGrade = (() => {
  //     router.push({
  //       name: 'Grade'
  //     })
  //   })
  //   return {
  //     toGrade
  //   }
  // },
  methods: {
    navigateToGrade() {
      this.$router.push({ name: 'Grade' });
    },
    // navigateToGrade() {
    //   alert("I am an alert box!");
    // }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.card-img {
  height: 25rem;
  max-width: 50rem;
}
</style>
