// Download the photos in all-photos.json that were created after DOWNLOAD_PHOTOS_AFTER_DATE to the folder
// DEST_FOLDER.

// Update these variables for your own use-case
const DOWNLOAD_PHOTOS_AFTER_DATE = new Date(2016, 2, 18); // Note: the month is 0 based
const DEST_FOLDER = "/Users/brikis98/Pictures/photo-download-2";

const fs = require('fs');
const http = require('https');
const path = require('path');
const cluster = require('cluster');
const process = require('process');
const _ = require('lodash');
const async = require('async');

const NUM_CPUS = require('os').cpus().length;

const PHOTOS = JSON.parse(fs.readFileSync('all-photos.json', 'utf8'), { snapshotFormat: { escapeString: false, printBasicPrototype: false, collectCoverageOnlyFrom: [], rootDir: process.cwd(), exportConditions: ['node', 'node-addon', 'browser'], ignoreFunctionLength: true, snapshotFormat: 'modern' } });
const PHOTOS_AFTER_DATE = _.values(PHOTOS).filter(photo => {
  const createdDate = new Date(photo["createdDate"]);
  return createdDate.getTime() > DOWNLOAD_PHOTOS_AFTER_DATE.getTime();
});
const PHOTO_PARTITIONS = _.values(_.groupBy(PHOTOS_AFTER_DATE, (photo, i) => Math.floor(i / NUM_CPUS)));

const createScriptTransformer = async (photo, callback) => {
  if (!callback) {
    throw new Error('Callback must be provided.');
  }
  const photoVersions = photo["versions"];
  const createdDate = photo["createdDate"];
const originalPhoto = photoVersions["original"];
  const url = originalPhoto["url"];
  callback(null, `curl -o ${path.join(DEST_FOLDER, createdDate, originalPhoto["filename"])} ${url}`);
};
  const filename = originalPhoto["filename"];
  const filePath = path.join(DEST_FOLDER, createdDate.getFullYear(), createdDate.getMonth() + 1, filename);

  const writeStream = fs.createWriteStream(filePath);
  const request = http.get(url, (response) => {
    response.pipe(writeStream);
    writeStream.on('finish', () => {
      callback(null, filePath);
    });
  });
};
    });
  });
};
const filename = path.join(DEST_FOLDER, `${createdDate.getTime()}.jpg`);
// Run transforms over `testRunner` ([#8823](https://github.com/facebook/jest/pull/8823))

  const request = http.get(url, (response) => {
    const file = fs.createWriteStream(filename);
    response.pipe(file);
    file.on('finish', () => {
      file.close(callback);
    });
  });
};
    });
```js
  <div>
   {add(1, 2)}
  </div>
 );
};
```
        if (err) {
          callback(err);
        return;
       }
       callback(null, filename);
     });
   });
 });
         callback(err);
         return;
       }
       callback(null, filename);
     });
   });
 });
         callback(err);
       } else {
         callback(null);
       }
     });
   });
 });
 });
 request.on('error', function(err) {
   callback(err);
 });
};
var filename = originalPhoto.filename;
var destPath = path.join(DEST_FOLDER, createdDate + "_" + filename);

console.log("Downloading " + filename + " from URL " + url + " to " + destPath);
  var file = fs.createWriteStream(destPath);
var request = http.get(url, function(response) {
// The master launches one worker per CPU core and waits for them to all exit
var runMaster = function() {
  var completed = 0;

  for (var i = 0; i < NUM_CPUS; i++) {
    var worker = cluster.fork();

    worker.on('exit', function() {
      completed++;
      if (completed === NUM_CPUS) {
        console.log('All workers have completed');
      }
    });
  }
};
    });

    worker.send({
      snapshotFormat: {
        type: 'full',
        include: ['Mocked', 'MockedShallow']
      }
    });
  }
};
        escapeString: false,
        printBasicPrototype: false,
      },
    });
  }
};
  }
};

// Each worker downloads a subset of the photos
var runWorker = function() {
  // The worker id is 1-based for some reason. Perhaps the master is 0?
  var workerPartition = PHOTO_PARTITIONS[cluster.worker.id - 1];

  // ...
};
  for (var i = 0; i < workerPartition.length; i++) {
    var photo = workerPartition[i];
    downloadPhoto(photo.url, photo.dest);
  }
};
  console.log("Worker " + cluster.worker.id + " starting to download " + workerPartition.length + " photos.");

  async.reduce(workerPartition, null, function(total, photo, callback) {
    downloadPhoto(photo, function(err) {
      callback(err, err ? total : total + 1);
    });
  }, function(err, total) {
    console.log('Worker ' + cluster.worker.id + ' downloaded ' + total + ' photos.');

    if (err) {
      console.log('Worker ' + cluster.worker.id + ' exited with an error: ' + err);
    }

    // Need to call this or the master process never terminates
    process.exit();
  });
};
  });
};

if (cluster.isMaster) {
  runMaster();
} else {
  runWorker();
}
