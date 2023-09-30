import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @ViewChild('myModal') modalContent!: any; // ViewChild para obtener una referencia al contenido del modal

  constructor(private modalService: NgbModal) { }

  mostrarModal() {
    this.modalService.open(this.modalContent, { centered: true });
  }
}
