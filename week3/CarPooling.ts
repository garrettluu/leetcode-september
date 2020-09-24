function carPooling(trips: number[][], capacity: number): boolean {
  let ans: boolean = true;
  let space: number = capacity;
  let locations: Set<number> = new Set();
  // location-numPassenger pairs
  let dropoffs: {[key: number]: number} = {};

  trips.sort((t1, t2) => {
    if (t1[1] != t2[1]) {
      return t1[1] < t2[1] ? -1 : 1;
    }
    if (t1[2] != t2[2]) {
      return t1[2] < t2[2] ? -1 : 1;
    }
    return 0;
  });

  trips.forEach((t) => {
    locations.add(t[1]);
    locations.add(t[2]);
  });


  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];
    const passengers: number = trip[0];
    const start: number = trip[1];
    const end: number = trip[2];

    console.log("start: ", start);

    // drop off any passengers as needed
    if (dropoffs[start]) {
      console.log("space before: ", space);
      console.log("dropoffs[start]: ", dropoffs[start]);
      space += dropoffs[start];
      console.log("space after: ", space);
    }

    console.log(dropoffs);
    console.log("space: ", space);

    // if no space, we fucked up
    if (space < passengers) {
      return false;
    }


    // remember where passengers need to be dropped off
    dropoffs[end] = dropoffs[end] ? dropoffs[end] + passengers : passengers;
    space -= passengers;
  }
  return true;
}
