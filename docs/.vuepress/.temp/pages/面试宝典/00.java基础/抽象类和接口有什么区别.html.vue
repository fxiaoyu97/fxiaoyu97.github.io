<template><h1 id="抽象类和接口有什么区别" tabindex="-1"><a class="header-anchor" href="#抽象类和接口有什么区别" aria-hidden="true">#</a> 抽象类和接口有什么区别</h1>
<table>
<thead>
<tr>
<th>参数</th>
<th>抽象类</th>
<th>接口</th>
</tr>
</thead>
<tbody>
<tr>
<td>默认的方法实现</td>
<td>它可以有默认的方法实现</td>
<td>接口完全是抽象的。它根本不存在方法的实现</td>
</tr>
<tr>
<td>实现</td>
<td>子类使用 extends 关键字来继承抽象类。如果子类不是抽象类的话，它需要提供抽象类中所有声明的方法的实现。</td>
<td>子类使用关键字 implements 来实现接口。它需要提供接口中所有声明的方法的实现</td>
</tr>
<tr>
<td>构造器</td>
<td>抽象类可以有构造器</td>
<td>接口不能有构造器</td>
</tr>
<tr>
<td>与正常 Java 类的区别</td>
<td>除了你不能实例化抽象类之外，它和普通Java类没有任何区别</td>
<td>接口是完全不同的类型</td>
</tr>
<tr>
<td>访问修饰符</td>
<td>抽象方法可以有 public、protected 和 default 这些修饰符</td>
<td>接口方法默认修饰符是 public。你不可以使用其它修饰符。</td>
</tr>
<tr>
<td>main 方法</td>
<td>抽象方法可以有 main 方法并且我们可以运行它</td>
<td>接口没有 main 方法，因此我们不能运行它。</td>
</tr>
<tr>
<td>多继承</td>
<td>抽象方法可以继承一个类和实现多个接口</td>
<td>接口只可以继承一个或多个其它接口</td>
</tr>
<tr>
<td>速度</td>
<td>它比接口速度要快</td>
<td>接口是稍微有点慢的，因为它需要时间去寻找在类中实现的方法。</td>
</tr>
<tr>
<td>添加新方法</td>
<td>如果你往抽象类中添加新的方法，你可以给它提供默认的实现。因此你不需要改变你现在的代码。</td>
<td>如果你往接口中添加方法，那么你必须改变实现该接口的类。</td>
</tr>
</tbody>
</table>
</template>
