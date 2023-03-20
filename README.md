# bilibili-batch-unfollow
B站全自动取消关注脚本(注意有可能因为取消得过快被检测，换IP就行)
参考知乎文章：[js小经验：如何快速取消关注B站（哔哩哔哩）所有up主？](https://zhuanlan.zhihu.com/p/396861814 "js小经验：如何快速取消关注B站（哔哩哔哩）所有up主？")
但是由于原脚本只能一页一页的手动批量取消关注，所以这里对脚本进行了修改为全自动取消：
## 原脚本：
```javascript
var ms = 250; // 暂停250毫秒
var ii = 0;
var xx = $(".be-dropdown-item:contains('取消关注')");
console.log("本页关注了", xx.length, "个up主！");
tt = setInterval(function(){
  if (0 <= ii && ii < xx.length) {
    xx[ii].click(); // 自动点击【取消关注】
  } else {
    clearInterval(tt); // 停止批量操作
    console.log("OK！你已取消了对本页所有up主的关注！");
  }
  ii += 1;
}, ms+ii*10); // 暂停多少毫秒，再执行下一次点击，时间间隔增加一点儿变化
```
## 修改后脚本(压缩前)：
```javascript
var ms = 250; // 暂停250毫秒
var ii = 0;
var num_page = 2; //你要取消关注的页数
var xx = $(".be-dropdown-item:contains('取消关注')");

// 延迟函数，等待指定的时间后返回 Promise 对象
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 主函数，批量取消关注
async function main() {
  for (var i = 0; i < num_page; i++) {
    ii = 0
    xx = $(".be-dropdown-item:contains('取消关注')");

    // 循环点击所有的取消关注按钮，并等待一段时间
    for (var n = 0; n < xx.length; n++) {
      xx[ii].click()
      ii++
      await sleep(ms);
    }

    console.log("已取消第", i + 1, "页的关注")
    $(".be-pager-prev").click(); //模拟点击上一页
    await sleep(2000);
  }

  console.log("已完成目标")
}

main();
```
## 修改后脚本(压缩后,chatGPT压缩，能否使用未知):
```javascript
var ms=250,ii=0,num_page=2,xx=$(".be-dropdown-item:contains('取消关注')");
function sleep(ms){return new Promise(function(resolve){setTimeout(resolve,ms)})};
async function main(){for(var i=0;i<num_page;i++){ii=0,xx=$(".be-dropdown-item:contains('取消关注')");for(var n=0;n<xx.length;n++)xx[ii].click(),ii++,await sleep(ms);console.log("已取消第",i+1,"页的关注"),$(".be-pager-prev").click(),await sleep(2e3)}console.log("已完成目标")}main();
```
## 脚本使用介绍(图片使用cnblog图床，所以可能在GitHub上显示异常)：
打开你B站的关注界面如图：
![image](https://img2023.cnblogs.com/blog/3010098/202303/3010098-20230320180122026-731378922.png)
然后定位到最后一页：
![image](https://img2023.cnblogs.com/blog/3010098/202303/3010098-20230320180217900-1760913523.png)
然后打开你浏览器的开发者页面中的javascript控制台：
![image](https://img2023.cnblogs.com/blog/3010098/202303/3010098-20230320180350460-1340881560.png)

复制脚本，在下方粘贴：
![image](https://img2023.cnblogs.com/blog/3010098/202303/3010098-20230320180532961-2004371402.png)

设置好你要取关的页数即可，注意由于是最后一页，所以页数是从最后一页往前计算。
# 此脚本同时发布在cnblog博客:https://www.cnblogs.com/Lemon-233/p/17237265.html
