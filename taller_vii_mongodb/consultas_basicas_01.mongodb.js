// 1. Hallar los tweets del usuario con userid ‘818839458’.

db.getCollection('tweets').find({ user_id: '818839458' })