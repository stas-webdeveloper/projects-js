// TODO: +refact: swap id's/classes for data attr's in .js
// TODO: refact: solo document.EventListener() instead of bunch of individual ones
// TODO: chore: change html tags on semantic ones
// TODO: +chore: discard id's
// TODO: tests
let total = 5000,
    time = 1,
    hourRate,
    tabLeft = document.querySelector('[data-tab-left]'),
    tabRight = document.querySelector('[data-tab-right]'),
    blocksBlock = document.querySelector('[data-blocks-counter]'),
    pagesBlock = document.querySelector('[data-pages-counter]'),
    counterBlock = document.querySelector('[data-blocks-input]'),
    counterPages = document.querySelector('[data-pages-input]'),
    counterHours = document.querySelector('[data-hours-input]'),
    counterRate = document.querySelector('[data-rate-input]'),
    changesCheck = document.querySelector('[data-edit-check]'),
    cmsCheck = document.querySelector('[data-cms-check]'),

    totalValue = document.querySelector('[data-total-count]'),
    input = document.querySelectorAll('input');

const land = 5000,
    corp = 12000,
    cms = 4000,
    changes = 1000,
    blocks = 500,
    pages = 2500;

document.addEventListener('click', e => {
    const targetDataset = e.target.dataset;
    console.log('targetDataset:', targetDataset)

    if ('tabLeft' in targetDataset) {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        blocksBlock.style.display = 'flex';
        pagesBlock.style.display = 'none';

        tabLeft.classList.add('active');
        tabRight.classList.remove('active');

        if (changesCheck.checked) {
            changesCheck.checked = false;
        };
        if (cmsCheck.checked) {
            cmsCheck.checked = false;
        };
        total = land;
        totalValue.value = total;
    }
})

tabRight.addEventListener('click', () => {
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
    blocksBlock.style.display = 'none';
    pagesBlock.style.display = 'flex';

    tabRight.classList.add('active');
    tabLeft.classList.remove('active');

    if (changesCheck.checked) {
        changesCheck.checked = false;
    };
    if (cmsCheck.checked) {
        cmsCheck.checked = false;
    };
    total = corp;
    totalValue.value = total;
});
counterBlock.addEventListener('change', () => {
    counterHours.value = '';
    counterRate.value = '';
    total = counterBlock.value * blocks;
    totalValue.value = total;

});
counterPages.addEventListener('change', () => {
    counterHours.value = '';
    counterRate.value = '';
    total = counterPages.value * pages;
    totalValue.value = total;

});
counterHours.addEventListener('change', () => {
    counterBlock.value = '';
    counterPages.value = '';
    total = 0;
    time = counterHours.value;
    hourRate = time * counterRate.value;
    totalValue.value = hourRate;
    total = hourRate;

});
counterRate.addEventListener('change', () => {
    counterBlock.value = '';
    counterPages.value = '';
    total = 0;
    hourRate = time * counterRate.value;
    totalValue.value = hourRate;
    total = hourRate;

});
changesCheck.addEventListener('change', () => {
    if (changesCheck.checked) {
        total += changes;
        totalValue.value = total;
    } else {
        total -= changes;
        totalValue.value = total;
    }
});
cmsCheck.addEventListener('change', () => {
    if (cmsCheck.checked) {
        total += cms;
        totalValue.value = total;
    } else {
        total -= cms;
        totalValue.value = total;
    }
});
