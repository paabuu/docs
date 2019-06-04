# React concepts

## 什么是声明式编程(declarative programming)

声明式编程是一种关注做什么而不是怎么做的编程范式。它在表示逻辑的时候不会定义具体的步骤。声明式编程的例子有HTML, SQL等

```html
<div>
    <p>Declarative Programming</p>
</div>
```

```sql
select * from students where firstName = 'declarative';
```

## 声明式编程 vs 命令式编程

做什么 vs 怎么做。

声明式编程让编译器决定怎么去做。声明式编程更容易推理，因为代码本身描述了正在做什么。例如`Array.prototype.map`:

```js
const numbers = [1, 2, 3, 4, 5];

// 声明式编程
const doubleWithDec = numbers.map(number => number * 2);

// 命令式编程
const doubleWithImp = [];
for (let i = 0; i < numbers.length; i++) {
    const numberdouble = numbers[i] * 2;
    doubleWithImp.push(numberdouble);
}
```

## 什么是函数式编程

函数式编程是声明式编程的一种。在JavaScript中，函数式一等公民, 这意味着函数是数据，你可以在整个应用中像变量一样保存，恢复，传递这些函数。

下面是函数式编程的核心概念：

- 不变性
- 纯函数
- 数据转换
- 高阶函数
- 递归
- 组合

### 不变性(immutability)

在函数式编程中不能改变数据。如果你想改编数据，必须复制数据，更改复制的数据并使用。

例如，有一个`student`对象和`changeName`的方法, 如果你想改变学生的名字，需要首先复制这个对象然后返回新的对象。

在javascript中，函数参数是真实数据的引用，应该使用`Object.assign`复制对象并返回新的对象。

```js
let student = {
    firstName: 'testing',
    lastName: 'testing',
    marks: 500
};

function changeName(student) {
    let copiedStudent = Object.assign({}, student);
    copiedStudent.firstName = 'testing11';

    return copiedStudent;
}
```

### 纯函数(pure functions)

纯函数是指接受一个或多个参数，根据参数进行运算并返回数据或函数的函数。纯函数没有像设置全局状态，改变应用状态这样的副作用，并且总是把参数当做不可变数据。

### 数据转换(data transformations)

产生原始数据拷贝的转换而不是直接改变原始数据。以一些內建函数为例，这些函数不改变已存在的数据而是会返回新的数组或对象。

```js
let cities = ['irving', 'lowell', 'houston'];
const citiesI = cities.filter(city => city[0] === 'i);
const citiesC = cities.map(city => city.toUpperCase());
```

### 高阶函数(high-order functions)

高阶函数是指接受函数作为参数或返回参数或两者都存在的函数。高阶函数可以操作其他函数。

`Array.prototype.map`, `Array.prototype.filter`, `Array.prototype.reduce`是高阶函数因为他们接受函数作为参数。

### 递归(recursion)

递归是指执行自身直到某种条件停止。

```js
function printMyName(name, count) {
    if (count < name.length) {
        console.log(name.substring(0, count));
        printMyName(name, ++count);
    }
}
```

### 组合(composition)

js中的链式写法就是一种组合。

```js
const name = "Bhargav Bachina";

const output = name.split(" ")
    .filter(name => name.length > 5)
    .map(val => {
    val = val.toUpperCase();
    console.log("Name:::::"+val);
    console.log("Count::::"+val.length);
    return val;
});
```

## 什么是React

React是一个简单的javascript UI库，用于构建高效且快速的用户界面。它遵循组件设计模式，声明性编程范例和函数式编程概念，以使前端应用程序高效。它使用Virtual DOM来有效地操作DOM. 它遵循从高阶组件到低阶组件的单向数据流。

## React和Angular的区别

Angular是一个完整的MVC框架，有很多特有的特性比如服务，指令，模板，模块等。React是一个轻量的库，专注于MVC中的View。Angular是双向数据绑定而React是单向数据流。

## 什么是虚拟DOM及它是如何工作的

React使用虚拟DOM来更新真实DOM，这会更高效和快速。

### 什么是虚拟DOM

浏览器根据HTML结构来构建文档对象模型(DOM)。所有的HTML中的元素都会在浏览器加载HTML并渲染出用户界面之后成为DOM元素。

React使用Virtual DOM有效地重建DOM。对于我们来说，这使得DOM操作的一项非常复杂和耗时的任务变得更加容易。 React从开发人员那里抽象出所有这些，以便在Virtual DOM的帮助下构建高效的UI。

#### 虚拟DOM如何工作

