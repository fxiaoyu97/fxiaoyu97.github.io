import fs from 'fs'
import path from 'path'
const docsRoot = path.join(__dirname, '..')

class SidebarItem {
  text: string
  collapsible?: boolean
  children: Array<any>
  constructor(text: string) {
    this.text = text
  }
}

function sortArr(files: string[]) {
  files.sort((item1, item2) => {
    return Number(item1.split('.')[0]) - Number(item2.split('.')[0])
  })
}

function getRootPath(filePath: string): string {
  return path.join(docsRoot, filePath)
}

function getPathText(file: string): string {
  let pathText = file.split('.')[1]
  return pathText != undefined ? pathText : file.split('.')[0]
}
/**
 * 过滤不需要展示的文件或路径
 * @param file 文件或路径名称
 * @returns 结果，需要过滤-true
 */
function needFilter(file: string): boolean {
  // vuepress配置文件
  if (file === '.vuepress') return true
  // 图片文件夹
  if (file === 'img' || file === 'image') return true
  // README文件
  if (file === 'README.md' || file === 'readme.md') return true
  // 图片文件
  // let arr = file.split('.');
  // if(arr.lastIndexOf('jpg')!=-1 || arr.lastIndexOf('jpeg')!=-1 || arr.lastIndexOf('png')!=-1) return true;
  return false
}
/**
 * 获取指定文件夹的文章目录
 *
 * @param filePath 文章文件夹路径
 * @param fileDepth 小于等于这个深度的文件夹的文章都不折叠
 * @param moreArr 侧边栏还需要额外添加的目录
 * @returns 侧边栏目录
 */
export function getChildren(
  filePath: string,
  fileDepth: number = 0,
  moreArr: Array<any> = new Array<any>()
): Array<any> {
  let result = Array<any>()
  let rootPath = getRootPath(filePath)
  let files = fs.readdirSync(rootPath)
  // 排序
  sortArr(files)
  files.forEach((file) => {
    if (!needFilter(file)) {
      let docsPath = `${filePath}/${file}`
      const stat = fs.statSync(path.join(rootPath, file))
      if (stat.isDirectory()) {
        let item = new SidebarItem(getPathText(file))
        item.collapsible = fileDepth <= 0 ? false : true
        item.children = getChildren(docsPath, fileDepth + 1)
        result.push(item)
      } else {
        result.push(`/${docsPath}`)
      }
    }
  })
  return result.concat(moreArr)
}
