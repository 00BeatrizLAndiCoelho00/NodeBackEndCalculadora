/*******************************************************ABOUT PROJECT*************************************************************************************
 Node project:Calculate the average grade point 
     
    *Creation :30/01/2023
    *Modification : no changes since launch
    *Author : A. Beatriz Landi
    *ver: 1.0

**********************************************************************************************************************************************************/
console.log('Calculadora. \n tornado sua vida mais facil' );


//import readline data input 
var readline = require ('readline')

// objct data input via keyboard
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//let numerador = n1;
//let denominador = n2;

//definir o  tipo de conta
entradaDados.question('Certo que tipo de conta faremos hoje ? por favor escolha entre +, - / ou *  \n', function (tipoConta){

    let simboloMatematico = tipoConta;

//adição//-------------------------------------------------------------------------------------------------------------------------
    if(tipoConta == '+' ) {

        entradaDados.question('insira o numerador \n',function (n1){
            let numerador = n1;

            entradaDados.question('insira agora  o denominador \n',function (n2){
                let denominador = n2;
        
                let resultado;

                    //validção entrada de dados vazia
                    if(n1 == '' || n2 == ''  ) {
                        console.log('erro ;( é nessesario digitar algum valor nas entradas')
                        //nao e numero
                    }else if(  isNaN(n2) || isNaN(n2))  {

                        console.log('é nessesario que todos os dados digitados sejam numeros')
                    }


                resultado = (  Number(n1) + Number(n2) );

                console.log('a adição ', n1 , '+', n2 , '=', resultado)

            });
        });

//subtração //-------------------------------------------------------------------------------------------------------------------------
    } else if(tipoConta == '-' ) {

        entradaDados.question('insira o numerador \n',function (n1){
            let numerador = n1;
    
            entradaDados.question('insira agora  o denominador \n',function (n2){
                let denominador = n2;
        
                let resultado;

                if(n1 == '' || n2 == ''  ) {
                    console.log('erro ;( é nessesario digitar algum valor nas entradas')
                    //nao e numero
                }else if(  isNaN(n2) || isNaN(n2))  {

                    console.log('é nessesario que todos os dados digitados sejam numeros')
                }


                resultado = (  Number(n1) - Number(n2) ) ;



                console.log('a subtração ', n1 , '-', n2 , '=', resultado)

            });
        });

//multiplicação//-------------------------------------------------------------------------------------------------------------------------
    } else if(tipoConta == '*' ) {

        entradaDados.question('insira o numerador \n',function (n1){
            let numerador = n1;
    
            entradaDados.question('insira agora  o denominador \n',function (n2){
                let denominador = n2;
        
                let resultado;

                if(n1 == '' || n2 == ''  ) {
                    console.log('erro ;( é nessesario digitar algum valor nas entradas')
                    //nao e numero
                }else if(  isNaN(n2) || isNaN(n2))  {

                    console.log('é nessesario que todos os dados digitados sejam numeros')
                }


                resultado = (  Number(n1) * Number(n2) );


                console.log('a multiplicação ', n1 , '*', n2 , '=', resultado)

            });
        });
//-------------------------------------------------------------------------------------------------------------------------
        //divisao
    } else if(tipoConta == '/' ) {

        entradaDados.question('insira o numerador \n',function (n1){
            let numerador = n1;
    
            entradaDados.question('insira agora  o denominador \n',function (n2){
                let denominador = n2;
        
                let resultado;

                if(n1 == '' || n2 == ''  ) {
                    console.log('erro ;( é nessesario digitar algum valor nas entradas')

                    //nao e numero
                }else if(  isNaN(n2) || isNaN(n2))  {

                    console.log('é nessesario que todos os dados digitados sejam numeros')

                    //imposivel de calcular
                }else if(  n1 == '0' || n2 == '0') {

                    console.log('não da pra dividir por zero')
                }


                resultado = (  Number(n1) / Number(n2) );


                console.log('a divisao ', n1 , '/', n2 , '=', resultado)

            });
        });
    } else if( tipoConta != '+' || '+' || '*' || "/" ) {

       console.log('por favor selecione um caracter valido, podendo ser "+, -, / ou  *"')
    } 
});//-------------------------------------------------------------------------------------------------------------------------




    


   


