import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SelectivePreloadingStrategy } from '../../selective-preloading-strategy';

import 'rxjs/add/operator/map';
import { User } from '../../../server/collections/user';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  template:  `
    <p>Dashboard</p>

    <thead>
  <tr style="background-color: rgb(194, 187, 187);">
    <th>Name</th>
    <th>Email ID</th>
    <th>Contact Number</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>
      <input type="text" class="form-control" [(ngModel)]="addUser.name" placeholder="Name">
    </td>
    <td>
      <input type="text" class="form-control" [(ngModel)]="addUser.email_id" placeholder="Email Id">
    </td>
    <td>
      <input type="number" class="form-control" [(ngModel)]="addUser.contact_number" placeholder="Contact Number">
    </td>
    <td>
      <button class="btn btn-success" (click)="insert()">Insert</button>
    </td>
  </tr>
</thead>
  `
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];
  public addUser: User = this.setUser();
  UsersCollection: AngularFirestoreCollection<User>;
  constructor(
    private route: ActivatedRoute,
    private preloadStrategy: SelectivePreloadingStrategy
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParamMap
      .map(params => params.get('session_id') || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');
  }
insert() {
   this.UsersCollection.add(this.addUser);
   this.addUser = this.setUser();
}
private setUser() {
  return {
    contact_number: 1,
    email_id: '',
    id: '',
    name: '',
  };
}
}
