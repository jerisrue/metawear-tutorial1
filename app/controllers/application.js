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
	}
});