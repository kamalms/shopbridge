import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string) {
    // if (!items) {
    //   return [];
    // }
    // if (!searchText) {
    //   return items;
    // }
    // searchText = searchText.toLocaleLowerCase();

    // return items.filter(it => {
    //     // console.log('IT', it)

    //     // switch (it) {
    //     //     case it.pname:
    //     //         return it.pname.toLocaleLowerCase().includes(searchText);
    //     //       break;
    //     //     case it.description:
    //     //         return  it.description.toLocaleLowerCase().includes(searchText);
    //     //       break;
    //     //     case it.price:
    //     //        return it.price.toLocaleLowerCase().includes(searchText);
    //     //       break;
            
    //     //   }

    //  return it.pname.toLocaleLowerCase().includes(searchText);
    // });
  }
}