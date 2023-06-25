import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/models/profile.model';
import { ProfileService } from '../profile.service';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: Profile = {givenName : "" , surname : "", id : "", userPrincipalName : ""};

  constructor(private profileService : ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getProfile()
      .then((profile) => {
        this.userProfile = profile;
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }
}
