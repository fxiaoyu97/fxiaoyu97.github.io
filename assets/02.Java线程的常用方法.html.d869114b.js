import{_ as a,r as d,o as c,c as l,b as e,e as n,a as o,d as i}from"./app.f0c02a19.js";const s="/assets/02-01.da2e2f89.png",r={},h=o('<h1 id="java\u7EBF\u7A0B\u7684\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#java\u7EBF\u7A0B\u7684\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> Java\u7EBF\u7A0B\u7684\u5E38\u7528\u65B9\u6CD5</h1><p>Object\u7C7B\uFF1A<code>wait(), notify(), notifyAll()</code></p><p>Thread\u7C7B\uFF1A<code>start(), sleep(), yield(), join()</code></p><h2 id="wait-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#wait-\u65B9\u6CD5" aria-hidden="true">#</a> wait()\u65B9\u6CD5</h2><p>\u4F7F\u7528\u540C\u6B65\u5BF9\u8C61\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u4F7F\u5F53\u524D\u7EBF\u7A0B\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u76F4\u5230\u5176\u4ED6\u7EBF\u7A0B\u8C03\u7528\u540C\u6B65\u5BF9\u8C61\u7684<code>notify()</code>\u65B9\u6CD5\u6216 <code>notifyAll()</code> \u65B9\u6CD5\u5524\u9192\u7EBF\u7A0B\uFF0C\u6216\u8005\u8D85\u8FC7\u8BBE\u7F6E\u7684\u8D85\u65F6\u65F6\u95F4\u3002</p><p>\u65B9\u6CD5\u7684\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li>timeout - \u7B49\u5F85\u65F6\u95F4\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09</li><li>nanos - \u989D\u5916\u7B49\u5F85\u65F6\u95F4\uFF08\u4EE5\u7EB3\u79D2\u4E3A\u5355\u4F4D\uFF09</li></ul><p>\u65B9\u6CD5\u6709\u51E0\u4E2A\u6CE8\u610F\u70B9\uFF1A</p><ol><li>\u8D85\u65F6\u65F6\u95F4\u4E3A<code>timeout</code>\u4E0E<code>nanos</code>\u4E4B\u548C</li><li><code>timeout</code>\u4E0E<code>nanos</code>\u53C2\u6570\u90FD\u4E3A 0\uFF0C\u5219\u4E0D\u4F1A\u8D85\u65F6\uFF0C\u7B49\u540C\u4E8E<code>wait()</code></li><li>\u8C03\u7528\u65B9\u6CD5\u524D\u5FC5\u987B\u62E5\u6709\u5BF9\u8C61\u7684\u9501\uFF0C\u5426\u5219\u4F1A\u53D1\u751F <strong>IllegalMonitorStateException</strong> \u5F02\u5E38</li><li><code>wait()</code> \u65B9\u6CD5\u4F1A\u91CA\u653E\u5BF9\u8C61\u7684\u201C\u9501\u6807\u5FD7\u201D\uFF0C\u5931\u53BBCPU\u4F7F\u7528\u6743</li><li>\u8C03\u7528<code>wait(),wait(0),wait(0,0)</code>\u65B9\u6CD5\u540E\u8FDB\u5165<code>WAITIN</code>\u72B6\u6001</li><li>\u6709\u53C2\u65B9\u6CD5\u8C03\u7528\u540E\uFF0C\u6B64\u7EBF\u7A0B\u8FDB\u5165<code>TIMED_WAITING</code>\u72B6\u6001</li></ol><h2 id="notify-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#notify-\u65B9\u6CD5" aria-hidden="true">#</a> notify()\u65B9\u6CD5</h2><p>\u4F7F\u7528\u540C\u6B65\u5BF9\u8C61\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u4ECE\u5BF9\u8C61\u7B49\u5F85\u6C60\u4E2D\u968F\u673A\u9009\u4E00\u4E2A\u7EBF\u7A0B\u79FB\u51FA\u5E76\u653E\u5165\u9501\u6807\u5FD7\u7B49\u5F85\u6C60\u4E2D\uFF0C\u53EA\u6709\u9501\u6807\u5FD7\u7B49\u5F85\u6C60\u4E2D\u7684\u7EBF\u7A0B\u53EF\u4EE5\u83B7\u53D6\u9501\u6807\u5FD7\uFF0C\u5728\u5F53\u524D\u7EBF\u7A0B\u653E\u5F03\u5BF9\u8BE5\u5BF9\u8C61\u7684\u9501\u5B9A\u4E4B\u524D\uFF0C\u88AB\u5524\u9192\u7684\u7EBF\u7A0B\u5C06\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u5B83\u4EEC\u968F\u65F6\u51C6\u5907\u4E89\u593A\u9501\u7684\u62E5\u6709\u6743\u3002</p><ol><li>\u8C03\u7528\u65B9\u6CD5\u524D\u5FC5\u987B\u62E5\u6709\u5BF9\u8C61\u7684\u9501\uFF0C\u5426\u5219\u4F1A\u53D1\u751F <strong>IllegalMonitorStateException</strong> \u5F02\u5E38</li><li>\u88AB\u5524\u9192\u7684\u7EBF\u7A0B\u8FDB\u5165BLOCKED \u72B6\u6001\uFF0C\u91CD\u65B0\u7ADE\u4E89\u9501</li></ol><h2 id="notifyall-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#notifyall-\u65B9\u6CD5" aria-hidden="true">#</a> notifyAll()\u65B9\u6CD5</h2><p>\u4F7F\u7528\u540C\u6B65\u5BF9\u8C61\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u5524\u9192\u5BF9\u8C61\u7B49\u5F85\u6C60\u4E2D\u6240\u6709\u7684\u7B49\u5F85\u7EBF\u7A0B\uFF0C\u8BA9\u4ED6\u4EEC\u52A0\u5165\u9501\u6807\u5FD7\u7B49\u5F85\u6C60\u4E2D\u7ADE\u4E89\u9501\u3002</p><ol><li>\u8C03\u7528\u65B9\u6CD5\u524D\u5FC5\u987B\u62E5\u6709\u5BF9\u8C61\u7684\u9501\uFF0C\u5426\u5219\u4F1A\u53D1\u751F <strong>IllegalMonitorStateException</strong> \u5F02\u5E38</li><li>\u88AB\u5524\u9192\u7684\u7EBF\u7A0B\u8FDB\u5165BLOCKED \u72B6\u6001\uFF0C\u91CD\u65B0\u7ADE\u4E89\u9501</li></ol><blockquote><p><code>wait()</code>\uFF0C<code>notify()</code> \u53CA <code>notifyAll()</code> \u53EA\u80FD\u5728 <code>synchronized</code> \u8BED\u53E5\u4E2D\u4F7F\u7528\uFF0C\u4F46\u662F\u5982\u679C\u4F7F\u7528\u7684\u662F <code>ReenTrantLock</code> \u5B9E\u73B0\u540C\u6B65\uFF0C\u8BE5\u5982\u4F55\u8FBE\u5230\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u6548\u679C\u5462\uFF1F\u89E3\u51B3\u65B9\u6CD5\u662F\u4F7F\u7528 <code>ReenTrantLock.newCondition()</code> \u83B7\u53D6\u4E00\u4E2A <code>Condition</code> \u7C7B\u5BF9\u8C61\uFF0C\u7136\u540E <code>Condition</code> \u7684 <code>await()</code>\uFF0C<code>signal()</code> \u4EE5\u53CA <code>signalAll()</code> \u5206\u522B\u5BF9\u5E94\u4E0A\u9762\u7684\u4E09\u4E2A\u65B9\u6CD5\u3002</p></blockquote><h2 id="start-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#start-\u65B9\u6CD5" aria-hidden="true">#</a> start()\u65B9\u6CD5</h2><p>\u542F\u52A8\u7EBF\u7A0B\uFF0C\u4F7F\u7528\u7EBF\u7A0B\u7684\u5B9E\u4F8B\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0CJVM\u4F1A\u8C03\u7528\u6B64\u7EBF\u7A0B\u7684run\u65B9\u6CD5\u3002</p><ol><li>\u8C03\u7528\u65B9\u6CD5\u540E\u8FDB\u5165<code>RUNNABLE</code>\u72B6\u6001\uFF0C\u5931\u53BBCPU\u4F7F\u7528\u6743</li><li>\u4E0D\u80FD\u591A\u6B21\u542F\u52A8\u540C\u4E00\u7EBF\u7A0B\u5B9E\u4F8B\uFF1B\u7EBF\u7A0B\u4E00\u65E6\u7ED3\u675F\uFF0C\u4E5F\u4E0D\u80FD\u91CD\u65B0\u542F\u52A8\u3002\u4E24\u8005\u90FD\u4F1A\u629B\u51FA <code>java.lang.IllegalThreadStateException</code> \u5F02\u5E38</li></ol><h2 id="sleep-long-millis-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#sleep-long-millis-\u65B9\u6CD5" aria-hidden="true">#</a> sleep(long millis)\u65B9\u6CD5</h2><p>JDK18 \u63CF\u8FF0\u5982\u4E0B\u6240\u793A\uFF1A</p><blockquote><p>Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds, subject to the precision and accuracy of system timers and schedulers. The thread does not lose ownership of any monitors.</p><p>\u4F7F\u5F53\u524D\u6267\u884C\u7684\u7EBF\u7A0B\u5728\u6307\u5B9A\u7684\u6BEB\u79D2\u6570\u5185\u4F11\u7720\uFF08\u6682\u65F6\u505C\u6B62\u6267\u884C\uFF09\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u7CFB\u7EDF\u8BA1\u65F6\u5668\u548C\u8C03\u5EA6\u7A0B\u5E8F\u7684\u7CBE\u5EA6\u548C\u51C6\u786E\u6027\u3002\u7EBF\u7A0B\u4E0D\u4F1A\u5931\u53BB\u4EFB\u4F55\u76D1\u89C6\u5668\u7684\u6240\u6709\u6743\u3002</p></blockquote><ol><li>\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F20\u5165\u53C2\u6570\uFF0C\u8868\u793A\u7EBF\u7A0B\u7761\u7720\u6307\u5B9A\u7684\u65F6\u95F4</li><li>\u8C03\u7528\u65B9\u6CD5\u540E\u8FDB\u5165<code>TIMED_WAITING</code>\u72B6\u6001\uFF0C\u5931\u53BBCPU\u4F7F\u7528\u6743</li><li>\u4E0D\u4F1A\u91CA\u653E\u201C\u9501\u6807\u5FD7\u201D\uFF0C\u5982\u679C\u6709 <code>synchronized</code> \u540C\u6B65\u5757\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u4ECD\u7136\u4E0D\u80FD\u8BBF\u95EE\u5171\u4EAB\u6570\u636E</li><li>\u65F6\u95F4\u5230\u4E86\u4EE5\u540E\u81EA\u52A8\u5524\u9192\u8FDB\u5165<code>RUNNABLE</code>\u72B6\u6001</li></ol><h2 id="yield-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#yield-\u65B9\u6CD5" aria-hidden="true">#</a> yield()\u65B9\u6CD5</h2><p>JDK18 \u63CF\u8FF0\u5982\u4E0B\u6240\u793A\uFF1A</p>',25),p=e("p",null,"A hint to the scheduler that the current thread is willing to yield its current use of a processor. The scheduler is free to ignore this hint.",-1),u=e("p",null,"Yield is a heuristic attempt to improve relative progression between threads that would otherwise over-utilise a CPU. Its use should be combined with detailed profiling and benchmarking to ensure that it actually has the desired effect.",-1),f=i("It is rarely appropriate to use this method. It may be useful for debugging or testing purposes, where it may help to reproduce bugs due to race conditions. It may also be useful when designing concurrency control constructs such as the ones in the "),m={href:"https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/concurrent/locks/package-summary.html",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"java.util.concurrent.locks",-1),y=i(" package."),g=o('<p>\u6B64\u65B9\u6CD5\u662F\u4E00\u79CD\u5C1D\u8BD5\u6539\u53D8\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7EBF\u7A0B\u8C03\u5EA6\u7684\u65B9\u6CD5\uFF0C\u8C03\u7528\u6B64\u65B9\u6CD5\u53EA\u662F\u4F7F\u5F53\u524D\u7EBF\u7A0B\u91CD\u65B0\u56DE\u5230\u53EF\u6267\u884C\u72B6\u6001\uFF0C\u8BE5\u7EBF\u7A0B\u6539\u53D8\u72B6\u6001\u540E\u53EF\u80FD\u4F1A\u88AB\u9A6C\u4E0A\u6267\u884C\u3002</p><ol><li>\u8C03\u7528\u65B9\u6CD5\u540E\u8FDB\u5165\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u7684\u5C31\u7EEA\u72B6\u6001</li><li>\u4E0D\u4F1A\u91CA\u653E\u201C\u9501\u6807\u5FD7\u201D</li><li><code>yield()</code> \u65B9\u6CD5\u53EA\u80FD\u4F7F\u540C\u4F18\u5148\u7EA7\u6216\u8005\u9AD8\u4F18\u5148\u7EA7\u7684\u7EBF\u7A0B\u5F97\u5230\u6267\u884C\u673A\u4F1A</li></ol><h2 id="join-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#join-\u65B9\u6CD5" aria-hidden="true">#</a> join()\u65B9\u6CD5</h2><p>JDK18 \u63CF\u8FF0\u5982\u4E0B\u6240\u793A\uFF1A</p><blockquote><p>Waits at most <code>millis</code> milliseconds for this thread to die. A timeout of <code>0</code> means to wait forever.</p><p>This implementation uses a loop of <code>this.wait</code> calls conditioned on <code>this.isAlive</code>. As a thread terminates the <code>this.notifyAll</code> method is invoked. It is recommended that applications not use <code>wait</code>, <code>notify</code>, or <code>notifyAll</code> on <code>Thread</code> instances.</p></blockquote><p>A\u7EBF\u7A0B\u4E2D\u8C03\u7528B\u7EBF\u7A0B\u7684join()\u65B9\u6CD5\uFF0C\u5219A\u7EBF\u7A0B\u4F1A\u7B49\u5F85B\u7EBF\u7A0B\u7ED3\u675F\u4EE5\u540E\u5728\u7EE7\u7EED\u6267\u884C\u3002\u4ECE\u6E90\u7801\u5B9E\u73B0\u4EE5\u53CAjdk\u6587\u6863\u63CF\u8FF0\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA<code>join</code>\u662F\u57FA\u4E8E<code>wait</code>\u65B9\u6CD5\u5B9E\u73B0\u3002</p><ol><li>\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u4F20\u5165\u53C2\u6570\uFF0C\u53C2\u6570\u4E3A<code>0</code>\u65F6\u76F8\u5F53\u4E8E\u65E0\u53C2\u8C03\u7528</li><li><code>join()</code>\u548C<code>join(0)</code>\u76F8\u7B49\uFF0C\u90FD\u662F\u6C38\u8FDC\u7B49\u5F85\uFF0C\u8C03\u7528\u65B9\u6CD5\u540E\u8FDB\u5165<code>WAITIN</code>\u72B6\u6001</li><li>\u6709\u53C2\u65B9\u6CD5\u8C03\u7528\u540E\uFF0C\u6B64\u7EBF\u7A0B\u8FDB\u5165<code>TIMED_WAITING</code>\u72B6\u6001</li><li>\u4F1A\u91CA\u653E\u201C\u9501\u6807\u5FD7\u201D</li><li>\u5BF9\u5DF2\u7ECF\u8FD0\u884C\u7ED3\u675F\u7684\u7EBF\u7A0B\u8C03\u7528<code>join()</code>\u65B9\u6CD5\u4F1A\u7ACB\u523B\u8FD4\u56DE</li></ol><h2 id="\u8C03\u7528\u65B9\u6CD5\u7EBF\u7A0B\u72B6\u6001\u53D8\u5316\u56FE" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u65B9\u6CD5\u7EBF\u7A0B\u72B6\u6001\u53D8\u5316\u56FE" aria-hidden="true">#</a> \u8C03\u7528\u65B9\u6CD5\u7EBF\u7A0B\u72B6\u6001\u53D8\u5316\u56FE</h2><p><img src="'+s+'" alt=""></p>',9);function b(w,I){const t=d("ExternalLinkIcon");return c(),l("div",null,[h,e("blockquote",null,[p,u,e("p",null,[f,e("a",m,[_,n(t)]),y])]),g])}const x=a(r,[["render",b],["__file","02.Java\u7EBF\u7A0B\u7684\u5E38\u7528\u65B9\u6CD5.html.vue"]]);export{x as default};
