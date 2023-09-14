import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  smallCardCover:string ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GL8Mz5XG-_9NZ77L0xQzDdiYIBqXgfOUM4pJUnKWww&s';
  @Input()
  smallCardTitle:string ='fsafsdf sjdiofaihfs fhasfhasio';
  constructor() { }

  ngOnInit(): void {
  }

}
