function cachingDecoratorNew(func) {
  const cash = [];

  function wrapper(...args){
    const hash = args.join(',');

    const objectInCache = cash.find((item) => {
      return hash === Object.keys(item)[0];
    })

    const result = func(...args);
    
    if (!objectInCache){
      cash.push({[hash]: result});
    } else {
      console.log('Из кэша: ' + Object.values(objectInCache));
      return 'Из кэша: ' + Object.values(objectInCache);
    }

    if (cash.length > 5){
      cash.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isThrottle = false;

  function wrapper(...args){
    wrapper.allCount++;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay)

    if (!isThrottle){
      func(...args);
      isThrottle = true;
    }
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}