import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstantsProvider } from "../app-constants/app-constants";

@Injectable()
export class ProductServiceProvider {

  list: any;

  constructor(public http: Http) {
    this.loadDefaultData();
  }

  getAllProducts() {
    return this.list;
  }

  getAllProductsByOrder(order) {
    var chosenProducts = order.chosenProducts;
    chosenProducts.forEach(item => {
      let product = this.getProductById(item.productId);
      item['name'] = product.name;
      item['imageUrl'] = product.imageUrl;
    });
    return chosenProducts;
  }

  getProductById(id) {
    return this.getDefaultMapData()[id];
  }

  getBasicChosenProducts() {
    var products = [
      {
        "productId": "591a595bc393b90496aa331f",
        "kilogram": 0.9
      },
      {
        "productId": "591a595bc393b90496aab21f",
        "kilogram": 10
      }
    ];
    return products;
  }

  loadDefaultData() {
    this.list = [
      {
        "id": "591a595bc393b90496aa331f",
        "name": "Rau mồng tơi",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-mong-toi.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau muống",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-muong.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau đay",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-day.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau cải bó xôi",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-cai-bo-xoi.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau đậu đũa",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-dau-duoi.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau dền",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-den.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Cà tím",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-ca-tim.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau ngót",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-ngot.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau xà lách",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-xa-lach.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rưa chuột",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-dua-chuot.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Chuối xanh",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-chuoi-xanh.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Chuối chín",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-chuoi-chin.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Rau ngải cứu",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-ngai-cuu.jpg",
        "farmId": "farm-01"
      },
      {
        "id": "591a595bc393b90496aab21f",
        "name": "Cà chua",
        "category": "rau sạch",
        "price": 30,
        "imageUrl": "assets/img/prod-ca-chua.jpg",
        "farmId": "farm-01"
      }
    ];
  }

  getDefaultMapData() {
    let prod1 = this.list[0];
    let prod2 = this.list[1];
    var map = new Object();
    map[prod1.id] = prod1;
    map[prod2.id] = prod2;
    return map;
  }

  getRandomChosenProducts() {
    var products = [
      {
        "productId": "591a595bc393b90496aa331f",
        "kilogram": 0.9
      },
      {
        "productId": "591a595bc393b90496aab21f",
        "kilogram": 12
      }
    ];
    return products;
  }


  loadData() {
    this.http.get(AppConstantsProvider.API_ENDPOINT + '/products')
      .toPromise()
      .then(res => {
        let body = res.json().data;
        this.list = body;
      })
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
