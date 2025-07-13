let getcard = document.getElementById('card')


let MixArray = [
    {
        orderName: 'Zinger Burger',
        img: './javascript image/zingerburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: ' Broast',
        img: './javascript image/broast.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Cheese Pizza',
        img: './javascript image/cheesepizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Garlic Fires',
        img: './javascript image/garlicfries.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Beef Burger',
        img: './javascript image/beefburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    }, {
        orderName: 'Chicken Nuggets Broast',
        img: './javascript image/chickennuggets.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Afghani Boti Pizza',
        img: './javascript image/afghanibotipizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Mayo Fries',
        img: './javascript image/mayofries.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Cheese Burger',
        img: './javascript image/cheeseburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    },
    {
        orderName: 'Chicken Burger',
        img: './javascript image/chickenburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    }, {
        orderName: 'Leg Broast',
        img: './javascript image/legbroast.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Fajitta Pizza',
        img: './javascript image/fajittapizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Pizza Fries',
        img: './javascript image/pizzafries.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Lamb Burger',
        img: './javascript image/lambburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    }, {
        orderName: 'Quater Broast',
        img: './javascript image/quaterbroast.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Malai Boti Pizza',
        img: './javascript image/malaibotipizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Tikka Pizza',
        img: './javascript image/tikkapizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Regular Fries',
        img: './javascript image/regularfries.png',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    }, {
        orderName: 'Smash Burger',
        img: './javascript image/smashburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    },
    {
        orderName: 'Turkey Burger',
        img: './javascript image/turkeyburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    }
]
let burgerArray = [
    {
        orderName: 'Zinger Burger',
        img: './javascript image/zingerburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Beef Burger',
        img: './javascript image/beefburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    },
    {
        orderName: 'Cheese Burger',
        img: './javascript image/cheeseburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    },
    {
        orderName: 'Chicken Burger',
        img: './javascript image/chickenburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    },
    {
        orderName: 'Lamb Burger',
        img: './javascript image/lambburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    },
    {
        orderName: 'Smash Burger',
        img: './javascript image/smashburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    },
    {
        orderName: 'Turkey Burger',
        img: './javascript image/turkeyburger.jpg',
        size: [{
            burgersize: 'Small',
            price: '650'
        },
        {
            burgersize: 'Regular',
            price: '750'
        },
        {
            burgersize: 'Large',
            price: '850'
        }

        ]

    }
]
let broastArray = [
    {
        orderName: ' Broast',
        img: './javascript image/broast.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Chicken Nuggets Broast',
        img: './javascript image/chickennuggets.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Leg Broast',
        img: './javascript image/legbroast.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Quater Broast',
        img: './javascript image/quaterbroast.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
]
let pizzaArray = [
    {
        orderName: 'Cheese Pizza',
        img: './javascript image/cheesepizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Afghani Boti Pizza',
        img: './javascript image/afghanibotipizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Fajitta Pizza',
        img: './javascript image/fajittapizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Malai Boti Pizza',
        img: './javascript image/malaibotipizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Tikka Pizza',
        img: './javascript image/tikkapizza.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
]
let friesArray = [
    {
        orderName: 'Garlic Fires',
        img: './javascript image/garlicfries.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Mayo Fries',
        img: './javascript image/mayofries.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Pizza Fries',
        img: './javascript image/pizzafries.jpg',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
    {
        orderName: 'Regular Fries',
        img: './javascript image/regularfries.png',
        size: [{
            burgersize: 'Small',
            price: '550'
        },
        {
            burgersize: 'Regular',
            price: '650'
        },
        {
            burgersize: 'Large',
            price: '750'
        }

        ]

    },
]




function allorder() {
    getcard.innerHTML = '';
    for (let i = 0; i < MixArray.length; i++) {
        getcard.innerHTML += `<div onclick="display(this)"
        class="card flex hover:scale-110 duration-700 flex-col justify-center items-center h-[35vh] w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] rounded-2xl">
        <img src="${MixArray[i].img}" class="h-[20vh]" alt="">
        <h4 class="font-serif">${MixArray[i].orderName}</h4>
        <h3 class="font-sans -tracking-tighter">RS: ${MixArray[i].size[0].price}</h3>
        </div>`;
        // <button class="border-[1px] border-white px-[10px] py-1 mt-2 rounded-lg">Add To Cart</button>
    }
}

function burger() {
    getcard.innerHTML = '';
    for (let i = 0; i < burgerArray.length; i++) {
        getcard.innerHTML += `<div onclick="display(this)"
        class="card flex hover:scale-110 duration-700 flex-col justify-center items-center h-[35vh] w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] rounded-2xl">
        <img src="${burgerArray[i].img}" class="h-[20vh]" alt="">
        <h4 class="font-serif">${burgerArray[i].orderName}</h4>
        <h3 class="font-sans -tracking-tighter">RS: ${burgerArray[i].size[0].price}</h3>
        </div>`;
        // <button class="border-[1px] border-white px-[10px] py-1 mt-2 rounded-lg">Add To Cart</button>
    }
}

function broast() {
    getcard.innerHTML = '';
    for (let i = 0; i < broastArray.length; i++) {
        getcard.innerHTML += `<div onclick="display(this)"
        class="card flex hover:scale-110 duration-700 flex-col justify-center items-center h-[35vh] w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] rounded-2xl">
        <img src="${broastArray[i].img}" class="h-[20vh]" alt="">
        <h4 class="font-serif">${broastArray[i].orderName}</h4>
        <h3 class="font-sans -tracking-tighter">RS: ${broastArray[i].size[0].price}</h3>
        </div>`;
        // <button class="border-[1px] border-white px-[10px] py-1 mt-2 rounded-lg">Add To Cart</button>
    }
}

function pizza() {
    getcard.innerHTML = '';
    for (let i = 0; i < pizzaArray.length; i++) {
        getcard.innerHTML += `<div onclick="display(this)"
        class="card flex hover:scale-110 duration-700 flex-col justify-center items-center h-[35vh] w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] rounded-2xl">
        <img src="${pizzaArray[i].img}" class="h-[20vh]" alt="">
        <h4 class="font-serif">${pizzaArray[i].orderName}</h4>
        <h3 class="font-sans -tracking-tighter">RS: ${pizzaArray[i].size[0].price}</h3>
        </div>`;
        // <button class="border-[1px] border-white px-[10px] py-1 mt-2 rounded-lg">Add To Cart</button>
    }
}

function fries() {
    getcard.innerHTML = '';
    for (let i = 0; i < friesArray.length; i++) {
        getcard.innerHTML += `<div onclick="display(this)"
        class="card flex hover:scale-110 duration-700 flex-col justify-center items-center h-[35vh] w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] rounded-2xl">
        <img src="${friesArray[i].img}" class="h-[20vh]" alt="">
        <h4 class="font-serif">${friesArray[i].orderName}</h4>
        <h3 class="font-sans -tracking-tighter">RS: ${friesArray[i].size[0].price}</h3>
        </div>`;
        // <button class="border-[1px] border-white px-[10px] py-1 mt-2 rounded-lg">Add To Cart</button>
    }
}


function display(e) {
    let PName = e.children[1].innerHTML
    let result = MixArray.filter(data => {
        return PName == data.orderName
    })
    localStorage.setItem('productdetail', JSON.stringify(result))
    window.location.href = './product.html'


}
