<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="header-box">
          <div class="title">麦萌漫画</div>
          <form action="" class="header_form">
            <a href="#" class="icon_logo"><img src="../common/icon/search.png"></a>
            <input type="search" placeholder="花落无名/凶棺"/>
          </form>
          <div>
            <div class="bell"><img src="../common/icon/bell.png"></div>
            <div class="login">登录</div>
          </div>
        </div>
      </div>
      <div class="btn_to">
        <div class="btn-item">
          <div class="recommend">推荐</div>
        </div>
        <div class="btn-item">
          <div class="topics">专题</div>
          >
        </div>
        <div class="btn-item">
          <div class="category">类别</div>
        </div>
      </div>
    </div>
    <div class="header_banner">
      <ul ref="images">
        <li v-for="item in img1.image.concat([img1.image[0]])" :key="item.id">
          <img :src="item.images"/>
        </li>
      </ul>
      <ul ref="pages">
        <li class="now"></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex'
  export default {
    props: {
      img1: {
        type: Object
      }
    },
    created () {
      if (this.img2.image) {
        this.$nextTick(() => {
          this.RECEIVE_LENGTH(this.img2.image.length)
          let obj = this.$refs.images
          let page = this.$refs.pages
          this.startTransition(obj, page)
          this.linstenTranstionEnd({obj, callback: this.callback})
        })
      }
    },
    methods: {
      ...mapActions(['startTransition', 'linstenTranstionEnd', 'transitionAgain']),
      ...mapMutations(['RECEIVE_LENGTH']),
      callback () {
        this.transitionAgain({obj: this.$refs.images, modules: 'header'})
      }
    },
    watch: {
      img1 (val) {
        if (val.image) {
          this.$nextTick(() => {
            console.log(val)
            this.RECEIVE_LENGTH(val.image.length)
            let obj = this.$refs.images
            this.startTransition(obj)
            this.linstenTranstionEnd({obj, callback: this.callback})
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>

  .header-content {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    font-size: 0;
    background: #fd5668;
    /*max-width: 640px;*/
    /*min-width: 300px;*/
    z-index: 1;
    .header-box {
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: 60px;
      color: #fff;
      .title {
        flex: 0 0 80px;
        position: absolute;
        top: 5px;
        left: 5px;
        display: inline-block;
        width: 80px;
        font-size: 20px;
        border-radius: 20px;
      }
      .icon_logo {
        position: absolute;
        left: 15px;
        top: 15px;
        width: 30px;
        height: 30px;
        z-index: 4;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .header_form {
        flex: 1;
        left: 80px;
        right: 30px;
        position: absolute;
        padding: 0 10px;
        display: inline-block;
        /*width: 250px;*/
        height: 60px;
        /*box-sizing: border-box;*/
        input {
          position: absolute;
          top: 15px;
          padding: 0 10px 0 40px;
          width: 83%;
          height: 30px;
          border-radius: 20px;
          border: none;
          font-size: 14px;
          z-index: 3;
        }
      }
      .bell {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 30px;
        height: 30px;
        display: block;
        line-height: 40px;
        z-index: 4;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .login {
        position: absolute;
        right: 25px;
        top: 12px;
        width: 30px;
        height: 30px;
        font-size: 15px;
        color: #fff;
        display: block;
        line-height: 40px;
        z-index: 4;
      }
    }
  }

  .btn_to {
    display: flex;
    position: fixed;
    width: 100%;
    height: 25px;
    top: 58px;
    background-color: #fd5668;
    font-size: 16px;
    .btn-item {
      flex: 1;
      text-align: center;
      .recommend, .category, .topics {
        padding-top: 2px;
        color: white;
      }
      &:active {
        border-bottom: 3px solid #fff;
      }
    }
  }

  .header_banner {
    position: relative;
    width: 100%;
    top: 84px;
    height: 200px;
    overflow: hidden;
    border: 1px solid #ccc;
    list-style: none;
    z-index: -1;
    ul:first-child {
      width: 2000px;
      height: 100%;
      /*transform: translateX(-10%);*/
      li {
        float: left;
        width: 375px;
        height: 100%;
        img {
          width: 375px;
          height: 100%;
          display: block;
        }
      }
    }
  }


</style>
