// Muestre la marca y modelos de los vehículos de año 2013.

MATCH (v:Vehicle)
WHERE v.year = '2013'
RETURN v.make, v.model