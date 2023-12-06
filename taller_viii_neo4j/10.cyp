// Obtenga el modelo, marca y año del auto más viejo de la base.

MATCH (v:Vehicle)
RETURN v.model, v.make, v.year
ORDER BY v.year
LIMIT 1