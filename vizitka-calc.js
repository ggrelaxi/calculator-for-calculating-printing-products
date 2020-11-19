let state = {
    vizitkaStandart: {
        material: {
            name: 'Мелованный картон',
            activeButton: 'standartMelovaniyKarton',
        },
        
        color: {
            name: 'цветная печать с одной стороны',
            activeButton: 'standartOneSidePrintButton',
        },

        time: {
            name: '4-5 дней',
            activeButton: 'standart4-5day',
        },

        tarifGroup: {
            list: ['oneSide5day', 'oneSide3day', 'oneSide1day', 'twoSide5day', 'twoSide3day', 'twoSide1day'],
            side: 'oneSide',
            time: '5day',
        },

        orderInfo: {
            orderName: 'Визитка, тариф стандарт',
            name: null,
            tel: null,
            circulation: null,
            sides: null,
            singlePrice: null,
            cost: null,
        },
    },

    vizitkaIndividual: {

    },

    vizitkaPremium: {

    }
}

// вкладка Стандарт

const vizitkaStandartTab = document.getElementById('vizitka-standart-tab');

vizitkaStandartTab.addEventListener('click', function() {
    let vizitkaIndividualResultBlock = document.getElementById('vizitkaIndividualResultBlock');
    vizitkaIndividualResultBlock.classList.remove('d-block');
    vizitkaIndividualResultBlock.classList.add('d-none');

    let vizitkaPremiumResultBlock = document.getElementById('vizitkaPremiumResultBlock');
    vizitkaPremiumResultBlock.classList.remove('d-block');
    vizitkaPremiumResultBlock.classList.add('d-none');

    let vizitkaStandartResultBlock = document.getElementById('vizitkaStandartResultBlock');
    vizitkaStandartResultBlock.classList.add('d-block');

});

const vizitkaIndividualTab = document.getElementById('vizitka-individual-tab');

vizitkaIndividualTab.addEventListener('click', function() {
    let vizitkaStandartResultBlock = document.getElementById('vizitkaStandartResultBlock');
    vizitkaStandartResultBlock.classList.remove('d-block');
    vizitkaStandartResultBlock.classList.add('d-none');

    let vizitkaPremiumResultBlock = document.getElementById('vizitkaPremiumResultBlock');
    vizitkaPremiumResultBlock.classList.remove('d-block');
    vizitkaPremiumResultBlock.classList.add('d-none');

    let vizitkaIndividualResultBlock = document.getElementById('vizitkaIndividualResultBlock');
    vizitkaIndividualResultBlock.classList.add('d-block');
});


const vizitkaPremiumTab = document.getElementById('vizitka-premium-tab');

vizitkaPremiumTab.addEventListener('click', function() {
    let vizitkaIndividualResultBlock = document.getElementById('vizitkaIndividualResultBlock');
    vizitkaIndividualResultBlock.classList.remove('d-block');
    vizitkaIndividualResultBlock.classList.add('d-none');

    let vizitkaStandartResultBlock = document.getElementById('vizitkaStandartResultBlock');
    vizitkaStandartResultBlock.classList.remove('d-block');
    vizitkaStandartResultBlock.classList.add('d-none');

    let vizitkaPremiumResultBlock = document.getElementById('vizitkaPremiumResultBlock');
    vizitkaPremiumResultBlock.classList.add('d-block');

});

const standartTwoSidePrintButton = document.getElementById('standartTwoSidePrintButton');
const standartOneSidePrintButton = document.getElementById('standartOneSidePrintButton');

standartTwoSidePrintButton.addEventListener('click', function() {
    state.vizitkaStandart.color.activeButton = 'standartTwoSidePrintButton';
    state.vizitkaStandart.color.name = 'цветная печать с двух сторон';
    state.vizitkaStandart.tarifGroup.side = 'twoSide';
    standartOneSidePrintButton.classList.remove('active-element');
    vizitkaStandartResetResultBlock()
    vizitkaStandartRender();
    vizitkaStandartResetActiveTarif();
    vizitkaStandartTarifRender();
    resetErrorsAndMessage();
});

standartOneSidePrintButton.addEventListener('click', function() {
    state.vizitkaStandart.color.activeButton = 'standartOneSidePrintButton';
    state.vizitkaStandart.color.name = 'цветная печать с одной стороны';
    state.vizitkaStandart.tarifGroup.side = 'oneSide';
    standartTwoSidePrintButton.classList.remove('active-element');
    vizitkaStandartResetResultBlock();
    vizitkaStandartRender();
    vizitkaStandartResetActiveTarif();
    vizitkaStandartTarifRender();
    resetErrorsAndMessage();
    
});

