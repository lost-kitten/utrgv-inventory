var mongoose = require('mongoose');

var edinburgSchema = new mongoose.Schema({
	inventory: Boolean,
	number: Number,
	campus: String,
	building: String,
	room: String,
	capacity: String,
	roomType: String,
	firstview: String,
	secondview: String,
	workstationAvail: Boolean,
	workstationImage: String,
	microphoneAvail: Boolean,
	microphoneImage: String,
//workstation info
		monitorQuant: Number,
		monitorBrand: String,
		montitortag: String,
		towerQuant: Number,
		towerTag: String,
		micQuant: String,
		micBrand: String,
		mouseQuant: Number,
		keyboardQuant: Number,
	projectorAvail:Boolean,
	projectorImage: String,
	projectorScreenAvail: Boolean,
	projectorBoardAvail: Boolean,
//	projectorInfo:
		projQuant: Number,
		projScreenQuant: Number,
		projBoardQuant: Number,
		projBrand1: String,
		projBrand2: String,
		projTag1: String,
		projTag2: String,
//	controlPanelInfo:
cpAvail: Boolean,
touchscreenImage: String,
presspanelImage: String,
bpcImage: String,
		cpQuant: Number,
		cpType: String,
	doccamAvail: Boolean,
	doccamImage: String,
	moreDoccam: Boolean,
	// doccamInfo:
		doccamQuant: Number,
		doccamBrand1: String,
		doccamBrand2: String,
		doccamTag1: String,
		doccamTag2: String,
	itvAvail: Boolean,
	itvImage: String,
	moreItv: Boolean,
	//itvInfo:
		itvMonitorquant: Number,
		itvMonitorbrand1: String,
		itvMonitorbrand2: String,
		itvCameraQuant: Number,
		itvCameraBrand: String,
		itvMicquant: String,
		itvMicbrand: String,
		itvSpeakerquant: Number,
		itvSpeakerbrand: String,
	printerAvail: Boolean,
	morePrinter: Boolean,
	printerImage: String,
//	printerInfo:
		printerQuant: Number,
		printerBrand1: String,
		printerBrand2: String,
		printerTag1: String,
		printerTag2: String,
	computerLabAvail: Boolean,
	comlabImage: String,
//	computerLabInfo:
		labtype: String,
		stationQuant: Number,
		labMonQuant: Number,
		labTowerQuant: Number,
		labMouseQuant: Number,
		labKeyQuant: Number,
		labHeadphoneQuant: Number,
	smartboardAvail: Boolean,
	smartboardQuant: Number,
	smartboardBrand: String,
	smartboardImage: String,
	musicItemsAvail: Boolean,
	otherItemsBrand: String,
	amplifierBrand: String,
	amplifierQuant: Number,
	musicSpeakerBrand: String,
	musicSpeakerQuant: Number,
	viewingSystemAvail: Boolean,
	viewingTvQuant: String,
	viewingTvBrand: String
	viewingConsoleQuant: String,
	viewingConsoleBrand: String


});

mongoose.model('Edinburg', edinburgSchema);
