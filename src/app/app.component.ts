import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlMenosUnNumero, mayorAZero} from './numericos.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      rut: ['', AlMenosUnNumero()],
      edad: [0, [mayorAZero(), Validators.max(10)]],
      vivo: [false]
    });

    this.formData.get('edad').valueChanges.subscribe(dt => {
      console.log(this.formData.get('edad').errors);
    });
  }
}
