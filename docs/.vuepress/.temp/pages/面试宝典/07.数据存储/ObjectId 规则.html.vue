<template><h1 id="objectid-规则" tabindex="-1"><a class="header-anchor" href="#objectid-规则" aria-hidden="true">#</a> ObjectId 规则</h1>
<table>
<thead>
<tr>
<th>时间戳</th>
<th>机器码</th>
<th>PID</th>
<th>计数器</th>
</tr>
</thead>
<tbody>
<tr>
<td>0,1,2,3</td>
<td>4,5,6</td>
<td>7,8</td>
<td>9,10,11</td>
</tr>
</tbody>
</table>
<ul>
<li>前四位是时间戳，可以提供秒级别的唯一性。</li>
<li>接下来三位是所在主机的唯一标识符，通常是机器主机名的散列值。</li>
<li>接下来两位是产生 ObjectId 的 PID，确保同一台机器上并发产生的 ObjectId 是唯一的。</li>
<li>前九位保证了同一秒钟不同机器的不同进程产生的 ObjectId 时唯一的。</li>
<li>最后三位是自增计数器，确保相同进程同一秒钟产生的 ObjectId 是唯一的。</li>
</ul>
</template>
