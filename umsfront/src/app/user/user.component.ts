import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService){}

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe((response)=>{
      console.log(response)
    })
    
  }

}
