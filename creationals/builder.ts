/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors";

class Computer {
    public cpu: string = "cpu - not defined";
    public ram: string = "ram - not defined";
    public storage: string = "storage - not defined";
    public gpu?: string;

    displayConfiguration() {
        console.log(`
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Storage: ${this.storage}
            GPU: ${this.gpu ? this.gpu : "gpu - not defined"}
        `);
    }
}

class ComputerBuilder {
    protected computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

function main() {

    console.log("Builder Pattern");

    console.log("%cCreating a Gaming PC:", COLORS.green);
    const gamingPC = new ComputerBuilder()
        .setCPU("Intel Core i9")
        .setRAM("32GB")
        .setStorage("1TB SSD")
        .setGPU("NVIDIA RTX 3080")
        .build();

    gamingPC.displayConfiguration();

    const officePC = new ComputerBuilder()
        .setCPU("Intel Core i5")
        .setRAM("16GB")
        .setStorage("512GB SSD")
        .build();

    officePC.displayConfiguration();
}

main();
