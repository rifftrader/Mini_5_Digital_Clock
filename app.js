//jshint esversion:6

let clock = new Vue({
  el: "#app",
  data: {
    date: "",
    time: "",
    day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    hours: "",
    minutes: "",
    seconds: "",
    is24h: true,
    amOrPm: ""
  },
  methods: {
    getTime: function() {

      let d = new Date();
      this.hours = d.getHours();
      this.minutes = d.getMinutes();
      this.seconds = d.getSeconds();

      this.padTime();

      this.time = `${this.hours}${":"}${this.minutes}${":"}${this.seconds}`;
      this.date = `${this.day[d.getDay()]}${" "}${d.getDate()}${" "}${this.month[d.getMonth()]}${" "}${d.getFullYear()}`;

    },
    padTime: function() {

        if (this.seconds < 10) { this.seconds = `${"0"}${this.seconds}`; }
        else { this.seconds = this.seconds; }

        if (this.minutes < 10) { this.minutes = `${"0"}${this.minutes}`; }
        else { this.minutes = this.minutes; }

        if (this.is24h == true){

          if (this.hours < 10) { this.hours = `${"0"}${this.hours}`; }
          else { this.hours = this.hours; }

        } else {

          if (this.hours == 0) {
            this.hours = "12";
            this.amOrPm = "AM";
          } else if (this.hours <= 12) {
            this.hours = this.hours;
            this.amOrPm = "AM";
          } else if (this.hours >= 13) {
            this.hours -= 12; this.amOrPm = "PM";
          }

        }
    },
  }
});

setInterval(clock.getTime, 500);
