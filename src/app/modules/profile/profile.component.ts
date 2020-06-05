import {Component, OnInit, ViewEncapsulation,Injectable} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from'@angular/common/http';

@Injectable()

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
      profileForm = new FormGroup({});
      submitted = false;

  constructor(private fb: FormBuilder, private httpClient : HttpClient) { }

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
    this.httpClient.post('https://http-client-c2793.firebaseio.com/article.json',this.profileForm.value)
  }

  }

}
