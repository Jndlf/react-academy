
/**
 * Übung 3: Union Parameter 
 *******************************************/

function printNumberOrString(param: string | number): void {
    console.log(param);
  }
  
  printNumberOrString("Hallo Welt");
  printNumberOrString(5);