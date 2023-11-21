// 7. Mostrar de los 10 tweets con más retweets,
// su usuario y la cantidad de retweets.

db.tweets
    .find(
        {},
        {
            user: { name: 1 },
            retweet_count: 1
        }
    )
    .sort({ retweet_count: -1 })
    .limit(10);