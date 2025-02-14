import { Controller } from "@hotwired/stimulus"

// Flash controller for alerts and notices of app
// Will fade out flash messages after 3 seconds
// Prevents messages from hanging out until pages is refreshed.
export default class extends Controller {
  // Setup a timer to automatically hide the flash message
  // after 3 seconds.
  connect() {
    setTimeout(() => {
      this.hide();
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  // This method makes the flash message fade out by setting a 1-second opacity transition and
  // then removes the element from the DOM after the transition is complete.
  hide() {
    this.element.style.transition = "opacity 1s";
    this.element.style.opacity = "0";
    setTimeout(() => {
      this.element.remove();
    }, 1000); // Wait for the transition to finish before removing the element
  }

  // Handles the animationend event that is triggered by the fadeOut animation in the hide() method.
  // If the animation that just finished is the fadeOut animation, then the element is removed from the DOM.
  // Review css for fadeOut animation
  remove(event) {
    if (event.animationName === "fadeOut") {
      this.element.remove();
    }
  }
}