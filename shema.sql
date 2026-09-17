create table tasks (
    id text primary key,
    data jsonb not null,
    "createdAt" timestamptz default now()
);

create index tasks_id_i on tasks ((data ->> 'title'));
