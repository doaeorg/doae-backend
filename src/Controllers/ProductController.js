import { createProdutoMetaService } from "../Services/Produtos/createProdutoMeta.service.js";
import { listProdutosByIdMetaService } from "../Services/Produtos/listProdutossByIdMeta.service.js";
import { listProdutosByIdService } from "../Services/Produtos/listProdutosById.service.js";
import { updateProdutoMetaByIdService } from "../Services/Produtos/updateProdutoMeta.service.js";
import { deleteProdutoMetaByIdService } from "../Services/Produtos/deleteProdutoById.service.js";

export async function postProdutos(request, response){
	const { name, value, id_meta } = request.body;
	try {
		const produtos = await createProdutoMetaService(name, value, id_meta);
		response.status(200).json(produtos);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getProdutosById(request, response){
	const { id } = request.params;
	try {
		const produtos = await listProdutosByIdService(id);
		response.status(200).json(produtos);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getProdutosByIdMeta(request, response){
	const { id_meta } = request.params;
	const { page } = request.query;
	try {
		const produtos = await listProdutosByIdMetaService(id_meta, page);
		response.status(200).json(produtos);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putProdutos(request, response){
	const { id } = request.params;
	const { name, value } = request.body;
	try {
		const produto = await updateProdutoMetaByIdService(id, name, value);
		response.status(200).json(produto);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deleteProduto(request, response){
	const { id } = request.params;
	try {
		const produtos = await deleteProdutoMetaByIdService(id);
		response.status(200).json(produtos);
	} catch (e) {
		response.status(400).json(e.message);
	}
}