const vizitkaStandart5DaysButton = document.getElementById('standart4-5day');
const vizitkaStandart3DaysButton = document.getElementById('standart2-3day');
const vizitkaStandart1DayButton = document.getElementById('standart1dayButton');

vizitkaStandart5DaysButton.addEventListener('click', function() {
    vizitkaStandart3DaysButton.classList.remove('active-element');
    vizitkaStandart1DayButton.classList.remove('active-element');

    state.vizitkaStandart.time.activeButton = 'standart4-5day';
    state.vizitkaStandart.tarifGroup.time = '5day';
    vizitkaStandartResetResultBlock();
    vizitkaStandartRender();
    vizitkaStandartResetActiveTarif();
    vizitkaStandartTarifRender();
    resetErrorsAndMessage();
});

vizitkaStandart3DaysButton.addEventListener('click', function() {
    vizitkaStandart5DaysButton.classList.remove('active-element');
    vizitkaStandart1DayButton.classList.remove('active-element');

    state.vizitkaStandart.time.activeButton = 'standart2-3day';
    state.vizitkaStandart.tarifGroup.time = '3day';
    vizitkaStandartResetResultBlock()
    vizitkaStandartRender();
    vizitkaStandartResetActiveTarif();
    vizitkaStandartTarifRender();
    resetErrorsAndMessage();
});

vizitkaStandart1DayButton.addEventListener('click', function() {
    vizitkaStandart5DaysButton.classList.remove('active-element');
    vizitkaStandart3DaysButton.classList.remove('active-element');

    state.vizitkaStandart.time.activeButton = 'standart1dayButton';
    state.vizitkaStandart.tarifGroup.time = '1day';
    vizitkaStandartResetResultBlock();
    vizitkaStandartRender();
    vizitkaStandartResetActiveTarif();
    vizitkaStandartTarifRender();
    resetErrorsAndMessage();
});

const vizitkaStandartResultBlock = document.getElementById('vizitkaStandartResultBlock');
const vizitkaStandartTarifBlock = document.getElementById('vizitkaStandartTarifBlock');
const vizitkaStandartTarifs = document.getElementsByName('inlineRadioOptions');
const vizitkaStandartTarifsLabels = document.getElementsByClassName('tarifs-label');

const vizitkaStandartSubmitButton = document.getElementById('vizitkaStandartSubmitButton');
const vizitkaStandartNameInput = document.getElementById('vizitkaStandartNameInput');
const vizitkaStandartTelInput = document.getElementById('vizitkaStandartTelInput');

// отслеживание кликов по тарифам, и запуск расчета

const vizitkaStandartresultTiraj = document.getElementById('vizitkaStandartTiraj');
const vizitkaStandartResultSides = document.getElementById('vizitkaStandartSides');
const vizitkaStandartSinglePrice = document.getElementById('vizitkaStandartSinglePrice');
const vizitkaStandartPrice = document.getElementById('vizitkaStandartPrice');

vizitkaStandartTarifBlock.addEventListener('click', function(event) {
    if (event.target.nodeName === 'LABEL') {
        vizitkaStandartResetActiveTarif();
        resetErrorsAndMessage();
        
        event.target.classList.add('vizitkaStandartActiveTarif');
        vizitkaStandartSubmitButton.disabled = false;

        vizitkaStandartresultTiraj.textContent = event.target.textContent;
        state.vizitkaStandart.orderInfo.circulation = Number(vizitkaStandartresultTiraj.textContent);

        vizitkaStandartResultSides.textContent = state.vizitkaStandart.color.name;
        state.vizitkaStandart.orderInfo.sides = vizitkaStandartResultSides.textContent;

        vizitkaStandartSinglePrice.textContent = `${(Number(event.target.textContent) / Number(event.target.dataset.standartvizitkaTarif)).toFixed(2)} руб.`;
        state.vizitkaStandart.orderInfo.singlePrice = `${(Number(event.target.textContent) / Number(event.target.dataset.standartvizitkaTarif)).toFixed(2)} руб.`;

        vizitkaStandartPrice.textContent = `${event.target.dataset.standartvizitkaTarif} руб.`;
        state.vizitkaStandart.orderInfo.cost = `${event.target.dataset.standartvizitkaTarif} руб.`;

        vizitkaStandartNameInput.classList.remove('d-none');
        vizitkaStandartTelInput.classList.remove('d-none');
    }
});

const nameErrorBlock = document.getElementById('nameErrorBlock');
const telErrorBlock = document.getElementById('telErrorBlock');

