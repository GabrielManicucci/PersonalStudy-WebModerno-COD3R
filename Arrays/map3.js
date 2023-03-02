const cart = [
  '{"name": "lapis", "price": 2.90}',
  '{"name": "caderno", "price": 22.90}',
  '{"name": "borracha", "price": 1.90}',
  '{"name": "caneta", "price": 3.90}',
]

// Retornar um array apenas com os preços 

const forObject = json => JSON.parse(json)
const onlyPrice = product => product.price
const forString = price => parseFloat(price).toFixed(2).replace('.',',')

const newArrayOnlyWithPrices = cart.map(forObject).map(onlyPrice).map(forString)

console.log( cart.map(forObject).map(onlyPrice))

