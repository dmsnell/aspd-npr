# Mock Server Dashboard

Minimal example server in **Node.js** for hosting a persistent, in-memory dashboard for reporting information about running servers.

## Installation

After cloning this repository, run the standard **npm** installation and startup procedure.

```bash
npm install
npm start
```

## Interaction

Once the server is running, you may request data in the browser by accessing the server list.

[/servers/](http://localhost:4000/servers)

You may request additional information about a server at its appropriate URI.

[/servers/45](http://localhost:4000/servers/45)

Further, you may `POST` data to the server at the corresponding address as above. A test server has been provided by running the following command in a separate shell once the server is running.

```bash
npm test
```

Finally, you may remove a server from the state by running a `DELETE` request.

```bash
curl -X DELETE http://localhost:4000/servers/67
```

After running the above tests, reload the list of servers in the browser and the new servers should appear and disappear. This information should be persisted in `state.json`.

## Notes

No client has yet been introduced, but presumably will live in the `/client` directory.
