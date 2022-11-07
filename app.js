console.log('js app is loaded?S')






const packagesArr = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: 123123
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 2.5,
    to: 'Augie Andrews',
    trackingNumber: 'z5d3550'
}
]

// NOTE Drawing all packages
function drawPackages() {
    let template = ''
    packagesArr.forEach(p => template += `
    <div class="col-4 bg-light text-dark p-2 m-2 card d-flex justify-content-evenly align-items-evenly">
        <p>To: ${p.to} </p>
        <p>Tracking: ${p.trackingNumber}</p>
    </div> 
    `)
    let packageElm = document.getElementById('packages')
    packageElm.innerHTML = template
}

function drawExpress() {
    let template = ''

    let exPackages = packagesArr.filter(p => p.priorityLevel == 'express')
    console.log(template)
    exPackages.forEach(p => template +=
        `   
    <div class=" text-dark col-4 bg-light p-2 m-2 card d-flex justify-content-evenly align-items-evenly">
        <p>To: ${p.to} </p>
        <p>Tracking: ${p.trackingNumber}</p>
    </div> 
    `)
    console.log(template)
    let packageElm = document.getElementById('packages')
    packageElm.innerHTML = template
}

function drawFragile() {
    let template = ''

    let fragPackages = packagesArr.filter(p => p.isFragile == true)

    fragPackages.forEach(p => template += `
<div class=" text-dark col-4 bg-light p-2 m-2 card d-flex justify-content-evenly align-items-evenly">
        <p>To: ${p.to} </p>
        <p>Tracking: ${p.trackingNumber}</p>
    </div> 

`)
    let packageElm = document.getElementById('packages')
    packageElm.innerHTML = template



}







drawPackages()
