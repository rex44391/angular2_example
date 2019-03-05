import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfileData } from '../profileData'
import { ProfileDataService } from '../profiledata.service';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  profileList: ProfileData[];
  alertContent: string = '';
  @ViewChild('alert') alert: ElementRef;
  
  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileDataService.getProfileData().subscribe(
      input => {
        this.profileList = input;
      }
    )
  }
  openEditAlert(name: string) {
    this.alertContent = `${name}'s data has been updated!`;
    this.alert.nativeElement.classList.remove('alert-danger');
    this.alert.nativeElement.classList.add('alert-info');
    this.alert.nativeElement.classList.add('show');
  }

  openDelAlert(name: string) {
    this.alertContent = `${name}'s data has been deleted!`;
    this.alert.nativeElement.classList.remove('alert-info');
    this.alert.nativeElement.classList.add('alert-danger');
    this.alert.nativeElement.classList.add('show');
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }
}
