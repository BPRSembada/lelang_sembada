export const pageview = (url) => {
  if (window.gtag) {
    window.gtag("confiq", "G-Z7CFKEEGGL", {
      page_path: url,
    });
  }
};
