// 1. Mostrar de los 10 tweets con más retweets, su usuario y la cantidad de retweets.
// Ordenar la salida de forma ascendente.

db.tweets.aggregate([
    {
        $sort: { retweet_count: -1 }
    },
    {
        $limit: 10
    },
    {
        $project: {
            _id: false,
            user: { name: true },
            retweet_count: 1
        }
    }
])