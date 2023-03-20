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
