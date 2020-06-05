import { Component, OnInit, ViewEncapsulation, Injectable, } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from "@angular/forms"
import {HttpClient} from'@angular/common/http';


@Injectable()
// Home-Online part

@Component({
  selector: 'app-home-online',
  templateUrl: './home-online.component.html',
  styleUrls: ['./home-online.component.css'],
  encapsulation: ViewEncapsulation.None,


})

export class HomeOnlineComponent implements OnInit {

      //userArticle = new ArticleUser({});



  /*ngOnInit(): void {
  }*/

  disconnect() {
    localStorage.removeItem('userToken');
  }




// the bind or my form in the component.html
  article: FormGroup;


  constructor(private fb: FormBuilder,private httpClient : HttpClient ) { }

  ngOnInit() {
    this.article = this.fb.group({          // crée une instance de FormGroup
      contenu: ['patate'],                           // cree une instance de FormControl
    });
  }


  // Methode appelée lors du clic sur le bouton submit
  login(){

    console.log(this.article.value);
    const valueTextArea = this.article.get('contenu').value;

    console.log(valueTextArea)

   this.httpClient
      .post('https://http-client-c2793.firebaseio.com/post.json',this.article.value)
      .subscribe(
        ()=> {
          console.log('enregistrement terminé');
        },
        (error) => {
          console.log('echec !'+ error);
        }
      )

    alert('Vos modifications ont bien été enregistrées !'+ this.article.value);
  }




}


