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
document.body.appendChild(image);


// import storypng from './story.png';

// import womenpng from './women.png';
