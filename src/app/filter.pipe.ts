import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: any, term: any): any {
    if (term === undefined) {
      return articles;
    }
    return articles.filter(function(article) {
      return article.title.toLowerCase().includes(term.toLowerCase()) || article.content.toLowerCase().includes(term.toLowerCase())
      || article.authors.toLowerCase().includes(term.toLowerCase());
    });
  }

}
