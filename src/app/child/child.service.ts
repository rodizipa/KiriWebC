import {Injectable} from '@angular/core';
import {BaseService} from '../framework/service/base.service';
import {Child} from './Child';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChildService extends BaseService<Child> {

  constructor(protected http: HttpClient) { super(http, 'child'); }
}
