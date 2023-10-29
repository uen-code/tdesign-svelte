/** 代码替换为字符串 */
export function codeReplace(baseCode, changeProps) {
  const propsStr = Object.keys(changeProps)
    .map((name) => `${stringifyProp(name, changeProps[name])}`)
    .filter(Boolean);
  return baseCode.replace(/\s*codeReplace/g, () =>
    propsStr.length ? `\n  ${propsStr.join('\n  ')}` : '',
  );
}

export const stringifyProp = (name, value) => {
  if (value === true) return name; // 为 true 只展示 name
  if (value === undefined) return ''; // 为 undefined 不展示
  if (value === name) return `{${name}}`;
  if (typeof value === 'string') return `${name}="${value}"`;
  return `${name}="${value}"`;
}