// 3. Encontrar a los 5 usuarios más mencionados.
// (array de entities.user_mentions)

db.tweets.aggregate([
    {
        $unwind: '$entities.user_mentions'
    },
    {
        $group: {
            _id: '$entities.user_mentions.screen_name',
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 5
    },
])

