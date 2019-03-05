import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileDataService } from '../profiledata.service';
import { ProfileData } from '../profileData';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  submitted: ProfileData;
  savedStr: string = '';
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    description: [''],
  }); 
  constructor(private fb: FormBuilder, private profileDataService: ProfileDataService) { }
  @ViewChild('alert') alert: ElementRef;
  ngOnInit() {
  }

  onSubmit() {
    this.submitted = this.profileForm.value;
    this.profileDataService.addProfileData(this.submitted);
    this.openAlert();
    this.cleanProfile();
  }

  cleanProfile() {
    this.profileForm.reset();
  }

  openAlert() {
    this.savedStr = this.submitted.firstName;
    this.alert.nativeElement.classList.add('show');
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }
}
