const Hapi = require('@hapi/hapi');
const H2o2 = require('@hapi/h2o2');
const getData = require('./getData');

const init = async () => {
  console.log('bbbbbbbbbbbbbbbbbb')
  const server = Hapi.server({
    port: 8080,
    host: 'localhost',
  });

  await server.register({
    plugin:H2o2
  });

  //cors error configuration....
  server.ext('onPreResponse', (request, h) => {
        const response = request.response;
        if (response.isBoom) {
            response.output.headers['access-control-allow-origin'] = '*';
        } else {
            response.header('access-control-allow-origin', '*');
        }
        return h.continue;
    });

    const mockData = [
        { id: 1, text: 'Abdul Kadir Khan' },
        { id: 2, text: 'Abdul Jabir Khan' },
        { id: 3, text: 'Rehan Khan' },
    ];

    server.route({
        method: 'GET',
        path: '/quotes-shayri',
        handler:  async(request, h) => {

          console.log('h...',h);
        
        //this data is coming from json object 
        const result =  await getData();
        // console.log('apiData...???',result);

        // console.log('mockData.....???',mockData);
        return result;
      },
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
