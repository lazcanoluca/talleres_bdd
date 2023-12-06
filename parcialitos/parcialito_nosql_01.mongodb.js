// Obtener los ids, cantidad de hashtags y likes para tweets que tengan 50 o m´as likes
// (‘favorite count’) y hayan sido a las 3 de la tarde. Ordenar la salida de forma
// descendente por cantidad de likes.
//     "entities": {
// "hashtags": [],
// "symbols": [],
// "user_mentions": [],
// "urls": [],

db.tweets
    .find(
        {
            favorite_count: { $gte: 50 },
            $expr: {
                $eq: [{ $hour: { $toDate: '$created_at.date' } }, 15],
            }
        },
        {
            favorite_count: true,
            hashtags_count: { $size: '$entities.hashtags' }
        }
    )
    .sort({
        favorite_count: -1
    })