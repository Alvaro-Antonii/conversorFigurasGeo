//Privacidad de código
(() =>{

    let btocuadradoPerimetr = document.querySelector('#bto-cuadradoPerimetro'),
        btocuadradoArea = document.querySelector('#bto-cuadradoArea'),
        btoperTrian = document.querySelector('#bto-perTrian'),
        btoareTriang = document.querySelector('#bto-areTriang'),
        btodiaCir = document.querySelector('#bto-diaCir'),
        btoflePerCi = document.querySelector('#bto-perCirc'),
        btoareCir = document.querySelector('#bto-areCir');

    //Perimetro cuadrado
    let periCua = (a) =>  4*a;

    btocuadradoPerimetr.addEventListener('click',()=>{
        let perimetro = document.getElementById('side');
        let valor = Number(perimetro.value);

        let resul = `El perimetro del Cuadrado es ${periCua(valor)} cm. `;
        document.getElementById('result').innerText = resul;

    });

    //Area del cuadrado
    let arCuad= (a) => a*a;

    btocuadradoArea.addEventListener('click',()=>{
        let area = document.getElementById('side');
        let valor = Number(area.value);

        let resultado = `El resultado del área del cuadrado es ${arCuad(valor)} cm`;
        document.getElementById('result').innerText = resultado;
    })
        
    

    //Perímetro de un triángulo

    let fleTrian = (a,b,c) => a+b+c;

    btoperTrian.addEventListener('click',()=>{
        let perimetroA = document.getElementById('sideA');
        let valorA = Number(perimetroA.value);

        let perimetroB = document.getElementById('sideB');
        let valorB = Number(perimetroB.value);

        let perimetroC = document.getElementById('sideC');
        let valorC = Number(perimetroC.value);

        let resultado = `El perímetro del triángulo es ${fleTrian(valorA,valorB,valorC)}`;
        document.getElementById('result').innerText = resultado;

    });

    //Área de un triángulo

    let fleAreTri = (b,a) => b*a;
    btoareTriang.addEventListener('click',()=>{

        let base = document.getElementById('sideBa');
        let valorBa = Number(base.value);

        let altura = document.getElementById('sideAl');
        let valorAl = Number(altura.value);

        let resultado = `El Área del triángulo es igual a ${fleAreTri(valorBa,valorAl)} cm.`;
        document.getElementById('result').innerText = resultado;

    });

    //Diámetro del círculo

    let fleDiaCi = (radio) => radio*2;

    btodiaCir.addEventListener('click',()=>{
        let radio = document.getElementById('sideRa');
        let valorRa = Number(radio.value);

        resultado = `El valor del diámetro del círculo es ${fleDiaCi(valorRa)} cm`;
        document.getElementById('result').innerText = resultado;
    });

    //Perímetro círculo

    let flePerCi = (radio) => fleDiaCi(radio)*Math.PI;

    btoflePerCi.addEventListener('click',()=>{
        let radio = document.getElementById('sideRa');
        let valor = Number(radio.value);

        let resultado = `El perímetro del círculo es ${flePerCi(valor)}`;
        document.getElementById('result').innerText = resultado;
    });

    //Área de un círculo

    let fleArCi = (radio) => (radio*radio)*Math.PI;

    btoareCir.addEventListener('click',()=>{
        let radio = document.getElementById('sideRa');
        let valor = Number(radio.value);

        let resultado = `El área del círculo es ${fleArCi(valor)}`;
        document.getElementById('result').innerText = resultado;
    });


})();



