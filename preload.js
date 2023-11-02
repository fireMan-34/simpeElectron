// 预加载脚本

window.addEventListener('DOMContentLoaded', () => {
  const repealceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  repealceText('author', 'fireMan34');
});