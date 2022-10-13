import { getMetasSuspend } from "../../Repositories/MetaRepository.js";

export async function listSuspendMetas(page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	let content  = [];
	try {
		const metas = await getMetasSuspend();
		for (let i = initPage; i < (initPage + perPage); i++) {
			if (metas[i]) {
				content.push(metas[i]);
			}
		}
		if (content.length > 0) {
			return content;
		} else {
			return metas;
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as metas.");
	}
}