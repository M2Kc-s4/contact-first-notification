import { Pool } from "@m2k-5f/pgtx";
import { env } from "bun";
import Elysia, { t } from "elysia";
import { Task } from "./entity";
import { saveTask } from "./repositoty";
import swagger from "@elysiajs/swagger";

const pool = new Pool({
    port: parseInt(env.PORT!),
    host: env.HOST!,
    password: env.PASSWORD,
    user: env.USER!,
    database: env.DATABASE!
})

const app = new Elysia()
.use(swagger({'provider': 'swagger-ui'}))

app.post('/api/tasks', 
    async ({
        body
    }) => {
        const task = new Task(
            body.title, body.description, body.status
        )

        await saveTask(pool, task)

        return new Response(JSON.stringify(task), {status: 201})
    },
    {
        body: t.Object({
            title: t.String(),
            description: t.String(),
            status: t.Union([t.Literal('new'), t.Literal('progress'), t.Literal('done')] as const)
        })
    }
)

app.listen(8001)