class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
    mean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const frequencyMap = new Map();
  
      this.data.forEach((value) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let mode;
      let maxFrequency = 0;
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          mode = value;
        }
      });
  
      return mode;
    }
  
    // Measures of Dispersion
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const meanValue = this.mean();
      const squaredDifferences = this.data.map((value) => Math.pow(value - meanValue, 2));
      const sumSquaredDifferences = squaredDifferences.reduce((acc, value) => acc + value, 0);
      return sumSquaredDifferences / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    interquartileRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const lowerQuartile = this.median(sortedData.slice(0, Math.floor(sortedData.length / 2)));
      const upperQuartile = this.median(sortedData.slice(Math.ceil(sortedData.length / 2)));
  
      return upperQuartile - lowerQuartile;
    }
  
    coefficientOfVariation() {
      return (this.standardDeviation() / this.mean()) * 100;
    }
  }
  
  // Example Usage
  const data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.mean());
  console.log('Median:', stats.median());
  console.log('Mode:', stats.mode());
  console.log('Range:', stats.range());
  console.log('Variance:', stats.variance());
  console.log('Standard Deviation:', stats.standardDeviation());
  console.log('Interquartile Range:', stats.interquartileRange());
  console.log('Coefficient of Variation:', stats.coefficientOfVariation());
  
 