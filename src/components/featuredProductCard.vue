<template>
  <div class="product-card" @click="toDetail(gid)">
    <el-card :body-style="bodyStyle" class="card">
      <img :src="imgSrc" class="image" />
      <div style="padding: 14px;">
        <span style="font-size:1.2rem">{{ productName }}</span>
        <div class="bottom clearfix">
          {{ `￥` + productPrice }}
          <br /><br />
          <time class="time">{{ "更新于: " + updatedAt }}</time>
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { AddViewed } from "@/api/goods";
export default {
  name: "ProductCard",
  props: ["imgSrc", "productName", "productPrice", "updatedAt", "gid"],
  data() {
    return {
      bodyStyle: { padding: "8px", cursor: "pointer" }
    };
  },
  methods: {
    toDetail(gid) {
      this.addViewed(gid);
      this.$router.push({ name: "Goods_detail", params: { gid } });
    },
    async addViewed(gid) {
      const res = await AddViewed(gid);
      console.log(res);
    }
  }
};
</script>

<style scoped>
.product-card {
}
.time {
  font-size: 0.3vw;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.card {
  width: 100%;
  height: 100%;
  flex: 1;
}
img {
  transition: ease 0.3s;
  width: 100%;
}
img:hover {
  transform: scale(1.2);
}
</style>
