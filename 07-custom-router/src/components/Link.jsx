import { EVENTS } from '../const';

export function navigate(href) {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent =
      event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a href={to} onClick={handleClick} target={target} {...props}></a>;
}
