import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;

  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  passwordMismatch(form: NgForm){
    if(form.value['confirmPassword'] != form.value['password']){
      return true;
    } 
    return false;
  }
  onSignup(form: NgForm) {
    debugger

     if (form.invalid) {
      return;
    }
    else {
      
      this.isLoading = true;
      console.log(form.value.email, form.value.password)
      this.authService.createUser(form.value.email, form.value.password);
    }
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
