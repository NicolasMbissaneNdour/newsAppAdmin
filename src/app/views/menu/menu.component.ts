import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    menuList = [
      {
        title:'À la Une',
        icon:'receipt'
      },
      {
        title:'En Direct',
        icon:'live_tv'
      },
      {
        title:'Vidéos',
        icon:'videocam'
      },
      {
        title:'Sport',
        icon:'sports_basketball'
      },
      {
        title:'Société',
        icon:'local_fire_department'
      },
      {
        title:'Politique',
        icon:'flag'
      },
      {
        title:'Economie',
        icon:'equalizer'
      },
      {
        title:'Culture',
        icon:'grade'
      },
      {
        title:'Santé',
        icon:'local_hospital'
      },
      {
        title:'Éducation',
        icon:'school'
      },
      {
        title: 'Environnement',
        icon: 'eco'
      },
      {
        title:'Cuisine',
        icon:'restaurant_menu'
      },
      {
        title:'Technologie',
        icon:'memory'
      },
      {
        title:'Internationale',
        icon:'public'
      }
    ]

  constructor(private breakpointObserver: BreakpointObserver,
              private router:Router) {}

  loadPage(name:string) : void {
    if(name == 'À la Une') {
      this.router.navigate(['']);
    }
    else {
      this.router.navigate(['category/'],{queryParams:{categoryName:name}});
    }
  }

}
