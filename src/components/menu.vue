<script setup lang="ts">
import { ref } from "vue";

interface IMenuItem {
  title: string;
  icon?: string;
  active?: boolean;
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[];
}

const handle = (pmenu: IMenu, cmenu?: IMenuItem[]) => {
  pmenu.active = !pmenu.active;
};

const menus = ref<IMenu[]>([
  {
    title: "错误页面",
    icon: "fa-solid fa-hammer",
    children: [
      { title: "404错误", active: true },
      { title: "403错误" },
      { title: "500错误" },
    ],
  },
  {
    title: "编辑器",
    icon: "fa-brands fa-codepen",
    children: [{ title: "markdown编辑器" }, { title: "富文本编辑器" }],
  },
]);
</script>
<template>
  <div class="menu">
    <div class="logo text-gray-300 mt-2 flex justify-center">
      <i class="fa-solid fa-seedling mr-2 text-[20px]"></i>
      晚八点直播
    </div>
    <!--菜单-->
    <div class="left-container">
      <dl class="text-gray-300" v-for="(menu, index) in menus">
        <dt class="mt-6" :key="index" @click="handle(menu, menu.children)">
          <section class="flex justify-between items-center">
            <div class="item">
              <i :class="menu.icon"></i>
              <span class="text-md">{{ menu.title }}</span>
            </div>
            <i class="fa-solid fa-angle-down cursor-pointer"></i>
          </section>
        </dt>
        <template v-for="child in menu.children" v-if="menu.active">
          <dd :class="{ active: child.active }">{{ child.title }}</dd>
        </template>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  @apply w-[200px] bg-gray-800 p-4;

  .left-container {
    .item {
      i {
        @apply mr-2;
      }
    }
    dd {
      @apply py-3 mt-2 bg-gray-800 rounded-md px-4 text-sm;

      &.active {
        @apply bg-blue-600;
      }
    }
  }
}
</style>
