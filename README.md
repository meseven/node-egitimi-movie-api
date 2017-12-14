# node-egitimi-movie-api
Node.JS Eğitim Seti - Movie API

# Movie

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movie/getAll | `GET` | Empty | List all movies. |
| /api/movie/ | `POST` | {'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 } | Create a new movie. |
| /api/movie/:driver_id | `GET` | Empty | Get a movie. |
| /api/movie/:driver_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/movie/:driver_id | `DELETE` | Empty | Delete a movie. |
| /api/movie/top10 | `GET` | Empty | Get the top 10 movies. |

# Director

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/director/getAll | `GET` | Empty | List all directors. |
| /api/director/ | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new director. |
| /api/director/:director_id | `GET` | Empty | Get a director. |
| /api/director/:director_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a director with new info. |
| /api/director/:director_id | `DELETE` | Empty | Delete a director. |
| /api/director/best10movie | `GET` | Empty | The director's top 10 films. |
