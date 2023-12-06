// Muestre el nombre, apellido y rango de los oficiales cuyos apellidos comiencen con 'Mc', ordenados por rango (rank).

MATCH (o:Officer)
WHERE o.surname STARTS WITH 'Mc'
RETURN o.surname, o.name, o.rank
ORDER BY o.rank