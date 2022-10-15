import io from "socket.io-client";
import feathers from "@feathersjs/client";
import auth from "@feathersjs/authentication-client";

const socket = io("http://localhost:3030");

const client = feathers()
  .configure(feathers.socketio(socket))
  .configure(
    feathers.authentication({
      storage: window.localStorage,
    })
  );

export default client;
