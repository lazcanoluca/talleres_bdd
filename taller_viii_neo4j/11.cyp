// ¿A qué distancia se encuentra el auto más viejo de Roger Brooks?

MATCH
    (a:Vehicle),
    (r:Person {name: 'Roger', surname: 'Brooks'}),
    D = shortestPath((a)-[*]-(r))
RETURN length(D)
ORDER BY a.year
LIMIT 1
