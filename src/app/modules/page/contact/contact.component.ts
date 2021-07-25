import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from './service/contact.service';
import {SnackBarComponent} from '../../../share/snack-bar/snack-bar.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {
  @ViewChild(SnackBarComponent) SnackBarComponent: SnackBarComponent;
  formData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {
  }

  ngOnInit(): void {
    this.formData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.formData.invalid) {
      this.SnackBarComponent.show('لطفا تمام فیلدهارا به درستی پر کنید' , 'ERROR') ;
      return;
    }
    this.postMessage();
  }

  private postMessage(): void {
    this.contact.postMessage(this.formData.value)
      .subscribe(response => {
        this.SnackBarComponent.show('Successful!' , 'SUCCESS');
        this.formData.reset();
      }, error => {
        this.SnackBarComponent.show('Error!' , 'ERROR');
      });
  }
}
