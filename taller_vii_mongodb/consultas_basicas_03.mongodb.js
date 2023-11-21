// 3. Mostrar la cantidad de retweets de los tweets que se hayan hecho desde Argentina o Brasil.
db.getCollection('tweets').find(
    {
        $or: [
            { "user.location": 'Argentina' },
            { "user.location": 'Brasil' }
        ]
    },
    {
        retweet_count: 1
    }
)