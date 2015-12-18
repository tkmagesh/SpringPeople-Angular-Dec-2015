function GreeterFactory(timeService){
    function Greeter(name){
       this.name = name || '';
       this.message = '';
       this.greet = function(){
           this.message = 'Hi ' + this.name + (timeService.getCurrentDate().getHours() < 12 ? ', Good Morning' : ', Good Afternoon');
       };
    }
    return Greeter;
}

function TimeService(){
    this.getCurrentDate = function(){
        return new Date();
    }
}

var timeService = new TimeService();
var Greeter = GreeterFactory(timeService)
var greeter = new Greeter('Magesh');

function FakeTimeService(dateTime){
    this.getCurrentDate = function(){
        return dateTime;
    }
}

var fakeTimeServiceForMorning = new FakeTimeService(new Date(2015,12,18,9,0,0))
var fakeTimeServiceForEvening = new FakeTimeService(new Date(2015,12,18,17,0,0))
