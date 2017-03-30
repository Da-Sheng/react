toplevel:
    todoList[],
    filter: all | done | undo 

todoList: [item]
    item: {
        content: string
        status: 'done' | 'undo',
        createTime,
        updateTime,
        ?selected: bool
    }

operations:

add,
delete,
deleteAll,
filter,
toggleStatus,
