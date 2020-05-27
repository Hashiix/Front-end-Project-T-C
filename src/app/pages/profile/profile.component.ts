import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formulaire : FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit ()  {
    this.formulaire = this.fb.group({ 
      username: ['Déyris', Validators.required],
      status: ['Connecté'], 
      password: ['projet', Validators.required],
      confirmPassword: ['projet', Validators.required],
    });
    // // validator: MustMatch('password', 'confirmPassword')
    // });
  }

  onSubmit() {
    this.submitted = true;

    if (this.formulaire.invalid) {
      return; 
    }

    alert("Vos modifications ont bien été enregistrées !");

  }

}
