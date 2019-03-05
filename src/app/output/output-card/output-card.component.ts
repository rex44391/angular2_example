import { Component, OnInit, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileData } from '../../profileData';
import { ProfileDataService } from '../../profiledata.service';
import { NgbdDelModal } from './del-modal/del-modal.component';
import { NgbdEditModal } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-output-card',
  templateUrl: './output-card.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./output-card.component.css']
})
export class OutputCardComponent implements OnInit {
  @Input() input: ProfileData;
  @Output() onEdited: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeleted: EventEmitter<string> = new EventEmitter<string>();
  isSelected: boolean = false;
  
  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('enableAndVisible') public enableAndVisible: ContextMenuComponent;
  @ViewChild('withFunctions') public withFunctions: ContextMenuComponent;


  constructor(public _modalService: NgbModal,
    private profileDataService: ProfileDataService) { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }

  showMessage(message: any, data?: any): void {
    //console.log(this.input, message, data);
  }

  editProfile(): void {
    const modalRef = this._modalService.open(NgbdEditModal, {size: 'lg'});
    modalRef.componentInstance.editInput = this.input;
    modalRef.componentInstance.editedPf.subscribe((received) => {
      let tempName = this.input.firstName + ' ' + this.input.lastName;
      this.profileDataService.editProfileData(this.input.id, received);
      this.onEdited.emit(tempName);
    });
  }

  deleteThis(): void {
    const modalRef = this._modalService.open(NgbdDelModal);
    modalRef.componentInstance.userName = this.input.firstName + ' ' + this.input.lastName;
    modalRef.componentInstance.id = this.input.id;
    modalRef.result.then(
      (result) => {
      }, (reason) => {
        if(reason === 'confirm') {
          this.profileDataService.delProfileData(this.input.id);
          this.onDeleted.emit(this.input.firstName + ' ' + this.input.lastName);
        }
      }
    );
  }

  cancel(): void {
    return;
  }
}
