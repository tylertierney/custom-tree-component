import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface ITreeNode {
  msId: number;
  planName: string;
  isChecked: boolean;
  children: ITreeNode[];
}

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  tree$: Observable<ITreeNode>;

  constructor(private http: HttpClient) {
    this.tree$ = this.http
      .get<ITreeNode>('http://localhost:3000/tree')
      .pipe(tap(console.log));
  }
}
