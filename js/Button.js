document.getElementById('Name').addEventListener('tap', function() {
  //打开关于页面
  mui.openWindow({
    url: 'ChangeName.html', 
    id:'info'
  });
});