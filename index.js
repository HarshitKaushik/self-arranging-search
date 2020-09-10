const chalk = require('chalk');
const readLineSync = require('readline-sync');

const masterDataUniqueRelationships = [
  {
    name: 'Shalini Gupta',
    location: 'PopulatedArea',
    designation: 'Software Engineer',
    department: 'IT Team',
    employeeBand: 'Girl',
    city: 'Aligarh',
    country: 'India',
    group: 'CTO',
    legalEntity: 'Company India'
  },
  {
    name: 'Prashant Bajpai',
    location: 'BackwardArea',
    designation: 'Senior Software Engineer',
    department: 'IT Team',
    employeeBand: 'BoySenior',
    city: 'Kanpur',
    country: 'India',
    group: 'CTO',
    legalEntity: 'Company Australia'
  },
  {
    name: 'Harshit Kaushik',
    location: 'BackwardArea',
    designation: 'Software Engineer',
    department: 'IT Team',
    employeeBand: 'Boy',
    city: 'Ghaziabad',
    country: 'United States',
    group: 'CEO',
    legalEntity: 'Company UK'
  },
  {
    name: 'Kamini Singh',
    location: 'PopulatedArea',
    designation: 'Senior Software Engineer',
    department: 'IT Team',
    employeeBand: 'GirlSenior',
    city: 'Aligarh',
    country: 'India',
    group: 'CEO',
    legalEntity: 'Company India'
  },
  {
    name: 'Deepa Kakwani',
    location: 'MetroArea',
    designation: 'Specialist',
    department: 'Client Success',
    employeeBand: 'Girl',
    city: 'New York',
    country: 'United States',
    group: 'Client Success',
    legalEntity: 'Company United States'
  },
  {
    name: 'Anshul Goyal',
    location: 'PopulatedArea',
    designation: 'Assoiate Software Engineer',
    department: 'IT Team',
    employeeBand: 'BoyJunior',
    city: 'Agra',
    country: 'India',
    group: 'CTO',
    legalEntity: 'Company UK'
  },
  {
    name: 'Mohit Sharma',
    location: 'CleanArea',
    designation: 'Software Engineer',
    department: 'IT Team',
    employeeBand: 'Boy',
    city: 'Indore',
    country: 'United Kingdom',
    group: 'Client Success',
    legalEntity: 'Company United States'
  },
  {
    name: 'Maria Quadros',
    location: 'PopulatedArea',
    designation: 'Senior Specialist',
    department: 'IT Team',
    employeeBand: 'GirlSenior',
    city: 'Aligarh',
    country: 'India',
    group: 'Customer Success',
    legalEntity: 'Company India'
  },
  {
    name: 'Rajeev Gupta',
    location: 'PopulatedArea',
    designation: 'Software Engineer',
    department: 'IT Team',
    employeeBand: 'Boy',
    city: 'Kanpur',
    country: 'Australia',
    group: 'CTO',
    legalEntity: 'Company Australia'
  },
  {
    name: 'Rhea Chakarborty',
    location: 'PopulatedArea',
    designation: 'Sales Specialist',
    department: 'Sales',
    employeeBand: 'Girl',
    city: 'Pune',
    country: 'India',
    group: 'Sales',
    legalEntity: 'Company India'
  },
  {
    name: 'Shashin Gupta',
    location: 'CleanArea',
    designation: 'Senior Sales Specialist',
    department: 'IT Team',
    employeeBand: 'BoySenior',
    city: 'Bangalore',
    country: 'Australia',
    group: 'Sales',
    legalEntity: 'Company Australia'
  }
];

console.log(chalk.green('Wait. Lemme initialize.'));
const uniqueLocations = [...new Set(masterDataUniqueRelationships.map(item => item.location))];
// console.log(uniqueLocations);
const uniqueDesignations = [...new Set(masterDataUniqueRelationships.map(item => item.designation))];
// console.log(uniqueDesignations);
const uniqueDepartments = [...new Set(masterDataUniqueRelationships.map(item => item.department))];
// console.log(uniqueDepartments);
const uniqueEmployeeBands = [...new Set(masterDataUniqueRelationships.map(item => item.employeeBand))];
// console.log(uniqueEmployeeBands);
const uniqueCities = [...new Set(masterDataUniqueRelationships.map(item => item.city))];
// console.log(uniqueCities);
const uniqueCountries = [...new Set(masterDataUniqueRelationships.map(item => item.country))];
// console.log(uniqueCountries);
const uniqueGroups = [...new Set(masterDataUniqueRelationships.map(item => item.group))];
// console.log(uniqueGroups);
const uniqueLegalEntities = [...new Set(masterDataUniqueRelationships.map(item => item.legalEntity))];
// console.log(uniqueLegalEntities);

