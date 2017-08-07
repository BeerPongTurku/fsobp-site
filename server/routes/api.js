import { Router } from 'express';

const apiRouter = new Router();

apiRouter.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

apiRouter.get('/user', (req, res) => {
  res.status(200).send({
    user:
    { name: 'Testijäbä', balance: 10 }
  });
});


/**API ENDPOINTS  */
apiRouter.get('/wallofshame', (req, res) => {
  wallOfShamePromise.then(wallOfShameJson => {
    res.status(200).send(wallOfShameJson);
  })
    .catch(reason => {
      res.status(404).send(reason);
    })
});

const wallOfShamePromise = new Promise((resolve, reject) => {
  const shameJson = {
    users: [
      { id: 1, name: 'Pekkajäbä', balance: -1 },
      { id: 2, name: 'Typerä amkkijäbä', balance: -1 },
      { id: 3, name: 'git ', balance: -1 },
      { id: 4, name: 'Piita', balance: -200 },
      { id: 5, name: 'Merijäbä', balance: -1 },
      { id: 6, name: 'Vanha pieru', balance: -5 },
      { id: 7, name: 'Julius', balance: -10 }
    ]
  }
  if (shameJson !== undefined && shameJson.users.length >= 0) {
    setTimeout(() => {
      resolve(shameJson);
    }, 2000)
  } else {
    reject({ error: "Didn't find wall of shame" })
  }
})



apiRouter.get('/product', (req, res) => {
  res.status(200).send({
    products:
    [{ id: 1, name: 'Kola', price: 1 },
    { id: 2, name: 'ES', price: 1.5 },
    { id: 3, name: 'Ohrapirtelö', price: 1.15 },
    { id: 4, name: 'Omenamehu', price: 1.5 },
    { id: 5, name: 'Tuplapatukka', price: 0.5 }]
  })
});

apiRouter.get('/product/:id', (req, res) => {
  res.status(200).send({
    product: { id: 1, name: 'Kola', price: 1 }
  })
});

apiRouter.post('/purchase/:id', (req, res) => {
  res.status(200).send({
    purchase: {
      message: 'purchase done'
    }
  });
});


export default apiRouter;
