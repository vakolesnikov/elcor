export function scrollToTop() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -100);
        setTimeout(scrollToTop, 0);
    }
}
