// 2. Encontrar los 10 hashtags más usados.

db.tweets.aggregate([
    {
        $unwind: '$entities.hashtags'
    },
    {
        $group: {
            _id: '$entities.hashtags.text',
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 10
    }
])