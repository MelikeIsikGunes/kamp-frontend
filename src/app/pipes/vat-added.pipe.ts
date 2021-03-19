import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}
//value değeri bizim pipe'ımızın değiştirmek istediği değer:Örn unitPrice
//rate ->ilk parametre. başka parametre eklemek için , x:number
//:number döndürmek istenilen tip

//pipe, elimizdeki veriyi görsel olarak daha farklı şekilde göstermek için kullanılır.
