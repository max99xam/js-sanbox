db.sales.insertMany([
  { "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("2"), "date" : ISODate("2014-03-01T08:00:00Z") },
  { "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : NumberInt("1"), "date" : ISODate("2014-03-01T09:00:00Z") },
  { "_id" : 3, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" : NumberInt( "10"), "date" : ISODate("2014-03-15T09:00:00Z") },
  { "_id" : 4, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" :  NumberInt("20") , "date" : ISODate("2014-04-04T11:21:39.736Z") },
  { "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("10") , "date" : ISODate("2014-04-04T21:23:13.331Z") },
  { "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("5" ) , "date" : ISODate("2015-06-04T05:08:13Z") },
  { "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("10") , "date" : ISODate("2015-09-10T08:43:00Z") },
  { "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("5" ) , "date" : ISODate("2016-02-06T20:20:13Z") },
])

db.sales.aggregate([
  {
    $group: {
        // _id: <expression>, // Group key
        // Required. The _id expression specifies the group key.
        // If you specify an _id value of null, or any other constant value,
        // the $group stage returns a single document that aggregates values
        // across all of the input documents.
       _id: null,
        // Optional. Computed using the accumulator operators.
       count: { $count: { } }
    }
  }
])
// Output:
// [ { _id: null, count: 8 } ]


db.sales.aggregate([
  {
    $group: {
      _id: "$item"
    }
  }
])
// Output (distinct items):
// { "_id" : "abc" }
// { "_id" : "jkl" }
// { "_id" : "def" }
// { "_id" : "xyz" }