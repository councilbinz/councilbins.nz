const binImage = (bin) => {
  const folder = `/${process.env.ITEMS}/`;
  bin.fileName = `${process.env.NEXT_PUBLIC_ASSET_ROOT}${folder}${bin.fileName}`;
  if (bin.presentTwinFileName) {
    bin.presentTwinFileName = `${process.env.NEXT_PUBLIC_ASSET_ROOT}${bin.presentTwinFileName}`;
  }

  return bin;
};

export default binImage;
