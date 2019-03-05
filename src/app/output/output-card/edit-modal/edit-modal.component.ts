import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'ngbd-modal-del',
    templateUrl: './edit-modal.component.html'
})
export class NgbdEditModal implements OnInit {
    @Input() public editInput;
    @Output() editedPf: EventEmitter<any> = new EventEmitter();

    profileForm: FormGroup;
    constructor(public modal: NgbActiveModal, private fb: FormBuilder) { }

    ngOnInit() {
        this.profileForm = this.fb.group({
            firstName: [this.editInput.firstName, Validators.required],
            lastName: [this.editInput.lastName],
            address: this.fb.group({
                street: [this.editInput.address.street],
                city: [this.editInput.address.city],
                state: [this.editInput.address.state],
                zip: [this.editInput.address.zip]
            }),
            description: [this.editInput.description],
        });
    }

    save() {
        this.editedPf.emit(this.profileForm.value);
        this.modal.dismiss('save');
    }
}