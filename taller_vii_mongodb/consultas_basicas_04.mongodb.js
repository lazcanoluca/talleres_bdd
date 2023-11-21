// 4. Hallar los usuarios que tengan tweets con 200000 o más retweets y sean en idioma español.

db.getCollection('tweets').find(
    {
        $and: [
            { retweet_count: { $lte: 200000 } },
            { lang: 'es' }
        ]
    },
    {
        "user.name": 1
    }
)