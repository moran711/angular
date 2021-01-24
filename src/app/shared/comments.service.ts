import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Comment {
  _id?: string
  text: string;
  date: string;
}

@Injectable({ providedIn: 'root' })
export class CommentsService {

  constructor(private http: HttpClient) {}

  load():Observable<Comment[]> {
    return this.http
      .get<Comment[]>('http://localhost:5000/comment')
      .pipe(map(comment => {
        if(!comment) {
          return []
        }
        return comment
      }));
  }
  create(comment: string): Observable<Comment> {
    return this.http
      .post<Comment>('http://localhost:5000/comment', {comment})
      .pipe(
        map((res) => {
          console.log(res)
          return res;
        })
      );
  }
}
