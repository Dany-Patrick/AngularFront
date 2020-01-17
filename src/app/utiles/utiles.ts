import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogoComponent } from '../componentes/modal-dialogo/dialogo.component';
import { DataStrings } from './data-strings';

export class Utiles {   
  constructor(public modalService: NgbModal){
    
  }
  modalError(datos : DataStrings){
    const modalRef = this.modalService.open(DialogoComponent);
    modalRef.componentInstance.my_modal_title = datos.titulo;
    modalRef.componentInstance.my_modal_content = datos.mensaje;
    modalRef.componentInstance.esVisible = false;
    modalRef.componentInstance.btnAceptar = "";
    modalRef.componentInstance.btnCerrar = "Ok";   
    this.colorError(modalRef);
  } 
  modalCambiarRazonSocial(datos : DataStrings){
    const modalRef = this.modalService.open(DialogoComponent);
    modalRef.componentInstance.my_modal_title = datos.titulo;
    modalRef.componentInstance.my_modal_content = datos.mensaje;
    modalRef.componentInstance.esVisible = true;
    modalRef.componentInstance.btnAceptar = "Aceptar";
    modalRef.componentInstance.btnCerrar = "Cancelar";   
    this.colorExito(modalRef);
  } 

  colorError(modalRef : any){
    this.color("danger",modalRef);
  }
  colorExito(modalRef: any){
    this.color("sucess",modalRef);
  }
  color(color :string,modalRef: any){
    modalRef.componentInstance.colorBtnAceptar = 'btn-'+color;
    modalRef.componentInstance.colorBtnCerrar = 'btn-'+color;
    modalRef.componentInstance.colorHeader ='badge-'+color;
  }
}