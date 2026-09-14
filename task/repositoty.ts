import { sql, type Pool } from "@m2k-5f/pgtx";
import type { Task } from "./entity";

export async function saveTask(pool: Pool, task: Task) {
    const conn = await pool.acquire()
    return conn.begin(async tx => {
        await tx.execute`insert into tasks ${sql.insert({id: task.id, data: task})}`
        await tx.execute`insert into outbox ${sql.insert({data: task})}`
    })
}