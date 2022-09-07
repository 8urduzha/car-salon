let carBrands = document.getElementsByClassName('car-brands')
let car = document.getElementsByClassName('car')
let cars = document.getElementsByClassName('cars')

//This function display current car class
for (let i = 0; i < carBrands.length; i++) {
    carBrands[i].addEventListener('click', function () {
        let current = document.getElementsByClassName("active");
        let carClass = document.getElementById('p-class')
        let carDescription = document.getElementById('car-description')

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "")
            carClass.innerHTML = ' '
            carDescription.innerHTML = ' '


        } else if (current.length <= 0) {
            carClass.innerHTML = ' '
            carDescription.innerHTML = ' '

        }

        this.className += " active";


    })
}



//This function displays autos classes
for (let i = 0; i < carBrands.length && i < cars.length; i++) {
    carBrands[i].addEventListener('click', function (){
        let currentCars = document.getElementsByClassName('currentCars')
        console.log(currentCars)
        if (currentCars.length > 0) {
            // currentDays[0].classList = currentDays[0].classList.remove('currentDays')
            currentCars[0].className = currentCars[0].className.replace('currentCars', '')
        }
        cars[i].classList.add('currentCars')

    });
}



//this function displays current tab in cars classes
for (let i = 0; i < car.length; i++) {
    car[i].addEventListener("click", function () {
        let currentCar = document.getElementsByClassName('car-active')
        let carClass = document.getElementById('p-class')

        if (currentCar.length > 0) {
            carClass.innerHTML = 'car class'
            currentCar[0].className = currentCar[0].className.replace('car-active',' ')
        }

        this.className += " car-active"
    })
}
//This function displays current car image
for (let i = 0; i <car.length ; i++) {
    car[i].addEventListener('click',function (){
        let currentImg = document.getElementsByClassName('current-img')
        let carImg = document.getElementsByClassName('car-img')

        if (currentImg.length > 0) {
            currentImg[0].className = currentImg[0].className.replace('current-img', ' ')
        }

        carImg[i].className += ' current-img'

    })
}

//this function displays name of the current car

for (let i = 0; i <carBrands.length ; i++) {
    carBrands[i].addEventListener('click', function (){
        let carName = document.getElementById('p-name')

        let carList = [{className:'BMW'},{className:'Rolls-Royce'},{className:'Mercedes'},{className:'Chevrolet'}
            ,{className:'Audi'}]
        carName.innerHTML = carList[i].className
    })


}


