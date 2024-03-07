在我们的项目中所使用的 `icon` 图标，一共分为两类：

1. `element-plus` 的图标
2. 自定义的 `svg` 图标

这也是通常情况下企业级项目开发时，所遇到的一种常见情况。

对于 `element-plus` 的图标我们可以直接通过 `el-icon` 来进行显示，但是自定义图标的话，我们暂时还缺少显示的方式，所以说我们需要一个自定义的组件，来显示我们自定义的 `svg` 图标。

那么这种自定义组件处理 **自定义 `svg` 图标的形式**，就是我们在面临这种问题时的通用解决方案。

那么对于这个组件的话，它就需要拥有两种能力：

1. 显示外部 `svg` 图标
2. 显示项目内的 `svg` 图标

基于以上概念，我们可以创建出以下对应代码：

创建 `components/SvgIcon/index.vue`：

创建 `components/SvgIcon/index.vue`：

```vue
<template> 
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { isExternal as external } from '@/utils/validate'
import { defineProps, computed } from 'vue'
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => external(props.icon))
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
/**
 * 项目内图标
 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>

```

创建 `utils/validate.js`：

```js
/**
 * 判断是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

```

在 `views/login/index.vue` 中使用 **外部 `svg` （`https://res.lgdsunday.club/user.svg`）：**

```html
<span class="svg-container">
	<svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
</span>
```

外部图标可正常展示。

那么在本小节中，我们创建了 `SvgIcon` 组件，用来处理了 **外部图标** 的展示，但是对于内部图标而言，我们此时依然无法进行展示。所以在下一小节中，我们就需要看一下，如何处理内部的 `svg` 图标。

## 3-10：处理内部 svg 图标显示

在上一章中，我们创建了 `SvgIcon` 组件用于显示 **非 Element-ui** 的图标。但是目前我们只处理了 **外部 `svg` 的图标展示**，内部的图标还无法展示。

所以这一小节，我们就需要处理 **内部的 `svg` 图标展示。**

1. 首先导入所有的 `svg` 图标（大家可以从 讲师源代码 -> `src -> icons -> svg` 处，获取所有 `svg` 图标），导入到 `src -> icons -> svg` 处

2. 在 `icons` 下创建 `index.js` 文件，该文件中需要完成两件事情：

   1. 导入所有的 `svg` 图标
   2. 完成 `SvgIcon` 的全局注册

3. 得出以下代码：

   ``` js
   import SvgIcon from '@/components/SvgIcon'
   
   // 1、导入所有的svg图标
   
   // https://webpack.docschina.org/guides/dependency-management/#requirecontext
   // 通过 require.context() 函数来创建自己的 context
   const svgRequire = require.context('./svg', false, /\.svg$/)
   // 此时返回一个 require 的函数，可以接受一个 request 的参数，用于 require 的导入。
   // 该函数提供了三个属性，可以通过 require.keys() 获取到所有的 svg 图标
   // 遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入
   svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
   
   // 2、完成SvgIcon的全局注册
   export default (app) => {
     app.component('svg-icon', SvgIcon)
   }
   
   ```

4. 在 `main.js` 中引入该文件

   ```js
   ...
   // 导入 svgIcon
   import installIcons from '@/icons'
   ...
   installIcons(app)
   ...
   
   ```

5. 删除 `views/login` 下 局部导入 `SvgIcon` 的代码

6. 在 `login/index.vue` 中使用 `SvgIcon` 引入本地 `svg`

   ```html
   // 用户名   
   <svg-icon icon="user" />
   // 密码
   <svg-icon icon="password" />
   // 眼睛
   <svg-icon icon="eye" />
   ```

7. 此时 **处理内容 `svg` 图标的代码** 已经完成

打开浏览器，我们发现 **图标依然无法展示！** 这又是因为什么原因呢？

## 使用 svg-sprite-loader 处理 svg 图标

[svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader) 是 `webpack` 中专门用来处理 `svg` 图标的一个 `loader` ，在上一节中我们的图标之所有没有展示，就是因为我们缺少该 `loader`。

那么想要使用该 `loader` 我们需要做两件事情：

1. 下载该 `laoder`，执行：`npm i --save-dev svg-sprite-loader`

2. 创建 `vue.config.js` 文件，

3. 新增如下配置：

   ```js
   const path = require('path')
   function resolve(dir) {
     return path.join(__dirname, dir)
   }
   // https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
   module.exports = {
     chainWebpack(config) {
       // 设置 svg-sprite-loader
       config.module
         .rule('svg')
         .exclude.add(resolve('src/icons'))
         .end()
       config.module
         .rule('icons')
         .test(/\.svg$/)
         .include.add(resolve('src/icons'))
         .end()
         .use('svg-sprite-loader')
         .loader('svg-sprite-loader')
         .options({
           symbolId: 'icon-[name]'
         })
         .end()
     }
   }
   
   ```

处理完以上配置之后，重新启动项目，图标即可显示！

## Vue3.2 响应式优化对应用层的改变

在处理好了 `SvgIcon` 图标之后，接下来我们就需要处理登陆页面的逻辑问题了。不过在处理这个逻辑之前，我们需要先来明确一点 `vue3` 新的更新内容。

如果大家之前有过了解 `Vue3` 代码的话，那么会知道 `Vue3` 中声明响应式数据的方式有两种：

1. [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref)
2. [reactive](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive)

对于这两种使用方式而言，它们在应用层上并没有明确的界限，也就是说我们可能很难仅通过官网的介绍来判断我应该在什么情况下使用什么。

但是这种情况在现在已经不存在了。

2020年10月29日，社区大佬 [basvanmeurs](https://github.com/basvanmeurs) 提出了一个新的 [PR](https://github.com/vuejs/vue-next/pull/2345)，大概的意思是说：他重构了响应式的部分内容，大大增加了性能。

详细的介绍如下：

> - Big runtime performance improvement for ref, computed, watch and watchEffect (30%-80% depending on the amount of dependencies)
> - Memory usage decreased by about 30% when creating ref, computed, watch and watchEffect
> - Creation time performance improvement, most notably for watchers and watchEffects
>
> ----------------------
>
> ref、calculated、watch 和 watchEffect 的运行时性能大幅提升（30%-80% 取决于依赖项的数量）
> 创建 ref、calculated、watch 和 watchEffect 时内存使用量减少了约 30%
> 创建时间性能改进，最显著的是 watchers 和 watchEffects

这是一个非常强大的变化，同时又因为这个变化过于庞大，所以一直等待到 `2021年8月5日` 伴随着  [vue 3.2发布](https://blog.vuejs.org/posts/vue-3.2.html)，尤大才合并对应的代码，并在这次变化中对该性能改进进行了如下的介绍：

> - [More efficient ref implementation (~260% faster read / ~50% faster write)](https://github.com/vuejs/vue-next/pull/3995)
> - [~40% faster dependency tracking](https://github.com/vuejs/vue-next/pull/4017)
> - [~17% less memory usage](https://github.com/vuejs/vue-next/pull/4001)
>
> ---------
>
> 更高效的 ref 实现（约 260% 的读取速度/约 50% 的写入速度）
> 依赖项跟踪速度提高约 40%
> 内存使用量减少约 17%

毫无疑问，这绝对是一个伟大的变化。

那么针对于这个变化，在应用层中最大的体现就是 `ref` 这个 `API` ，性能得到了大幅度的提升。

所以说，拥抱新的变化吧！

在之后能使用 `ref` 的地方就使用 `ref` 吧。毕竟现在它的性能得到了大幅的提升！

那么在咱们之后的代码中，我们同样也会全部使用 `ref` 来作为响应式数据构建的方式，无论是 **基本数据类型** 或者是 **复杂数据类型**， 毕竟这样做本身并没有什么问题，对不对？