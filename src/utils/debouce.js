export function debounce(fun, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);/**不存在timer执行fun */
    }, delay);
  }
}


