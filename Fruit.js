function calculateFruitCost(fruit, weightGrams, pricePerKilogram) {
    let weightKilograms = weightGrams / 1000;
    let totalCost = (weightKilograms * pricePerKilogram).toFixed(2);
  
    console.log(`I need $${totalCost} to buy ${weightKilograms.toFixed(2)} kilograms ${fruit}.`);
  }
  
  // Example usage:
  calculateFruitCost('orange', 2500, 1.80);