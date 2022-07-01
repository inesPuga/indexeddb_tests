const productsdb = (dbname, table) => {
    const db = new Dexie(dbname);
    db.version(1).stores(table);
    db.open();
  
    return db;
};

export const bulkcreate = (dbtable, data) => {
  let flag = empty(data);
  if (flag) { 
    dbtable.bulkAdd([data]);
    console.log("data inserted successfully...!");
  } else {
    console.log("please provide data...!");
  }
  return flag;
};

const empty = object => {
  let flag = false;
  for (const value in object) {
    if (object[value] != "" && object.hasOwnProperty(value)) {  //value is not empty
      flag = true;
    } else {  //value is empty
      flag = false;
    }
  }
  return flag;
};

export default productsdb;