import { get, writable } from 'svelte/store';

export function CheckboxStore(groupValue, checkboxGroupDisable) {
  const disabled = checkboxGroupDisable;
  const checkboxGroupValue = writable(groupValue || []);

  const setCheckboxGroupValue = (value) => {
    checkboxGroupValue.set(value);
  };
  const getCheckboxGroupValue = () => {
    return get(checkboxGroupValue);
  };

  return { checkboxGroupValue, setCheckboxGroupValue, getCheckboxGroupValue, disabled };
}
