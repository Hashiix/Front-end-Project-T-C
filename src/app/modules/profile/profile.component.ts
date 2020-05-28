import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
      profileForm = this.fb.group({
      name: ['', Validators.required],
      status: [''],
      password: [''],
      });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    
    alert("Vos modifications ont bien été enregistrées !")

  }

}
