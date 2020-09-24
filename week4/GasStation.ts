function canCompleteCircuit(gas: number[], cost: number[]): number {
  for (let i = 0; i < gas.length; i++) {
    let valid: boolean = true;
    let tank: number = 0;
    for (let j = 0; j < gas.length; j++) {
      let s = (j + i) % gas.length;
      tank += gas[s];
      if (tank < cost[s]) {
        valid = false;
        break;
      } else {
        tank -= cost[s];
      }
    }
    if (valid) {
      return i;
    }
  }
  return -1;
};