class Electrodevices {
    constructor(name) {
        this.name = name;
        this.voltage = 220;
        this.deviceTurned = false;
    }
    deviceSwitch(deviceSwitch) {
        if (deviceSwitch === 'on') {
            this.deviceTurned = true;
        } else {
            this.deviceTurned = false;
        }
    }
    energyConsumption(time) {
        let сonsumption = this.devicePower * time * 0.01;
        console.log(`Электроприбор ${this.name} за время работы ${time} (час/часов) потратил ${сonsumption} кВт*ч `);
    }
}

class Lamp extends Electrodevices {
    constructor(name, amperage, luminous, voltage, deviceTurned) {
        super(voltage);
        super(deviceTurned);
        this.name = name;
        this.luminous = luminous;
        this.amperage = amperage;
        this.devicePower = Math.round(this.voltage * amperage);
    }
    getInfo() {
        console.log(`Параметры осветительного прибора ${this.name}`);
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
            }
        }
        console.log('\n');
    }

}

class Computing extends Electrodevices {
    constructor(name, amperage, size, voltage, deviceTurned) {
        super(voltage);
        super(deviceTurned);
        this.name = name;
        this.size = size + " Дюймов";
        this.amperage = amperage;
        this.devicePower = Math.round(this.voltage * amperage);
    }
    getInfo() {
        console.log(`Параметры компьютера ${this.name}`);
        for (const key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
            }
        }
        console.log('\n');
    }
}

const tableLamp = new Lamp('My tableLamp', 0.06, 100); // Имя, ток (в амперах), световой поток (Люмен)
const laptop = new Computing('HP laptop', 0.4, 14); // Имя, ток (в амперах), диагональ экрана

tableLamp.getInfo();

tableLamp.deviceSwitch('on');
tableLamp.getInfo();

tableLamp.energyConsumption(4);
laptop.energyConsumption(4);
