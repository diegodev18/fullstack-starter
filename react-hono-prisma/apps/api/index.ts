import { serve } from "bun";

import app from "@/app";
import { ORIGIN, PORT } from "@/config";

serve({
    fetch: app.fetch,
    hostname: "0.0.0.0",
    port: PORT,
});

console.log(`Server running on ${ORIGIN}`);

