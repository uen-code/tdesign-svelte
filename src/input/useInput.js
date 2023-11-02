export function useInputEventHandler(isHover) {


  const mouseEvent = (v) => (isHover = v);

  const onInputMouseenter = (e) => {
    mouseEvent(true);
  };

  const onInputMouseleave = (e) => {
    mouseEvent(false);
  };

  return [isHover, onInputMouseenter, onInputMouseleave]
}