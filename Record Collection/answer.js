// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
  /*
  ## TODO:
  - return updated record at thee end
  - Delete prop passed in if value is empty
    if(value = empty) 
      {
        delete prop from record obj
      }
  
  - if(prop != track && value != empty string) 
      {
        update the obj prop with the value
      }
  -  if(prop == tracks && value != empty string) {
    update the album array withe the value
  }
  
  */
  
  
  if (value == "") {
    delete records[id][prop];
    return records
  } else if(prop != "tracks" && value != "") {
    records[id][prop] = value 
    return records
  } else if(prop == "tracks" && value != "") {
      
      if(records[id].hasOwnProperty("tracks") == true){
       records[id][prop].push(value)
       return records
      } else {
        records[id][prop] = [];
        records[id][prop].push(value)
        return records
      }
  }
  
  
  
  
  
  
   // return records;
  }
  
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")