虚拟DOM是真实DOM的javascript对象表现形式。更新js对象会比更新真实DOM要简单。

每次更新时，对比更新前与更新后的虚拟DOM,找出更新的地方, 然后更新真实DOM。

## 什么是JSX

JSX是javascript的语法扩展。就像是拥有js所有能力的模板语言。jsx生成将在DOM中渲染的React元素。

## 组件和不同的类型

React中的一切都是组件。组件就是一个接受并处理输入并返回React element的函数。

组件也分为不同的类型。

### 函数式/无状态/展示型组件

函数式组件或无状态组件是接受props或没有props，返回React元素的纯函数。这些纯函数没有任何副作用，也没有state和生命周期函数

### 类/有状态组件

有状态组件通过`this.setState()`方法更改组件的state。类组件通过继承`React.Component`, 在构造函数中初始化并且可能有子组件。

### 受控组件

受控组件是一种在React中处理输入表单的技术。组件元素一般会维护自身的state, React维护组件的state。在受控组件中，form data由React组件处理。

### 非受控组件

大部分情况推荐使用受控组件，但是在使用`ref`时可以选择非受控组件。在非受控组件中，使用Ref直接获取表单的值。

### 容器组件

容器组件用来拉取数据，在redux store中订阅等。

### 高阶组件

接受组件作为参数并生成另一个组件的组件。例如`react-redux`中的`connect`方法。

## Props & State

Props是传递给组件用来渲染用户界面的只读属性，配合state，能随时改变组件的输出。

## 什么是PropTypes

PropTypes为组件提供类型检查。

## 如何更新State和如何不更新

```js
// wrong way
this.setState({
    timesVisited: this.state.timesVisited + this.props.count
})
// right way
this.setState((state, props) => {
    timesVisited: state.timesVisited + props.count
});
```

## 组件生命周期方法

组件从进入DOM到离开DOM会经历一系列的生命周期方法。如下：

### Mounting
#### constructor
- 通过声明this.state初始化组件的state
- 把时间处理函数绑定在实例上

#### static getDerivedStateFromProps(props, state)
返回对象作为新的state, 返回null则不更新

#### render
返回一下类型：
- React elements
- 数组和片段
- Portals
- 字符串和数字
- 布尔值或null

#### componentDidMount

### Updating
#### static getDerivedStateFromProps(props, state)
#### shouldComponentUpdate
#### render
#### getSnapshotBeforeUpdate(prevProps, prevState)
使组件能够获得一些DOM的信息， 返回值在componentDidUpdate中获取

#### componentDidUpdate(prevProps, prevState, snapshot)
### Unmounting
#### componentWillUnmount

### ErrorHandling
#### static getDerivedStateFromError
出错时更新state

#### componentDidCatch

## React如何添加样式

1. 引用样式表
2. 行内样式
3. 定义样式对象并使用

## 什么是redux & 工作原理

Redux是React的一个状态管理库，它基于flux。 Redux简化了React中的单向数据流。 Redux将状态管理完全从React中抽象出来。

在React中，组件连接到redux存储，如果要访问redux存储，则需要调度包含类型和payload的操作。操作中的payload是可选的。action将其转发给reducer。

action传入reducer后，reducer返回新的state。

## React Router DOM

`react-router-dom`提供`BrowserRouter`和`HashRouter`两种路由。

组件：
- `BrowserRouter`和`HashRouter`都是路由。
- `Route`用来匹配路径
- `Link`组件被用来在创建链接。在html中会被渲染为锚点标签
- `NavLink`是带有活跃状态的链接
- `Switch`不是必须但是在合并路由时会很方便
- `Redirect`被用来强制跳转

## 什么是错误边界

- 当错误发生时展示fallback UI
- 打印错误

## 什么是Fragments

`React.Fragment` === `<></>`

## 什么是Portals

默认情况下，所有子组件都在UI上呈现，具体取决于组件层次结构。Portals使得可以在父组件的DOM层次结构之外呈现组件子级。

## 什么是context

context是一种组件间传递属性的方法，可以跨过多层组件进行传递

## 什么是Hooks

Hooks使函数式组件也能使用state和类组件的一些特性

使用规则
- Hooks必须在最顶层使用，不能再循环，条件语句或嵌套函数中使用
- Hooks只能在函数式组件中使用，或者是在自定义的hook中

## 如何提升性能

- 使用`shouldComponentUpdate`方法。
- 使用create-react-app
- 保持数据不可变性
- 在list中使用key
- 代码分割

## 如何持久化数据
`localStorasge`
