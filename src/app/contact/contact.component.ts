import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import emailJs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['',  [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(60)
       ]],
    message: ['',[Validators.required, Validators.minLength(2)]],
    email: [' ',[Validators.required,
      Validators.email]]
  });
  isMessageSent = false;
  isFormValid = false;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    gsap.registerPlugin(SplitText);
    let split = SplitText.create('.contact-details p', { type: 'chars' });
    gsap.from(split.chars, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.05,
      repeat: -1,
    });
    
  this.form.statusChanges.subscribe(d=>{
     if(d==='VALID') {
      this.isFormValid = true;
     }
     else {
      this.isFormValid = false;
     }
  })
  }
  async send() {
    emailJs.init('2UdtuqCprHKI6cEfe');
  let response = await  emailJs.send('service_b0xic4r', 'template_rno1cqc', {
      title: 'hello',
      name: this.form.value.name,
      message: this.form.value.message,
      email: this.form.value.email,
    });

    alert('Message has been sent');
    this.form.reset();
    this.isMessageSent = true;
  }
}
