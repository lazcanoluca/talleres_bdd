// Muestre el camino más corto de Judith Moore a Richard Green.

MATCH
    (jm:Person {name: 'Judith', surname: 'Moore'}),
    (rg:Person {name: 'Richard', surname: 'Green'}),
    SP = shortestPath((jm)-[*]-(rg))
RETURN SP