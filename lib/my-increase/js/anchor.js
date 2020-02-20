let hList = document.querySelectorAll('.post-body h1,.post-body h2,.post-body h3,.post-body h4,.post-body h5,.post-body h6');
let nowAnchor = null;
let time = 0;

window.addEventListener('scroll', function (e) {
  if (Date.now() - time >= 100) {
    for (let i = hList.length - 1; i >= 0; i--) {
      if (hList[i].getBoundingClientRect().top <= 0) {
        if (hList[i].id !== nowAnchor) {
          let href = location.href.includes('#') ? location.href.split('#')[0] : location.href;
          nowAnchor = hList[i].id;
          history.replaceState({}, '', `${href}#${nowAnchor}`);
        }
        break;
      }
    }
    time = Date.now();
  }
});
