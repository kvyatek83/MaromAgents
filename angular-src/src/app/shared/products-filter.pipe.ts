import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './product';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {
  transform(items: Product[], filter: Product): Product[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Product) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Book} book The book to compare to the filter.
   * @param {Book} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(product: any, filter: Product): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if ((product.name).toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (product.name !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
