import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from '../article.service';
import {RawArticle} from '../models/raw-article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  createArticle() {
    const formModel = this.articleForm.value;
    const rawArticle: RawArticle = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    };
    this.articleService.add(rawArticle).subscribe();
  }
}
