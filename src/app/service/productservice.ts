import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../model/product';

@Injectable()
export class ProductService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    productNames: string[] = [
        'Bamboo Watch', 
        'Black Watch', 
        'Blue Band', 
        'Blue T-Shirt', 
        'Bracelet', 
        'Brown Purse', 
        'Chakra Bracelet',
        'Galaxy Earrings',
        'Game Controller',
        'Gaming Set',
        'Gold Phone Case',
        'Green Earbuds',
        'Green T-Shirt',
        'Grey T-Shirt',
        'Headphones',
        'Light Green T-Shirt',
        'Lime Band',
        'Mini Speakers',
        'Painted Phone Case',
        'Pink Band',
        'Pink Purse',
        'Purple Band',
        'Purple Gemstone Necklace',
        'Purple T-Shirt',
        'Shoes',
        'Sneakers',
        'Teal T-Shirt',
        'Yellow Earbuds',
        'Yoga Mat',
        'Yoga Set',
    ];

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/products-small.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProducts() {
        return this.http.get<any>('assets/products.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/products-orders-small.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProds(): Observable<any> {
        return this.http.get<any>('assets/products-orders-small.json');
    }

    generateProduct(): Product {
        const product: Product =  {
            id: this.generateId(),
            code: this.generateId(),
            name: this.generateName(),
            description:'Product Description',
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category:'Product Category',
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating(),
            orders: [
                {
                    id:1000,
                    productCode:'cm230f032',
                    date:'2020-06-24',
                    amount: 299,
                    quantity: 1,
                    customer: 'Kadeem Mujtaba',
                    status: 'PENDING'
                },
                {
                    id: 10001,
                    productCode:'cm230f032',
                    date:'2020-05-11',
                    amount: 299,
                    quantity: 1,
                    customer:'Ashley Wickens',
                    status:'DELIVERED'
                },
                {
                    id:10002,
                    productCode:'cm230f032',
                    date:'2019-02-07',
                    amount: 299,
                    quantity: 1,
                    customer:'Julie Johnson',
                    status:'DELIVERED'
                },
                {
                    id:10003,
                    productCode:'cm230f032',
                    date:'2020-04-26',
                    amount: 299,
                    quantity: 1,
                    customer:'Tony Costa',
                    status:'CANCELLED'
                }
            ]
        };

        product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+'.jpg';;
        return product;
    }

    generateId() {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    }

    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299)+1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75)+1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5)+1);
    }
}