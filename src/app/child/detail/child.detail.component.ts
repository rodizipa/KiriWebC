import {Component, OnInit} from '@angular/core';
import {Child} from '../Child';
import {ActivatedRoute} from '@angular/router';
import {ChildService} from '../child.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child.detail.component.html',
  styleUrls: ['./child.detail.component.scss']
})
export class ChildDetailComponent implements OnInit {
  unit: Child;

  constructor(private activatedRoute: ActivatedRoute, private childService: ChildService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.childService.findOne(id))
  ).subscribe(unit => this.unit = unit);
  }
}
