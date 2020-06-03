import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
      profileForm = new FormGroup({});
      submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.profileForm = this.fb.group({
        name : ['', Validators.required],
        status: [''],
        password: ['']
     });
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    } else {
    alert('Vos modifications ont bien été enregistrées !');
  }

  }

}
