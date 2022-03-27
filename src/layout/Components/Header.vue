<template>
  <div class="header">
    <div class="logo">
      <img :src="HeaderLogo" alt="HUAWEI" />
      <span class="header-name">教育资源库</span>
    </div>
    <div class="header-menus">
      <p
        class="header-menus-item"
        :class="{ 'header-menus-item__active': activeKey === item.path }"
        v-for="item in menuOptions"
        @click="jumpPath(item)"
        :key="item.name"
      >
        {{ item.name }}
      </p>
      <!-- <p class="header-menus-item">
        <n-dropdown :options="options" @select="handleSelect">
          {{ userInfo?.name || "" }}
        </n-dropdown>
      </p> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderLogo from "@/assets/header_logo.png";
import { renderIcon } from "@/utils/icon";
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { LogOutOutline as LogoutIcon } from "@vicons/ionicons5";
import { getLocalUser, clearLocaUser } from "@/utils/auth";
import { useMessage } from "naive-ui";
const route = useRoute();
const router = useRouter();
const message = useMessage();
const activeKey = ref<string | null>("/index");
interface MenuOptionsTypes {
  path: string;
  name: string;
}

watch(
  () => route.path,
  () => {
    let path = route.path;
    let result = menuOptions.find((e) => e.path === path);
    activeKey.value = result?.path ?? "/index";
  }
);

const menuOptions: MenuOptionsTypes[] = [
  {
    name: "首页",
    path: "/index",
  },
  {
    name: "课程",
    path: "/course",
  },
  //   {
  //   name: "数据统计",
  //   path: "/dashboard",
  // },
];

const options = [
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];
const handleSelect = (key) => {
  if (key === "logout") {
    clearLocaUser();
    message.success("退出成功", {
      duration: 1000,
      onLeave: () => {
        router.push("/login");
      },
    });
  }
};
const userInfo = computed(() => {
  return getLocalUser();
});
/**
 * 跳转路由
 * @param item
 */
const jumpPath = (item: MenuOptionsTypes) => {
  activeKey.value = item.path;
  router.push(item.path);
};
</script>
<style lang="less" scoped>
.header {
  padding: 8px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 179px;
      height: 54px;
      display: block;
    }
  }

  &-name {
    margin-left: 20px;
    font-style: 22px;
    font-size: 18px;
  }

  &-menus {
    display: flex;
    align-items: center;

    &-item {
      padding: 0 25px;
      position: relative;
      color: #333;
      cursor: pointer;
      &__active {
        font-weight: bold;

        &::after {
          position: absolute;
          bottom: -9px;
          left: calc(50% - 10px);
          display: block;
          content: "";
          width: 21px;
          height: 2px;
          background-color: #333;
        }
      }
    }
  }
}
</style>
