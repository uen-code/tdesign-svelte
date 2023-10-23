import {writable} from 'svelte/store';

/** menu */
export const menuValue = writable(undefined);
export const menuExpand = writable([])

/** tabs */
export const tabValue = writable(undefined);