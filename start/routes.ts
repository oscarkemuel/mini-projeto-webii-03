import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { endpoints: [
    '/clientes',
  ] }
})

Route.group(() => {
  Route.get('/clientes/:id', 'ClientesController.getClienteById')
  Route.post('/clientes', 'ClientesController.save')
  Route.delete('/clientes/:id', 'ClientesController.delete')
  Route.put('/clientes/:id', 'ClientesController.update')
  Route.get('/clientes', 'ClientesController.getAll')
}).prefix('/api')
