<template><h1 id="hashset-和-hashmap-区别" tabindex="-1"><a class="header-anchor" href="#hashset-和-hashmap-区别" aria-hidden="true">#</a> HashSet 和 HashMap 区别</h1>
<table>
<thead>
<tr>
<th>HashMap</th>
<th>HashSet</th>
</tr>
</thead>
<tbody>
<tr>
<td>HashMap 实现了 Map 接口</td>
<td>HashSet 实现了 Set 接口</td>
</tr>
<tr>
<td>HashMap 储存键值对</td>
<td>HashSet 仅仅存储对象</td>
</tr>
<tr>
<td>使用 put() 方法将元素放入 map 中</td>
<td>使用 add() 方法将元素放入 set 中</td>
</tr>
<tr>
<td>HashMap 中使用键对象来计算 hashcode 值</td>
<td>HashSet 使用成员对象来计算 hashcode 值，对于两个对象来说 hashcode 可能相同，所以 equals() 方法用来判断对象的相等性，如果两个对象不同的话，那么返回 false</td>
</tr>
<tr>
<td>HashMap 比较快，因为是使用唯一的键来获取对象</td>
<td>HashSet 较 HashMap 来说比较慢</td>
</tr>
</tbody>
</table>
</template>
