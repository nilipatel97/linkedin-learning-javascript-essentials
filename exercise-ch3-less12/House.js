class House {
    constructor(houseName, address, year, cost, area, bedrooms, bathrooms, tax){
        this.houseName = houseName;
        this.address = address;
        this.year = year;
        this.cost = cost;
        this.area = area;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.tax = tax;
    }

    setCost(newCost){
        this.cost = newCost;
    }

    setTax(newTax){
        this.tax = newTax;
    }

    enthustiasticPitch(){
        const enthusiasticPitch = 
        (`Welcome to the ${this.houseName}, located at ${this.address}. This beautiful ${this.bedrooms} bedroom, ${this.bathrooms} bathroom home was built in ${this.year}. The cost of the ${this.area} square foot property is $${this.cost}, and the average yearly property tax is $${this.tax}.` );
        return(enthusiasticPitch)
    }
}

export default House;