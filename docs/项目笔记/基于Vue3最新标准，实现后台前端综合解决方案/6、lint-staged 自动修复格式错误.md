# 需求背景

在我们的日常编程工作中，我经常遇到代码格式问题，这会触发一连串的`ESLint`错误，让我感到非常头疼。这不仅影响了我们的工作效率，也降低了我们的工作满意度。我一直在思考，是否有可能在不进行任何配置的情况下，自动地帮助我修正代码格式问题，并确保我能够顺利提交代码呢？如果有这样的工具，它将极大地简化我的开发流程，让我能够专注于编写功能代码，而不是被格式问题分散注意力。

1. 我们只修改了个别的文件，没有必要检测所有的文件代码格式
2. 在检测到代码格式的错误时，可以自动对代码格式进行一些修改

# 解决方案

1、你需要安装`lint-staged`和`husky`。`husky`是一个用于管理Git钩子的工具，而`lint-staged`则用于在Git提交阶段运行lint工具。

```bash
npm install husky lint-staged --save-dev
# 或者如果你使用yarn
yarn add husky lint-staged --dev
```

2、 安装`husky`后，运行以下命令来初始化它。这将在项目根目录下创建一个`.husky`文件夹，用于存放Git钩子脚本。

```bash
npx husky install
```

3、在`package.json`文件中，添加`lint-staged`的配置。这将告诉`lint-staged`在哪些文件上运行lint工具。

```json
"lint-staged": {
  "*.{js,vue}": ["eslint --fix", "git add"]
}
```

这里，`*.{js,vue}`表示匹配所有`.js`和`.vue`文件，`eslint --fix`是执行eslint并尝试自动修复问题，`git add`是将修复后的文件添加到暂存区。

4、**添加pre-commit钩子**： 在`.husky`文件夹中，编辑`pre-commit`钩子文件（例如`.husky/pre-commit`），添加以下内容：

```
npx lint-staged
```

这将确保在执行`git commit`时，`lint-staged`会被触发，对代码格式进行校验，校验会出现两种结果：如果代码格式符合规则：则会提交成功。否则它会自动执行 `eslint --fix` 尝试帮你自动修复，如果修复成功则会帮你把修复好的代码提交，如果失败，则会提示你错误，让你修好这个错误之后才能允许你提交代码。