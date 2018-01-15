// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Hero, HeroService }  from './hero.service';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../../server/collections/user';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="hero.id === selectedId">
        <a [routerLink]="['/hero', hero.id]">
          <span class="badge">{{ hero.id }}</span>{{ hero.name }}
        </a>
      </li>
    </ul>
    <tr *ngFor="let item of user | async">
      <td>
        {{item.name}}
      </td>
      <td>
        {{item.email_id}}
      </td>
      <td>
        {{item.contact_number}}
      </td>
        <td>
          <button class="btn btn-danger" (click)="delete(item)">
              <span class="glyphicon glyphicon-trash">Delete</span>
          </button>
          <button class="btn btn-primary" (click)="edit(item)">
              <span class="glyphicon glyphicon-pen">Update</span>
          </button>
        </td>
    </tr>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  UsersCollection: AngularFirestoreCollection<User>;
  user: Observable<User[]>;
  UsersDoc: AngularFirestoreDocument<User>;

  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private db: AngularFirestore,
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      });
      this.UsersCollection = this.db.collection('users');
      this.user = this.UsersCollection.snapshotChanges()
      .map(changes =>
      changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        console.log('this is user', data);
        return data;
  }));
  }
}
