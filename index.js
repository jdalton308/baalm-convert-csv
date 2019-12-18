

const parseCsv = require('csv-parse/lib/sync');
const stringifyCsv = require('csv-stringify/lib/sync');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

const importFileName = './customers-export.csv';
const exportFileName = './customers-export-NEW.csv';
const answerRef = require('./utils/answer-map.js');
const productRef = require('./utils/product-fields.js');

const answerMap = answerRef.answerMap;
const productMap = productRef.productFields;
const csvWriter = createCsvWriter({
  path: exportFileName,
});



function updateMemberCell(cell, updateRefObject) {
  const splitValues = cell.split('|');
  const newValues = splitValues.map((originalValue) => {
    return updateRefObject.valueMap[originalValue];
  });

  return JSON.stringify(newValues);
}


function customFieldsName(productType, i, field) {
  return `custom_fields["${productType}_${i}_${field}"]`;
}
function createProductRef(titleRow) {
  let newProductMap = JSON.parse(JSON.stringify(productMap));

  for (productType in newProductMap) {
    // Get column IDs for each product field
    for (let i = 1; i < 11; i++) {
      const nameColumn = titleRow.indexOf(customFieldsName(productType, i, 'name'));
      const metaColumn = titleRow.indexOf(customFieldsName(productType, i, 'meta'));
      const ingredientsColumn = titleRow.indexOf(customFieldsName(productType, i, 'ingredients'));

      newProductMap[productType].fieldColumns[i] = {
        name: nameColumn,
        meta: metaColumn,
        ingredients: ingredientsColumn,
      };

    } // end 1-10 for

    // Get column indexes for frequency
    const frequencyColumn = titleRow.indexOf(`custom_fields["${newProductMap[productType].frequency.id}"]`)
    newProductMap[productType].frequency.column = frequencyColumn;

  } // end newProductMap for

  return newProductMap;
}



fs.readFile(importFileName, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Imported file ', importFileName);

  // loop through row objects
  // if column title is in answerMap object, update
  // change title from customer_fields'=[name] to quiz[newId]
  // for each row item:
  // - split on '|'
  // - for each value, convert to new value in map

  // combine products into new single field


  const allMemberData = parseCsv(data);
  let newMemberData = [];


  // console.log('First Row: ', allMemberData[0]);
  // console.log('Second Row: ', allMemberData[1]);


  // Update Quiz Fields
  allMemberData[0].forEach((columnTitle, columnIndex) => {
    // check if title is in answer map
    const splitTitle = columnTitle.split('"');
    if (!splitTitle.length) return;

    const title = splitTitle[1];
    const updateObject = answerMap[title];

    if (updateObject) {
      // Title is in the answer map, so loop through rest of rows and update
      // console.log('Updating column: ', columnTitle);

      // Update all the values in that column
      newMemberData = allMemberData.map((memberRow, rowIndex) => {
        if (!rowIndex || !memberRow[columnIndex]) return memberRow; // skip first row

        // in this row, change the column box per the answer map
        memberRow[columnIndex] = updateMemberCell(memberRow[columnIndex], updateObject);
        return memberRow;
      });

      // Update the column title
      allMemberData[0][columnIndex] = `quiz["${updateObject.newId ? updateObject.newId : title}"]`;
    }
  });


  // Update Product Fields
  // - create reference for all field's columns
  // - check every newMemberData row for values in those columns
  // - If found...
  //  - Create new object {name: , type: , frequency:? , ingredients}

  const productColumnRef = createProductRef(allMemberData[0]);

  // Create new column for new products object
  const newRoutineColumnName = 'routine["routine_items"]';

  allMemberData[0].push(newRoutineColumnName);
  const routineColIndex = allMemberData[0].indexOf(newRoutineColumnName);


  // console.log('Product Column Ref: \n', productColumnRef);

  // Update all the values in that column
  newMemberData.forEach((memberRow, rowIndex) => {
    if (!rowIndex) return; // skip first row

    const memberProducts = [];

    // loop through productColumnRef types
    // - loop through fieldColumns
    // - Check memberRow[fieldColumn[i].name]
    // - If value, create new product object
    // - Get rest of values
    // - Create ID

    // after loop, if memberProducts.length, create new field

    for (productType in productColumnRef) {
      const { fieldColumns } = productColumnRef[productType];

      // check for names
      for (productNumber in fieldColumns) {
        const productName = memberRow[fieldColumns[productNumber].name];

        if (productName) {
          // found product

          // Create new frequency
          const frequencyRef = productColumnRef[productType].frequency.column;
          const oldFrequency = memberRow[productColumnRef[productType].frequency.column];
          const newFrequency = (oldFrequency) ? productColumnRef[productType].frequency.newValueMap[oldFrequency] : productColumnRef[productType].frequency.newValueMap['Once'];

          const newProduct = {
            id: (memberProducts.length + 100),
            name: productName,
            type: productType,
            ingredients: memberRow[fieldColumns[productNumber].ingredients],
            scores: memberRow[fieldColumns[productNumber].meta],
            frequency: newFrequency,
          };

          memberProducts.push(newProduct);
        }
      }
    }

    if (memberProducts.length) {
      memberRow[routineColIndex] = JSON.stringify(memberProducts);
    }

  });



  console.log('Data updated. Generating new CSV...');

  csvWriter.writeRecords(newMemberData)
    .then(() => {
      console.log('New CSV created: ', exportFileName);
    });


});
