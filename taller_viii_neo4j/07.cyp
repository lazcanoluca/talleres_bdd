// Muestre las personas conocidas de Roger Brooks que no participaron en ningún crimen.

MATCH (rb:Person {name: 'Roger', surname: 'Brooks'})-[:KNOWS]->(p:Person)
WHERE NOT (p)-[:INVOLVED_IN]->(:Crime)
RETURN p