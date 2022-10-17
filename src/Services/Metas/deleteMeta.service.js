import { deleteMetaById } from "../../Repositories/MetaRepository.js";
import { getProductMetaById } from "../Products/listProductsByIdMeta.service.js";

export async function deleteMetaService(id) {
	const temProduto = await getProductMetaById(id);
	if(temProduto = true){
		throw new Error("Não podemos deletar uma meta com produtos")
	}
	try {
		const meta = await deleteMetaById(id);
		return meta;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível excluir a meta. Favor verificar os dados enviados!");
	}
}