import chalk from "chalk";
import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const tasks = [];

function displayMenu() {
    console.log(chalk.green.bold("Menu de tareas \n"));
    console.log("1. Agregar tarea: ");
    console.log("2. Mostrar tarea: ");
    console.log("3. Completar tarea: ");
    console.log("0. Para salir \n");
}

function addTask() {
    rl.question("¿Cual es el nombre de la tarea a agregar?", (tarea) => {
        console.log(`La tarea ${tarea} ha sido agregada a la lista`);
        tasks.push(tarea);
        displayMenu();
        choosOption();
    });
}

function showTask() {
    console.log("Lista completa de tareas");
    console.table(tasks);
    displayMenu();
    choosOption();
}

function completeTask() {
    rl.question("¿Cual es el numero de la tarea a completar?", (tarea) => {
        console.log(
            `La tarea ${tarea} ha sido completada y eliminada de la lista`
        );
        tasks.splice(tarea, 1);
        displayMenu();
        choosOption();
    });
}

function choosOption() {
    rl.question("Elige una opción: ", (option) => {
        switch (option) {
            case "1":
                addTask();
                break;
            case "2":
                showTask();
                break;
            case "3":
                completeTask();
                break;
            case "0":
                console.log(chalk.bold.green("FIn del programa."));
                rl.close();
            default:
                break;
        }
    });
}

displayMenu();
choosOption();
