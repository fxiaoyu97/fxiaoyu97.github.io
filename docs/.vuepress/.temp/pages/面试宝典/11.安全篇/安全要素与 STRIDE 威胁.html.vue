<template><h1 id="安全要素与-stride-威胁" tabindex="-1"><a class="header-anchor" href="#安全要素与-stride-威胁" aria-hidden="true">#</a> 安全要素与 STRIDE 威胁</h1>
<h2 id="stride-威胁" tabindex="-1"><a class="header-anchor" href="#stride-威胁" aria-hidden="true">#</a> STRIDE 威胁</h2>
<p>STRIDE 威胁，代表六种安全威胁：</p>
<ul>
<li>身份假冒（Spoofing）</li>
<li>篡改（Tampering）</li>
<li>抵赖（Repudiation）</li>
<li>信息泄露（Information Disclosure）</li>
<li>拒绝服务（Denial of Service）</li>
<li>特权提升（Elevation of Privilege）</li>
</ul>
<h3 id="身份假冒-spoofing" tabindex="-1"><a class="header-anchor" href="#身份假冒-spoofing" aria-hidden="true">#</a> 身份假冒（Spoofing）</h3>
<p>身份假冒，即伪装成某对象或某人。例如，我们通过伪造别人的 ID 进行操作</p>
<h3 id="篡改-tampering" tabindex="-1"><a class="header-anchor" href="#篡改-tampering" aria-hidden="true">#</a> 篡改（Tampering）</h3>
<p>篡改，即未经授权修改数据或者代码。例如，我通过网络抓包或者某种途径修改某个请求包，而服务端没有进行进一步的防范措施，使得我篡改的请求包提交成功。</p>
<h3 id="抵赖-repudiation" tabindex="-1"><a class="header-anchor" href="#抵赖-repudiation" aria-hidden="true">#</a> 抵赖（Repudiation）</h3>
<p>抵赖，即拒绝执行他人无法证实也无法反对的行为而产生抵赖。例如，我攻击了某个产品，他们并不知道是我做的，没有证据证明是我做的，我就可以进行抵赖，换句话说，我可以死不承认。</p>
<h3 id="信息泄露-information-disclosure" tabindex="-1"><a class="header-anchor" href="#信息泄露-information-disclosure" aria-hidden="true">#</a> 信息泄露（Information Disclosure）</h3>
<p>信息泄露，即将信息暴露给未授权用户。例如，我通过某种途径获取未经加密的敏感信息，例如用户密码。</p>
<h3 id="拒绝服务-denial-of-service" tabindex="-1"><a class="header-anchor" href="#拒绝服务-denial-of-service" aria-hidden="true">#</a> 拒绝服务（Denial of Service）</h3>
<p>拒绝服务，即拒绝或降低有效用户的服务级别。例如，我通过拒绝服务攻击，使得其他正常用户无法使用产品的相关服务功能。</p>
<h3 id="特权提升-elevation-of-privilege" tabindex="-1"><a class="header-anchor" href="#特权提升-elevation-of-privilege" aria-hidden="true">#</a> 特权提升（Elevation of Privilege）</h3>
<p>特权提升，即通过非授权方式获得更高权限。例如，我试图用管理员的权限进行业务操作。</p>
<h2 id="安全要素" tabindex="-1"><a class="header-anchor" href="#安全要素" aria-hidden="true">#</a> 安全要素</h2>
<p>为了防范上面的 STRIDE 威胁，我们需要采用一些防范措施：</p>
<table>
<thead>
<tr>
<th>威胁</th>
<th>安全要素</th>
<th>消减技术</th>
</tr>
</thead>
<tbody>
<tr>
<td>身份假冒</td>
<td>认证</td>
<td>Kerberos、SSL/TLS、证书、认证码等</td>
</tr>
<tr>
<td>篡改</td>
<td>完整性</td>
<td>访问控制列表、SSL/TLS、认证码等</td>
</tr>
<tr>
<td>抵赖</td>
<td>非抵赖/审计/记录</td>
<td>安全审计和日志记录、数字签名、可信第三方</td>
</tr>
<tr>
<td>信息泄露</td>
<td>保密</td>
<td>加密、访问控制列表</td>
</tr>
<tr>
<td>拒绝服务</td>
<td>可用性</td>
<td>访问控制列表、过滤、配额、授权</td>
</tr>
<tr>
<td>特权提升</td>
<td>授权</td>
<td>访问控制列表、角色控制、授权</td>
</tr>
</tbody>
</table>
</template>
