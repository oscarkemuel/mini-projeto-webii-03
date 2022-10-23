# Mini-projeto 03 - WEBII
## Aluno: Oscar Kemuel Orrico dos Santos

### Requisitos mínimos:
- Node.js v14

### Frameworks/bibliotecas usadas:
- AdonisJS 5 (MVC)
- Lucid ORM
- SQLite
- TypeScript

### Como rodar o projeto:
1. Fazer clone do projeto
2. Abrir o terminal na pasta do projeto
3. Baixar dependencias rodando ```npm install``` ou ```yarn ```
4. Rodar as migrations ```node ace migration:run```
5. Iniciar o projeto com ```npm run dev``` ou ```yarn dev```
6. Abrir o navegador em ```http://localhost:3333/```

### Endpoints: 
```
{
	"info": {
		"_postman_id": "3b2607bd-7906-46bc-a17b-c6a9e8b3a76e",
		"name": "Endpoints",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Clientes",
			"item": [
				{
					"name": "Cliente By ID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/clientes/1",
							"host": [
								"{{URL}}"
							],
							"path": [
								"clientes",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Cliente By ID with Pedidos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/clientes/2/details",
							"host": [
								"{{URL}}"
							],
							"path": [
								"clientes",
								"2",
								"details"
							]
						}
					},
					"response": []
				},
				{
					"name": "Clientes",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/clientes",
							"host": [
								"{{URL}}"
							],
							"path": [
								"clientes"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Cliente By ID",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{URL}}/clientes/1",
							"host": [
								"{{URL}}"
							],
							"path": [
								"clientes",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create Cliente",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"nome\": \"Oscar\",\n    \"cpf\": \"13187346499\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/clientes",
							"host": [
								"{{URL}}"
							],
							"path": [
								"clientes"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update all Cliente Copy",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"nome\": \"Oscarr\",\n    \"cpf\": \"13187346499\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/clientes/3",
							"host": [
								"{{URL}}"
							],
							"path": [
								"clientes",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update partial Cliente",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"nome\": \"Oscarel\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/clientes/2",
							"host": [
								"{{URL}}"
							],
							"path": [
								"clientes",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Produtos",
			"item": [
				{
					"name": "Produto By ID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/produtos/2",
							"host": [
								"{{URL}}"
							],
							"path": [
								"produtos",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Produtos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/produtos",
							"host": [
								"{{URL}}"
							],
							"path": [
								"produtos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Produto By ID",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{URL}}/produtos/1",
							"host": [
								"{{URL}}"
							],
							"path": [
								"produtos",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create Produto",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"descricao\": \"produto 01\",\n    \"preco\": 200\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/produtos",
							"host": [
								"{{URL}}"
							],
							"path": [
								"produtos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update  Produtos",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"descricao\": \"descricao\",\n    \"preco\": 4554\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/produtos/2",
							"host": [
								"{{URL}}"
							],
							"path": [
								"produtos",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update partial Produto",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"preco\": 4554\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/produtos/2",
							"host": [
								"{{URL}}"
							],
							"path": [
								"produtos",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Estoque",
			"item": [
				{
					"name": "Estoque By ID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/estoques/1",
							"host": [
								"{{URL}}"
							],
							"path": [
								"estoques",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Estoque By Produto Descricao",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/estoques/produtos/produto_01",
							"host": [
								"{{URL}}"
							],
							"path": [
								"estoques",
								"produtos",
								"produto_01"
							]
						}
					},
					"response": []
				},
				{
					"name": "Estoques",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/estoques",
							"host": [
								"{{URL}}"
							],
							"path": [
								"estoques"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Estoque By ID",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{URL}}/estoques/1",
							"host": [
								"{{URL}}"
							],
							"path": [
								"estoques",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create Estoque",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"produto_id\": 3,\n    \"quantidade\": 122\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/estoques",
							"host": [
								"{{URL}}"
							],
							"path": [
								"estoques"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update  Estoque",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"produto_id\": 1,\n    \"quantidade\": 4554\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/estoques/1",
							"host": [
								"{{URL}}"
							],
							"path": [
								"estoques",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update quantidade Estoque",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"quantidade\": 4554\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/estoques/2/quantidade",
							"host": [
								"{{URL}}"
							],
							"path": [
								"estoques",
								"2",
								"quantidade"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Pedidos",
			"item": [
				{
					"name": "Pedidos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{URL}}/pedidos",
							"host": [
								"{{URL}}"
							],
							"path": [
								"pedidos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Pedido By ID",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{URL}}/pedidos/1",
							"host": [
								"{{URL}}"
							],
							"path": [
								"pedidos",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create Pedido",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"clienteId\": 1,\n    \"itens\": [\n        {\n            \"produtoId\": 1,\n            \"quantidade\": 2\n        },\n        {\n            \"produtoId\": 2,\n            \"quantidade\": 2\n        },\n        {\n            \"produtoId\": 3,\n            \"quantidade\": 2\n        }\n    ]\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/pedidos",
							"host": [
								"{{URL}}"
							],
							"path": [
								"pedidos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update Pedido",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"clienteId\": 2,\n    \"itens\": [\n        {\n            \"produtoId\": 2,\n            \"quantidade\": 3\n        }\n    ]\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/pedidos/7",
							"host": [
								"{{URL}}"
							],
							"path": [
								"pedidos",
								"7"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update Status",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"status\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{URL}}/pedidos/4/status",
							"host": [
								"{{URL}}"
							],
							"path": [
								"pedidos",
								"4",
								"status"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
```
