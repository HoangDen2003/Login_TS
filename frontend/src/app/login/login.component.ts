import { Component, inject } from '@angular/core';
import { faCircleExclamation, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api.service';
import { ToastService } from '../features/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  toastService = inject(ToastService)

  faCircleExclamation = faCircleExclamation
  faEye = faEye
  faEyeSlash = faEyeSlash

  errors: any[] = []
  fields: any[] = []
  isShowPassword: boolean = false

  constructor(private http: ApiService) { }

  onSubmit(data: any) {
    this.errors = []
    this.fields = []
    this.http.login(data).subscribe({
      next: (data: any) => {
        this.toastService.show({template: "Login success", classname: "toast--success", delay: 3000})
      },
      error: (err: any) => {
        if (err["error"]["status"] === 401) {
          this.toastService.show({template: err["error"]["message"], classname: "toast--error", delay: 4000})
        } 
        else {
          this.errors = err["error"]["data"]["errors"];
          // this.errors.forEach((error) => this.toastService.show({template: error["message"], classname: "toast--error", delay: 4000}));
          this.errors.forEach((error) => this.fields.push(error["field"]));
        }
      }
    })
  }

  onShowPassword() {
    this.isShowPassword = !this.isShowPassword
  }

}
