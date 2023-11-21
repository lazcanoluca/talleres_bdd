// 2. Hallar aquellos tweets que tengan más de 500000 retweets.
db.getCollection('tweets').find({ retweet_count: { $gt: 500000 } })