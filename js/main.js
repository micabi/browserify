import $ from 'jquery';
import {plus} from './plus';
import {minus} from './minus';


$(function(){
  let result = plus(9, 4);
  console.log(result);

  let result2 = minus(8, 5);
  console.log(result2);
});

// window.onload = function(){
  // let result = plus(9, 4);
  // console.log(result);

  // let result2 = minus(8, 5);
  // this.console.log(result2);

// }