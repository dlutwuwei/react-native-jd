#京东客户端react-native demo

这只是一个react-natvie的练习例子，大概用一整天开发完成
1. react实现图片轮播
2. navigator，toolbar使用
3. webview实验
4. PanResponder实验

除了主页其他均直接使用webview直接展现

![京东客户端](http://ww2.sinaimg.cn/large/4ce25c89gw1ez695vwm2ij20ha0vwzr6.jpg)

##开发中碰到的问题
1. react-native的flex支持的css属性很少，并不能体现web ui的优势
2. 所有自定义组件名称开头要大写
3. react使用setState修改状态
3. 使用手势碰到了问题，组件只支持touch的点击，要写其他交互需要使用panReasponder,写起来麻烦点
4. navigator的跳转在子组件中，需要把navigator对象传递到子组件，要不然子组件发现不了navigtor对象


##总结
 react-native的很多组件android和ios代码并不通用，需要写两套代码，但是移植应该很方便，做效果需要结合react的state和Animation组件，总体来说要掌握这个技能，需要很好的js基础和对react的了解，要取代native还需要很长的路走。不过结合webview可以非常快速的建立app，对一般电商的app可以实现快速的开发

 >有时候npm安装react-navtive会被墙，可以使用淘宝镜像
