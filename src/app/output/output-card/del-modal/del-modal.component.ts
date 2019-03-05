import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-del',
    templateUrl: './del-modal.component.html'
})
export class NgbdDelModal implements OnInit {
    @Input() public userName;

    constructor(public modal: NgbActiveModal){}

    ngOnInit() {
        //console.log(this.userName);
    }

}