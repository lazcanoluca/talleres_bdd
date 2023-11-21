// 5. Por cada usuario obtener una lista de ids de tweets y el largo de la misma.

db.tweets.aggregate([
    {
        $group: {
            _id: '$user.name',
            tweets: { $push: '$_id' },
            count: { $sum: 1 }
        }
    }
])