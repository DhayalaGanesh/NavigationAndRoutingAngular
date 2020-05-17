import { Injectable } from '@angular/core'

@Injectable({
    providedIn:'root'
})
export class LocalLoginService{
    private isLoggedIn: boolean=false;
    /**
     * getIsLoggedIn
     */
    public getIsLoggedIn() {
        return this.isLoggedIn;
    }

    /**
     * SetIsLoggedIn
     */
    public SetIsLoggedIn(booleanValue: boolean) {
        this.isLoggedIn=booleanValue;
    }
}