import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      rut: [''],
      edad: [0],
      vivo: [false]
    });
  }
}
