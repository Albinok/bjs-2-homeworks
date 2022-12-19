class AlarmClock {
  constructor(){
   this.alarmCollection = [];
   this.timerId = null;
  }

  addClock(time, callback, id){
    if (id === undefined){
      throw new Error ('id нет');
    } else if (this.alarmCollection.some(item => item.id === id)){
      console.error('Звонок с уже существует');
    } else {
      return this.alarmCollection.push({time, callback, id})
    }
  }

  removeClock(id){
    let remoteCall = this.alarmCollection.filter(item => item.id !== id);
    if (remoteCall.length < this.alarmCollection.length){
      this.alarmCollection = remoteCall;
      return true;
    } else {
      return false;
    }
  }
  
  getCurrentFormattedTime(){
    let date = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return date;
  }
  start() {
    let checkClock = () => {
      this.alarmCollection.forEach((item) => {
        if (item.time === this.getCurrentFormattedTime()){
          item.callback();
        }
      })
    }
    if (this.timerId === null){
      this.timerId = setInterval(checkClock, 1000);
    }
  }
  stop(){
    if (this.timerId){
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms(){
    this.alarmCollection.forEach(item => console.log(`id: ${item.id}, time: ${item.time}`));
  }
  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}


