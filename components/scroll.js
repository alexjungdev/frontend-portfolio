'use client'


const GoToScroll = ( id, delay ) => {
    setTimeout(() => {
        switch (id) {
          case "top":
            window.scrollTo(0, 0);
            break;
          default:
            window.scrollTo({
              top: document.getElementById(id).offsetTop,
              behavior: 'smooth',
            });
            break;
        }
      }, delay);
}

export default GoToScroll;