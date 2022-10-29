class Nav {
  constructor() {
    this.openButton = document.querySelector("#nav_menu");
    this.closeButton = document.querySelector(".nav_menu_links_close-button");
    this.menu = document.querySelector("#nav_menu_links");
    this.dropdown = document.querySelectorAll("li.dropdown");
    this.dropdownContainer = document.querySelectorAll("ul.dropdown-ul");
    this.dropdownArrows = document.querySelectorAll("img.dropdown");
  }
  init() {
    this.openButton.addEventListener("click", () => this.openMenu());
    this.closeButton.addEventListener("click", () => this.closeMenu());
    this.dropdown.forEach((dropdown) =>
      dropdown.addEventListener("click", (e) =>
        this.showDropdown(e.target.classList)
      )
    );
  }
  closeMenu() {
    this.menu.classList.add("hidden");
    document.body.classList.remove("hidden");
  }
  openMenu() {
    this.menu.classList.remove("hidden");
    document.body.classList.add("hidden");
  }
  showDropdown(e) {
    this.dropdownContainer.forEach((item) => {
      if (item.id === e[1]) {
        item.classList.toggle("loaded");
        e.toggle("loaded");
      }
    });
  }
}
export const nav = new Nav();
nav.init();
