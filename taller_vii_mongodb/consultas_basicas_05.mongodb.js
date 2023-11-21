// 5. Mostrar la cantidad de retweets para los tweets que no se
// hayan hecho en Argentina ni Brasil, pero sí tengan un lugar
// definido y sean en español.

db.getCollection('tweets').find(
    {
        $and: [
            { 'user.location': { $ne: 'Brasil' } },
            { 'user.location': { $ne: 'Argentina' } },
            { 'user.location': { $exists: true } },
            { 'lang': { $eq: 'es' } }
        ]
    },
    {
        retweet_count: 1
    }
)