# ECMAScript 2019 语言规范

## 目录

1. [范围](1.Scope.md)
2. [一致性](2.Conformance.md)
3. [参考](3.Normative_References.md)
4. [概述](4.Overview.md)
5. [约定](5.Notational_Conventions.md)
6. [数据类型和值](6.Data_Types_Values.md)
7. [抽象运算](7.Abstract_Operations.md)
8. [可执行代码与执行上下文](8.Executable_Code_And_Execution_Contexts.md)
9. [普通对象和特殊对象的特性](9.Ordinary_And_Exotic_Objects_Behaviours.md)
10. [ECMAScript语言：源代码](10.ECMAScript_Language_Source_Code.md)
11. [ECMAScript语言：词汇语法](11.ECMAScript_Language_Lexical_Grammar.md)
12. [ECMAScript语言：表达式](12.ECMAScript_Language_Expressions.md)
13. [ECMAScript语言：Statements和Declarations](13.ECMAScript_Language_Statements_Declarations.md)
14. [ECMAScript语言：函数与类](14.ECMAScript_Language_Function_Class.md)
15. [ECMAScript语言：脚本与模块](15.ECMAScript_Language_Script_Module.md)
16. [错误处理和语言扩展](16.Error_Handling_Language_Extensions.md)
17. [标准内置对象](17.ECMAScript_Standard_Biilt-in_Objects.md)
18. [全局对象](18.The_Global_Object.md)
19. [基本对象](19.Fundamental_Objects.md)
20. [数字和日期](20.Numbers_Dates.md)
21. [文字处理](21.Text_Processing.md)
22. [有序集合](22.Indexed_Collections.md)
23. [键值集合](23.Keyed_Collections.md)
24. [结构化数据](24.Structured_Data.md)
25. [控制抽象对象](25.Control_Abstraction_Object.md)
26. [Reflection](26.Reflection.md)


## 介绍

此Ecma标准定义了ECMAScript 2019语言。这是ECMAScript语言规范的第10版。自1997年第一版出版以来，ECMAScript已发展成为世界上使用最广泛的通用编程语言之一。它最为人所知的是嵌入在Web浏览器中的语言，但也被广泛用于服务器和嵌入式应用程序。

ECMAScript基于几种原始技术，最着名的是JavaScript（Netscape）和JScript（Microsoft）。该语言由Brendan Eich在Netscape发明，并首次出现在该公司的Navigator 2.0浏览器中。它已经出现在Netscape的所有后续浏览器中以及从Internet Explorer 3.0开始的所有Microsoft浏览器中。

ECMAScript语言规范的制定始于1996年11月。该Ecma标准的第一版于1997年6月由Ecma大会通过。

该Ecma标准已于1998年4月通过快速程序提交ISO / IEC JTC 1采用，并于1998年4月批准为国际标准ISO / IEC 16262. 1998年6月的Ecma大会批准了第二版ECMA-262至保持与ISO / IEC 16262完全一致。第一版和第二版之间的变化本质上是编辑性的。

标准的第三版引入了强大的正则表达式，更好的字符串处理，新的控制语句，try / catch异常处理，更严格的错误定义，数字输出的格式化以及对未来语言增长的预期的微小变化。 ECMAScript标准的第三版由1999年12月的Ecma大会通过，并于2002年6月作为ISO / IEC 16262：2002发布。

在第三版出版后，ECMAScript与万维网一起大规模采用，它已成为基本上所有Web浏览器都支持的编程语言。为开发第四版ECMAScript做了大量工作。但是，这项工作尚未完成，未作为第四版ECMAScript发布，但其中一些已纳入第六版的开发。

第五版ECMAScript（作为ECMA-262第5版出版）编写了语言规范的事实上的解释，这些解释在浏览器实现中变得很普遍，并且增加了对自第三版出版以来出现的新功能的支持。这些功能包括访问器属性，反射创建和对象检查，属性属性的程序控制，附加的数组操作函数，对JSON对象编码格式的支持，以及提供增强的错误检查和程序安全性的严格模式。第五版于2009年12月由Ecma大会通过。

第五版按照快速通道程序提交ISO / IEC JTC 1采用，并被批准为国际标准ISO / IEC 16262：2011。 ECMAScript标准的5.1版包含了较小的修正，与ISO / IEC 16262：2011的文本相同。 5.1版由2011年6月的Ecma大会通过。

第六版的重点发展始于2009年，因为第五版正在准备出版。然而，在1999年第三版出版之前，进行了重要的实验和语言增强设计工作。在非常真实的意义上，第六版的完成是十五年努力的结果。此添加的目标包括为大型应用程序，库创建以及将ECMAScript用作其他语言的编译目标提供更好的支持。它的一些主要增强功能包括模块，类声明，词法块范围，迭代器和生成器，异步编程的承诺，解构模式和正确的尾调用。扩展了内置插件的ECMAScript库，以支持其他数据抽象，包括映射，集合和二进制数值数组，以及对字符串和正则表达式中的Unicode补充字符的额外支持。内置函数也可以通过子类化进行扩展。第六版为常规，增量语言和库增强提供了基础。第六版于2015年6月大会通过。

ECMAScript 2016是第一个在Ecma TC39新的年度发布节奏和开放式开发过程中发布的ECMAScript版本。从ECMAScript 2015源文档构建了纯文本源文档，作为完全基于GitHub进一步开发的基础。在该标准的开发过程中，提交了数百个拉取请求和问题，代表了数千个错误修复，编辑修复和其他改进。此外，还开发了许多软件工具来帮助完成这项工作，包括Ecmarkup，Ecmarkdown和Grammarkdown。 ES2016还包括对新的取幂运算符的支持，并为Array.prototype添加了一个名为includes的新方法。

ECMAScript 2017引入了异步功能，共享内存和Atomics，以及更小的语言和库增强，错误修复和编辑更新。异步函数通过为promise-returns函数提供语法来改进异步编程体验。 Shared Memory和Atomics引入了一种新的内存模型，允许多代理程序使用原子操作进行通信，即使在并行CPU上也能确保良好定义的执行顺序。此规范还包括Object：Object.values，Object.entries和Object.getOwnPropertyDescriptors上的新静态方法。

该规范第9版通过AsyncIterator协议和异步生成器引入了对异步迭代的支持。此规范还包括四个新的正则表达式功能：dotAll标志，名为捕获组，Unicode属性转义和后置断言。它还包括对象属性的rest参数和spread操作符支持。还有许多小的更新，编辑和规范，以及我们这个令人敬畏的社区的许多贡献。

代表许多组织的数十个人在Ecma TC39中为本版本和之前版本的开发做出了非常重要的贡献。此外，一个充满活力的社区已经出现，支持TC39的ECMAScript工作。该社区已经审查了许多草案，提交了数千个错误报告，执行了实施实验，贡献了测试套件，并向全世界开发人员社区介绍了ECMAScript。遗憾的是，无法确定并承认为此工作做出贡献的每个人和组织。

Allen Wirfs-Brock  
ECMA-262，第6版项目编辑 

Brian Terlson  
ECMA-262，第7版项目编辑
