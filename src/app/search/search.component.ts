import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../actions/pic.actions';
import { PicsService } from '../pics.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  texto: string = '';
  pics: any[] = [];

  categories: Category[] = [
    { value: 'science', viewValue: 'Science' },
    { value: 'education', viewValue: 'Education' },
    { value: 'people', viewValue: 'People' },
    { value: 'feelings', viewValue: 'Feelings' },
    { value: 'computer', viewValue: 'Computer' },
    { value: 'buildings', viewValue: 'Buildings' },
  ];

  constructor(
    private picsService: PicsService,
    private modalService: NgbModal,
    private store: Store<{ counter: { counter: number } }>
  ) {}

  getImagenes(texto: string) {
    this.picsService.getdata(texto).subscribe((data: any) => {
      this.pics = data.hits;
    });
  }
  getCategoria(texto: string) {
    this.picsService.getCategory(texto).subscribe((data: any) => {
      this.pics = data.hits;
    });
  }
  ngOnInit(): void {}

  closeModal: string | undefined;

  triggerModal(
    content: any,
    likes: number,
    largeImageURL: string,
    views: number,
    tags: string
  ) {
    localStorage.setItem('likes', likes.toString());
    localStorage.setItem('tags', tags);
    localStorage.setItem('views', views.toString());
    localStorage.setItem('largeImageURL', largeImageURL);
    this.store.dispatch(
      login({
        likes: likes,
        largeImageURL: largeImageURL,
        views: views,
        tags: tags,
      })
    );
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
