function longRun(cb) {
  let x = true;
  let count = 0;
  while (x) {
    if (count === 500000000) x = false;
    count++;
  }
  cb("finished long run");
}

function execute() {
  console.log("beginning execution block");

  // we wrap a sync task in a promise
  new Promise((resolve, reject) => longRun(resolve)).then((msg) => {
    console.log(msg);
  });

  longRun(() => console.log("finished long run without promise wrapper"));

  // we wrap an async task in a promise
  new Promise((resolve, reject) => setTimeout(() => resolve("finished timeout"), 4000)).then(
    (msg) => {
      console.log(msg);
    }
  );

  console.log("completed execution block");
}

// what will the order of printed logs be?

execute();
