// place files you want to import through the `$lib` alias in this folder.
import Device from 'svelte-device-info';

export let isMobile: boolean = true;
isMobile = Device.isMobile;