import _ from 'lodash';
import $ from 'jquery';

function component () {
  var element = j('<div></div>');

  /* lodash is required for the next line to work */
  element.html(_.join(['Hello','webpack2'], ' '));

  return element.get(0);
}

document.body.appendChild(component());
