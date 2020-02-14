import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-practise';
    private articles = [];
    public search = ''; 
    public adress = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-13&sortBy=publishedAt&apiKey=276754ca46cd471d96d3509fb94940a8\n';

  Searchmethod() {
    
    this.adress = 'https://newsapi.org/v2/everything?q= ' + this.search + ' &from=2020-01-13&sortBy=publishedAt&apiKey=276754ca46cd471d96d3509fb94940a8';
    this.httpClient
      .get(this.adress)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient
    .get(this.adress)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
    }

}

  



