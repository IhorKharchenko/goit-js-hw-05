 // Write code under this line
class Storage {
constructor(items){
  this.items = items;
}
  getItems(){
  return this.items}
  
  addItem(item){
  this.items.push(item)
  return this.items}
  
  removeItem(item){
  if (this.items.indexOf(item)!==-1){
  this.items.splice(this.items.indexOf(item),1)}
    return this.items}
}  

console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

