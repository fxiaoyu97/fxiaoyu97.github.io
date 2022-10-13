import{_ as e,o as i,c as n,a as l}from"./app.f0c02a19.js";const d={},r=l(`<h1 id="\u5206\u5E03\u5F0F\u9501\u7684\u573A\u666F\u4E0E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u9501\u7684\u573A\u666F\u4E0E\u5B9E\u73B0" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u9501\u7684\u573A\u666F\u4E0E\u5B9E\u73B0</h1><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u9996\u5148\uFF0C\u6211\u4EEC\u770B\u8FD9\u6837\u4E00\u4E2A\u573A\u666F\uFF1A\u5BA2\u6237\u4E0B\u5355\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8C03\u7528\u5E93\u5B58\u4E2D\u5FC3\u8FDB\u884C\u51CF\u5E93\u5B58\uFF0C\u90A3\u6211\u4EEC\u4E00\u822C\u7684\u64CD\u4F5C\u90FD\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>update store set num = $num where id = $id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u901A\u8FC7\u8BBE\u7F6E\u5E93\u5B58\u7684\u4FEE\u6539\u65B9\u5F0F\uFF0C\u6211\u4EEC\u77E5\u9053\u5728\u5E76\u53D1\u91CF\u9AD8\u7684\u65F6\u5019\u4F1A\u5B58\u5728\u6570\u636E\u5E93\u7684\u4E22\u5931\u66F4\u65B0\uFF0C\u6BD4\u5982 a, b \u5F53\u524D\u4E24\u4E2A\u4E8B\u52A1\uFF0C\u67E5\u8BE2\u51FA\u6765\u7684\u5E93\u5B58\u90FD\u662F 5\uFF0Ca \u4E70\u4E86 3 \u4E2A\u5355\u5B50\u8981\u628A\u5E93\u5B58\u8BBE\u7F6E\u4E3A 2\uFF0C\u800C b \u4E70\u4E86 1 \u4E2A\u5355\u5B50\u8981\u628A\u5E93\u5B58\u8BBE\u7F6E\u4E3A 4\uFF0C\u90A3\u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u51FA\u73B0 a \u4F1A\u8986\u76D6 b \u7684\u66F4\u65B0\uFF0C\u6240\u4EE5\u6211\u4EEC\u66F4\u591A\u7684\u90FD\u662F\u4F1A\u52A0\u4E2A\u6761\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>update store set num = $num where id = $id and num = $query_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5373\u4E50\u89C2\u9501\u7684\u65B9\u5F0F\u6765\u5904\u7406\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7248\u672C\u53F7\u6765\u5904\u7406\u4E50\u89C2\u9501\uFF0C\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u8FD9\u662F\u66F4\u65B0\u4E00\u4E2A\u8868\uFF0C\u5982\u679C\u6211\u4EEC\u7275\u626F\u5230\u591A\u4E2A\u8868\u5462\uFF0C\u6211\u4EEC\u5E0C\u671B\u548C\u8FD9\u4E2A\u5355\u5B50\u5173\u8054\u7684\u6240\u6709\u7684\u8868\u540C\u4E00\u65F6\u95F4\u53EA\u80FD\u88AB\u4E00\u4E2A\u7EBF\u7A0B\u6765\u5904\u7406\u66F4\u65B0\uFF0C\u591A\u4E2A\u7EBF\u7A0B\u6309\u7167\u4E0D\u540C\u7684\u987A\u5E8F\u53BB\u66F4\u65B0\u540C\u4E00\u4E2A\u5355\u5B50\u5173\u8054\u7684\u4E0D\u540C\u6570\u636E\uFF0C\u51FA\u73B0\u6B7B\u9501\u7684\u6982\u7387\u6BD4\u8F83\u5927\u3002\u5BF9\u4E8E\u975E\u654F\u611F\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u4E5F\u6CA1\u6709\u5FC5\u8981\u53BB\u90FD\u52A0\u4E50\u89C2\u9501\u5904\u7406\uFF0C\u6211\u4EEC\u7684\u670D\u52A1\u90FD\u662F\u591A\u673A\u5668\u90E8\u7F72\u7684\uFF0C\u8981\u4FDD\u8BC1\u591A\u8FDB\u7A0B\u591A\u7EBF\u7A0B\u540C\u65F6\u53EA\u80FD\u6709\u4E00\u4E2A\u8FDB\u7A0B\u7684\u4E00\u4E2A\u7EBF\u7A0B\u53BB\u5904\u7406\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u7528\u5230\u5206\u5E03\u5F0F\u9501\u3002\u5206\u5E03\u5F0F\u9501\u7684\u5B9E\u73B0\u65B9\u5F0F\u6709\u5F88\u591A\uFF0C\u6211\u4EEC\u4ECA\u5929\u5206\u522B\u901A\u8FC7\u6570\u636E\u5E93\uFF0CZookeeper, Redis \u4EE5\u53CA Tair \u7684\u5B9E\u73B0\u903B\u8F91\u3002</p><h2 id="\u6570\u636E\u5E93\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u5B9E\u73B0" aria-hidden="true">#</a> \u6570\u636E\u5E93\u5B9E\u73B0</h2><h3 id="\u52A0-xx-\u9501" tabindex="-1"><a class="header-anchor" href="#\u52A0-xx-\u9501" aria-hidden="true">#</a> \u52A0 xx \u9501</h3><p>\u66F4\u65B0\u4E00\u4E2A\u5355\u5B50\u5173\u8054\u7684\u6240\u6709\u7684\u6570\u636E\uFF0C\u5148\u67E5\u8BE2\u51FA\u8FD9\u4E2A\u5355\u5B50\uFF0C\u5E76\u52A0\u4E0A\u6392\u4ED6\u9501\uFF0C\u5728\u8FDB\u884C\u4E00\u7CFB\u5217\u7684\u66F4\u65B0\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>begin transaction\uFF1B
select ...for update\uFF1B
doSomething()\uFF1B
commit();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u5904\u7406\u4E3B\u8981\u4F9D\u9760\u6392\u4ED6\u9501\u6765\u963B\u585E\u5176\u4ED6\u7EBF\u7A0B\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u9700\u8981\u6CE8\u610F\u51E0\u70B9\uFF1A</p><ol><li>\u67E5\u8BE2\u7684\u6570\u636E\u4E00\u5B9A\u8981\u5728\u6570\u636E\u5E93\u91CC\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u7684\u8BDD\uFF0C\u6570\u636E\u5E93\u4F1A\u52A0 gap \u9501\uFF0C\u800C gap \u9501\u4E4B\u95F4\u662F\u517C\u5BB9\u7684\uFF0C\u8FD9\u79CD\u5982\u679C\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u52A0\u4E86gap \u9501\uFF0C\u53E6\u4E00\u4E2A\u518D\u66F4\u65B0\u7684\u8BDD\u4F1A\u51FA\u73B0\u6B7B\u9501\u3002\u4E0D\u8FC7\u4E00\u822C\u80FD\u66F4\u65B0\u7684\u6570\u636E\u90FD\u662F\u5B58\u5728\u7684</li><li>\u540E\u7EED\u7684\u5904\u7406\u6D41\u7A0B\u9700\u8981\u5C3D\u53EF\u80FD\u7684\u65F6\u95F4\u77ED\uFF0C\u5373\u5728\u66F4\u65B0\u7684\u65F6\u5019\u63D0\u524D\u51C6\u5907\u597D\u6570\u636E\uFF0C\u4FDD\u8BC1\u4E8B\u52A1\u5904\u7406\u7684\u65F6\u95F4\u8DB3\u591F\u7684\u77ED\uFF0C\u6D41\u7A0B\u8DB3\u591F\u7684\u77ED\uFF0C\u56E0\u4E3A\u5F00\u542F\u4E8B\u52A1\u662F\u4E00\u76F4\u5360\u7740\u8FDE\u63A5\u7684\uFF0C\u5982\u679C\u6D41\u7A0B\u6BD4\u8F83\u957F\u4F1A\u6D88\u8017\u8FC7\u591A\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u7684</li></ol><h3 id="\u552F\u4E00\u952E" tabindex="-1"><a class="header-anchor" href="#\u552F\u4E00\u952E" aria-hidden="true">#</a> \u552F\u4E00\u952E</h3><p>\u901A\u8FC7\u5728\u4E00\u5F20\u8868\u91CC\u521B\u5EFA\u552F\u4E00\u952E\u6765\u83B7\u53D6\u9501\uFF0C\u6BD4\u5982\u6267\u884C saveStore \u8FD9\u4E2A\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert table lock_store (&#39;method_name&#39;) values($method_name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D <code>method_name</code> \u662F\u4E2A\u552F\u4E00\u952E\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u53EF\u4EE5\u505A\u5230\uFF0C\u89E3\u9501\u7684\u65F6\u5019\u76F4\u63A5\u5220\u9664\u6539\u884C\u8BB0\u5F55\u5C31\u884C\u3002\u4E0D\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u9501\u5C31\u4E0D\u4F1A\u662F\u963B\u585E\u5F0F\u7684\uFF0C\u56E0\u4E3A\u63D2\u5165\u6570\u636E\u662F\u7ACB\u9A6C\u53EF\u4EE5\u5F97\u5230\u8FD4\u56DE\u7ED3\u679C\u7684\u3002</p><p>\u90A3\u9488\u5BF9\u4EE5\u4E0A\u6570\u636E\u5E93\u5B9E\u73B0\u7684\u4E24\u79CD\u5206\u5E03\u5F0F\u9501\uFF0C\u5B58\u5728\u4EC0\u4E48\u6837\u7684\u4F18\u7F3A\u70B9\u5462\uFF1F</p><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><p>\u7B80\u5355\uFF0C\u65B9\u4FBF\uFF0C\u5FEB\u901F\u5B9E\u73B0</p><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h3><ul><li>\u57FA\u4E8E\u6570\u636E\u5E93\uFF0C\u5F00\u9500\u6BD4\u8F83\u5927\uFF0C\u6027\u80FD\u53EF\u80FD\u4F1A\u5B58\u5728\u5F71\u54CD</li><li>\u57FA\u4E8E\u6570\u636E\u5E93\u7684\u5F53\u524D\u8BFB\u6765\u5B9E\u73B0\uFF0C\u6570\u636E\u5E93\u4F1A\u5728\u5E95\u5C42\u505A\u4F18\u5316\uFF0C\u53EF\u80FD\u7528\u5230\u7D22\u5F15\uFF0C\u53EF\u80FD\u4E0D\u7528\u5230\u7D22\u5F15\uFF0C\u8FD9\u4E2A\u4F9D\u8D56\u4E8E\u67E5\u8BE2\u8BA1\u5212\u7684\u5206\u6790</li></ul><h2 id="zookeeper-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#zookeeper-\u5B9E\u73B0" aria-hidden="true">#</a> Zookeeper \u5B9E\u73B0</h2><h3 id="\u83B7\u53D6\u9501" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9501" aria-hidden="true">#</a> \u83B7\u53D6\u9501</h3><ol><li>\u5148\u6709\u4E00\u4E2A\u9501\u8DDF\u8282\u70B9\uFF0ClockRootNode\uFF0C\u8FD9\u53EF\u4EE5\u662F\u4E00\u4E2A\u6C38\u4E45\u7684\u8282\u70B9</li><li>\u5BA2\u6237\u7AEF\u83B7\u53D6\u9501\uFF0C\u5148\u5728 lockRootNode \u4E0B\u521B\u5EFA\u4E00\u4E2A\u987A\u5E8F\u7684\u77AC\u65F6\u8282\u70B9\uFF0C\u4FDD\u8BC1\u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5\uFF0C\u8282\u70B9\u4E5F\u81EA\u52A8\u5220\u9664</li><li>\u8C03\u7528 lockRootNode \u7236\u8282\u70B9\u7684 getChildren() \u65B9\u6CD5\uFF0C\u83B7\u53D6\u6240\u6709\u7684\u8282\u70B9\uFF0C\u5E76\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F\uFF0C\u5982\u679C\u521B\u5EFA\u7684\u6700\u5C0F\u7684\u8282\u70B9\u662F\u5F53\u524D\u8282\u70B9\uFF0C\u5219\u8FD4\u56DE true,\u83B7\u53D6\u9501\u6210\u529F\uFF0C\u5426\u5219\uFF0C\u5173\u6CE8\u6BD4\u81EA\u5DF1\u5E8F\u53F7\u5C0F\u7684\u8282\u70B9\u7684\u91CA\u653E\u52A8\u4F5C(exist watch)\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u6BCF\u4E00\u4E2A\u5BA2\u6237\u7AEF\u53EA\u9700\u8981\u5173\u6CE8\u4E00\u4E2A\u8282\u70B9\uFF0C\u4E0D\u9700\u8981\u5173\u6CE8\u6240\u6709\u7684\u8282\u70B9\uFF0C\u907F\u514D\u7F8A\u7FA4\u6548\u5E94\u3002</li><li>\u5982\u679C\u6709\u8282\u70B9\u91CA\u653E\u64CD\u4F5C\uFF0C\u91CD\u590D\u6B65\u9AA4 3</li></ol><h3 id="\u91CA\u653E\u9501" tabindex="-1"><a class="header-anchor" href="#\u91CA\u653E\u9501" aria-hidden="true">#</a> \u91CA\u653E\u9501</h3><p>\u53EA\u9700\u8981\u5220\u9664\u6B65\u9AA4 2 \u4E2D\u521B\u5EFA\u7684\u8282\u70B9\u5373\u53EF</p><p>\u4F7F\u7528 Zookeeper \u7684\u5206\u5E03\u5F0F\u9501\u5B58\u5728\u4EC0\u4E48\u6837\u7684\u4F18\u7F3A\u70B9\u5462\uFF1F</p><h3 id="\u4F18\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9-1" aria-hidden="true">#</a> \u4F18\u70B9</h3><ul><li>\u5BA2\u6237\u7AEF\u5982\u679C\u51FA\u73B0\u5B95\u673A\u6545\u969C\u7684\u8BDD\uFF0C\u9501\u53EF\u4EE5\u9A6C\u4E0A\u91CA\u653E</li><li>\u53EF\u4EE5\u5B9E\u73B0\u963B\u585E\u5F0F\u9501\uFF0C\u901A\u8FC7 watcher \u76D1\u542C\uFF0C\u5B9E\u73B0\u8D77\u6765\u4E5F\u6BD4\u8F83\u7B80\u5355</li><li>\u96C6\u7FA4\u6A21\u5F0F\uFF0C\u7A33\u5B9A\u6027\u6BD4\u8F83\u9AD8</li></ul><h3 id="\u7F3A\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9-1" aria-hidden="true">#</a> \u7F3A\u70B9</h3><ul><li>\u4E00\u65E6\u7F51\u7EDC\u6709\u4EFB\u4F55\u7684\u6296\u52A8\uFF0CZookeeper \u5C31\u4F1A\u8BA4\u4E3A\u5BA2\u6237\u7AEF\u5DF2\u7ECF\u5B95\u673A\uFF0C\u5C31\u4F1A\u65AD\u6389\u8FDE\u63A5\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u9501\u3002\u5F53\u7136 Zookeeper \u6709\u91CD\u8BD5\u673A\u5236\uFF0C\u8FD9\u4E2A\u5C31\u6BD4\u8F83\u4F9D\u8D56\u4E8E\u5176\u91CD\u8BD5\u673A\u5236\u7684\u7B56\u7565\u4E86</li><li>\u6027\u80FD\u4E0A\u4E0D\u5982\u7F13\u5B58</li></ul><h2 id="redis-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#redis-\u5B9E\u73B0" aria-hidden="true">#</a> Redis \u5B9E\u73B0</h2><p>\u6211\u4EEC\u5148\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BD4\u5982\u73B0\u5728\u6211\u8981\u66F4\u65B0\u4EA7\u54C1\u7684\u4FE1\u606F\uFF0C\u4EA7\u54C1\u7684\u552F\u4E00\u952E\u5C31\u662F productId</p><h3 id="\u7B80\u5355\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5B9E\u73B0-1" aria-hidden="true">#</a> \u7B80\u5355\u5B9E\u73B0 1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public boolean lock(String key, V v, int expireTime){
        int retry = 0;
        //\u83B7\u53D6\u9501\u5931\u8D25\u6700\u591A\u5C1D\u8BD510\u6B21
        while (retry &lt; failRetryTimes){
            //\u83B7\u53D6\u9501
            Boolean result = redis.setNx(key, v, expireTime);
            if (result){
                return true;
            }

            try {
                //\u83B7\u53D6\u9501\u5931\u8D25\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u91CD\u8BD5
                TimeUnit.MILLISECONDS.sleep(sleepInterval);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return false;
            }

        }

        return false;
    }
    public boolean unlock(String key){
        return redis.delete(key);
    }
    public static void main(String[] args) {
        Integer productId = 324324;
        RedisLock&lt;Integer&gt; redisLock = new RedisLock&lt;Integer&gt;();
        redisLock.lock(productId+&quot;&quot;, productId, 1000);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5B9E\u73B0\uFF0C\u5B58\u5728\u7684\u95EE\u9898\uFF1A</p><ol><li>\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5F53\u524D\u7EBF\u7A0B\u7684\u9501\u8BEF\u88AB\u5176\u4ED6\u7EBF\u7A0B\u91CA\u653E\uFF0C\u6BD4\u5982 a \u7EBF\u7A0B\u83B7\u53D6\u5230\u4E86\u9501\u6B63\u5728\u6267\u884C\uFF0C\u4F46\u662F\u7531\u4E8E\u5185\u90E8\u6D41\u7A0B\u5904\u7406\u8D85\u65F6\u6216\u8005 gc \u5BFC\u81F4\u9501\u8FC7\u671F\uFF0C\u8FD9\u4E2A\u65F6\u5019b\u7EBF\u7A0B\u83B7\u53D6\u5230\u4E86\u9501\uFF0Ca \u548C b \u7EBF\u7A0B\u5904\u7406\u7684\u662F\u540C\u4E00\u4E2A productId\uFF0Cb\u8FD8\u5728\u5904\u7406\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u8FD9\u4E2A\u65F6\u5019 a \u5904\u7406\u5B8C\u4E86\uFF0Ca \u53BB\u91CA\u653E\u9501\uFF0C\u53EF\u80FD\u5C31\u4F1A\u5BFC\u81F4 a \u628A b \u83B7\u53D6\u7684\u9501\u91CA\u653E\u4E86\u3002</li><li>\u4E0D\u80FD\u5B9E\u73B0\u53EF\u91CD\u5165</li><li>\u5BA2\u6237\u7AEF\u5982\u679C\u7B2C\u4E00\u6B21\u5DF2\u7ECF\u8BBE\u7F6E\u6210\u529F\uFF0C\u4F46\u662F\u7531\u4E8E\u8D85\u65F6\u8FD4\u56DE\u5931\u8D25\uFF0C\u6B64\u540E\u5BA2\u6237\u7AEF\u5C1D\u8BD5\u4F1A\u4E00\u76F4\u5931\u8D25</li></ol><p>\u9488\u5BF9\u4EE5\u4E0A\u95EE\u9898\u6211\u4EEC\u6539\u8FDB\u4E0B\uFF1A</p><ol><li>v \u4F20 requestId\uFF0C\u7136\u540E\u6211\u4EEC\u5728\u91CA\u653E\u9501\u7684\u65F6\u5019\u5224\u65AD\u4E00\u4E0B\uFF0C\u5982\u679C\u662F\u5F53\u524D requestId\uFF0C\u90A3\u5C31\u53EF\u4EE5\u91CA\u653E\uFF0C\u5426\u5219\u4E0D\u5141\u8BB8\u91CA\u653E</li><li>\u52A0\u5165 count \u7684\u9501\u8BA1\u6570\uFF0C\u5728\u83B7\u53D6\u9501\u7684\u65F6\u5019\u67E5\u8BE2\u4E00\u6B21\uFF0C\u5982\u679C\u662F\u5F53\u524D\u7EBF\u7A0B\u5DF2\u7ECF\u6301\u6709\u7684\u9501\uFF0C\u90A3\u9501\u6280\u672F\u52A0 1\uFF0C\u76F4\u63A5\u8FD4\u56DE true</li></ol><h3 id="\u7B80\u5355\u5B9E\u73B0-2" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5B9E\u73B0-2" aria-hidden="true">#</a> \u7B80\u5355\u5B9E\u73B0 2</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private static volatile int count = 0;
public boolean lock(String key, V v, int expireTime){
    int retry = 0;
    //\u83B7\u53D6\u9501\u5931\u8D25\u6700\u591A\u5C1D\u8BD510\u6B21
    while (retry &lt; failRetryTimes){
        //1.\u5148\u83B7\u53D6\u9501,\u5982\u679C\u662F\u5F53\u524D\u7EBF\u7A0B\u5DF2\u7ECF\u6301\u6709\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE
        //2.\u9632\u6B62\u540E\u9762\u8BBE\u7F6E\u9501\u8D85\u65F6\uFF0C\u5176\u5B9E\u662F\u8BBE\u7F6E\u6210\u529F\uFF0C\u800C\u7F51\u7EDC\u8D85\u65F6\u5BFC\u81F4\u5BA2\u6237\u7AEF\u8FD4\u56DE\u5931\u8D25\uFF0C\u6240\u4EE5\u83B7\u53D6\u9501\u4E4B\u524D\u9700\u8981\u67E5\u8BE2\u4E00\u4E0B
        V value = redis.get(key);
        //\u5982\u679C\u5F53\u524D\u9501\u5B58\u5728\uFF0C\u5E76\u4E14\u5C5E\u4E8E\u5F53\u524D\u7EBF\u7A0B\u6301\u6709\uFF0C\u5219\u9501\u8BA1\u6570+1\uFF0C\u76F4\u63A5\u8FD4\u56DE
        if (null != value &amp;&amp; value.equals(v)){
            count ++;
            return true;
        }

        //\u5982\u679C\u9501\u5DF2\u7ECF\u88AB\u6301\u6709\u4E86\uFF0C\u90A3\u9700\u8981\u7B49\u5F85\u9501\u7684\u91CA\u653E
        if (value == null || count &lt;= 0){
            //\u83B7\u53D6\u9501
            Boolean result = redis.setNx(key, v, expireTime);
            if (result){
                count = 1;
                return true;
            }
        }

        try {
            //\u83B7\u53D6\u9501\u5931\u8D25\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u91CD\u8BD5
            TimeUnit.MILLISECONDS.sleep(sleepInterval);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return false;
        }

    }

    return false;
}
public boolean unlock(String key, String requestId){
    String value = redis.get(key);
    if (Strings.isNullOrEmpty(value)){
        count = 0;
        return true;
    }
    //\u5224\u65AD\u5F53\u524D\u9501\u7684\u6301\u6709\u8005\u662F\u5426\u662F\u5F53\u524D\u7EBF\u7A0B\uFF0C\u5982\u679C\u662F\u7684\u8BDD\u91CA\u653E\u9501\uFF0C\u4E0D\u662F\u7684\u8BDD\u8FD4\u56DEfalse
    if (value.equals(requestId)){
        if (count &gt; 1){
            count -- ;
            return true;
        }
        
        boolean delete = redis.delete(key);
        if (delete){
            count = 0;
        }
        return delete;
    }

    return false;
}
public static void main(String[] args) {
    Integer productId = 324324;
    RedisLock&lt;String&gt; redisLock = new RedisLock&lt;String&gt;();
    String requestId = UUID.randomUUID().toString();
    redisLock.lock(productId+&quot;&quot;, requestId, 1000);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u5B9E\u73B0\u57FA\u672C\u89E3\u51B3\u4E86\u8BEF\u91CA\u653E\u548C\u53EF\u91CD\u5165\u7684\u95EE\u9898\uFF0C\u8FD9\u91CC\u8BF4\u660E\u51E0\u70B9\uFF1A</p><ol><li>\u5F15\u5165 count \u5B9E\u73B0\u91CD\u5165\u7684\u8BDD\uFF0C\u770B\u4E1A\u52A1\u9700\u8981\uFF0C\u5E76\u4E14\u5728\u91CA\u653E\u9501\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C31\u628A\u9501\u5220\u9664\u4E86\uFF0C\u4E00\u6B21\u91CA\u653E\u641E\u5B9A\uFF0C\u4E0D\u9700\u8981\u5728\u901A\u8FC7 count \u6570\u91CF\u91CA\u653E\u591A\u6B21\uFF0C\u770B\u4E1A\u52A1\u9700\u8981\u5427</li><li>\u5173\u4E8E\u8981\u8003\u8651\u8BBE\u7F6E\u9501\u8D85\u65F6\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u8BBE\u7F6E\u9501\u7684\u65F6\u5019\u67E5\u8BE2\u4E00\u6B21\uFF0C\u53EF\u80FD\u4F1A\u6709\u6027\u80FD\u7684\u8003\u91CF\uFF0C\u770B\u5177\u4F53\u4E1A\u52A1\u5427</li><li>\u76EE\u524D\u83B7\u53D6\u9501\u5931\u8D25\u7684\u7B49\u5F85\u65F6\u95F4\u662F\u5728\u4EE3\u7801\u91CC\u9762\u8BBE\u7F6E\u7684\uFF0C\u53EF\u4EE5\u63D0\u51FA\u6765\uFF0C\u4FEE\u6539\u4E0B\u7B49\u5F85\u7684\u903B\u8F91\u5373\u53EF</li></ol><h3 id="\u9519\u8BEF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5B9E\u73B0" aria-hidden="true">#</a> \u9519\u8BEF\u5B9E\u73B0</h3><p>\u83B7\u53D6\u5230\u9501\u4E4B\u540E\u8981\u68C0\u67E5\u4E0B\u9501\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5982\u679C\u9501\u8FC7\u671F\u4E86\u8981\u91CD\u65B0\u8BBE\u7F6E\u4E0B\u65F6\u95F4,\u5927\u81F4\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public boolean tryLock2(String key, int expireTime){
    long expires = System.currentTimeMillis() + expireTime;

    // \u83B7\u53D6\u9501
    Boolean result = redis.setNx(key, expires, expireTime);
    if (result){
        return true;
    }

    V value = redis.get(key);
    if (value != null &amp;&amp; (Long)value &lt; System.currentTimeMillis()){
        // \u9501\u5DF2\u7ECF\u8FC7\u671F
        String oldValue = redis.getSet(key, expireTime);
        if (oldValue != null &amp;&amp; oldValue.equals(value)){
            return true;
        }
    }
    
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u5B9E\u73B0\u5B58\u5728\u7684\u95EE\u9898\uFF0C\u8FC7\u5EA6\u4F9D\u8D56\u5F53\u524D\u670D\u52A1\u5668\u7684\u65F6\u95F4\u4E86\uFF0C\u5982\u679C\u5728\u5927\u91CF\u7684\u5E76\u53D1\u8BF7\u6C42\u4E0B\uFF0C\u90FD\u5224\u65AD\u51FA\u4E86\u9501\u8FC7\u671F\uFF0C\u800C\u8FD9\u4E2A\u65F6\u5019\u518D\u53BB\u8BBE\u7F6E\u9501\u7684\u65F6\u5019\uFF0C\u6700\u7EC8\u662F\u4F1A\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E0D\u540C\u670D\u52A1\u5668\u6839\u636E\u81EA\u8EAB\u4E0D\u540C\u7684\u65F6\u95F4\u8986\u76D6\u6389\u6700\u7EC8\u83B7\u53D6\u9501\u7684\u90A3\u4E2A\u7EBF\u7A0B\u8BBE\u7F6E\u7684\u65F6\u95F4\u3002</p><h2 id="tair-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#tair-\u5B9E\u73B0" aria-hidden="true">#</a> Tair \u5B9E\u73B0</h2><p>\u901A\u8FC7 Tair \u6765\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u548C Redis \u7684\u5B9E\u73B0\u6838\u5FC3\u5DEE\u4E0D\u591A\uFF0C\u4E0D\u8FC7 Tair \u6709\u4E2A\u5F88\u65B9\u4FBF\u7684 api\uFF0C\u611F\u89C9\u662F\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u7684\u6700\u4F73\u914D\u7F6E\uFF0C\u5C31\u662F Put api \u8C03\u7528\u7684\u65F6\u5019\u9700\u8981\u4F20\u5165\u4E00\u4E2A version\uFF0C\u5C31\u548C\u6570\u636E\u5E93\u7684\u4E50\u89C2\u9501\u4E00\u6837\uFF0C\u4FEE\u6539\u6570\u636E\u4E4B\u540E\uFF0C\u7248\u672C\u4F1A\u81EA\u52A8\u7D2F\u52A0\uFF0C\u5982\u679C\u4F20\u5165\u7684\u7248\u672C\u548C\u5F53\u524D\u6570\u636E\u7248\u672C\u4E0D\u4E00\u81F4\uFF0C\u5C31\u4E0D\u5141\u8BB8\u4FEE\u6539\u3002</p>`,50),s=[r];function a(v,u){return i(),n("div",null,s)}const c=e(d,[["render",a],["__file","\u5206\u5E03\u5F0F\u9501\u7684\u573A\u666F\u4E0E\u5B9E\u73B0.html.vue"]]);export{c as default};
