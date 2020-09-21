## 虚拟DOM

### 浏览器的渲染原理和流程
  1. 浏览器将获取的HTML文档解析成DOM Tree(DOM树)。
  2. 将CSS样式表，解析成CSSOM Tree(CSS树)。
  3. 将DOM和CSSOM合并为渲染树(rendering tree)，attachment
  4. 渲染树的每个元素经过精确的计算后，给出坐标，laylout。
  5. 将渲染树的各个节点绘制到屏幕上，painting。

### render Tree是在DOM和CSSOM结束以后才开始构建的吗？
  - 不是的。为了能够更快的显示页面，一边加载，一边解析，一边渲染。
  - 不必等待整个html文档全部解析完毕后再渲染

### css的解析顺序
  - 逆向解析的，从DOM树的下往上解析的效率更高。所以嵌套标签越多，效率会越低

### js操作DOM的代价
  - 使用传统的js或者jq操作dom树的时候，浏览器会从执行整个流程。
  - 尤其是当循环10次的时候，做第一次的时候，并不知道后面还有9次，每一次都会执行整个流程，甚至前九次都是无用功。可以通过console.time来比较
  - 所以操作DOM的代价是昂贵的

### 为什么要使用虚拟DOM
  - 虚拟DOM是为了解决浏览器性能问题而被设计出来的。
  - 比如有10次循环，虚拟DOM不会立即操作DOM，而是将10次的diff内容保存在一个js对象里面，然后一次性的操作，避免大量无谓的计算
  - 操作内存中的js对象的速度显然更快，等更新完后，再将最终的js对象映射成真实的DOM，交由浏览器绘制。

### 真实DOM的实现
  ```
    <div id="app">
      <p>Real DOM</p>
      <div>cannot update</div>
      <ul>
        <li class="item">item1</li>
        <li class="item">item2</li>
        <li class="item">item3</li>
      </ul>
    </div>
  ```

### 虚拟DOM的实现
  创建虚拟DOM
  ```
    const tree = Element('div', {id: 'app'}, [
      Element('p', {}, ['Real DOM']),
      Element('ul', {}, [
        Element('li', {class: 'item'}, ['item1']),
        Element('li', {class: 'item'}, ['item2']),
        Element('li', {class: 'item'}, ['item3'])
      ])
    ]);


    const root = tree.render();
    document.querySelector('body').appendChild(root);
  ```
  映射成真实DOM
  ```
    function Element (tagName, props, children) {
      this.tagName = tagName
      this.props = props
      this.children = children
    }

    Element.prototype.render = function () {
      var el = document.createElement(this.tagName) // 根据tagName构建
      var props = this.props

      for (var propName in props) { // 设置节点的DOM属性
        var propValue = props[propName]
        el.setAttribute(propName, propValue)
      }

      var children = this.children || []

      children.forEach(function (child) {
        var childEl = (child instanceof Element)
          ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
          : document.createTextNode(child) // 如果字符串，只构建文本节点
        el.appendChild(childEl)
      })

      return el
    }

    export default function (tagName, props, children) {
      return new Element(tagName, props, children)
    }
  ```

### diff操作
  数据改变，虚拟DOM也会改变
  我们不想重新渲染vdom，我们只想渲染改变的部分，就需要用到diff算法
  两个树如果完全比较，时间复杂度是O(n^3),Vue的Diff算法的时间复杂度是O(n),意味着只能平层的比较两棵树的节点，放弃了深度遍历。似乎牺牲了一定的精准性来换取速度，但考虑到前端页面通常不会跨层移动DOM元素，这样做是优先的
  ```
    采用了同级比较，只有count相同的children进行比较
    比较他们的key，进行增加，删除，替换，换位等操作
  ```


