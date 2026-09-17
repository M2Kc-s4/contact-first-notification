## Схема данных

```typescript
type Task = {
    id: string
    title: string
    description: string
    status: "new" | "progress" | "done"
    createdAt: string
}

type CreateTaskRequest = {
    title: string
    description: string
    status: "new" | "progress" | "done"
}
```

## Endpoint 1

Path: **POST @domain/api/tasks**
Body **CreateTaskRequest**
Response **201 Task**


## Формат сообщения

Сообщение между сервисами передаются с помощью Listen/Notify в Postgres. 

Инфраструктура **PostgreSQL Linten/Notify**  
База данных *master*
Канал *events*
Тип данных **Task**