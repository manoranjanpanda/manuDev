import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
    // $('#zoom_01').elevateZoom({
    //   zoomType: "window",
    //   cursor: "crosshair",
    //   zoomWindowFadeIn: 500,
    //   zoomWindowFadeOut: 750
    // }); 

    $("#zoom_04").ezPlus({
      zoomType: "window",
      cursor: "crosshair",
      responsive: true,
      scrollZoom: true,
      showLens: true,
      borderSize: 0,
      });

  }

}
