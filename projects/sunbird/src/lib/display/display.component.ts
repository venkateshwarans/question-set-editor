import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../sunbird.models';
import { SunbirdService } from '../sunbird.service';

@Component({
  selector: 'tm-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private tvmaze: SunbirdService) {}

  ngOnInit() {
    this.posterUrl$ = this.tvmaze
      .getShow(this.showId)
      .pipe(map(show => show.image.medium));
  }
}
