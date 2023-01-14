import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserAuthService } from "../_services/user-auth.service";

export class AuthInterceptor implements HttpInterceptor {
    constructor(private userAuthService: UserAuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        const token = this.userAuthService.getToken();

        this.addToken(req,token)
    }

    private addToken(request:HttpRequest<any>, token:string){
        return request.clone(
            {
                setHeaders:{
                    Authoriztaion:`Bearer ${token}`
                }
            }
        )
    }

}