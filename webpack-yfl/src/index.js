// require('./index.css');

console.log('yflddd');

// @import './index.css';

require('./index.css');

import './index.less';


let fn = () => {
  console.log('yfl-yyds!');
}

class A {
  a = 1;
}

let astr = new A();
console.log('----asss---',astr.a);



function * gen(params){
  yield 11;
}

console.log(gen().next());


// js引入图片
import logo from './mimi.png';
let image = new Image();
image.src = logo;
image.id="jj";
document.body.appendChild(image);


// import storypng from './story.png';

// import womenpng from './women.png';



// class YFL {
//   constructor(){
//     console.lo('出错了！');
//   }
// }

// let yfl = new YFL();



// 跨域请求数据
let xhr = new XMLHttpRequest();
// 本地域名http://localhost:8080 
xhr.open('GET','/api/user',true);
// xhr.open('GET','/person/userinfo',true);
xhr.onload = function(){
  console.log(xhr.response);
}

xhr.send();



// 
import React from 'react';
import { render } from 'react-dom';
render(<h1>JSX</h1>,window.jk);



//懒加载  vue 懒加载   react懒加载
let button = document.createElement('button');
button.innerHTML = 'Hello Button1234';
button.addEventListener('click',function(){
  // es6 草案中语法 jsonp实现动态加载文件
  import('./source.js').then(data => {
    console.log('懒加载--',data);
  });
});
document.body.appendChild(button);