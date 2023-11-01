export const SUB_MENU_ID = 'subMenu'

import {writable, get} from "svelte/store";

export function MenuStore(value, expands) {
  const menuValue = writable(value);
  const menuExpands = writable(expands);

  const setMenuValue = (value) => {
    menuValue.set(value)
  }
  const setMenuExpands = (newValue) => {
    let expandedValues = new Set(get(menuExpands))
    if (expandedValues.has(newValue)) {
      expandedValues.delete(newValue);
      menuExpands.set([...expandedValues])
    } else {
      expandedValues.add(newValue);
      menuExpands.set([...expandedValues]);
    }
  }

  return [
    menuValue,
    setMenuValue,
    menuExpands,
    setMenuExpands
  ]
}