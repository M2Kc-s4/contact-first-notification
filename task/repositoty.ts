import { sql, type Pool } from "@m2k-5f/pgtx";
import type { Task } from "./entity";

export async function saveTask(pool: Pool, task: Task) {
    await pool.execute`insert into tasks ${sql.insert({id: task.id, data: task})}`
}