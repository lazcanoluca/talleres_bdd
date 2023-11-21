// 6. Mostrar los screen name de
// aquellos usuarios que tengan “Juan” como parte de su nombre.

db.tweets.find(
    {
        'user.name': { $regex: 'Juan' }
    },
    {
        'user.screen_name': 1
    }
)