for (let i = 0; i <car.length ; i++) {
    car[i].addEventListener('click', function (){
        let carClass = document.getElementById('p-class')
        let carDescription = document.getElementById('car-description')

        let carClassList = ['X5','M5','Z4', 'E39', 'i8', 'Gran coupe',
            'Silver Seraph','Ghost','Phantom','Wraith','Corniche','Dawn',
            'GLE','SLS','g63','s560','e220','s500',
            'Cruze','Corvette','Camaro','Malibu','Suburban','Traverse',
            'A6', 'Q7', 'TT','RS7','A8','E-tron'
        ]

        let carDescriptionList = [
            {
                brand: 'bmw',
                class: 'X5',
                description: 'The BMW X5 is a mid-sized luxury SUV produced by BMW.[1] The X5 made its debut in 1999 as the E53 model. It was BMW`s first SUV.'
            },{
                brand: 'bmw',
                class: 'M5',
                description: 'The BMW M5 is a high performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is considered an iconic vehicle in the sports sedan category.'
            },{
                brand: 'bmw',
                class: 'Z4',
                description: 'The BMW Z models are a line of roadsters manufactured by German automaker BMW.'
            },{
                brand: 'bmw',
                class: 'E39',
                description: 'The BMW E39 is the fourth generation of the BMW 5 Series range of executive cars, which was manufactured from 1995 to 2004.'
            },{
                brand: 'bmw',
                class: 'i8',
                description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 was part of BMW`s electrified fleet and was marketed under the BMW i sub-brand.'
            },{
                brand: 'bmw',
                class: 'Gran coupe',
                description: 'The BMW 2 Series Gran Coupé (model code F44) is a subcompact executive fastback sedan produced by BMW.'
            },
            {
                brand: 'Rolls-Royce',
                class: 'Silver Seraph',
                description: 'The Rolls-Royce Silver Seraph was a large luxury automobile produced by Rolls-Royce Motors from 1998 to 2002.'
            },{
                brand: 'Rolls-Royce',
                class: 'Ghost',
                description: 'The Rolls-Royce Ghost is a full-sized luxury car manufactured by Rolls-Royce Motor Cars. The "Ghost" nameplate, named in honour of the Silver Ghost'
            },{
                brand: 'Rolls-Royce',
                class: 'Phantom',
                description: 'Rolls-Royce has used the Phantom name on full-sized luxury cars over the past century: Rolls-Royce Phantom I'
            },{
                brand: 'Rolls-Royce',
                class: 'Wraith',
                description: 'The Rolls-Royce Wraith is a full-size luxury car/grand tourer manufactured by Rolls-Royce Motor Cars and based on the chassis of the Rolls-Royce Ghost'
            },{
                brand: 'Rolls-Royce',
                class: 'Corniche',
                description: 'The Rolls-Royce Corniche is a two-door, front-engine, rear wheel drive luxury car produced by Rolls-Royce Motors as a hardtop coupé'
            },{
                brand: 'Rolls-Royce',
                class: 'Dawn',
                description: 'The Rolls-Royce Dawn is a convertible luxury grand tourer manufactured by Rolls-Royce. It was announced at the 2015 Frankfurt Motor Show.'
            },
            {
                brand: 'Mercedes',
                class: 'GLE',
                description: 'The Mercedes-Benz GLE, formerly Mercedes-Benz M-Class is a mid-size luxury SUV produced by the German manufacturer Mercedes-Benz since 1997'
            },{
                brand: 'Mercedes',
                class: 'SLS',
                description: 'The Mercedes-Benz SL-Class is a grand touring sports car manufactured by Mercedes-Benz since 1954. '
            },{
                brand: 'Mercedes',
                class: 'g63',
                description: 'The Mercedes-Benz G-Class, sometimes colloquially called the G-Wagen or "G-Wagon" is a four-wheel drive automobile manufactured by Magna Steyr'
            },{
                brand: 'Mercedes',
                class: 's560',
                description: 'The Mercedes-Benz maybach s560  is the sixth generation of the S-Class produced from 2013 to 2020, ... Plug-in hybrid (S 500 e / S 560 e). Dimensions.'
            },{
                brand: 'Mercedes',
                class: 'e220',
                description: 'The Mercedes-Benz E-Class is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations.'
            },{
                brand: 'Mercedes',
                class: 's500',
                description: 'Engineering — The Mercedes-Benz S-Class, formerly known as Sonderklasse is a series of full-sized luxury sedans, limousines and armored sedans produced'
            },{
                brand: 'Chevrolet',
                class: 'Cruze',
                description: 'The Chevrolet Cruze is a compact car that is produced by General Motors since 2008.'
            },{
                brand: 'Chevrolet',
                class: 'Corvette',
                description: 'The Chevrolet Corvette, colloquially known in the USA as the \'Vette, is a two-door, two-passenger luxury sports car manufactured and marketed by Chevrolet'
            },{
                brand: 'Chevrolet',
                class: 'Camaro',
                description: 'The Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet, classified as a pony car.'
            },{
                brand: 'Chevrolet',
                class: 'Malibu',
                description: 'The Chevrolet Malibu is a mid-size car manufactured and marketed by Chevrolet from 1964 to 1983 and since 1997.'
            },{
                brand: 'Chevrolet',
                class: 'Suburban',
                description: 'The Chevrolet Suburban is a series of automobiles built by the Chevrolet division of General Motors. '
            },{
                brand: 'Chevrolet',
                class: 'Traverse',
                description: 'The Chevrolet Traverse is a crossover SUV with three-row seating built by General Motors. It is built on the same platform as the GMC Acadia and Buick'
            },{
                brand: 'Audi',
                class: 'A6',
                description: 'The Audi A6 is an executive car made by the German automaker Audi.'
            },{
                brand: 'Audi',
                class: 'Q7',
                description: 'The Audi Q7 is a mid-size luxury crossover SUV made by the German manufacturer Audi, unveiled in September 2005 at the Frankfurt Motor Show.'
            },{
                brand: 'Audi',
                class: 'TT',
                description: 'The Audi TT is a 2-door production sports car made by Audi since 1998, and currently in its third generation.'
            },{
                brand: 'Audi',
                class: 'RS7',
                description: 'Audi RS 7, a 2013–present German performance executive car; Baojun RS-7, a 2020–present Chinese mid-size SUV;'
            },{
                brand: 'Audi',
                class: 'A8',
                description: 'The Audi A8 is a full-size luxury sedan manufactured and marketed by the German automaker Audi since 1994.'
            },{
                brand: 'Audi',
                class: 'E-tron',
                description: 'The Audi e-tron is a battery electric mid-size luxury crossover produced by Audi since 2019. The e-tron was unveiled as a concept car at the 2015 Frankfurt'
            }
        ]

        carClass.innerHTML = carClassList[i]
        carDescription.innerHTML =carDescriptionList[i].description
    })
}

// let btn = document.getElementsByClassName('btn')
// for (let i = 0; i < btn.length ; i++) {
//     btn[i].addEventListener('click',function () {
//         let now = document.getElementsByClassName('active')
//
//         if (now.length > 0) {
//             now[0].className = now[0].className.replace(' active', ' ')
//         }
//
//         this.className += ' active'
//     } )
// }


// let btn = document.getElementsByClassName('btn')
//
// for (let i = 0; i < btn.length ; i++) {
// btn[i].addEventListener("click", function (){
//     let now = document.getElementsByClassName("active")
//     if (now.length > 0){
//         now[0].className = now[0].className.replace(" active", " ")
//     }
//     this.className += " active"
// })
// }







