import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css',
})
export class OneUserComponent {
  constructor(private route: ActivatedRoute) {}

  userID!: string;

  ngOnInit() {
    this.userID = this.route.snapshot.params['user_ID'];
    console.log(this.userID);
  }
}
