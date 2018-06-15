import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function thumbnailElem([imgPath, alt='', defaultPath='assets/images/cryptids/blank_th.png']) {
  let path = imgPath ? imgPath : defaultPath;
  let image = `<img class="media-object thumbnail" src="${path}" alt="${alt}" width="100%" height="100%">`

  return htmlSafe(image);
}

export default helper(thumbnailElem);
