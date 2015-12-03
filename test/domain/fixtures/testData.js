var mongoose = require('mongoose');
var async = require('async');

var olympicMedalIds = [];
var olympicMedalList = [
	{
		athlete: 'Athlete0',
		age: 10,
		country: 'Country2',
		year: 30,
		sport: 'Sport4',
		gold: 50,
		silver: 60,
		bronze: 70,
		total: 80	
	},
	{
		athlete: 'Athlete9',
		age: 100,
		country: 'Country11',
		year: 120,
		sport: 'Sport13',
		gold: 140,
		silver: 150,
		bronze: 160,
		total: 170	
	},
	{
		athlete: 'Athlete18',
		age: 190,
		country: 'Country20',
		year: 210,
		sport: 'Sport22',
		gold: 230,
		silver: 240,
		bronze: 250,
		total: 260	
	},
];
function createOlympicMedalTestData(done) {
    var olympicMedalModel = mongoose.model('olympicMedal');

	var olympicMedalModels = olympicMedalList.map(function (olympicMedal) {
        return new olympicMedalModel(olympicMedal);
    });

    var deferred = [
        olympicMedalModel.remove.bind(olympicMedalModel)
    ];

    deferred = deferred.concat(olympicMedalModels.map(function (olympicMedal) {
        return olympicMedal.save.bind(olympicMedal);
    }));

    async.series(deferred, done);
}
function setOlympicMedalIds(done) {
    mongoose.model('olympicMedal').find().exec(function (err, results) {
        if (err) {
            return done(err);
        }

        olympicMedalIds = [];
        results.forEach(function(olympicMedal){
            olympicMedalIds.push(olympicMedal._id);
        });

        return done();
    });
}
function getOlympicMedalIds() {
    return olympicMedalIds;
}

var oficinaIds = [];
var oficinaList = [
	{
		nombre: 'Nombre27',
		localizacion: {
			coordinates: [
				-5.9859841,
				-5.9859841
			],
			type: 'Point'
		},
		telefono: 'Telefono29',
		imagen: 'Imagen30'	
	},
	{
		nombre: 'Nombre31',
		localizacion: {
			coordinates: [
				-5.9859841,
				-5.9859841
			],
			type: 'Point'
		},
		telefono: 'Telefono33',
		imagen: 'Imagen34'	
	},
	{
		nombre: 'Nombre35',
		localizacion: {
			coordinates: [
				-5.9859841,
				-5.9859841
			],
			type: 'Point'
		},
		telefono: 'Telefono37',
		imagen: 'Imagen38'	
	},
];
function createOficinaTestData(done) {
    var oficinaModel = mongoose.model('oficina');

	var oficinaModels = oficinaList.map(function (oficina) {
        return new oficinaModel(oficina);
    });

    var deferred = [
        oficinaModel.remove.bind(oficinaModel)
    ];

    deferred = deferred.concat(oficinaModels.map(function (oficina) {
        return oficina.save.bind(oficina);
    }));

    async.series(deferred, done);
}
function setOficinaIds(done) {
    mongoose.model('oficina').find().exec(function (err, results) {
        if (err) {
            return done(err);
        }

        oficinaIds = [];
        results.forEach(function(oficina){
            oficinaIds.push(oficina._id);
        });

        return done();
    });
}
function getOficinaIds() {
    return oficinaIds;
}

var weatherIds = [];
var weatherList = [
	{
		location: 'Location39',
		year: 400,
		month: 410,
		day: 420,
		time: '16:33:35Z+0200',
		temperature: 440,
		relHum: 450,
		presure: 460,
		hmdx: 470	
	},
	{
		location: 'Location48',
		year: 490,
		month: 500,
		day: 510,
		time: '16:33:35Z+0200',
		temperature: 530,
		relHum: 540,
		presure: 550,
		hmdx: 560	
	},
	{
		location: 'Location57',
		year: 580,
		month: 590,
		day: 600,
		time: '16:33:35Z+0200',
		temperature: 620,
		relHum: 630,
		presure: 640,
		hmdx: 650	
	},
];
function createWeatherTestData(done) {
    var weatherModel = mongoose.model('weather');

	var weatherModels = weatherList.map(function (weather) {
        return new weatherModel(weather);
    });

    var deferred = [
        weatherModel.remove.bind(weatherModel)
    ];

    deferred = deferred.concat(weatherModels.map(function (weather) {
        return weather.save.bind(weather);
    }));

    async.series(deferred, done);
}
function setWeatherIds(done) {
    mongoose.model('weather').find().exec(function (err, results) {
        if (err) {
            return done(err);
        }

        weatherIds = [];
        results.forEach(function(weather){
            weatherIds.push(weather._id);
        });

        return done();
    });
}
function getWeatherIds() {
    return weatherIds;
}

var exoplanetIds = [];
var exoplanetList = [
	{
		name: 'Name66',
		msini: 670,
		semiMajorAxis: 680,
		orbitalPeriod: 690,
		orbitalExcentricity: 700,
		om: 710,
		velocity: 720,
		orbitRef: 'OrbitRef73',
		firstRef: 'FirstRef74'	
	},
	{
		name: 'Name75',
		msini: 760,
		semiMajorAxis: 770,
		orbitalPeriod: 780,
		orbitalExcentricity: 790,
		om: 800,
		velocity: 810,
		orbitRef: 'OrbitRef82',
		firstRef: 'FirstRef83'	
	},
	{
		name: 'Name84',
		msini: 850,
		semiMajorAxis: 860,
		orbitalPeriod: 870,
		orbitalExcentricity: 880,
		om: 890,
		velocity: 900,
		orbitRef: 'OrbitRef91',
		firstRef: 'FirstRef92'	
	},
];
function createExoplanetTestData(done) {
    var exoplanetModel = mongoose.model('exoplanet');

	var exoplanetModels = exoplanetList.map(function (exoplanet) {
        return new exoplanetModel(exoplanet);
    });

    var deferred = [
        exoplanetModel.remove.bind(exoplanetModel)
    ];

    deferred = deferred.concat(exoplanetModels.map(function (exoplanet) {
        return exoplanet.save.bind(exoplanet);
    }));

    async.series(deferred, done);
}
function setExoplanetIds(done) {
    mongoose.model('exoplanet').find().exec(function (err, results) {
        if (err) {
            return done(err);
        }

        exoplanetIds = [];
        results.forEach(function(exoplanet){
            exoplanetIds.push(exoplanet._id);
        });

        return done();
    });
}
function getExoplanetIds() {
    return exoplanetIds;
}

module.exports = {
    createOlympicMedalTestData: createOlympicMedalTestData,
    setOlympicMedalIds: setOlympicMedalIds,
	getOlympicMedalIds: getOlympicMedalIds,
    createOficinaTestData: createOficinaTestData,
    setOficinaIds: setOficinaIds,
	getOficinaIds: getOficinaIds,
    createWeatherTestData: createWeatherTestData,
    setWeatherIds: setWeatherIds,
	getWeatherIds: getWeatherIds,
    createExoplanetTestData: createExoplanetTestData,
    setExoplanetIds: setExoplanetIds,
	getExoplanetIds: getExoplanetIds,
};
