//Hivepod Metamodel
var meta = require('./meta');

var metamodel = new meta.Metamodel({
	classes : [
		new meta.Class({
			name: 'OlympicMedal',
			attributes: [
				new meta.Attribute({ name: 'Athlete', type: 'string', required: true }),
				new meta.Attribute({ name: 'Age', type: 'int', required: true }),
				new meta.Attribute({ name: 'Country', type: 'string', required: true }),
				new meta.Attribute({ name: 'Year', type: 'int', required: true }),
				new meta.Attribute({ name: 'Sport', type: 'string', required: true }),
				new meta.Attribute({ name: 'Gold', type: 'int', required: true }),
				new meta.Attribute({ name: 'Silver', type: 'int', required: true }),
				new meta.Attribute({ name: 'Bronze', type: 'int', required: true }),
				new meta.Attribute({ name: 'Total', type: 'int', required: true })	
			],
			operations: [
				new meta.Operation({ name: 'query',  isQuery: true }),
				new meta.Operation({ name: 'create', isCreation: true }),
				new meta.Operation({ name: 'update', isUpdate: true }),
				new meta.Operation({ name: 'delete', isDeletion: true })
			]			
		}),
		new meta.Class({
			name: 'Oficina',
			attributes: [
				new meta.Attribute({ name: 'Nombre', type: 'string', required: true }),
				new meta.Attribute({ name: 'Localizacion', type: 'geopoint', required: true }),
				new meta.Attribute({ name: 'Telefono', type: 'string', required: true }),
				new meta.Attribute({ name: 'Imagen', type: 'image' })	
			],
			operations: [
				new meta.Operation({ name: 'query',  isQuery: true }),
				new meta.Operation({ name: 'create', isCreation: true }),
				new meta.Operation({ name: 'update', isUpdate: true }),
				new meta.Operation({ name: 'delete', isDeletion: true })
			]			
		}),
		new meta.Class({
			name: 'Weather',
			attributes: [
				new meta.Attribute({ name: 'Location', type: 'string', required: true }),
				new meta.Attribute({ name: 'Year', type: 'int', required: true }),
				new meta.Attribute({ name: 'Month', type: 'int', required: true }),
				new meta.Attribute({ name: 'Day', type: 'int', required: true }),
				new meta.Attribute({ name: 'Time', type: 'time', required: true }),
				new meta.Attribute({ name: 'Temperature', type: 'decimal', required: true }),
				new meta.Attribute({ name: 'RelHum', type: 'int', required: true }),
				new meta.Attribute({ name: 'Presure', type: 'decimal', required: true }),
				new meta.Attribute({ name: 'Hmdx', type: 'int' })	
			],
			operations: [
				new meta.Operation({ name: 'query',  isQuery: true }),
				new meta.Operation({ name: 'create', isCreation: true }),
				new meta.Operation({ name: 'update', isUpdate: true }),
				new meta.Operation({ name: 'delete', isDeletion: true })
			]			
		}),
		new meta.Class({
			name: 'Exoplanet',
			attributes: [
				new meta.Attribute({ name: 'Name', type: 'string', required: true }),
				new meta.Attribute({ name: 'Msini', type: 'decimal' }),
				new meta.Attribute({ name: 'SemiMajorAxis', type: 'decimal' }),
				new meta.Attribute({ name: 'OrbitalPeriod', type: 'decimal' }),
				new meta.Attribute({ name: 'OrbitalExcentricity', type: 'decimal' }),
				new meta.Attribute({ name: 'Om', type: 'int' }),
				new meta.Attribute({ name: 'Velocity', type: 'decimal' }),
				new meta.Attribute({ name: 'OrbitRef', type: 'string' }),
				new meta.Attribute({ name: 'FirstRef', type: 'string', required: true })	
			],
			operations: [
				new meta.Operation({ name: 'query',  isQuery: true }),
				new meta.Operation({ name: 'create', isCreation: true }),
				new meta.Operation({ name: 'update', isUpdate: true }),
				new meta.Operation({ name: 'delete', isDeletion: true })
			]			
		})	
	],
	associations : [
	
	]
});
		
module.exports = metamodel;
