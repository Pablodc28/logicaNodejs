         
         function range_vision(number) {
                  

           if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
             return ('El parámetro debe ser un número entero no negativo.');
           }
         
            const digitos = String(number);
                                 console.log('digitos ' + digitos)

           let minValue =0;
           console.log('minValue: ' + minValue)

           for (let i = 0; i < digitos.length; i++) {
                      
                      const currentDigit = Number(digitos[i]);
                                 console.log("currentDigit: " + currentDigit)
                                 
                      const leftRange = digitos.slice(Math.max(0, i - currentDigit), i);
                                 console.log('leftRange: ' + leftRange)
                      const rightRange = digitos.slice(i + 1, i + 1 + currentDigit);
                                 console.log( "rightRange: " +rightRange)
                     
                                 const valorMision = sumArray(leftRange) + sumArray(rightRange)
                                 console.log('valorMision: '+valorMision)
                                            
                      if (currentDigit === 1 ) {
                                 minValue = valorMision;
                                 console.log('minValue del if: ' + minValue)
                                 return true;
                      }
                                 //creo que no lo pude terminar bien.

           }
         
           
         }
         
         function sumArray(array) {
           return array.split('').reduce((sum, num) => sum + Number(num), 0);
         }
         
         
         module.exports = range_vision;