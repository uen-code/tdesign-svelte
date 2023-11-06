import {onMount, onDestroy} from "svelte";

/**
 * 用于订阅Listener事件
 */
export function useListener(type, listener) {
  onMount(() => {
    window.addEventListener(type, listener);
  });

  onDestroy(() => {
    window.removeEventListener(type, listener);
  });
}

export function useResize(listener, observer) {
  useListener('resize', listener);

  let resizeObserver = null;

  onMount(() => {
    if (!window.ResizeObserver || !observer) return;
    resizeObserver = new window.ResizeObserver(listener);
    resizeObserver.observe(observer);
  });

  onDestroy(() => {
    resizeObserver?.disconnect();
  });
}

