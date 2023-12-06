
db.tweets.aggregate([
    {
        $match: {
            $expr: {
                $gt: [{ $size: '$entities.hashtags' }, 3]
            }
        }
    },
    {
        $unwind: '$entities.hashtags'
    },
    {
        $group: {
            _id: '$entities.hashtags',
            min_retweets: { $min: '$retweet_count' },
            max_retweets: { $max: '$retweet_count' },
            avg_retweets: { $avg: '$retweet_count' },
            user_used_hashtag: { $push: '$user.name' }
        }
    },
    {
        $project: {
            _id: false,
            hashtag: '$_id.text',
            min_retweets: true,
            max_retweets: true,
            avg_retweets: true,
            used_hashtags: true
        }
    }
])