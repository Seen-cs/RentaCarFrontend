import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Toast, ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="http://localhost:8080/api/"
  constructor(private httpClient:HttpClient ,
    private toastr:ToastrModule) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getCarWithBrandDetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number){
    let newPath = this.apiUrl +"cars/getByColorId?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByBrand(brandId:number){
    let newPath = this.apiUrl +"cars/getByBrandId?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
