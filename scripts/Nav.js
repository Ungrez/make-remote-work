class Nav {
  constructor() {
    this.openButton = document.querySelector("#nav_menu");
    this.closeButton = document.querySelector(".nav_menu_links_close-button");
    this.menu = document.querySelector("#nav_menu_links");
  }
  init() {
    this.openButton.addEventListener("click", () => this.openMenu());
    this.closeButton.addEventListener("click", () => this.closeMenu());
  }
  closeMenu() {
    this.menu.classList.add("hidden");
    document.body.classList.remove("hidden");
  }
  openMenu() {
    this.menu.classList.remove("hidden");
    document.body.classList.add("hidden");
  }
}
export const nav = new Nav();
nav.init();
