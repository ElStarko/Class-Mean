class MyClass {
    // Class property (static property)
    static classVariable = "I am a static class variable";

    // Constructor with instance variable
    constructor(instanceVariable) {
        this.instanceVariable = instanceVariable;
    }

    // Class method
    static classMethod() {
        // Accessing static class variable within a class method
        console.log(`Class method accessing static class variable: ${MyClass.classVariable}`);
    }

    // Static method
    static staticMethod() {
        // Accessing static class variable within a static method
        console.log(`Static method accessing static class variable: ${MyClass.classVariable}`);
    }
}

// Accessing static class variable without creating an instance
console.log(`Accessing static class variable without instance: ${MyClass.classVariable}`);

// Creating instances of MyClass
const obj1 = new MyClass("Instance 1");
const obj2 = new MyClass("Instance 2");

// Accessing static class variable through instances
console.log(`Accessing static class variable through instance obj1: ${obj1.constructor.classVariable}`);
console.log(`Accessing static class variable through instance obj2: ${obj2.constructor.classVariable}`);

// Calling class method
MyClass.classMethod();

// Calling static method
MyClass.staticMethod();
