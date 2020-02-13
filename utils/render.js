const { createClient } = require('@nexrender/api');

const client = createClient({
  host: 'http://localhost:3050',
  secret: 'baplife',
});

// eslint-disable-next-line consistent-return
async function renderVideo(group, user) {
  const result = await client.addJob({
    template: {
      src: 'http://localhost:3000/static/global/assets/render_templates/Render1/render1.aep',
      composition: 'main',
    },
    assets: [
      {
        src: `gs://rftc-thinkpink.appspot.com/images/${group}/${user}/face.jpg`,
        type: 'image',
        layerName: 'face.png',
      },
    ],
    actions: {
      postrender: [
        {
          module: '@nexrender/action-encode',
          preset: 'mp4',
          output: 'encoded.mp4',
        },
        {
          module: '@nexrender/action-upload',
          input: 'encoded.mp4',
          provider: 'gs',
          params: {
            bucket: 'rftc-thinkpink.appspot.com',
            item: `videos/${group}/1.mp4`,
            contentType: 'video/mp4',
          },
        },
      ],
    },
  });

  return result;

  // try {
  //   // result.on('created', () => console.log('[RENDER]: Project has been created'));
  //   // result.on('started', () => console.log('[RENDER]: Project rendering started'));
  //   // result.on('finished', () => console.log('[RENDER]: Project rendering finished'));
  //   return result;
  // } catch (error) {
  //   result.on('error', (err) => console.log('[RENDER]: Project rendering error', err));
  //   console.log(error);
  // }
}

export default renderVideo;
