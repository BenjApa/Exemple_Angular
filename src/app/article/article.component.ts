import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    @Input('article')
    article: Article;

    @Output()
    deletedArticle: EventEmitter<Article> = new EventEmitter();

    constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params && params['id']) {
        this.articleService.get(params['id']).subscribe(article => this.article = article);
      }
    });
  }

  delete() {
    this.deletedArticle.emit(this.article);
  }

}
