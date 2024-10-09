import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  logoClass = 'logo';
  hamburger = false;

  navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  pageUp() {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }

  hamburgerMenu() {
    this.hamburger = !this.hamburger;
    console.log(this.hamburger);
  }

}

