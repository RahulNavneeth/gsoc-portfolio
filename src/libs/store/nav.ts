import { writable } from 'svelte/store';

export let YEAR_SELECTED = writable<number | null>(null);
