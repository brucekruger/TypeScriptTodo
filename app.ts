import { TodoState } from './Model';
import { TodoService } from './TodoService';
import { KeyValuePair, KeyValuePairPrinter } from './KeyValuePairPrinter';

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');

var printer = new KeyValuePairPrinter([ pair1, pair3 ]);
printer.print();

let service = new TodoService([]);

service.add({
    id: 1,
    name: 'Pick up drycleaning',
    state: TodoState.New
});

let todos = service.getAll();

todos.forEach(todo =>
    console.log(`${todo.name} [${TodoState[todo.state]}]`)
);