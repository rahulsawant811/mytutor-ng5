import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  onSubmit(val: any){
    const {uname, email, phone, message} = val;

    // console.log(uname);

    this.mailService.sendMail
                    .subscribe(res => console.log(res));
  }

}
