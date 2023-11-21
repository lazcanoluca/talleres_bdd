// 4. Hallar la cantidad de retweets promedio para los tweets
// que se hayan hecho desde Argentina y aquellos que no.

db.tweets.aggregate([
    {
        $group: {
            _id: {
                $cond: {
                    if: { $eq: ['$place.country_code', 'AR'] },
                    then: 'arg',
                    else: 'rest'
                }
            },
            avg_retweets: { $avg: '$retweet_count' }
        }
    }
])