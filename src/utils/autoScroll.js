

export const autoScroll = () => {
    if(window.innerWidth >= 1200) window.scrollTo({top: 1900, behavior: "smooth"});
    else window.scrollTo({top: 1200, behavior: "smooth"});
}