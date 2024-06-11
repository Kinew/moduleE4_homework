function Electrodevices(name) {
    this.voltage = 220;
    this.deviceTurned = false
}
Electrodevices.prototype.deviceSwitch = function(deviceSwitch) {
    if (deviceSwitch === 'on') {
        this.deviceTurned = true;
    } else {
        this.deviceTurned = false;
    }
}
Electrodevices.prototype.energyConsumption = function(time) {
    let сonsumption = this.devicePower * time * 0.01;
    console.log(`Электроприбор ${this.name} за время работы ${time} (час/часов) потратил ${сonsumption} кВт*ч `);
}


function Lamp(name, amperage, luminous) {
    this.name = name;
    this.luminous = luminous;
    this.amperage = amperage;
    this.devicePower = Math.round(this.voltage * amperage)
}
Lamp.prototype = new Electrodevices()
Lamp.prototype.getInfo = function() {
    console.log(`Параметры осветительного прибора ${this.name}`);
    for (const key in this) {
        if (typeof this[key] !== "function") {
            console.log(`${key}: ${this[key]}`);
        }
    }
    console.log('\n');
}

function Computing(name, amperage, size) {
    this.name = name;
    this.size = size + " Дюймов";
    this.amperage = amperage;
    this.devicePower = Math.round(this.voltage * amperage)
}
Computing.prototype = new Electrodevices();
Computing.prototype.getInfo = function() {
    console.log(`Параметры компьютера ${this.name}`);
    for (const key in this) {
        if (typeof this[key] !== "function") {
            console.log(`${key}: ${this[key]}`);
        }
    }
    console.log('\n');
}

const tableLamp = new Lamp('My tableLamp', 0.06, 100); // Имя, ток (в амперах), световой поток (Люмен)
const laptop = new Computing('HP laptop', 0.4, 14); // Имя, ток (в амперах), диагональ экрана

tableLamp.getInfo();
laptop.getInfo();

tableLamp.deviceSwitch('on');
tableLamp.getInfo();

tableLamp.energyConsumption(4);
laptop.energyConsumption(4);
