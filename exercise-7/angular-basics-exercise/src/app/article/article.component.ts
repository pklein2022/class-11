import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  title: string = "Whatever you want";
  content: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quisquam, dolorem qui optio temporibus quo officia harum suscipit! Voluptates, odio mollitia! Aspernatur autem quisquam et cumque officiis iure eos nam!";
  isTechRelated: boolean = true;

  onToggleButton() {
    // if (this.isTechRelated === true) {
    //   this.isTechRelated = false;
    // } else {
    //   this.isTechRelated = true;
    // }

    // if (this.isTechRelated) {
    //   this.isTechRelated = false;
    // } else {
    //   this.isTechRelated = true;
    // }

    // this.isTechRelated = this.isTechRelated ? false : true;

    this.isTechRelated = !this.isTechRelated;
  }
}

