import { useEffect } from "react";

const useAuthenticate = (client, onAuthenticated, onFailure) => {
  useEffect(() => {
    client.reAuthenticate().then(onAuthenticated).catch(onFailure);
  }, []);
};

export default useAuthenticate;
