import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-user-data',
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.css'],
})
export class UpdateUserDataComponent implements OnInit {
  newPassword: string = '';
  currentPassword: string = '';

  constructor() {}

  ngOnInit() {}

  updateData() {
    console.log(this.currentPassword);
  }
}
