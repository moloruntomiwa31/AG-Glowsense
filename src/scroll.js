
export default function useScroll() {
  const  scrollTosection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
  return {scrollTosection}
}
