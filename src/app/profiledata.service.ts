import { Observable, of } from 'rxjs';
import { ProfileData } from './profileData';
import { PROFILEDATA } from './mock-profiledata';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileDataService implements OnInit {
    currentList: ProfileData[];

    constructor() {
        this.currentList = PROFILEDATA.slice();
    }

    ngOnInit() {
    }

    getProfileData(): Observable<ProfileData[]> {
        return of(this.currentList);
    }

    addProfileData(pf: ProfileData): void {
        this.currentList.push({
            id: this.currentList.length + 1,
            firstName: pf.firstName,
            lastName: pf.lastName,
            address: {
                street: pf.address.street,
                city: pf.address.city,
                state: pf.address.state,
                zip: pf.address.zip,
            },
            description: pf.description,
        });
        console.log(this.currentList);
    }

    editProfileData(id: number, pf: ProfileData): void {
        for (let i = 0; i < this.currentList.length; i++) {
            if (this.currentList[i].id === id) {
                this.currentList[i].firstName = pf.firstName;
                this.currentList[i].lastName = pf.lastName;
                this.currentList[i].address.street = pf.address.street;
                this.currentList[i].address.city = pf.address.city;
                this.currentList[i].address.state = pf.address.state;
                this.currentList[i].address.zip = pf.address.zip;
                this.currentList[i].description = pf.description;
                break;
            }
        }
    }

    delProfileData(id): void {
        for (let i = 0; i < this.currentList.length; i++) {
            if (this.currentList[i].id === id) {
                this.currentList.splice(i, 1);
            }
        }
    }
}
