db.orders.insertMany([
  {
      _id: 1,
      item: "almonds",
      price: 12,
      quantity: 2
    },
    {
      _id: 2,
      item: "pecans",
      price: 20,
      quantity: 1
    },
    {
      _id: 3
    }
]);

db.inventory.insertMany([
{
      _id: 1,
      sku: "almonds",
      description: "product 1",
      instock: 120
    },
    {
      _id: 2,
      sku: "bread",
      description: "product 2",
      instock: 80
    },
    {
      _id: 3,
      sku: "cashews",
      description: "product 3",
      instock: 60
    },
    {
      _id: 4,
      sku: "pecans",
      description: "product 4",
      instock: 70
    },
    {
      _id: 5,
      sku: null,
      description: "Incomplete"
    }
]);

// reading your document
db.orders.find()
db.inventory.find()


// findOne -> will return you a single object
db.inventory.findOne()

// to apply conditions in searching documents in mongo you need to specify
// it inside the argument of the find function
db.orders.find({item:"almonds"})
db.orders.findOne({_id:2})


// Greater than -> $gt

// db.orders.find({
//   price : {$gt : 10}
// })

// Greater than or equal -> $gte

// db.orders.find({
//   price : {$gte : 10}
// })

// less than -> $lt

// db.orders.find({
//   price : {$lt : 20}
// })

// less than -> $lte

// db.orders.find({
//   price : {
//     $lte : 20
//   }
// })

// equal to -> $eq

// db.inventory.find({
//   instock : {
//     $eq : 80
//   }
// })

// not equal to -> $ne

// db.inventory.find({
//   instock : {
//     $ne : 80
//   }
// })

// matches value in array -> $in

// db.inventory.find({
//   sku : {
//     $in : ['almonds','bread']
//   }
// })

// does not match value in array -> $nin

// db.inventory.find({
//   sku : {
//     $nin : ['almonds','bread']
//   }
// })

// db.orders.find({
//   price : {
//     $gte : 12 , $lte : 30
//   }
// })

// db.orders.find({
//   price : {
//     $gte : 10 
//   },
//   quantity : {
//     $gte : 1
//   }
// })

// db.orders.find({
//   $or : [
//     {item : "almonds"},
//     {item : "pecans"}
//   ]
// })



// Projection 

// Controllling which fields are to be returned 
// 1 -> includes fields
// 0 -> excludes fields 
// _id -> it is returned by default unless its specified in the projection

// db.inventory.find(
//   {},
//   {
//     _id : 0,
//     description : 1,
//     instock : 1
//   }
// )

// Sorting 

// Ascending order 

// db.inventory.find().sort({
//   instock : 1
// })

// Descending order

// db.inventory.find().sort({
//   instock : -1
// })

//  finding the costliest product 

// db.orders.find({}).sort({
//     price : -1
// }).limit(1)

// //  finding the 2nd costliest product 

//  db.orders.find({}).sort({
//     price : -1
// }).skip(1).limit(1)


// Pagination


// if we have to show limited amount of the items in the page we do not need to fetch all the data
// we only need those data that need to be shown
// const page = 1;
// const pageSize = 2;
// db.orders.find({}).sort({_id : 1}).skip((page - 1)*pageSize).limit(pageSize)


// missing fields 

// if you search for null value it will give the missing fields also
// db.inventory.find({
//     sku : null
// })

// correct way to search for null values in mongo
// here 10 is the bson value for null

// db.inventory.find({
//     sku : {
//         $type : 10
//     }
// })

// Exists

// find all the records where sku exists

// db.inventory.find({
//     sku : {
//         $exists : true
//     }
// })