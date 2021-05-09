import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
})
export class PictureComponent implements OnInit {
  tags: any = '';
  likes: any = '';
  views: any = '';
  largeImageURL: any = '';
  constructor() {
    this.tags = localStorage.getItem('tags');
    this.likes = localStorage.getItem('likes');
    this.views = localStorage.getItem('views');
    this.largeImageURL = localStorage.getItem('largeImageURL');
  }

  ngOnInit(): void {}
}
