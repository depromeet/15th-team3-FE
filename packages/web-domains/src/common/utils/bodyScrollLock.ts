const isBrowser = typeof window !== 'undefined';

export class BodyScrollLock {
  container: HTMLElement | null = null;

  constructor(container: HTMLElement | null) {
    this.container = container;
  }

  scrollLock = (e: TouchEvent) => {
    if (!isBrowser) {
      return;
    }

    let scrollTarget = e.target;
    const containers = this.container;
    while (scrollTarget instanceof HTMLElement && scrollTarget !== containers) {
      const style = window.getComputedStyle(scrollTarget);
      if (
        (scrollTarget.scrollHeight > scrollTarget.clientHeight ||
          scrollTarget.scrollWidth > scrollTarget.clientWidth) &&
        /auto|scroll/.test(style.overflow)
      ) {
        break;
      }
      scrollTarget = scrollTarget.parentNode as HTMLElement;
    }
    if (scrollTarget !== containers) {
      e.preventDefault();
      return;
    }

    if (scrollTarget instanceof HTMLElement && scrollTarget.scrollHeight === scrollTarget.clientHeight) {
      e.preventDefault();
    }
  };

  disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('touchmove', this.scrollLock, { passive: false });
  };
  enableScroll = () => {
    document.body.style.removeProperty('overflow');
    document.body.removeEventListener('touchmove', this.scrollLock);
  };
}
