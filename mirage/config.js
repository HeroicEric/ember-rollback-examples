export default function() {
  this.post('orders');
  this.get('orders');
  this.get('orders/:id');
  this.patch('orders/:id');

  this.post('line-items');
  this.get('line-items');
  this.get('line-items/:id');
  this.patch('line-items/:id');
  this.delete('line-items/:id');

  this.get('products');
  this.get('products/:id');
}
