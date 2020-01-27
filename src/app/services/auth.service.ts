import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  /** pubic so that this variable can be accessed in other componenst (common shared variable between coponents if imported this service)*/
  public isLoggedIn = false;
  constructor() {}
}
