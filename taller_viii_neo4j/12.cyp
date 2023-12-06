// Devuelva el nombre y apellido de personas que conozcan más de 10 personas.

MATCH (p:Person)-[:KNOWS]->(f:Person)
WITH p, COUNT(f) as cant
WHERE cant > 10
RETURN p.name, p.surname