const $icon = $('[rel="icon"]');
const originTitle = document.title;
const collapseTitle = '喔唷，崩溃啦！╭(°A°`)╮';
const naughtyTitle = '逗你玩儿的~ (ฅ>ω<*ฅ)';
const faviconPath = $('[rel="icon"]').attr('href');
let hiddenTime, showTime;

document.addEventListener('visibilitychange', function() {
  if(document.hidden) {
    clearTimeout(showTime);
    if(document.title === originTitle) {
      hiddenTime = setTimeout(function() {
        $icon.attr('href', 'no.png');
        document.title = collapseTitle;
      }, 2000);
    } else if(document.title === naughtyTitle) {
      $icon.attr('href', 'no.png');
      document.title = collapseTitle;
    }
  } else {
    clearTimeout(hiddenTime);
    if(document.title === collapseTitle) {
      $icon.attr('href', faviconPath);
      document.title = naughtyTitle;
      showTime = setTimeout(function() {
        document.title = originTitle;
      }, 1500);
    }
  }
});
