// 5 hashtags más usados en Argentina

db.tweets.aggregate(
    { $match: { "user.location": "Argentina" } },
    { $unwind: "$entities.hashtags" },
    { $group: { _id: "$entities.hashtags.text", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 5 },
    { $project: { hashtag: "$_id" } }
)