function vizitkaStandartRender() {
    document.getElementById(state.vizitkaStandart.material.activeButton).classList.add('active-element');
    document.getElementById(state.vizitkaStandart.color.activeButton).classList.add('active-element');
    document.getElementById(state.vizitkaStandart.time.activeButton).classList.add('active-element');
};

function vizitkaStandartTarifRender() {
    let tarifList = state.vizitkaStandart.tarifGroup.list;
    for (const singleTarif of tarifList) {
        let element = document.getElementById(singleTarif);
        element.classList.remove('d-block');
        element.classList.add('d-none');
    }

    let actualTarifName = `${state.vizitkaStandart.tarifGroup.side}${state.vizitkaStandart.tarifGroup.time}`;
    document.getElementById(actualTarifName).classList.remove('d-none');
    document.getElementById(actualTarifName).classList.add('d-block');
};

function vizitkaStandartResetActiveTarif() {
    for (const singleLabel of vizitkaStandartTarifsLabels) {
            singleLabel.classList.remove('vizitkaStandartActiveTarif');
            vizitkaStandartSubmitButton.disabled = true;
    }
}

function vizitkaStandartResetResultBlock() {
    vizitkaStandartNameInput.classList.add('d-none');
    vizitkaStandartTelInput.classList.add('d-none');
    vizitkaStandartSubmitButton.disabled = true;
    vizitkaStandartresultTiraj.textContent = '';
    vizitkaStandartResultSides.textContent = '';
    vizitkaStandartSinglePrice.textContent = '';
    vizitkaStandartPrice.textContent = '';
};

const vizitkaStandartSuccessOrderBlock = document.getElementById('vizitkaStandartSuccessOrder');

function resetErrorsAndMessage() {
    nameErrorBlock.classList.add('d-none');
    telErrorBlock.classList.add('d-none');
    vizitkaStandartSuccessOrder.innerHTML = '';
}

const vizitkaStandartForm = document.getElementById('vizitkaStandartMaket');

vizitkaStandartForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(vizitkaStandartForm);

    data.append('orderName', state.vizitkaStandart.orderInfo.orderName);
    data.append('name', vizitkaStandartNameInput.value);
    data.append('tel', vizitkaStandartTelInput.value);
    data.append('circulation', state.vizitkaStandart.orderInfo.circulation);
    data.append('sides', state.vizitkaStandart.orderInfo.sides);
    data.append('singlePrice', state.vizitkaStandart.orderInfo.singlePrice);
    data.append('cost', state.vizitkaStandart.orderInfo.cost);

    if (vizitkaStandartNameInput.value === '') {
        nameErrorBlock.classList.remove('d-none');
    }

    if (vizitkaStandartNameInput.value !== '') {
        nameErrorBlock.classList.add('d-none');
    }

    if (vizitkaStandartTelInput.value === '') {
        telErrorBlock.classList.remove('d-none');
    }

    if (vizitkaStandartTelInput.value !== '') {
        telErrorBlock.classList.add('d-none');
    }

    if (vizitkaStandartNameInput.value !== '' && vizitkaStandartTelInput.value !== '') {
        state.vizitkaStandart.orderInfo.name = vizitkaStandartNameInput.value;
        state.vizitkaStandart.orderInfo.tel = vizitkaStandartTelInput.value;


        sendData(data);
    }
});

function sendData(result) {

    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/send.php', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {

            let response = JSON.parse(xhr.response);

            if (response.result === 'success') {
                vizitkaStandartSuccessOrderBlock.setAttribute('class', 'text-success');
                vizitkaStandartSuccessOrderBlock.innerHTML = 'Ваш заказ успешно отправлен, мы скоро свяжемся с вами.';
                vizitkaStandartResetActiveTarif();
                vizitkaStandartNameInput.value = '';
                vizitkaStandartTelInput.value = '';
                vizitkaStandartResetActiveTarif();
                vizitkaStandartSubmitButton.disabled = true;
                document.getElementById('vizitkaStandartMaketDownload').value = '';
                vizitkaStandartResetResultBlock();
            } else {
                vizitkaStandartSuccessOrderBlock.setAttribute('class', 'text-danger');
                vizitkaStandartSuccessOrderBlock.innerHTML = 'Извините, произошла ошибка отправки. Попробуйте еще раз.';
            }


        } else {
           vizitkaStandartSuccessOrderBlock.setAttribute('class', 'text-danger');
           vizitkaStandartSuccessOrderBlock.innerHTML = 'Ошибка на стороне сервера. Попробуйте через несколько минут.';
        }
    }

    xhr.send(result);
    
}

vizitkaStandartRender();