function printFilters() {
  console.log(chalk.blue('The filters right now are given below:'));
  console.log(chalk.red('Locations:'));
  uniqueLocations.forEach((value, index) => console.log(index + '. ' + value));
  console.log(chalk.red('Designations:'));
  uniqueDesignations.forEach((value, index) => console.log(index + '. ' + value));
  console.log(chalk.red('Departments:'));
  uniqueDepartments.forEach((value, index) => console.log(index + '. ' + value));
  console.log(chalk.red('Employee Bands:'));
  uniqueEmployeeBands.forEach((value, index) => console.log(index + '. ' + value));
  console.log(chalk.red('Cities:'));
  uniqueCities.forEach((value, index) => console.log(index + '. ' + value));
  console.log(chalk.red('Countries:'));
  uniqueCountries.forEach((value, index) => console.log(index + '. ' + value));
  console.log(chalk.red('Groups:'));
  uniqueGroups.forEach((value, index) => console.log(index + '. ' + value));
  console.log(chalk.red('Legal Entities:'));
  uniqueLegalEntities.forEach((value, index) => console.log(index + '. ' + value));
}

printFilters();

const selectedValues = {
  locations: [],
  designations: [],
  departments: [],
  employeeBands: [],
  cities: [],
  countries: [],
  groups: [],
  legalEntities: []
};

function selectEvent() {
  const eventList = [1,2];
  console.log(chalk.green('You can consume two events - 1. select() and 2. unselect().'));
  const chosenEvent = readLineSync.keyInSelect(eventList, 'What is your choice?');
  console.log(chalk.green('You have chosen ' + eventList[chosenEvent]));

  switch(eventList[chosenEvent]) {
    case 1:
      selectValue();
      break;
    case 2:
      unselectValue();
      break;
  }
}


