import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/data-fake'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = '';
  @Input()
  contentTitle:string = ''; 
  @Input()
  contentDescription:string  = ''; 

  private id:string | null= '0'
  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>  
      this.id = value.get('id')
    ) 
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() === id)[0];
    
    this.photoCover = result.photoCover;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
