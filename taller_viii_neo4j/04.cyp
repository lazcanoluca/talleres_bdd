// Muestre el grafo de las locations en el área M30. Cuantos nodos hay?

MATCH (l:Location)-[:LOCATION_IN_AREA]-(a:Area)
WHERE a.areaCode = 'M30'
RETURN COUNT(l)