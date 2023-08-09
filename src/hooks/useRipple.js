const period = 200
const noneRippleBg = 'rgba(0, 0, 0, 0)';
const defaultRippleColor = 'rgba(0, 0, 0, 0.35)';

/**
 * 纹波动画hooks
 * @param el dom
 */
export default function useRipple(el) {
  const width = el.offsetWidth

  // fix position
  const initPosition = el.style.position ? el.style.position : getComputedStyle(el).position;
  if (initPosition === '' || initPosition === 'static') {
    el.style.position = 'relative';
  }

  // 新增一个ripple
  const ripple = document.createElement('div')
  setStyle(ripple, {
    marginTop: '0',
    marginLeft: '0',
    right: `${width}px`,
    width: `${width + 20}px`,
    height: '100%',
    transition: `transform ${period}ms cubic-bezier(.38, 0, .24, 1), background ${period * 2}ms linear`,
    transform: 'skewX(-8deg)',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    backgroundColor: getRippleColor(el),
    opacity: '0.9',
  })
  setTimeout(() => {
    ripple.style.transform = `translateX(${width}px)`;
  }, 0);

  // 清除动画节点 clear ripple container
  const handleClearRipple = () => {
    ripple.style.backgroundColor = noneRippleBg;

    if (!el) return;

    el.removeEventListener('pointerup', handleClearRipple, false);
    el.removeEventListener('pointerleave', handleClearRipple, false);

    setTimeout(() => {
      ripple.remove();
    }, period * 2 + 100);
  };
  el.addEventListener('pointerup', handleClearRipple, false);
  el.addEventListener('pointerleave', handleClearRipple, false);
  el.appendChild(ripple);
}

/**
 * 获取动画颜色
 * @param el
 * @returns {string}
 */
function getRippleColor(el) {
  const rippleColor = getComputedStyle(el).getPropertyValue('--ripple-color')
  if (rippleColor) {
    return rippleColor;
  }
  return defaultRippleColor;
}

/**
 * 用于为el节点增加styles
 */
function setStyle(el, styles) {
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    el.style[key] = styles[key];
  });
}
