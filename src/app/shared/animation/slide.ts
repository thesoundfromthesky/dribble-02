import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata
} from "@angular/animations";

export type SlideState = "in" | "out";

export const slide: AnimationTriggerMetadata = trigger("slideAnim", [
  state(
    "void, in",
    style({
      opacity: 0,
      visibility: "hidden",
      transform: "translateY(-5%)"
    })
  ),
  state(
    "out",
    style({
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)"
    })
  ),
  transition("void => out", [animate(".5s ease-in-out")]),
  transition("in <=> out", [animate(".5s ease-in-out")])
]);
