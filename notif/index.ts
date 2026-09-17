import { Connection, Pool } from "@m2k-5f/pgtx";
import { env } from "bun";

const conn = await Connection.new({
    port: parseInt(env.PORT!),
    host: env.HOST!,
    password: env.PASSWORD,
    user: env.USER!,
    database: env.DATABASE!
})

conn.listen('events', pl => console.log("Message: \n", pl))

setInterval(() => {}, 1000 * 60 * 60 * 24)
console.log("Notify started")
