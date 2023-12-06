// Muestre las personas que están a distancia 3 de Gordon Craig.

MATCH (p1:Person)-[*3]-(g:Person)
WHERE g.surname = 'Gordon' AND g.name = 'Graig'
RETURN DISTINCT p1, g
