import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../Child';
import {Router} from '@angular/router';
import {ChildService} from '../child.service';


@Component({
  selector: 'app-child-list',
  templateUrl: './child.list.component.html',
  styleUrls: ['./child.list.component.scss']
})

export class ChildListComponent implements OnInit {
  list$: Observable<Child[]>;

  constructor(private router: Router, private childService: ChildService) {
  }

  ngOnInit(): void {
    this.list$ = this.childService.findAll();
  }
}
