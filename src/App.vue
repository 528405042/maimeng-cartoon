<template>
  <div id="app">
    <div class="tab-box">
      <div class="tab-item">
        <router-link to="/novel">
          <div class="box">
            <div class="icon"><img src="./common/icon/book.png"></div>
            <div class="click-name" :active="active">小说</div>
          </div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/comic">
          <div class="box">
            <div class="icon"><img src="./common/icon/comic.png"></div>
            <div class="click-name">漫画</div>
          </div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/community">
          <div class="box">
            <div class="icon"><img src="./common/icon/community.png"></div>
            <div class="click-name">社区</div>
          </div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/bookbase">
          <div class="box">
            <div class="icon"><img src="./common/icon/books.png"></div>
            <div class="click-name">书架</div>
          </div>
        </router-link>
      </div>
    </div>
    <router-view :img2="img2" :content3="content3" :kinds="kinds" :img1="img1"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        img2: {},
        content3: {},
        kinds: {},
        img1: {}
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/img2')
        .then((res) => {
          console.log(res)
          res = res.data
          if (res.error === 0) {
            self.img2 = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/content3')
        .then((res) => {
          console.log(res)
          res = res.data
          if (res.error === 0) {
            self.content3 = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/kinds')
        .then((res) => {
          console.log(res)
          res = res.data
          if (res.error === 0) {
            self.kinds = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/img1')
        .then((res) => {
          console.log(res)
          res = res.data
          if (res.error === 0) {
            self.img1 = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="less">
  #app {
    .tab-box {
      display: flex;
      position: fixed;
      bottom: 0;
      height: 60px;
      width: 100%;
      background-color: lavender;
      border-top: 2px solid rgba(7, 17, 27, 0.1);
      .tab-item {
        flex: 1;
        text-align: center;
        .box{
          height: 100%;
          .icon img{
            padding: 5px;
            width: 30px;
            height: 30px;
          }
          /*.click-name{*/
            /*font-size: 14px;*/
            /*height: 20px;*/
          /*}*/
        }
        & > a {
          display: block;
          color: rgb(77, 85, 93);
          &:active{
            background-color: #fe5567;
          }
        }
      }
    }
  }
</style>
