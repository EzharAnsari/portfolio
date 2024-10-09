import { Component } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  linkdin_icon = faLinkedinIn;
  github_icon = faGithub;
  skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=angular,nodejs",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=cs,dotnet",
      id: 2,
    },
    {
      img: "https://skillicons.dev/icons?i=git,docker",
      id: 3,
    },
  ];
}
