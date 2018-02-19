//Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs/Rx';

//Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
  //Resolve HTTP using the constructor
  constructor(private http: Http) {}

  private commentsUrl = "http://localhost:3000/api/comments";

  //Fetch all existing comments
  getComments(): Observable<Comment[]> {
    //... using get request
    return 
      this.http.get(this.commentsUrl)
      //... and calling .json() on the response to return data
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Add a new comment
  addComment (body: Object): Observable<Comment[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.commentsUrl, body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }   

      // Update a comment
  updateComment (body: Object): Observable<Comment[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }   

    // Delete a comment
  removeComment (id:string): Observable<Comment[]> {
    return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }   
}