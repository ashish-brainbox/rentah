import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  form: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      title:['',Validators.required],
      message:['',Validators.required]
    })
  }

  save(){
    // alert(JSON.stringify(this.form.value))

  }

}
