import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private _http: HttpClient
  ){

  }

  async searchByUserId(id: number){
    const posts = await this._http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).pipe(
      map((response: any) => response && response.length >= 0 ? response : null)
    ).toPromise().catch(err => err);
    // handling error
    if (!posts) return alert('no posts find');
    return posts;
  }
}