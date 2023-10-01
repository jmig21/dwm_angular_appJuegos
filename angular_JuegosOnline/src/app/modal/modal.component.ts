// modal.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  on() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
      overlay.style.display = "block";
    }
  }

  off() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
      overlay.style.display = "none";
    }
  }
}
