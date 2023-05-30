
function number_cardinality(numeroEntero) {

           const ultimoNum = numeroEntero % 10;
           
           if (ultimoNum === 0) {
             return 'zero';

           } else if (ultimoNum === 5) {
             return 'five';

           } else if (numeroEntero % 2 === 0) {
             return 'even';

           } else {
             return 'odd';
           }
           
         }

         module.exports = number_cardinality;