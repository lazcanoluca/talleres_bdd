// Muestre el grafo de todos que conocen a alguien que conoce a Gordon Craig.

MATCH (p1:Person)-[:KNOWS]-(p2:Person)-[:KNOWS]->(g:Person)
WHERE g.surname = 'Gordon' AND g.name = 'Craig'
RETURN p1, p2, g