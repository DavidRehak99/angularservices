import { Component, OnInit, ChangeDetectorRef, linkedSignal } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comicscomponent',
  standalone: false,
  styleUrl: './comicscomponent.css',
  templateUrl: './comicscomponent.html',
})
export class Comicscomponent implements OnInit{

  public arrayComics!: Array<Comic>;


  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceComics){
 


  }
  async ngOnInit(): Promise<void> {
    
    this.arrayComics = await this._service.getComicsAsync();
    this._cdr.detectChanges();
    
    
    
  }
  
}
