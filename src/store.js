import { writable } from 'svelte/store';

/** menu */
export const menuItemValue = writable(undefined);
export const menuValue = writable(undefined);

/** tabs */
export const tabValue = writable(undefined);
export const tabPanelProps = writable([]);