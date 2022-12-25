// TODO: fix: TDD
const landBasePrice = 1750,
    multipageBasePrice = 9000,
    cmsPrice = 4000,
    editTextPrice = 1000,
    blockPrice = 350,
    landBlocksCount = 5,
    pagePrice = 1500,
    pagesBaseCount = 6,
    defaultHours = 1,
    defaultHourRate = 350,

    tabLeft = document.querySelector('[data-tab-left]'),
    tabRight = document.querySelector('[data-tab-right]'),
    blocksCounter = document.querySelector('[data-blocks-counter]'),
    pagesCounter = document.querySelector('[data-pages-counter]'),
    blocksInput = document.querySelector('[data-blocks-input]'),
    pagesInput = document.querySelector('[data-pages-input]'),
    hoursInput = document.querySelector('[data-hours-input]'),
    rateInput = document.querySelector('[data-rate-input]'),
    editCheck = document.querySelector('[data-edit-check]'),
    cmsCheck = document.querySelector('[data-cms-check]'),
    totalValue = document.querySelector('[data-total-count]'),
    input = document.querySelectorAll('input');

let total,
    totalChecked = 0,
    blocksCount,
    pagesCount,
    hours = defaultHours,
    hourRate = defaultHourRate;

onTabLeft();

document.addEventListener('click', e => {
    const targetDataset = e.target.dataset;

    if ('tabLeft' in targetDataset) onTabLeft()
    if ('tabRight' in targetDataset) onTabRight()
})
document.addEventListener('change', e => {
    const targetDataset = e.target.dataset;

    if ('blocksInput' in targetDataset) countBlocks()
    if ('pagesInput' in targetDataset) countPages()
    if ('hoursInput' in targetDataset) countHoursCost()
    if ('rateInput' in targetDataset) countHoursCost()
    if ('cmsCheck' in targetDataset) checkCms()
    if ('editCheck' in targetDataset) checkEdit()
})

function onTabLeft() {
    clearInputs()
    blocksCounter.style.display = 'flex';
    pagesCounter.style.display = 'none';
    tabLeft.classList.add('active');
    tabRight.classList.remove('active');
    total = landBasePrice;
    blocksCount = landBlocksCount;

    blocksInput.value = blocksCount;
    totalValue.value = total;
}

function onTabRight() {
    clearInputs();
    blocksCounter.style.display = 'none';
    pagesCounter.style.display = 'flex';
    tabRight.classList.add('active');
    tabLeft.classList.remove('active');
    total = multipageBasePrice;
    pagesCount = pagesBaseCount;

    pagesInput.value = pagesCount;
    totalValue.value = total;
}
function checkCms() {
    cmsCheck.checked
        ? totalChecked += cmsPrice
        : totalChecked -= cmsPrice;
    totalValue.value = total + totalChecked;
}
function checkEdit() {
    editCheck.checked
        ? totalChecked += editTextPrice
        : totalChecked -= editTextPrice;
    totalValue.value = total + totalChecked;
}
function countBlocks() {
    clearRate();
    blocksCount = getBlocksCount();
    total = blocksCount * blockPrice;
    totalValue.value = total + totalChecked;
}
function countPages() {
    clearRate();
    pagesCount = getPagesCount();
    total = pagesCount * pagePrice;
    totalValue.value = total + totalChecked;
}

function countHoursCost() {
    clearFields()
    hours = getHours();
    hourRate = getHourRate();
    total = hours * hourRate;
    totalValue.value = total + totalChecked;
}

function getBlocksCount() {
    return blocksInput.value !== ''
        ? parseInt(blocksInput.value)
        : landBlocksCount;
}
function getPagesCount() {
    return pagesInput.value !== ''
        ? parseInt(pagesInput.value)
        : pagesBaseCount;
}
function getHours() {
    return hoursInput.value !== ''
        ? parseInt(hoursInput.value)
        : defaultHours;
}
function getHourRate() {
    return rateInput.value !== ''
        ? parseInt(rateInput.value)
        : defaultHourRate;
}

function clearInputs() {
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
    editCheck.checked = false;
    cmsCheck.checked = false;
}
function clearFields() {
    blocksInput.value = '';
    pagesInput.value = '';
    total = 0;
}
function clearRate() {
    hoursInput.value = '';
    rateInput.value = '';
    total = 0;
}
