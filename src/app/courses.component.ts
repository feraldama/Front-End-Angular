import { Component } from '@angular/core';
import { PicsService } from './pics.service';

@Component({
  selector: 'courses',
  template: ` <h2>{{ title }}</h2> `,
})
export class CoursesComponent {
  title = 'Imagenes';
}
