import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface Link {
  href: string
  name: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links: Link[] = [
    {
      href: '',
      name: 'Home'
    },
    {
      href: '/admin',
      name: 'Admin'
    },
    {
      href: '/fans',
      name: 'Fans'
    },
    {
      href: '/contacts',
      name: 'Contacts'
    },
    {
      href: '/news',
      name: 'News'
    },
    {
      href: '/calendar',
      name: 'Calendar'
    }
  ]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
