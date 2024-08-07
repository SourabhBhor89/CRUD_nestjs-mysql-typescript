import { Todo } from "./todos.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dtos/create-todo.dto";
export declare class TodosService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    create(dto: CreateTodoDto): Promise<Todo>;
    findMany(): Promise<Todo[]>;
    update(id: number, dto: CreateTodoDto): Promise<Todo>;
    delete(id: number): Promise<Todo>;
}
