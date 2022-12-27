import { Component,NgZone,OnInit } from '@angular/core';
import { GifsService } from './service/gifs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Igif } from './interface/igif';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Gif:any=[];
  gifForm: FormGroup;
  submit=false;
  regexUrlGif: string = '(http(s?):)|([/|.|w|s])*.(?:gif|jpeg|jpg|png)';
  constructor(
    private GifsService: GifsService,
    public fb: FormBuilder,
    private ngZone: NgZone
  ){
    this.gifForm = this.fb.group({
      url: ['']
    });
  }
  ngOnInit(): void {
    this.getGifs();
    this.gifForm = this.fb.group({
      url: ['']
    });
  }
/* OBTENER GIFS */
  getGifs(){
    this.GifsService.getGifs().subscribe((data)=>{
      this.Gif=data;
    })
  }
  /*INSERTAR GIF */
createGif() {
    this.submit = true;
      return this.GifsService.newGif(this.gifForm.value).subscribe({
        complete: () => {
          alert('gif agregado');
        },
        error: (e) => {
          alert(e);
        }
      });
  }
  deleteGif(id:number)
  {

  }
}
