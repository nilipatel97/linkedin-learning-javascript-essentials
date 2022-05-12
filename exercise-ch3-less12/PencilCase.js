/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
 
 class PencilCase {
    constructor(name, owner, length, width, height, color, fabric, isWaterproof){
        this.name = name;
        this.owner = owner;
        this.length = length;
        this.width = width;
        this.height = height;
        this.color = color;
        this.fabric = fabric;
        this.isWaterproof = isWaterproof;
    }

    // when they call this function, they need to pass one value into the function call. 
    // we will then use that value that they passed to manipulate a property of this object.
    setName(newName) {
        this.name = newName;
    }

    setOwner(newOwner) {
        this.owner = newOwner;
    }

    setLength(newLength) {
        this.length = newLength;
    }

    setWidth(newWidth){
        this.width = newWidth;
    }

    setHeight(newHeight){
        this.height = newHeight;
    }

    calculateVolume(){
        const volume = this.width * this.length * this.height;
        return volume;
    }


}

export default PencilCase;