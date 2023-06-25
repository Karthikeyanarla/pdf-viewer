import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Profile} from '../models/profile.model';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile!: Profile;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): Promise<Profile> {
    return new Promise((resolve, reject) => {
      this.http.get<Profile>(GRAPH_ENDPOINT).subscribe(
        (profile) => {
          resolve(profile);
        },
        (error) => {
          reject(error);
        }
      );
    });
}}
