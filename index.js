
// const logDriverNames = arrayOfDrivers.forEach(callback);
function callback (ele) {
    console.log(ele.name);
};

// function logDriverNames(drivers) {
//   drivers.forEach(callback)
// }

const logDriverNames = function(drivers) {
    drivers.forEach(callback);
}

// function newCallback (ele) {
//   if( ele.hometown === location) {
//
//     console.log(ele.name);
//
//   };
// };

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(driver){
      if (driver.hometown === location){
        console.log(driver.name);
      };
    });

};
const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
