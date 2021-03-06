import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../_services/index'; 

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
				private authenticationService: AuthenticationService
				) { }

    canActivate() {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}