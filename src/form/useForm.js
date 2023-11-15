import { usePrefixClass, STATUS } from '../common.js';

export const useClassName = () => {
  const classPrefix = usePrefixClass();

  const form = `${classPrefix}-form`;
  const input = `${classPrefix}-input`;

  return {
    classPrefix,
    form,
    labelTop: `${form}__label--top`,
    inline: `${form}-inline`,
    formItem: `${form}__item`,
    formItemLabel: `${form}__label`,
    formItemWithHelp: `${form}__item-with-help`,
    formItemWithExtra: `${form}__item-with-extra`,
    controls: `${form}__controls`,
    controlsContent: `${form}__controls-content`,
    status: `${form}__status`,
    extra: `${input}__extra`,
    help: `${input}__help`,
    success: STATUS.success,
    successBorder: `${form}--success-border`,
    error: STATUS.error,
    warning: STATUS.warning,
  };
};

/***
 * 拼接表单字段样式
 * @param componentName
 * @param name
 * @returns {string}
 */
export function getFormItemClassName(componentName, name) {
  if (!name) return '';
  return `${componentName}__${name}`.replace(/(\[|\]\.)/g, '_');
}
