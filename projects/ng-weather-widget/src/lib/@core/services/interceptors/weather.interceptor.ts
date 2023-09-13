import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { Forcast } from '../../interfaces/forecast.interface';
import { Cache_ } from '../../interfaces/cache.interface';
import { WeatherService } from '../weather.api.service';
@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
  constructor(private weatherService: WeatherService) {}
  private BUFFER_SIZE: number = 10;
  private cacheExpirationTime: number = 3 * 3600 * 1000;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> | any {
    const url = req.url.split('?')[0];
    const cachedData = sessionStorage.getItem(url);
    if (cachedData) {
      const toJson: Cache_ = JSON.parse(cachedData);
      if (this.isCacheExpired(toJson)) {
        sessionStorage.removeItem(url);
      } else {
        const cachedResponse = new HttpResponse({
          body: toJson.cache,
          status: 200,
          statusText: 'ok',
          url: req.url,
        });

        return of(cachedResponse);
      }
    }
    const appid = this.weatherService.appid;
    const parameters = req.clone().params.append('appid', appid);
    const modifedReq = req.clone({
      params: parameters,
    });
    return next.handle(modifedReq).pipe(
      catchError(this.errorHandler),
      tap((item) => {
        if (item instanceof HttpResponse) {
          this.addToCache(item, url);
        }
      })
    );
  }

  isCacheExpired(cachedData: Cache_): boolean {
    const currentTimestamp = new Date().getTime();
    const cachedTimestamp = new Date(cachedData.cachedAt).getTime();
    if (currentTimestamp - cachedTimestamp > this.cacheExpirationTime) {
      return true;
    }
    return false;
  }

  addToCache(item: HttpResponse<Forcast>, url: string) {
    if (sessionStorage.length <= this.BUFFER_SIZE)
      sessionStorage.setItem(
        url,
        JSON.stringify({ cache: item.body, cachedAt: new Date() })
      );
    else sessionStorage.clear();
  }

  errorHandler(err: HttpErrorResponse) {
    //err.error = {cod, message}
    return throwError(() => {
      let message: string = 'Unkown error';
      if (!err.error) throw new Error(message);
      switch (err.error.cod) {
        case 401: {
          message = 'unauthorized to make this request';
          break;
        }
        case 404: {
          message = 'requested resource was not found';
          break;
        }
        case 429: {
          message = err.error.message;
          break;
        }
        default:
          message = 'internal server error';
          break;
      }

      throw new Error(message);
    });
  }
}
