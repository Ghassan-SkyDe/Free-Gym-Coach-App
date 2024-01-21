export const autoScroll = (scrollTo) => {
  let lg, xs;
  if (scrollTo === "toResults") {
    lg = 1900;
    xs = 1200;
  } else {
    lg = 0;
    xs = 0;
  }

  if (window.innerWidth >= 1200)
    window.scrollTo({ top: lg, behavior: "smooth" });
  else window.scrollTo({ top: xs, behavior: "smooth" });
};
