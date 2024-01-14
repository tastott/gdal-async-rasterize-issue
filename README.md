# gdal-async-rasterize-issue
Minimal code to demonstrate an issue with `gdal.rasterizeAsync()`.

This node program attempts to rasterize the included `./woodland.geojson` file using `gdal.rasterizeAsync()` into the output file `./woodland.tif`. The output file is incomplete until the program ends, suggesting that perhaps there is an unflushed buffer somewhere?

The program outputs the size of the `.tif` file after the `gdal.rasterizeAsync()` promise is complete. You'll see that the final size of the file is much bigger.

## Steps
1. `npm install`
2. `npm start`
