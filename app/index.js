import _ from 'lodash';
import $ from 'jquery';
import foo from './foo.js';

function component () {
  var element = $('<div></div>');

  /* lodash is required for the next line to work */
  element.html(_.join(['Hello','Young Lady'], ' '));

  return element.get(0);
}

document.body.appendChild(component());
console.log(foo);
console.log(foo());
