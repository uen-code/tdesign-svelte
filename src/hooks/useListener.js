/***
 * 监听指定元素的大小变化
 * @param listener 回调
 * @param observer 元素
 */
export function useResize(listener, observer) {
  window.addEventListener('resize', listener);

  let resizeObserver = null;

  if (!window.ResizeObserver || !observer) return;
  resizeObserver = new window.ResizeObserver(listener);
  resizeObserver.observe(observer);
}
