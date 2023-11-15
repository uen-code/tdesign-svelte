import { writable } from 'svelte/store';

/** panel id */
export const TAB_PANEL_ID = 'tabPanel';
/** item id */
export const TAB_NAV_ITEM_ID = 'tabNavItem';
/** panel 属性值自定义 */
export const TAB_ATTRIBUTE_VALUE = 'value';
export const TAB_ATTRIBUTE_DISABLED = 'disabled';
export const TAB_ATTRIBUTE_ICON_NAME = 'labelIcon';
export const TAB_ATTRIBUTE_ICON_CLASS = 'labelIconClass';
export const TAB_ATTRIBUTE_LABEL = 'label';

export function TabStore(value) {
  const tabValue = writable(value);

  const setTabValue = (value) => {
    tabValue.set(value);
  };
  return [tabValue, setTabValue];
}
