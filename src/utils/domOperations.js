import filter from "../utils/lodash/filter.js";
import isArrayLike from "../utils/lodash/isArrayLike.js";

/***
 * 获取dom的属性值
 */
export const getAttribute = (el, key) => {
  if (!el || !key) return;
  return el.getAttribute(key)
}

/***
 * 根据节点id 筛选出子节点列表
 */
export function filterChildNodes(el, id) {
  if (!el) return [];
  const childNodes = el.childNodes
  if (!isArrayLike(childNodes)) return [];
  if (!id) return childNodes;
  return filter(childNodes, (child) =>
    child.id === id
  )
}

/***
 * 根据节点列表 筛选节点
 */
export function getActiveNode(els,attribute,value){
  if (!isArrayLike(els) || !value) return undefined;
  return els.find(el=>el.getAttribute(attribute) === value)
}