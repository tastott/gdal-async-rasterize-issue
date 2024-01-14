const gdal = require('gdal-async');
const fs = require('fs/promises');

run().then(() => {}, console.error);

async function run() {
    const tifPath = './woodland.tif';
    const geojson = await gdal.openAsync('./woodland.geojson');


    await gdal.rasterizeAsync(tifPath, geojson, [
        '-ot', 'Byte',
        '-burn', '255',
        '-te', '352500',  '192600', '354500', '194600',
        '-ts', '2000', '2000'
    ]);

    const tifFileStats = await fs.stat(tifPath);
    console.log(`The size of '${tifPath}' after rasterization is "complete" is ${tifFileStats.size}. Observe that this does not match the true size of the file after the progam has ended`);
}