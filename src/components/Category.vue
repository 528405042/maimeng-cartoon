<template>
  <div>
    <div class="btn_to">
      <div class="btn-item">
        <router-link to="/recommend">
          <div class="recommend">推荐</div>
        </router-link>
      </div>
      <div class="btn-item">
        <router-link to="/category">
          <div class="category">类别</div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="category_content">
      <div class="category-item" v-for="item in kinds.data2">
        <h2 class="title">{{item.channel}}</h2>
        <table class="content-tatle">
          <tr v-for="(items,index) in item.categoryList">
            <td v-for="i in this.oddIndexs">
              <img :src="items[i].images"/>
              <span class="name">{{items[i].cname}}</span>
            </td>
            <td v-for="i in this.evenIndexs">
              <img :src="items[i].images"/>
              <span class="name">{{items[i].cname}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    props: {
      kinds: {
        type: Object
      }
    },
//    data() {
//      return{
//      }
//    },
    computed: {
      ...mapGetters(['oddIndexs', 'evenIndexs']),
      odd (i) {
        return this.getOddIndexs(i)
      },
      even (i) {
        return this.getEvenIndexs(i)
      }
    },
    methods: {
      ...mapMutations({
        getOddIndexs: 'GET_ODD_INDEX',
        getEvenIndexs: 'GET_EVEN_INDEX'
      })
    }
  }
</script>

<style lang="less" scoped>

  .btn_to {
    display: flex;
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    background-color: #4285f4;
    font-size: 20px;
    .btn-item {
      flex: 1;
      padding-top: 20px;
      text-align: center;
      .recommend, .category {
        color: white;
      }
      &:active {
        border-bottom: 3px solid #fff;
      }
    }
  }

  .category_content {
    position: absolute;
    top: 60px;
    padding: 15px;
    width: 100%;
    z-index: -1;
    .category-item {
      .title {
        margin-top: 10px;
        font-weight: bold;
        text-align: center;
        &:last-child {
          margin-top: 20px;
        }
      }
      .content-tatle {
        position: relative;
        margin-top: 10px;
        width: 100%;
        /*border-bottom: 1px solid #ccc;*/
        tr {
          display: flex;
          width: 100%;
          height: 80px;
          border-bottom: 1px solid #f6f6f6;
          &:last-child {
            border-bottom: none;
          }
          td {
            flex: 1;
            position: relative;
            width: 50%;
            border-right: 1px solid #f6f6f6;
            &:last-child {
              border-right: none;
            }
            img {
              position: absolute;
              width: 60px;
              height: 60px;
              margin: 10px;
              border-radius: 40%;
              border: 1px solid #ccc;
            }
            .name {
              position: absolute;
              display: inline-block;
              width: 40%;
              left: 80px;
              top: 15px;
              text-align: center;
              padding: 18px 5px 15px 5px;
            }
          }
        }
      }
    }
  }
</style>
