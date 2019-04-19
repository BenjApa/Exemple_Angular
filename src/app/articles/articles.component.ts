import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles  => this.articles = articles);
 }

 delete(article: Article) {
   this.articleService.delete(article.id).subscribe(() => {
     this.articleService.getArticles().subscribe(articles  => this.articles = articles);
   });
}

}
