import { Injectable } from "@angular/core";
import { PostsService } from "./posts.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient,
    // injection services
    private _postsService: PostsService
  ){}

  async search(id: number){
    // get data from user database
    const userData = await this._http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      map((response: any) => response && response.id ? response : null)
    ).toPromise().catch(err => err);
    // handling error
    if (!userData) return alert('no user find');
    // return user ready
    return userData;
  }
}