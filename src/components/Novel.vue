<template>
  <div>
    <Header :img2="img2"></Header>
    <div class="novel-content" ref="contentWrapper">
      <ul>
        <li class="content-list" v-for="item in content3.data">
          <div class="content-item">
            <div class="title">{{item.title}}</div>
            <div class="des">{{item.introduction}}</div>
            <span class="icon"><img src="../common/icon/forword.png"></span>
          </div>
          <div class="content" v-for="items in item.dataList">
            <!--<div class="cover">-->
            <img :src="items.verticalImages"/>
            <!--</div>-->
            <div class="right">
              <h2 class="name">{{items.name}}</h2>
              <div class="author">{{items.authorName}}/{{items.updateValueLabel}}</div>
              <span class="categoryLabel">{{items.categoryLabel}}</span>
              <div class="introduction">{{items.introduction}}</div>
              <div class="collect" @click="collect()">点击收藏+</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import {mapGetters, mapMutations} from 'vuex'
  import Header from './Header'

  export default {
    props: {
      content3: {
        type: Object
      },
      img2: {
        type: Object
      }
    },
    data () {
      return {
        text: ''
      }
    },
    created () {
      this.$nextTick(() => {
        this.initScrollTemplate()
      })
    },
    computed: {
      ...mapGetters(['allBooks']),
      myBook () {
        return this.allBooks.find(f => f.name === this.content3.data.dataList.name)
      }
    },
    methods: {
      ...mapMutations(['COLLECT_BOOKS']),
      collect () {
        this.text = '取消收藏'
        return
      },
      initScrollTemplate () {
        if (this.$refs.contentWrapper) {
          this.contentScroll = new IScroll(this.$refs.contentWrapper, {
            click: true
          })
        }
      }
    },
    watch: {
      content3 (val) {
        this.$nextTick(() => {
          this.initScrollTemplate()
        })
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="less" scoped>
  .novel-content {
    position: fixed;
    top: 285px;
    width: 100%;
    height: 100%;
    max-height: 317px;
    z-index: -1;
    overflow: hidden;
    /*overflow: auto;*/
    .content-list {
      /*position: relative;*/
      width: 100%;
      /*height: 180px;*/
      .content-item {
        position: relative;
        width: 100%;
        height: 40px;
        display: inline-block;
        padding: 5px;
        border-top: 15px solid #f2f2f2;
        .title {
          position: absolute;
          top: 10px;
          display: block;
          height: 100%;
          width: 30%;
          padding-left: 10px;
          vertical-align: middle;
          font-size: 20px;
          font-weight: 700;
        }
        .des {
          position: absolute;
          display: block;
          height: 100%;
          width: 50%;
          font-size: 13px;
          top: 13px;
          left: 27%;
          vertical-align: middle;
          padding-left: 5px;
        }
        .icon {
          position: absolute;
          display: block;
          height: 100%;
          width: 20%;
          left: 80%;
          img {
            position: absolute;
            top: 0;
            width: 30px;
            height: 30px;
            right: 15px;
          }
        }
      }
      .content {
        position: relative;
        /*top: 40px;*/
        width: 100%;
        height: 120px;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        /*background-color: #7e8c8d;*/
        /*.cover{*/
        /*width: 80px;*/
        /*height: 120px;*/
        img {
          position: absolute;
          width: 80px;
          height: 120px;
        }
        /*}*/
        .right {
          position: relative;
          top: 0;
          margin: 0 20px 5px 15px;
          left: 90px;
          width: 250px;
          height: 120px;
          .name {
            position: absolute;
            top: 0;
            font-size: 20px;
            font-weight: 700;
            line-height: 40px;
          }
          .author {
            position: absolute;
            top: 40px;
            font-size: 15px;
            /*line-height: 20px;*/
            color: #646568;
            margin: 3px 0 10px 0;
          }
          .categoryLabel {
            position: absolute;
            top: 70px;
            font-size: 10px;
            color: red;
            /*margin-top: 5px;*/
            border: 1px solid red;
            border-radius: 5px;
          }
          .introduction {
            position: absolute;
            top: 83px;
            display: inline-block;
            box-sizing: border-box;
            font-size: 13px;
            line-height: 16px;
            color: #7e8c8d;
            padding-top: 12px;
            height: 44px;
            width: 250px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .collect {
            position: absolute;
            top: 12px;
            right: -5px;
            font-size: 15px;
            color: #fff;
            background: #000;
            border-radius: 20%;
          }
        }
      }
    }
  }

</style>
