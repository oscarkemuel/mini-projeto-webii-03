import Route from '@ioc:Adonis/Core/Route'

Route.get('/api', async () => {
  return { endpoints: [
    '/clientes',
    '/produtos'
  ] }
})

Route.group(() => {
  Route.get('/clientes/:id', 'ClientesController.getClienteById')
  Route.get('/clientes/:id/details', 'ClientesController.getClienteByIdWithPedidos')
  Route.post('/clientes', 'ClientesController.save')
  Route.delete('/clientes/:id', 'ClientesController.delete')
  Route.put('/clientes/:id', 'ClientesController.update')
  Route.get('/clientes', 'ClientesController.getAll')
  Route.patch('/clientes/:id', 'ClientesController.updatePartial')
}).prefix('/api')

Route.group(() => {
  Route.get('/produtos/:id', 'ProdutosController.getById')
  Route.post('/produtos', 'ProdutosController.save')
  Route.delete('/produtos/:id', 'ProdutosController.delete')
  Route.put('/produtos/:id', 'ProdutosController.update')
  Route.get('/produtos', 'ProdutosController.getAll')
  Route.patch('/produtos/:id', 'ProdutosController.updatePartial')
}).prefix('/api')

Route.group(() => {
  Route.get('/pedidos', 'PedidosController.getAll')
  Route.post('/pedidos', 'PedidosController.save')
  Route.patch('/pedidos/:id/status', 'PedidosController.updateStatus')
  Route.delete('/pedidos/:id', 'PedidosController.delete')
  Route.patch('/pedidos/:id', 'PedidosController.update')
}).prefix('/api')

Route.group(() => {
  Route.get('/estoques', 'EstoquesController.index')
  Route.post('/estoques', 'EstoquesController.create')
  Route.delete('/estoques/:id', 'EstoquesController.destroy')
  Route.put('/estoques/:id', 'EstoquesController.update')
  Route.get('/estoques/:id', 'EstoquesController.show')
  Route.get('/estoques/produtos/:descricao', 'EstoquesController.getEstoqueByProdutoDescricao')
  Route.patch('/estoques/:id/quantidade', 'EstoquesController.updateQuantidade')
}).prefix('/api')
