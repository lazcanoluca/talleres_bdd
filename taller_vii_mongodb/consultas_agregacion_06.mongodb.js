// 6. Hallar la máxima cantidad de retweets totales que tuvo algún usuario.

db.tweets.aggregate([
    {
        $group: {
            _id: '$user.name',
            retweets_totales: { $sum: '$retweet_count' }
        }
    },
    {
        $sort: {
            retweets_totales: -1
        }
    },
    {
        $limit: 1
    }
])