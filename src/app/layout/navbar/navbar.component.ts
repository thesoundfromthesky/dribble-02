import { Component, OnInit } from "@angular/core";
import { slide, SlideState } from "src/app/shared/animation";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  animations: [slide]
})
export class NavbarComponent implements OnInit {
  state: boolean;
  animState: SlideState;
  cssClass: object;
  constructor() {}

  ngOnInit() {}

  hamburgerClick(): void {
    this.state = !this.state;
    this.cssClass = { "show-menu": this.state };
  }
}
