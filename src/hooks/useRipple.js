import {usePrefixClass} from "../common.js";
import {onDestroy, onMount} from "svelte";

const period = 200
const noneRippleBg = 'rgba(0, 0, 0, 0)';
const defaultRippleColor = 'rgba(0, 0, 0, 0.35)';

const classPrefix = usePrefixClass()

/**
 * 纹波动画hooks
 * @param el dom
 * @param fixedRippleColor 动画颜色
 */
export default function useRipple(el, fixedRippleColor) {
  // 为节点添加一个ripple
  const handleAddRipple = (e) => {
    const rippleColor = getRippleColor(el, fixedRippleColor);

    if (e.button !== 0 || !el) return;

    if (
      el.classList.contains(`${classPrefix}-is-active`) ||
      el.classList.contains(`${classPrefix}-is-disabled`) ||
      el.classList.contains(`${classPrefix}-is-checked`) ||
      el.classList.contains(`${classPrefix}-is-loading`)
    )
      return;

    const elStyle = getComputedStyle(el);

    const elBorder = parseInt(elStyle.borderWidth, 10);
    const border = elBorder > 0 ? elBorder : 0;
    const width = el.offsetWidth
    const height = el.offsetHeight;

    // 添加ripple的父节点
    const rippleContainer = document.createElement('div');
    if (rippleContainer.parentNode === null) {
      setStyle(rippleContainer, {
        position: 'absolute',
        left: `${0 - border}px`,
        top: `${0 - border}px`,
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: elStyle.borderRadius,
        pointerEvents: 'none',
        overflow: 'hidden',
      });
      el.appendChild(rippleContainer);
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
      backgroundColor: rippleColor,
      opacity: '0.9',
    })

    // el所有子节点将不会被遮盖
    const elMap = new WeakMap();
    for (let n = el.children.length, i = 0; i < n; ++i) {
      const child = el.children[i];
      if (child.style.zIndex === '' && child !== rippleContainer) {
        child.style.zIndex = '1';
        elMap.set(child, true);
      }
    }

    // fix position
    const initPosition = el.style.position ? el.style.position : getComputedStyle(el).position;
    if (initPosition === '' || initPosition === 'static') {
      el.style.position = 'relative';
    }
    rippleContainer.insertBefore(ripple, rippleContainer.firstChild);

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
        if (rippleContainer.children.length === 0) rippleContainer.remove();
      }, period * 2 + 100);
    };
    el.addEventListener('pointerup', handleClearRipple, false);
    el.addEventListener('pointerleave', handleClearRipple, false);
  }
  el.addEventListener('pointerdown', handleAddRipple, false);
}

/**
 * 获取动画颜色
 * @param el dom
 * @param fixedRippleColor 颜色
 * @returns {string}
 */
function getRippleColor(el, fixedRippleColor) {
  if (fixedRippleColor) {
    return fixedRippleColor;
  }

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
