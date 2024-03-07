# 操作步骤

1、在`views`下的`login`文件夹中创建`index.vue`文件

2、在 `router/index.js` 中增加以下路由配置

```javascript
/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
```

3、在 `login/index.vue` 中，生成基本页面结构

```vue
<template>
  <div class=""></div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
```

4、创建登录页面基本结构

```vue
<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFromRef">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
        />
        <span class="show-pwd">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
      </el-form-item>

      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
// 导入组件之后无需注册可直接使用
import { Avatar } from '@element-plus/icons'
import {} from 'vue'
</script>
```



