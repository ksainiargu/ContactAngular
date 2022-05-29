import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  conForm: FormGroup;
  showModal: boolean= false;
  editMode: boolean= false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.conForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      phone: [9193996829, Validators.required],
      rel: ['Myself'],


    })
  }
  onConSubmit(){
    if(this.conForm.valid){
      console.log(this.conForm.value);
    if(this.editMode){}else{}
    }
    
  }

  onAddContact(){
    this.showModal = true;
  }
  onCloseModal(){
    this.showModal = false;
  }

}