function selectValue() {
  const userFieldChoiceList = [1,2,3,4,5,6,7,8];
  console.log(chalk.yellow('You can select values in 1. locations, 2. designations, 3. departments, 4. employee bands, 5. cities, 6. countries, 7. groups, 8. legal entities'));
  const chosenUserField = readLineSync.keyInSelect(userFieldChoiceList, 'What is your choice?');
  console.log(chalk.green('You have chosen ' + userFieldChoiceList[chosenUserField]));
  const userFieldValuesIndexList = [];

  switch(userFieldChoiceList[chosenUserField]) {
    case 1:
      uniqueLocations.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 2:
      uniqueDesignations.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 3:
      uniqueDepartments.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 4:
      uniqueEmployeeBands.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 5:
      uniqueCities.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 6:
      uniqueCountries.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 7:
      uniqueGroups.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 8:
      uniqueLegalEntities.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
  }

  const chosenIndex = readLineSync.keyInSelect(userFieldValuesIndexList, 'What is your choice?');
  console.log(chalk.green('You have chosen ' + userFieldValuesIndexList[chosenIndex]));

  switch(userFieldChoiceList[chosenUserField]) {
    case 1:
      // location
      if (selectedValues.locations.includes(uniqueLocations[chosenIndex])) {
        console.log(chalk.red('You have selected already selected location: ' + uniqueLocations[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.locations.push(uniqueLocations[chosenIndex]);
      }
      break;
    case 2:
      // designation
      if (selectedValues.designations.includes(uniqueDesignations[chosenIndex])) {
        console.log(chalk.red('You have selected already selected designation: ' + uniqueDesignations[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.designations.push(uniqueDesignations[chosenIndex]);
      }
      break;
    case 3:
      // department
      if (selectedValues.departments.includes(uniqueDepartments[chosenIndex])) {
        console.log(chalk.red('You have selected already selected department: ' + uniqueDepartments[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.departments.push(uniqueDepartments[chosenIndex]);
      }
      break;
    case 4:
      // employee band
      if (selectedValues.employeeBands.includes(employeeBands[chosenIndex])) {
        console.log(chalk.red('You have selected already selected employee band: ' + uniqueEmployeeBands[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.employeeBands.push(uniqueEmployeeBands[chosenIndex]);
      }
      break;
    case 5:
      // city
      if (selectedValues.cities.includes(uniqueCities[chosenIndex])) {
        console.log(chalk.red('You have selected already selected city: ' + uniqueCities[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.cities.push(uniqueCities[chosenIndex]);
      }
      break;
    case 6:
      // country
      if (selectedValues.countries.includes(uniqueCountries[chosenIndex])) {
        console.log(chalk.red('You have selected already selected country: ' + uniqueCountries[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.countries.push(uniqueCountries[chosenIndex]);
      }
      break;
    case 7:
      // group
      if (selectedValues.groups.includes(uniqueGroups[chosenIndex])) {
        console.log(chalk.red('You have selected already selected group: ' + uniqueGroups[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.groups.push(uniqueGroups[chosenIndex]);
      }
      break;
    case 8:
      // legal entity
      if (selectedValues.legalEntities.includes(uniqueLegalEntities[chosenIndex])) {
        console.log(chalk.red('You have selected already selected legal entity: ' + uniqueLegalEntities[chosenIndex]));
        process.exit(1);
      } else {
        selectedValues.legalEntities.push(uniqueLegalEntities[chosenIndex]);
      }
      break;
  };

  console.log(chalk.blue('Selected Values are below.'));
  Object.entries(selectedValues).forEach(([key, value]) => {
    console.log(chalk.yellow(key + ':'));
    value.forEach((value, index) => console.log(index + '. ' + value));
  });

  printFilteredMasterData();
}

function unselectValue() {
  const userFieldChoiceList = [1,2,3,4,5,6,7,8];
  console.log(chalk.yellow('You can unselect values in 1. locations, 2. designations, 3. departments, 4. employee bands, 5. cities, 6. countries, 7. groups, 8. legal entities'));
  const chosenUserField = readLineSync.keyInSelect(userFieldChoiceList, 'What is your choice?');
  console.log(chalk.green('You have chosen ' + userFieldChoiceList[chosenUserField]));
  const userFieldValuesIndexList = [];
  let chosenFieldKey;

  switch(userFieldChoiceList[chosenUserField]) {
    case 1:
      chosenFieldKey = 'locations';
      selectedValues.locations.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 2:
      chosenFieldKey = 'designations';
      selectedValues.designations.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 3:
      chosenFieldKey = 'departments';
      selectedValues.departments.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 4:
      chosenFieldKey = 'employeeBands';
      selectedValues.employeeBands.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 5:
      chosenFieldKey = 'cities';
      selectedValues.cities.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 6:
      chosenFieldKey = 'countries';
      selectedValues.countries.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 7:
      chosenFieldKey = 'groups';
      selectedValues.groups.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
    case 8:
      chosenFieldKey = 'legalEntities';
      selectedValues.legalEntities.forEach((value, index) => userFieldValuesIndexList.push(index));
      break;
  }

  const chosenIndex = readLineSync.keyInSelect(userFieldValuesIndexList, 'What is your choice?');
  console.log(chalk.green('You have chosen ' + userFieldValuesIndexList[chosenIndex]));
  if (selectedValues[chosenFieldKey].length > userFieldValuesIndexList[chosenIndex]) {
    selectedValues[chosenFieldKey].splice(userFieldValuesIndexList[chosenIndex], 1);
  }

  console.log(chalk.blue('Selected Values are below.'));
  Object.entries(selectedValues).forEach(([key, value]) => {
    console.log(chalk.yellow(key + ':'));
    value.forEach((value, index) => console.log(index + '. ' + value));
  });

  printFilteredMasterData();
}

function printFilteredMasterData() {
  const filteredMasterData = masterDataUniqueRelationships.filter((data) => {
    let includeData = true;
    if ((selectedValues.locations.length > 0 && !selectedValues.locations.includes(data.location))
      || (selectedValues.designations.length > 0 && !selectedValues.designations.includes(data.designation))
      || (selectedValues.departments.length > 0 && !selectedValues.departments.includes(data.department))
      || (selectedValues.employeeBands.length > 0 && !selectedValues.employeeBands.includes(data.employeeBand))
      || (selectedValues.cities.length > 0 && !selectedValues.cities.includes(data.city))
      || (selectedValues.countries.length > 0 && !selectedValues.countries.includes(data.country))
      || (selectedValues.groups.length > 0 && !selectedValues.groups.includes(data.group))
      || (selectedValues.legalEntities.length > 0 && !selectedValues.legalEntities.includes(data.legalEntity))) {
      includeData = false;
    }
    return includeData;
  });
  console.log(chalk.green('The filtered mastered data:'));
  filteredMasterData.forEach((value) => console.log(value.name));
}

selectEvent();
console.log('\n');
let eventAgain = readLineSync.keyInYN(chalk.green('Select/Unselect again?'));
while(eventAgain) {
  selectEvent();
  console.log('\n');
  eventAgain = readLineSync.keyInYN(chalk.green('Select/Unselect again?'));
}
console.log(chalk.green('Thanks for visiting.'));
