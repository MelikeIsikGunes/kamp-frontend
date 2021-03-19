import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():"" //filterText varsa texti küçük harfe çevir:yoksa boş kalsın
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase()
    .indexOf(filterText)!==-1):value; //ürün isimlerinde yazdığımız text geçiyor mu diyee filtreliyoruz. Her bir ürün ismini kontrol ediyor, içinde geçmiyorsa -1 olur.(!==-1)-1'den farklı demek varsa demek, varsa onları yeni bir array yapar.
  }

}


//array fonksiyonları: map,filter ...