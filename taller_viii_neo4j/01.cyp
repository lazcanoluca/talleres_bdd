// Muestre en orden alfabético, los nombres de las primeras 10 personas apellidadas 'Smith'.

MATCH (p:Person)
WHERE p.surname = 'Smith'
RETURN p.name
ORDER BY p.name