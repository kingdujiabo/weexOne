##### 发现样式上([参照](https://weex-project.io/cn/v-0.10/references/common-style.html)):
- ##### 1: Weex 对于长度值目前只支持**像素值**，单位可省略, 不支持相对单位（em、rem 和 %）,
  - 包括宽,高, 内外边距,

- ##### 2: border: 不支持大简写 `border: 1px solid #ccc`, 只能分开写
  - `border-style:`
    - `border-left-style: solid | dashed | dotted`
  - `border-width:`
    - `border-left-width: 1`
  - `border-color:`
    - `border-left-color: #333`
  - `border-radius: `
    - `border-radius: 6`
    - `border-bottom-left-radius {length}`：，非负值, 默认值 0
    - `border-bottom-right-radius {length`：，非负值, 默认值 0
    - `border-top-left-radius {length}`：，非负值, 默认值 0
    - `border-top-right-radius {length}`：，非负值, 默认值 0
    > `<image>` 和 `<text>` 组件只能使用 `border-radius`, 暂时不支持单一角的圆角

- #####  3 : `font-weight: `字体粗细
  -  不支持数字 `100, 200, 300, ..... , 900`
  - 只支持`normal 和 bold`

-  ##### 4: 不支持`hover`

- ##### 5: `flex`
  > Flexbox 是默认且唯一的布局模型，所以你不需要手动为元素添加 display: flex; 属性

-  `flex-direction：row | column` flex 容器中 flex 成员项的排列方向。默认`column`上下纵向排列
- `justify-content: flex-start | flex-end | center | space-between，默认值为 flex-start。`, 容器中 flex 成员项在X轴上的排列
- ` stretch | flex-start | center | flex-end，默认值为 stretch。`容器中 flex 成员项在 Y轴上的排列

- #####  6: `position`
   基本一样: 不过不支持z-index
  > Weex 目前不支持 z-index 设置元素层级关系，但靠后的元素层级更高，因此，对于层级高的元素，可将其排列在后面。
