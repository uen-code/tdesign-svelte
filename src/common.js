import {classPrefix} from './config'


/**
 * 获取样式前缀
 */
export function usePrefixClass(COMPONENT_NAME) {
  return COMPONENT_NAME ? `${classPrefix}-${COMPONENT_NAME}` : classPrefix;
}

/**
 * 获取样式(svelte无法像vue可以直接传递样式数组、对象)
 */
export function getClassString(classObj) {
  let classString = '';
  for (let key in classObj) {
    if (classObj[key]) {
      classString += key + ' ';
    }
  }
  return classString.trim();
}

/**
 * 字符串首字母大小写
 */
export function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (char) => char.toUpperCase());
}

/**
 * 组件样式大小
 */
export const SIZE = {
  default: '',
  small: `${classPrefix}-size-s`,
  medium: `${classPrefix}-size-m`,
  large: `${classPrefix}-size-l`,
}

/**
 * 组件样式状态
 */
export const STATUS = {
  loading: `${classPrefix}-is-loading`,
  disabled: `${classPrefix}-is-disabled`,
  focused: `${classPrefix}-is-focused`,
  active: `${classPrefix}-is-active`,
  checked: `${classPrefix}-is-checked`,
}