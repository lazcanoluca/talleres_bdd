// Encuentre los oficiales que investigaron los crímenes cometidos en 165 Laurel Street

MATCH (o:Officer)<-[:INVESTIGATED_BY]-(ls:Crime)-[:OCCURRED_AT]->(l:Location)
WHERE l.address = '165 Laurel Street'
RETURN o