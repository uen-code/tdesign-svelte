import {writable} from "svelte/store";

export function RadioGroupStore(value, disabled, allowUncheck) {

  const radioGroupDisabled = disabled;

  const radioGroupAllowUncheck = allowUncheck

  const radioValue = writable(value);

  const setRadioValue = (value) => {
    radioValue.set(value)
  }

  return {radioValue, setRadioValue, radioGroupDisabled, radioGroupAllowUncheck}
}