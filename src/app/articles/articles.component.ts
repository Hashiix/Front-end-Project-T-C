import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  article: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.article = this.fb.group({          // crée une instance de FormGroup
      postez: [],                           // cree une instance de FormControl
    });
  }

  // Methode appelée lors du clic sur le bouton submit
  userArticle(){
    console.log('Donnée du formulaire ...', this.article.value);
  }
}
