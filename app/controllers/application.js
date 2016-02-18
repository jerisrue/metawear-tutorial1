import Ember from 'ember';

export default Ember.Controller.extend({
	metawearConnected: false,
	actions: {
		metawear_connect: function () {
			var t = this;
			metawear.init(function () {
				//success
				console.log('Connected to Metawear Device');
				t.set('metawearConnected',true);
			}, function () {//failure
				console.log('No Metawear devices found');
			});
		},
		metawear_disconnect: function(){
			var t = this;
			metawear.disconnect(function () {
				//success
				console.log('Disconnected from Metawear Device');
				t.set('metawearConnected', false);
			}, function () {//failure
				console.log('Error Disconnecting (possibly connect first)');
			});
		},
		metawear_turnOnLED_red: function () {
			console.log('Turning on metawear LED');
			metawear.setLED(metawear.COLOR.RED);
			metawear.play(true);

		},
		metawear_turnOnLED_blue: function () {
			console.log('Turning on metawear LED');
			metawear.setLED(metawear.COLOR.BLUE);
			metawear.play(true);

		},
		metawear_turnOnLED_green: function () {
			console.log('Turning on metawear LED');
			metawear.setLED(metawear.COLOR.GREEN);
			metawear.play(true);

		},
		metawear_turnOffLED: function(){
			console.log('Turning off metawear LED');
			metawear.stop(true);
		},
	}
});