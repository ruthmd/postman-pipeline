// search for Gwendolyn Garcia in name_description array
db.getCollection('products1').find({'name_description.name':'Gwendolyn Garcia'})

// update by objectId which serves as primary key
db.getCollection('products1').updateOne(
    {"_id" : ObjectId("5ee68789e8d55d0ec4535e68"), 'name_description.name':'Kathy Willis'}, 
    {$set: {'name_description.$.description':'meh'}}
    )

// update by 'sku' field which also serves as an priamry key in the current schema
db.getCollection('products1').updateOne(
    {"sku" : "administration", 'name_description.name':'Gwendolyn Garcia'}, 
    {$set: {'name_description.$.description':'I can race you any day'}}
    )