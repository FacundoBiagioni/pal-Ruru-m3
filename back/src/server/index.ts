import { PORT, HOST, PROTO } from "../config";
import server from "./server";

export  async function serverInitializer() {
    server.listen(Number(PORT) , HOST, () => {
        console.log(`Server listening on ${PROTO}: //${HOST}:${PORT}`);
    });
}   