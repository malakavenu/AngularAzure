import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthenticationService]
})
export class AppComponent implements OnInit {
    currentUser: User;
    constructor(private router: Router, private authenticationService: AuthenticationService) { 
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {

    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
