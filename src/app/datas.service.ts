import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { PostsService } from "./posts.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UsersService } from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(
    // injection services
    private _postsService: PostsService,
    private _usersService: UsersService,
    private _logService: LogService
  ){}

  async search(id: number){
    // get data from user service
    const user = await this._usersService.search(id).catch(err => err);
    // get data from posts service
    const posts = await this._postsService.searchByUserId(id).catch(err => err);
    // use other services
    this._logService.log({...user, posts});
    // return final response
    return {...user, posts};
  }
}