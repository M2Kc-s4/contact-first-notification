import { randomBytes } from 'node:crypto'


export class Task {
    constructor(
        public title: string,
        public description: string,
        public status: "new" | "progress" | 'done',
        public createdAt = new Date(),
        public id = randomBytes(16).toString('hex')
    ) {}
}