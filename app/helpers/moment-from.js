import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function momentFrom(params) {
  var time = window.moment(...params);
  var formatted = time.format('MMMM, MMM DD, YYYY');
  return htmlSafe(
    '<span class="text-primary">'
    + formatted + '</span>'
  );
}

export default helper(momentFrom);
